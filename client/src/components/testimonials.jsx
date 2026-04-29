
  import { useNavigate } from "react-router-dom";
export default function testimonials() {

    
       const navigate=     useNavigate()
  return (
    <div>

     
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Testimonials from{" "}
            <span className="text-blue-600">Our Partners</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base sm:text-lg">
            What Our Clients Are Saying
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 sm:p-8 transition relative">
            <div className="text-4xl sm:text-5xl text-blue-100 absolute top-3 left-5">
              “
            </div>

            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg"
              alt="ADP"
              className="h-8 sm:h-10 mx-auto mb-5 opacity-80 hover:opacity-100"
            />

            <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed relative z-10">
              We would like to thank Accredian for the wonderful support and the
              beautiful journey. The team turned our vision into reality with
              unparalleled dedication.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 sm:p-8 transition relative">
            <div className="text-4xl sm:text-5xl text-purple-100 absolute top-3 left-5">
              “
            </div>

            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg"
              alt="Bayer"
              className="h-8 sm:h-10 mx-auto mb-5 opacity-80 hover:opacity-100"
            />

            <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed relative z-10">
              Accredian's commitment to excellence is unmatched. They consistently
              go the extra mile to ensure our needs are met and exceeded.
            </p>
          </div>
        </div>
      </section>

      {/* = FOOTER  */}
      <footer className="bg-white border-t px-4 sm:px-6 py-10">

        {/* Top Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

          {/* Left: Logo + Social */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600">accredian</h2>
            <p className="text-sm text-gray-500">credentials that matter</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-gray-600">
              <i className="fab fa-facebook-f hover:text-blue-600 cursor-pointer"></i>
              <i className="fab fa-linkedin-in hover:text-blue-600 cursor-pointer"></i>
              <i className="fab fa-twitter hover:text-blue-600 cursor-pointer"></i>
              <i className="fab fa-instagram hover:text-blue-600 cursor-pointer"></i>
              <i className="fab fa-youtube hover:text-blue-600 cursor-pointer"></i>
            </div>
          </div>

          {/* Middle: Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Accredian</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">About</li>
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
              <li className="hover:text-blue-600 cursor-pointer">Why Accredian</li>
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
            <p className="text-sm text-gray-600">
              Email:{" "}
              <span className="text-blue-600">
                kumarkishan26633@gmail.com
              </span>
            </p>
               {" "}
            <p className="text-sm text-gray-600">
              Phone:{" "}
              <span className="text-blue-600">
                  (+91)8409660865
              </span>
            </p>
            <p className="text-sm text-gray-600 mt-2 max-w-xs">
                Vill- Simraha , po-chigri, Distt- Darbhanga(Bihar)
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-start items-start md:items-end">
            <button   onClick={()=> navigate("/register")}    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Enquire Now
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-5 text-center text-sm text-gray-500">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </footer>
    </div>
  );
}