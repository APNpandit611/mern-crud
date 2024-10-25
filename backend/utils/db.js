import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await  mongoose.connect('mongodb+srv://apnpanditt:1laWo5q1vWK33VeV@cluster0.kqfqe.mongodb.net/')
        console.log('DB connected')

    } catch (error) {
        console.log(error)
    }
}
