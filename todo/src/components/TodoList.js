import React, { useReducer } from 'react';
import { todoListReducer, initialState } from '../reducers/todoListReducer.js';
import { TodoForm } from './'

const TodoList = () => {
    const [list, dispatch] = useReducer(todoListReducer, initialState);

    const listHandler = (task) => {
        dispatch(task);
    }

    const toggleCompleted = (id) => {
        dispatch({id: id, type: 'COMPLETED'})
    }

    const clearCompleted = () => {
        dispatch({type: 'CLEAR'});
    }

    return(
        <div>
            <TodoForm addTodo={listHandler} />
            {list.map(listItem => {
                return(
                    <div key={listItem.id}>
                        <h2>{listItem.item}</h2>
                        <button onClick={() => toggleCompleted(listItem.id)}>{listItem.completed ? 'Complete' : 'Incomplete'}</button>
                    </div>
                )
            })}
            <br />
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoList;