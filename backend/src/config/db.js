import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
    try {
        const conecction = await mongoose.connect(process.env.DATABASE_URl,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
       
        console.log(`MongoDB connected: ${conecction.connection.host}: ${conecction.connection.port}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        // Exit process with failure
        process.exit(1);
    } 
}


export default connectDb;