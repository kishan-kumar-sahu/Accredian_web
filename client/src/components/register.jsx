



import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

  

export default function register() {

    const   { Register }  =   useContext(AppContext);

  const [open, setOpen] = useState(true);

  const navigate = useNavigate(); 

      

  if (!open) return null;

      
        




    const [name, setName]= useState("");
  const [email, setEmail]= useState("");

    const [phone, setPhone]= useState("");
     const [ domain, setDomain]= useState("")
      const [companyName, setCompanyName]= useState("");
        const [candidate, setCandidate]= useState("");
          const [modeOfDelivery, setModeOfDelivery] = useState("")

   const handlerSubmitButton= async(e)=>{
        e.preventDefault();

          if (!modeOfDelivery||! name||! email||! phone ||!domain ||!companyName ||! candidate) {
    alert("Please fill the form properly");
    return;
  }

      await   Register(name, email, phone, domain, companyName, candidate ,modeOfDelivery);
       
         navigate("/")
   }



  return (
    <div className="fixed inset-0 bg-black/40 flex justify-end z-50">

      {/* Modal Container */}
      <div className="bg-white w-full md:w-[900px] h-full flex">

        {/* LEFT IMAGE */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/business-v2.webp"
            alt="team"
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-8 overflow-y-auto relative">

          {/* ❌ Close Button */}
          <button
            onClick={() => {
              setOpen(false);    
              navigate("/");      
            }}
            className="absolute top-4 right-4 text-2xl text-gray-500"
          >
            ✕
          </button>

          <h2 className="text-3xl font-bold mb-6">Enquire Now</h2>

          <form className="space-y-6"  onSubmit={handlerSubmitButton}   >
            <input type="text" placeholder="Enter Name" className="w-full border-b p-2 outline-none"  value={name}   onChange={(e)=>setName(e.target.value)}    />
            <input type="email" placeholder="Enter Email" className="w-full border-b p-2 outline-none"   value={email}  onChange={(e)=>setEmail(e.target.value)}/>

            <div className="flex items-center gap-2 border-b p-2">
              <span>🇮🇳 +91</span>
              <input type="text" placeholder="Phone Number" className="flex-1 outline-none"   onChange={(e)=>setPhone(e.target.value)}/>
            </div>

            <input type="text" placeholder="Enter company name" className="w-full border-b p-2 outline-none"   value={companyName}   onChange={(e)=>setCompanyName(e.target.value)}/>

            <select className="w-full border-b p-2 outline-none text-gray-500 "   value={domain}  onChange={(e)=>setDomain(e.target.value)}   >
              <option>Select Domain</option>
              <option>IT</option>
              <option>Finance</option>
            </select>

            <input type="number" placeholder="Enter No. of candidates" className="w-full border-b p-2 outline-none"   onChange={(e)=>setCandidate(e.target.value)} />

            <select className="w-full border-b p-2 outline-none text-gray-500"   value={modeOfDelivery}  onChange={(e)=>setModeOfDelivery(e.target.value)}>
              <option>Select Mode of Delivery</option>
              <option>online</option>
              <option>offline</option>
            </select>

            <button    className="w-full bg-blue-600 text-white py-3 rounded-lg">
              Submit
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}