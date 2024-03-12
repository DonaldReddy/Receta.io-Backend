import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

async function dbConnect() {

    try {
        console.log("connecting to database");
        const URI = process.env.DB_URI || ''
        await mongoose.connect(URI)
        console.log("connected to database");
    }
    catch (error) {
        console.log("Failed to connect database");
        console.log(error.message);
    }
}

export default dbConnect