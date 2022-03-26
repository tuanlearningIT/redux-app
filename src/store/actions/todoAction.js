import axios from "axios"
import actionTypes from "./actionTypes"

export const markComplete = (id) => {

    return (dispatch) => {
        dispatch({
            type: actionTypes.MARK_COMPLETE,
            payload: id
        })
    }
}
export const addNewTodos = (newTodo) => {

    return async (dispatch) => {
        try {
            await axios.post('https://jsonplaceholder.typicode.com/todos?_limit=4', newTodo)
            dispatch({
                type: actionTypes.ADD_NEW_TODO,
                payload: newTodo
            })

        } catch (error) {
            console.log(error)
        }

    }
}
export const deleteTodo = (id) => {

    return async (dispatch) => {
        await axios.post('https://jsonplaceholder.typicode.com/todos?_limit=4')
        dispatch({
            type: actionTypes.DELETE_TODO,
            payload: id
        })
    }
}
export const getTodo = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
            if (res.status === 200) {
                dispatch({
                    type: actionTypes.GET_TODO,
                    payload: res.data
                })
            }

        } catch (error) {
            console.log(error)
        }
    }
}