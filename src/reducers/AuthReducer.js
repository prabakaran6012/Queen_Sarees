const InitialState={
    token:null
}
const AuthReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        default:
            return state
    }
}
 
export default AuthReducer;