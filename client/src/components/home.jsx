

    import { useNavigate } from "react-router-dom";

    
export default function home() {
  
    const navigate= useNavigate()
   
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-100">

      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6">

        

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Next-Gen Expertise <br />
          for Your Enterprise
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 text-lg leading-relaxed">
          Cultivate high-performance teams through expert learning and
          industry-driven digital transformation solutions.
        </p>

        {/* Features (ONE LINE) */}
        <div className="flex flex-wrap gap-6 text-gray-700 font-medium">
          <span>✔ Tailored Solutions</span>
          <span>✔ Industry Insights</span>
          <span>✔ Expert Guidance</span>
        </div>

        {/* Button */}
        <button   onClick={()=>navigate("/register")} className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300">
          Enquire Now
        </button>

      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">

        <img
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
          alt="hero"
          className="rounded-2xl shadow-2xl w-full max-w-md hover:scale-105 transition duration-300"
        />

      </div>

    <stats/>

    </div>
    
  );
}