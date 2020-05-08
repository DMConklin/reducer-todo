import React, {useState} from 'react';

const TodoFrom = (props) => {
    const [task, setTask] = useState({item: "",});

    const handleChanges = e => {
        setTask({item: e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();

        props.addTodo({...task, type: 'ADD_TASK'});
        setTask({item: ""});
    }
    
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="task" value={task.item} placeholder="task" onChange={handleChanges} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default TodoFrom;