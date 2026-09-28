import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`)
        console.log(`DB connected SuccessFully ! hostname ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`DB connection failed ${error}`)
    }
};

export {connectDB};