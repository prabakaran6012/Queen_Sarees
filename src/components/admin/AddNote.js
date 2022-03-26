import {
    FormControl,
    Input,
    FormHelperText,
    FormLabel,
    Box,
    Select,
    Heading,
    Button
} from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addNote } from '../../actions/note';


const AddNote = () => {

    const [note, setnote] = useState('')
 


    const dispatch = useDispatch()

    const handleAddNote = () => {
        console.log({
          note
        })
        dispatch(addNote(note))
    }

    return (
        <Box m={4}>
            <Heading>Add Washing Type</Heading>
            <FormControl>
                <FormLabel>Note</FormLabel>
                <Input onChange={(e) => { setnote(e.target.value) }} type="text" />
               
                <Button onClick={handleAddNote} marginTop={4} color={'white'} bg={'blue.400'}>Submit</Button>
            </FormControl>
        </Box >
    );
}

export default AddNote;