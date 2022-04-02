const InitialState={
    categories:[]
}
const CategoriesReducer = (state=InitialState,action) => {
    const {type,payload}=action
    // const {categories}=payload
    switch(type){
        case "ADD_CATEGORY":
            return state
        case "ADD_CATEGORY_FAILED":
            return state
        default:
            return state
    }
}
 
export default CategoriesReducer;