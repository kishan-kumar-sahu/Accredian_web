import mongoose from "mongoose";

    import dotenv from "dotenv"
         dotenv.config()


    //   const URL="mongodb://localhost:27017/Accredian"
    
      const URL=process.env.Mongo_URL;   
 

const connectDB = async () => {
  try {
       await  mongoose.connect(URL).then(console.log("mongoose is connected"))
   } catch (error) {
 
       console.log("mongoose  is not connected", error)
   }
}
   
 export default  connectDB;