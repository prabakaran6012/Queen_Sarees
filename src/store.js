import { applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import RootReducer from "./reducers/RootReducer";
import thunk from 'redux-thunk'
const InitialState={}
const middlewares = [thunk]

const store = createStore(RootReducer, InitialState, composeWithDevTools(applyMiddleware(...middlewares)))
export default store