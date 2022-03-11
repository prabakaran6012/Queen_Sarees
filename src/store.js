import { createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import RootReducer from "./reducers/RootReducer";
const InitialState={}
const store=createStore(RootReducer,InitialState,composeWithDevTools())
export default store