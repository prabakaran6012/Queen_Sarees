import {combineReducers} from "redux"
import auth from "./AuthReducer"
import loader from "./loaderReducer"
import products from "./ProductsReducer"
import categories from "./CategoriesReducer"
import notes from "./NoteReducer"
export default combineReducers({
auth,loader,products,categories,notes
})