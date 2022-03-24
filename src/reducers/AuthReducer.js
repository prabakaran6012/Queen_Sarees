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
        case "SIGNUP_SUCCESS":
                return {
                    ...payload
                }
        case "SIGNUP_FAILED":
                return {
                    ...payload
                }
        case "REFRESH_SIGNUP":
                return {
                    ...state,
                    signup: false
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