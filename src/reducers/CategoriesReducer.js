const InitialState={
    categories:[]
}
const CategoriesReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        default:
            return state
    }
}
 
export default CategoriesReducer;