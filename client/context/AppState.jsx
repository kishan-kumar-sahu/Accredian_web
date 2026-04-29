import { useEffect } from "react";
import  AppContext  from "./AppContext";
  import axios from "axios";

   export const AppState  =(props)=>{
  

   const URL= "http://localhost:5000/api";

       
     
         const Register=  async(name, email, phone, domain, companyName,candidate, modeOfDelivery )=>{

   const res=  await  axios.post(`${URL}/register`,{name, email, phone, domain, companyName, candidate , modeOfDelivery} ,
  
{
     headers:{
        "Content-Type": "application/json"
     }
}

   ) ;

  
       console.log("res", res.data);
         }          
              

      useEffect(()=>{
     Register()
      },[])

      



  return(
  <AppContext.Provider  value={{Register}}>


           {props.children}
  </AppContext.Provider>
  



  )


   }


    export default AppState;