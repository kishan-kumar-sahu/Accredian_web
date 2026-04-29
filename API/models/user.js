import mongoose from "mongoose";

const  userSchema=  new mongoose.Schema({

    name:{
      type: String,
    },
     email:{
        type: String
     },
     companyName:{
        type: String
     },

     domain:{
     type: String
       
     },
candidate: {
  type: Number,
},
 
modeOfDelivery: {
  type: String,
  enum: ["online", "offline"],

}

    
})


export const User= mongoose.model("User", userSchema);
    

