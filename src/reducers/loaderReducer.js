const InitialState={
    isLoading:false
}
const LoaderReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        default:
            return state
    }
}
 
export default LoaderReducer;