import jwt from 'jsonwebtoken'
import axios from 'axios'
import { toast } from 'react-hot-toast'



export const addNote = (note) => async (dispatch) => {

    try {
        const base_Url = 'https://prabakaran-queen-s-backend.herokuapp.com'

        const res = await axios.post(`${base_Url}/api/v1/notes/add`, {
            note
        })
        
        const { message } = res.data

        if (message=="Saved note in DB") {
            toast.success(message)
            dispatch({
                type: "ADD_NOTE",
            })
        } else {
            toast.error(message)
            dispatch({
                type: "ADD_NOTE_FAILED",
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};