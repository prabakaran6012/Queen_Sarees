const InitialState={
    token:null
}
const AuthReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        case "LOGIN_SUCCESS":
            return payload

        case "LOGIN_FAILED":
            return {
                ...payload
            }
        case "LOGOUT":
            return {
                token: null
            }

        default:
            return state
    }
}
 
export default AuthReducer;