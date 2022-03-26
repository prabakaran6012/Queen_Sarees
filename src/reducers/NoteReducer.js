const InitialState={
    notes:[]
}
const NotesReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        case "ADD_NOTE":
            return state
        case "ADD_NOTE_FAILED":
            return state
        default:
            return state
    }
}
 
export default NotesReducer;