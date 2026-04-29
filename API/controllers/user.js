
import { User } from "../models/user.js";

  import mongoose from "mongoose";
  
 export const  RequireForm = async(req,res)=>{

     
      const { 
      name, email, phone, domain, companyName,candidate, modeOfDelivery
        
        }= req.body;

        // console.log( name, email, phone, domain, companyName,candidate, modeOfDeliver)
         const user= await User.create({

          name, email, phone, domain, companyName,candidate, modeOfDelivery
        
            
        })

   res.status(201).json({
      message: "User created successfully",
        user,
   })
              

 }




