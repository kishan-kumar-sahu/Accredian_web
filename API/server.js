
import  express from "express"
 import mongoDb from "./DB/config.js"
 import cors from "cors";
  const app= express();

    import dotenv from "dotenv"
       dotenv.config()

  import RequiresRouter  from "./routers/user.js";
   const port =process.env.PORT || 3000;

     app.use(express.json())
       app.use(cors())
   mongoDb();

   
    
      
  app.use("/api", RequiresRouter)


     app.listen(port,()=>{
        console.log(`server is started port on ${port}`)
     })
