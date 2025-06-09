import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Topbar/Header";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home/Home.js";
import Sanjay from "./pages/Sanjay.js";
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
           <Route path="/about" element={<Sanjay />} darkMode={darkMode} setDarkMode={setDarkMode} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
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

