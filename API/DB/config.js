import mongoose from "mongoose";

    import dotenv from "dotenv"
         dotenv.config()


 const URL=process.env.Mongo_URL;   
 

const connectDB = async () => {
  try {
       await  mongoose.connect(URL)
    console.log("MongoDB connected successfully");

   } catch (error) {
 
       console.log("mongoose  is not connected", error)
   }
}
   
 export default  connectDB;