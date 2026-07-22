




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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <img
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
          alt="logo"
          className="w-24 sm:w-28 lg:w-32"
        />

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-gray-700"
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
          <Link
            to="home"
            smooth
            duration={500}
            onClick={handleClose}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="stats"
            smooth
            duration={500}
            onClick={handleClose}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Stats
          </Link>

          <Link
            to="clients"
            smooth
            duration={500}
            onClick={handleClose}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Clients
          </Link>

          <Link
            to="edge"
            smooth
            duration={500}
            onClick={handleClose}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Accredian Edge
          </Link>

          <Link
            to="cat"
            smooth
            duration={500}
            onClick={handleClose}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            CAT
          </Link>

          <Link
            to="how"
            smooth
            duration={500}
            onClick={handleClose}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            How It Works
          </Link>

          <Link
            to="faq"
            smooth
            duration={500}
            onClick={handleClose}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            FAQs
          </Link>

          <Link
            to="testimonials"
            smooth
            duration={500}
            onClick={handleClose}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Testimonials
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
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
        </div>
      )}
    </nav>
  );
}