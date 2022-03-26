import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initalState = {}
const Middleware = [thunk]
const store = () => createStore(
    rootReducer,
    initalState,
    composeWithDevTools(applyMiddleware(...Middleware))
)


export default store;