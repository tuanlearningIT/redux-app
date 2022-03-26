import { combineReducers } from "redux";
import TodoReducer from './TodoReducer'
const rootReducer = combineReducers({
    myTodos: TodoReducer
}

)
export default rootReducer;