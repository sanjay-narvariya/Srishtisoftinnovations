import { useEffect, useState } from "react";
import Loader from './components/Loader.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useLocation, Routes, Route } from "react-router-dom";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Modal, TextField, Button, IconButton, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
import Blog from "./pages/Blogs/Blog.js";
import Associate from "./pages/Associates/Associate.js";

import './App.css';

function App() {

  // Inside your component
  const themes = useTheme();
  const isMobile = useMediaQuery(themes.breakpoints.down('sm'));

  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // ✅ safe now, because App is under BrowserRouter

  const [loading, setLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const hideMessage = () => {
    setShowMessage(false);
  };

  if (loading) return <Loader />;




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

         <div style={{ position: 'relative', overflowX: 'hidden' }} onClick={hideMessage} >
      {/* Welcome Message in the Center */}
      {showMessage && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
            color: '#fff',
            textAlign: 'center',
            marginTop: '50px',
            fontSize: window.innerWidth < 600 ? '1.4rem' : '3rem', // Much smaller font on mobile
            fontWeight: 'bold',
            padding: window.innerWidth < 600 ? '10px 3px' : '20px 5px', // Smaller padding on mobile
            borderRadius: '12px',
            zIndex: 1000,
            cursor: 'pointer',
            minHeight: window.innerWidth < 400 ? '180px' : '180px',
            width: window.innerWidth < 400 ? '80%' : 'auto', // Smaller width on mobile
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={hideMessage}
        >
          <Box
            component="img"
            src="./text1.png"
            alt={"Sanjay"}
            sx={{
              width: isMobile ? '80%' : '80%', // Ensure proper width
              maxHeight: '500px',
              boxShadow: '0 6px 12px rgb(8, 44, 41), 0 16px 32px rgb(9, 46, 41)',
              borderRadius: '10px',
              display: 'block',
              mx: 'auto', // Ensures the image is centered on all screen sizes
            }}
          />


        </div>
      )}


        <Routes>
          <Route path="/" element={<Home />} darkMode={darkMode} setDarkMode={setDarkMode} />
          <Route path="/about" element={<Inform />} darkMode={darkMode} setDarkMode={setDarkMode} />
          <Route path="/contact" element={<Contact />} darkMode={darkMode} setDarkMode={setDarkMode} />
          <Route path="/services/internship" element={<Internship />} darkMode={darkMode} setDarkMode={setDarkMode} />
          <Route path="/services/live-project" element={<LiveProject />} darkMode={darkMode} setDarkMode={setDarkMode} />
          <Route path="/blog" element={<Blog />} darkMode={darkMode} setDarkMode={setDarkMode} />
          <Route path="/associate" element={<Associate />} darkMode={darkMode} setDarkMode={setDarkMode} />
          {/* aur bhi nested routes bana sakte ho */}


          <Route path="/testimonials" element={<Test />} darkMode={darkMode} setDarkMode={setDarkMode} />
          <Route path="/thankyou" element={<ThankYou />} darkMode={darkMode} setDarkMode={setDarkMode} />
        </Routes>

            </div>

        {!hideLayout && <Footer darkMode={darkMode} setDarkMode={setDarkMode} />}
      </ThemeProvider>

  );
}

export default App;
