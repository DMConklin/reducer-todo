import React, { useReducer } from 'react';
import { todoListReducer, initialState } from '../reducers/todoListReducer.js';
import { TodoForm } from './'

const TodoList = () => {
    const [list, dispatch] = useReducer(todoListReducer, initialState);

    const listHandler = (task) => {
        dispatch(task);
    }

    return(
        <div>
            <TodoForm addTodo={listHandler} />
            {list.map(listItem => {
                return(
                    <div key={listItem.id}>
                        <h2>{listItem.item}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList;