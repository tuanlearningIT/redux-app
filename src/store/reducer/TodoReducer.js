
import actionTypes from '../actions/actionTypes'

const initalState = {
    todos: [
        {
            id: '1',
            title: '1',
            completed: false
        },
        {
            id: '2',
            title: '2',
            completed: false
        },
        {
            id: '3',
            title: '3',
            completed: false
        },
    ]
}

const TodoReducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.MARK_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        case actionTypes.ADD_NEW_TODO:

            return {
                ...state,
                todos: [...state.todos,
                action.payload
                ]
            }
        case actionTypes.DELETE_TODO:

            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case actionTypes.GET_TODO:

            return {
                ...state,
                todos: action.payload
            }

        default:
            return state
    }

}

export default TodoReducer;