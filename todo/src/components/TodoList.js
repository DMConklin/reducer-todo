import React, { useReducer } from 'react';
import { todoListReducer, data } from '../reducers/todoListReducer.js';

const TodoList = () => {
    const [list, dispatch] = useReducer(todoListReducer, data);

    return(
        <div>
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