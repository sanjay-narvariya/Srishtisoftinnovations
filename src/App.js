import { useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

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
import ScrollToTop from "./components/Scrolltotop/ScrollToTop.js";
import Internship from "./pages/OurServices/Internship/Internship.js";
import LiveProject from "./pages/OurServices/LiveProject/LiveProject.js";

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // ✅ safe now, because App is under BrowserRouter

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const hideLayout = location.pathname === "/thankyou";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />

      {!hideLayout && <Header darkMode={darkMode} setDarkMode={setDarkMode} />}

      <Routes>
        <Route path="/" element={<Home />} darkMode={darkMode} setDarkMode={setDarkMode} />
           <Route path="/about" element={<Inform />} darkMode={darkMode} setDarkMode={setDarkMode} />
          <Route path="/contact" element={<Contact />} darkMode={darkMode} setDarkMode={setDarkMode}/>
           <Route path="/services/internship" element={<Internship />} darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Route path="/services/live-project" element={<LiveProject />} darkMode={darkMode} setDarkMode={setDarkMode}/>
          {/* <Route path="/blog" element={<Blog />} /> */}
         <Route path="/testimonials" element={<Test />} darkMode={darkMode} setDarkMode={setDarkMode} />
         <Route path="/thankyou" element={<ThankYou />} darkMode={darkMode} setDarkMode={setDarkMode} />
      </Routes>

      {!hideLayout && <Footer darkMode={darkMode} setDarkMode={setDarkMode} />}
    </ThemeProvider>
  );
}

export default App;
