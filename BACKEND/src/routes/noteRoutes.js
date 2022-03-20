import express from 'express'
import Note from '../services/mongodb/models/Note'
import { body, validationResult } from 'express-validator'


const router = express.Router()


router.get('/all', async (req, res) => {
    try {
        const notes = await Note.find({})
        return res.status(200).json({ notes, message: "Successfully fetched notes" })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ notes: [], message: "error fetching notes" })
    }
})



router.post('/add',
    body('note').isLength({ min: 2 })
    , async (req, res) => {

        const { errors } = validationResult(req)
        if (errors.length > 0) return res.status(403).json({ errors, message: "Bad request" })
        // await Note.remove({name:null})
        try {
            const note = new Note(req.body);
            console.log(req.body)
            await note.save()
            res.status(200).json({
                note, message: "Saved note in DB"
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                note: null,
                message: "Unable to save note in DB"
            })
        }
    })




router.put('/update/:id'
    , async (req, res) => {
        const { id } = req.params
        try {
            const note = await Note.findOneAndUpdate({ _id: id }, req.body, {
                new: true
            })
            res.status(200).json({
                note, message: "Updated note in DB"
            })
        } catch (error) {
            return res.status(500).json({
                note: null,
                message: "Unable to update note in DB"
            })
        }
    })




router.delete('/delete/:id'
    , async (req, res) => {
        const { id } = req.params
        try {
            const note = await Note.findByIdAndRemove(id)
            res.status(200).json({
                note, message: "deleted category in DB"
            })
        } catch (error) {
            return res.status(500).json({
                note: null,
                message: "Unable to delete note in DB"
            })
        }
    })



export default router