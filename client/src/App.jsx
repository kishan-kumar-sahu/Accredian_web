

// import './App.css';
// import Navbar from './components/navbar';
// import { Element } from "react-scroll";

// import Home from './components/home';
// import Stats from "./components/stats";
//   import Register from './components/register';
      

//      import Clients from './components/clients';
//        import Accredian from './components/accredian';
//         import Cat from './components/cat';

//         import HowWorks from './components/HowWorks';
//          import Faqs from './components/faqs';

//           import Testimonials from './components/testimonials';
//       import { BrowserRouter, Routes, Route } from "react-router-dom";
// function App() {
//   return (
//     <>



//       <Navbar />


//     <BrowserRouter>
//       <Routes>
//         <Route path="/register" element={<Register/>} />
//       </Routes>
//     </BrowserRouter>



//       <Element name="home">
//         <Home />
//       </Element>

//       <Element name="stats">
//         <Stats />
//       </Element>

  
//       <Element name="clients">
//           <Clients></Clients>
//       </Element>

//  <Element name="edge">
//      <Accredian></Accredian>
//       </Element>


//        <Element name="cat">
//    < Cat></Cat>
//       </Element>


//        <Element name="how">
//         <HowWorks></HowWorks>
//       </Element>

//        <Element name="faq">
//   <Faqs></Faqs>
//       </Element>

      
//        <Element name="testimonials">
//       <Testimonials></Testimonials>
//       </Element>


//     </>
//   );
// }

// export default App;


import './App.css';
import Navbar from './components/navbar';
import { Element } from "react-scroll";

import Home from './components/home';
import Stats from "./components/stats";
import Register from './components/register';
import Clients from './components/clients';
import Accredian from './components/accredian';
import Cat from './components/cat';
import HowWorks from './components/HowWorks';
import Faqs from './components/faqs';
import Testimonials from './components/testimonials';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Element name="home"><Home /></Element>
              <Element name="stats"><Stats /></Element>
              <Element name="clients"><Clients /></Element>
              <Element name="edge"><Accredian /></Element>
              <Element name="cat"><Cat /></Element>
              <Element name="how"><HowWorks /></Element>
              <Element name="faq"><Faqs /></Element>
              <Element name="testimonials"><Testimonials /></Element>
            </>
          }
        />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;