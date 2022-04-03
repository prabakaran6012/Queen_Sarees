import {combineReducers} from "redux"
import auth from "./AuthReducer"
import loader from "./loaderReducer"
import products from "./ProductsReducer"
import categories from "./CategoriesReducer"
import notes from "./NoteReducer"
import cart from './cartReducer'
import love from './loveReducer'
export default combineReducers({
auth,loader,products,categories,notes,cart,love
})