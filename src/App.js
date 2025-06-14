import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Topbar/Header";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home/Home.js";
import Inform from "./pages/Info/Inform.js";
import Test from "./pages/Testimonial/Test.js";
import Contact from "./pages/Contactus/Contact.js";
import ThankYou from "./components/ThankYou/ThankYou.js";

import './App.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
         
          <Route path="/" element={<Home />} darkMode={darkMode} setDarkMode={setDarkMode} />
           <Route path="/about" element={<Inform />} darkMode={darkMode} setDarkMode={setDarkMode} />
          <Route path="/contact" element={<Contact />} darkMode={darkMode} setDarkMode={setDarkMode}/>
          {/* <Route path="/blog" element={<Blog />} /> */}
         <Route path="/testimonials" element={<Test />} darkMode={darkMode} setDarkMode={setDarkMode} />
         <Route path="/thankyou" element={<ThankYou />} darkMode={darkMode} setDarkMode={setDarkMode} />
          {/* <Route path="/services/web-development" element={<Services />} /> */}
          {/* <Route path="/services/mobile-apps" element={<Services />} /> */}
          {/* <Route path="/services/seo" element={<Services />} /> */}
          {/* <Route path="/subEquipment" element={<SubEquipment />} /> */}
          {/* <Route path="/subEquipment/:categoryId" element={<SubEquipment />} /> */}

         
        </Routes>

        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </Router>
    </ThemeProvider>
  );
}

export default App;

