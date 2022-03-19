import mongoose from 'mongoose'

const connectDB = async () => {
    const conectionString = process.env.DB_URL

    try {
        await mongoose.connect(conectionString)
        console.log('DB connected successfully! ')
    } catch (error) {
        console.log(`could not connect to the DB: ${error.message}`)
        console.log(error.message)
    }
}

export default connectDB   