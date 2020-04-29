const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn about reducers again',
        completed: false,
        id: 3892987590
    },
    {
        item: 'Learn about reducers once again',
        completed: false,
        id: 3892987591
    }
]

function todoListReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    item: action.item,
                    completed: false,
                    id: new Date()
                }
            ]
        default:
            return state;
    }
}

export { todoListReducer, initialState };