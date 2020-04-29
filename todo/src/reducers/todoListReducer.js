function todoListReducer(state, action) {
    switch (action.type) {
        default:
            return state
    }
}

const data = [
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
        item: 'Learn about reducers and again',
        completed: false,
        id: 3892987591
    }
]

export { todoListReducer, data };