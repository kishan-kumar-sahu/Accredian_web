// import React from "react";

// const Cat = () => {
//   return (
//     <div className="text-center py-16 space-y-8">

//       {/* Heading */}
//       <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//         The CAT Framework
//       </h2>

//       {/* Subheading */}
//       <p className="text-gray-600 text-lg max-w-xl mx-auto">
//         Our Proven Approach to Learning Excellence
//       </p>

//       {/* Image */}
//       <div className="flex justify-center items-center bg-gray-100 rounded-2xl shadow-md py-10">
//         <img
//           src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"
//           alt="CAT Framework"
//           className="w-full max-w-xs md:max-w-md"
//         />
//       </div>

//     </div>
//   );
// };

// export default Cat;




import React from "react";

const cat = () => {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-100 text-center">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        The <span className="text-blue-600">CAT</span> Framework
      </h2>

      {/* Subheading */}
      <p className="text-gray-600 text-lg mt-4 max-w-xl mx-auto">
        Our Proven Approach to Learning Excellence
      </p>

      {/* Image Section */}
      <div className="relative mt-12 flex justify-center">

        {/* Glow Effect */}
        <div className="absolute -inset-6 bg-blue-200 rounded-3xl blur-2xl opacity-40"></div>

        {/* Image Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 hover:scale-105 transition duration-300">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"
            alt="CAT Framework"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>

      </div>

    </div>
  );
};

export default cat;