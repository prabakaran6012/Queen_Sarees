import {combineReducers} from "redux"
import auth from "./AuthReducer"
import loader from "./loaderReducer"
import products from "./ProductsReducer"
import categories from "./CategoriesReducer"
export default combineReducers({
auth,loader,products,categories
})