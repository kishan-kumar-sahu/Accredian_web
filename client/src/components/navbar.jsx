




// import { Link } from "react-scroll";

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">

//       {/* Logo */}
//       <img
//         src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
//         alt="logo"
//         width={98}
//       />

//       {/* Links */}
//       <div className="flex gap-6 text-gray-700 font-medium">

//         <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
//           Home
//         </Link>

//         <Link to="stats" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
//           Stats
//         </Link>

//         <Link to="clients" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
//           Clients
//         </Link>

//         <Link to="edge" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
//           Accredian Edge
//         </Link>

//         <Link to="cat" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
//           CAT
//         </Link>

//         <Link to="how" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
//           How It Works
//         </Link>

//         <Link to="faq" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
//           FAQs
//         </Link>

//         <Link to="testimonials" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
//           Testimonials
//         </Link>

//       </div>
//     </nav>
//   );
// }



import { useState } from "react";
import { Link } from "react-scroll";

export default function navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">

      {/* Logo */}
      <img
        src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
        alt="logo"
        width={98}
      />

      {/* Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Links */}
      <div
        className={`
          flex gap-6 text-gray-700 font-medium
          md:flex
          ${open ? "flex flex-col absolute top-16 left-0 w-full bg-white shadow-md p-4" : "hidden md:flex"}
        `}
      >

        <Link to="home" smooth duration={500} onClick={handleClose} className="cursor-pointer hover:text-blue-600">
          Home
        </Link>

        <Link to="stats" smooth duration={500} onClick={handleClose} className="cursor-pointer hover:text-blue-600">
          Stats
        </Link>

        <Link to="clients" smooth duration={500} onClick={handleClose} className="cursor-pointer hover:text-blue-600">
          Clients
        </Link>

        <Link to="edge" smooth duration={500} onClick={handleClose} className="cursor-pointer hover:text-blue-600">
          Accredian Edge
        </Link>

        <Link to="cat" smooth duration={500} onClick={handleClose} className="cursor-pointer hover:text-blue-600">
          CAT
        </Link>

        <Link to="how" smooth duration={500} onClick={handleClose} className="cursor-pointer hover:text-blue-600">
          How It Works
        </Link>

        <Link to="faq" smooth duration={500} onClick={handleClose} className="cursor-pointer hover:text-blue-600">
          FAQs
        </Link>

        <Link to="testimonials" smooth duration={500} onClick={handleClose} className="cursor-pointer hover:text-blue-600">
          Testimonials
        </Link>

      </div>
    </nav>
  );
}