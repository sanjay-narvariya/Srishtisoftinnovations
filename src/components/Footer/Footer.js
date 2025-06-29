import React, { useEffect, useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLocation, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md and up
    };

    handleResize(); // check once on mount
    window.addEventListener("resize", handleResize); // listen for resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <footer>
        <div className="container-fluid">

          <div className="row">
            <div className="footerdata">
              <div className="col-md-3">
                <div className="leftdata">
                  <div className="websitename">
                    <Link to="/">
                      <img src="/logo.png" alt="Logo" style={{ height: '50px', width: '60px', marginRight: 10 }} />
                      <h2>SrishtiSoft Innovations</h2>
                      <h4>(Mr. Sanjay Narvariya)</h4>
                    </Link>
                    <p>
                      SrishtiSoft:- Learn Build Succeed – 2024 Partnering with the Best to Deliver the Best..
                    </p>
                  </div>
                  <div className="socialicon">
                    <h3 >Follow Us</h3>
                    <div className="iconlink">
                      <a href="#" target="#" rel="noopener noreferrer">
                        <FaInstagram className="innericon" />
                      </a>
                      <a href="#" target="#" rel="noopener noreferrer">
                        <FaFacebookF className="innericon" />
                      </a>
                      <a href="#" target="#" rel="noopener noreferrer">
                        <FaTwitter className="innericon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="middle-data">
                  <div className="useful-links">
                    <h3>Useful Links</h3>
                    <ul>
                      <li className="footer-page-link">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/services/internship">Internship</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/services/live-project">Live Project</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/testimonials">Testimonial</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/blog">Blog</Link>
                      </li>



                      {/* Empty links shown only on desktop */}
                      {isDesktop && (
                        <>

                          <li className="footer-page-link">
                            <Link to=""> </Link>
                          </li>
                          <li className="footer-page-link">
                            <Link to=""> </Link>
                          </li>
                          <li className="footer-page-link">
                            <Link to=""> </Link>
                          </li>
                          <li className="footer-page-link">
                            <Link to=""> </Link>
                          </li>

                        </>
                      )}


                    </ul>
                  </div>
                </div>
              </div>


              <div className="col-md-2">
                <div className="middle-data">
                  <div className="useful-links">
                    <h3>Courses</h3>
                    <ul>
                      <li className="footer-page-link">
                        <Link to="">C-Language</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="">C++ Language</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="">Node-JS</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="">React-JS</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="">Express-JS</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="">Java-Script</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="">Mongo-DB</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="">MySql</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="">SEO Solution</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="">Digital Marketing</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="">Google Services</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className="col-md-2">
                <div className="middle-data">
                  <div className="useful-links">
                    <h3>Live Projects</h3>
                    <ul>
                      <li className="footer-page-link">
                        <a href="https://www.stampmanufacturer.com/" target="_blank" >Stamp-Pad</a>
                      </li>
                      <li className="footer-page-link">
                        <a href="https://www.stampmanufacturer.com/" target="_blank" >Stamppad-ADMIN</a>
                      </li>
                      <li className="footer-page-link">
                        <a href="https://srishti-soft.vercel.app/" target="_blank" >Srishti-Soft</a>
                      </li>
                      <li className="footer-page-link">
                        <a href="https://lohagadfoodengeering.vercel.app/" target="_blank" >lohagadfoodengineering</a>
                      </li>
                      <li className="footer-page-link">
                        <a href="https://lohagadfoodengeering-t4yl.vercel.app/home" target="_blank" >LFE-ADMIN</a>
                      </li>
                      <li className="footer-page-link">
                        <a href="https://tallybuddy.in/" target="_blank" >Tallbuddy.in</a>
                      </li>
                      <li className="footer-page-link">
                        <a href="https://gk-earth-mover1-1pkx.vercel.app/" target="_blank" >GkEarthMover</a>
                      </li>
                      <li className="footer-page-link">
                        <a href="https://gk-earth-mover1-emu8.vercel.app/home" target="_blank" >GkEarthMover-ADMIN</a>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/services/live-project" >Quick-Ecommerce</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/services/live-project">Supplier</Link>
                      </li>
                      <li className="footer-page-link">
                     <Link to="/services/live-project">Foodproject</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className="col-md-3">
                <div className="right-data">
                  <div className="contact-info" >
                    <h3>Contact Us</h3>
                    <div className="contact-info-inner">
                      <div className="mail-info">
                        <IoMail className="icon" />
                        <div className="mail">
                          <a
                            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CrpPbDzGcdqvRxrZRbvmSgtCfknsGnPWqvgmBXqTwrfQFXknnbQGfcHqTNdnlDwvdDXGblfZhXmljrtThbDq"
                            target="_blank"
                          >
                            sanjaynarvariya12@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="mail-info">
                        <FaPhoneAlt className="icon" />
                        <div className="phone">
                          <a href="tel:+918504069643">
                            8504069643
                          </a>
                        </div>
                      </div>
                      <div className="mail-info">
                        <IoLocation className="icon" />
                        <a
                          href="https://www.google.com/maps/place/Dr+Surendra+Singh+Narvariya+Homeopathic+Clinic/@27.229338,77.5045801,17z/data=!3m1!4b1!4m6!3m5!1s0x3973a3c007361d59:0xf157b12fcef2a17d!8m2!3d27.229338!4d77.5045801!16s%2Fg%2F11ssfxs01s?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                        >

                          SurajMal Nagar, Circular Rd, Opposite Jaghina Gate, Bharatpur, Raj-321001

                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{padding:'20px'}}>
          <div className="row">
            <div className="footer-flex-container">
              <p className="footer-links">
                <Link to={`/about`}><b>About SrishtiSoft</b></Link>
                <Link to={`/services/internship`}><b>Courses</b></Link>
                   <Link to={`/associate`}><b>Associates</b></Link> {/* ✅ fixed */}
              </p>
              <p className="footer-copy">
                All Right Reserved &#169; {new Date().getFullYear()}{" "}
                <Link to={`/`} className="Linkcss"><b>SrishtiSoft Innovations</b></Link>{" "}
                Design by{" "}
                <Link to={"https://www.linkedin.com/in/sanjay-narvaria-58987033b/"} className="Linkcss" target="_blank" rel="noreferrer">
                  <b>Sanjay Narvariya.</b>
                </Link>
              </p>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;