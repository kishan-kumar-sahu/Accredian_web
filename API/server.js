
import  express from "express"
 import mongoDb from "./DB/config.js"
   import RequiresRouter  from "./routers/user.js";
 import cors from "cors";
  const app= express();

const port =process.env.PORT || 5000;

    import dotenv from "dotenv"
       dotenv.config()




     app.use(express.json())
       app.use(cors())
     await mongoDb();

   
    
      
  app.use("/api", RequiresRouter)


     app.listen(port,()=>{
        console.log(`server is started port on ${port}`)
     })
