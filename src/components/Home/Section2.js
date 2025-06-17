import React, { useEffect, useState } from "react";
import "./Section2.css";
import { Link, useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";
import { Box, Modal, TextField, Button, IconButton, Typography, useMediaQuery } from '@mui/material';



export default function Section2() {
 
    return (<div>
        <div className="RentalEquipment">
            <div className="row">
                <div className="equipment-title1" >
                    <h3 style={{ background: '#52ade5', borderRadius: '15px', width: '128px', padding: '5px', fontSize: '15px' }}>Top Categories</h3>
                    <h1>OUR COURSES  "📚" </h1>
                </div>

                <section className='about-sec1' style={{marginTop: '20px'}}>
                    <div className="container sec2">
                        <div className="row">


                            <div className="col-md-4 col-12 ">
                                <div className="item1">
                                    <div> <img src="https://www.irohub.com/irohub/public/courses/314801840.png" height={50} alt="" /> </div>
                                    <h4 style={{ margin: '25px', marginLeft: '20%' }}>ME(A)RN </h4>
                                    <div>Enroll in our advanced ME(A)RN Stack training along with live project exposure</div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="item1">
                                    <div> <img src="https://www.irohub.com/irohub/public/courses/1610394759.svg" height={50} alt="" /> </div>
                                    <h4 style={{ margin: '25px', marginLeft: '20%' }}>Android </h4>
                                    <div>Enroll in our advanced Android training along with live project exposure</div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="item1">
                                    <div> <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" height={50} alt="" /> </div>
                                    <h4 style={{ margin: '25px', marginLeft: '20%' }}>C-Language </h4>
                                    <div>Enroll in our C training along with many project exposure</div>
                                </div>

                            </div>
                            <div className="col-md-4 col-12" style={{ marginTop: '30px' }}>
                                <div className="item1">
                                    <div> <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" height={50} alt="" /> </div>
                                    <h4 style={{ margin: '25px', marginLeft: '20%' }}>C++ Language </h4>
                                    <div>Enroll in our C++ training along with many project exposure</div>
                                </div>

                            </div>
                            <div className="col-md-4 col-12" style={{ marginTop: '30px' }}>
                                <div className="item1">
                                    <div> <img src="https://www.irohub.com/irohub/public/courses/153067236.webp" height={50} alt="" /> </div>
                                    <h4 style={{ margin: '25px', marginLeft: '20%' }}>Python</h4>
                                    <div>Enroll in our advanced Python training along with live project exposure</div>
                                </div>

                            </div>
                            <div className="col-md-4 col-12" style={{ marginTop: '30px' }}>
                                <div className="item1">
                                    <div> <img src="https://www.irohub.com/irohub/public/courses/1368658559.webp" height={50} alt="" /> </div>
                                    <h4 style={{ margin: '25px', marginLeft: '20%' }}>UI/UX Designing</h4>
                                    <div>Enroll in our advanced UI/UX training along with live project exposure</div>
                                </div>

                            </div>
                            <div className="col-md-4 col-12" style={{ marginTop: '30px' }}>
                                <div className="item1">
                                    <div> <img src="http://irohub.com/irohub/public/courses/1507107066.svg" height={50} alt="" /> </div>
                                    <h4 style={{ margin: '25px', marginLeft: '20%' }}>Digital Marketing</h4>
                                    <div>Enroll in our advanced Digital marketing training along with live project exposure</div>
                                </div>

                            </div>
                            <div className="col-md-4 col-12" style={{ marginTop: '30px' }}>
                                <div className="item1">
                                    <div> <img src="https://www.irohub.com/irohub/public/courses/1774411959.svg" height={50} alt="" /> </div>
                                    <h4 style={{ margin: '25px', marginLeft: '20%' }}>Software Testing</h4>
                                    <div>Enroll in our advanced Digital marketing training along with live project exposure</div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>


                <section>
                    <div className="equipment-title1" style={{ textAlign: 'center', padding: '1rem', marginRight:'30px' }}>
                        <h1 className="h3 fw-light">
                            <strong style={{ fontWeight: 'bold' }}>OUR </strong>
                            <strong style={{ color: '#2729d0' }}>CERTI</strong>
                            <strong style={{ color: '#3e40bb' }}>FIC</strong>
                            <strong style={{ color: '#5a5bc1' }}>ATIONS</strong>
                        </h1>
                        <h3
                            style={{
                                fontFamily: 'cursive',
                                fontSize: '18px',
                                margin: '0 auto',
                                maxWidth: '800px',
                                padding: '0 1rem',
                            }}
                        >
                            At <strong style={{ color: 'blueviolet' }}>Srishtisoft Innovation</strong>, we take pride in being a trusted name in software education and professional skill development.
                            Our certifications reflect our unwavering commitment to quality, credibility, and global standards in training delivery.
                        </h3>
                    </div>

                    <Paper
                        elevation={3}
                        sx={{
                            width: '80%',
                            margin: '2rem auto',
                            padding: '1.5rem',
                            borderRadius: '25px',
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 2,
                            minHeight: '100px', // restrict height
                            backgroundColor: '#fff', // always white, even in dark theme
                            color: '#000', // optional: ensure text is dark enough on white
                        }}
                    >
                        <img
                            src="https://www.irohub.com/home/images/certificateimagethree.png"
                            alt="startup india"
                            style={{ height: '100px', objectFit: 'contain' }}
                        />
                        <img
                            src="/startup.png"
                            alt="startup rajasthan"
                            style={{ height: '100px', objectFit: 'contain' }}
                        />
                        <img
                            src="/pslogo.png"
                            alt="ps-softech"
                            style={{ height: '150px', objectFit: 'contain' }}
                        />
                    </Paper>

                </section>


                <Box
                    sx={{
                        ml: { xs: 0, sm: 0, md: 20 },
                        mr: { xs: 0 },
                        px: { xs: 4, sm: 4, md: 10 }, // added horizontal padding
                        overflowX: "auto",
                        mt: { xs: 8, md: 10 },
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        wrap="nowrap"
                        sx={{
                            flexWrap: { xs: "wrap", md: "nowrap" },
                        }}
                    >
                        {/* Left Content */}
                        <Grid
                            item
                            xs={12}
                            md={4}
                            sx={{
                                width: { xs: "100%", md: 550 },
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: "clamp(24px, 5vw, 32px)",
                                    fontFamily: `'Montserrat', sans-serif`,
                                }}
                            >
                                Empower your IT career 💼 with{" "}
                                <strong style={{ color: "#1da589" }}>Srishtisoft Innovations </strong>{" "}
                                ✨ in Bharatpur
                            </h1>

                            <p
                                style={{
                                    fontFamily: `'Poppins', sans-serif`,
                                    marginTop: "15px",
                                }}
                            >
                                Rated as the best, We specialize in practical and career-oriented
                                coaching, ensuring students are well-prepared for the IT sector
                                post-course. Our live classes, with individual attention, enhance
                                understanding and prompt immediate doubt resolution. With collaborations
                                with over 1000 companies, we facilitate smooth placements for our
                                talented students. We offer top-notch placement support, backed by
                                experience certification to strengthen portfolios.
                            </p>
                            <p style={{ fontFamily: `'Poppins', sans-serif` }}>
                                <span style={{ color: "Highlight" }}>
                                    Our 3-month practical-oriented program
                                </span>{" "}
                                includes an advanced curriculum and exposure to live projects where
                                students gain valuable work experience contributing to their insights
                                and real-world corporate exposure.
                            </p>

                            {/* Stats */}
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "column" },
                                    alignItems: { xs: "center", sm: "flex-start" },
                                    justifyContent: { sm: "space-around" },
                                    mt: 3,
                                    gap: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        display: "inline-block",
                                        ml: { xs: 0, sm: '100px' },
                                    }}
                                >
                                    {/* Wrapper for mobile alignment */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            position: { xs: 'relative', sm: 'relative' },
                                        }}
                                    >
                                        {/* "3" Part */}
                                        <span
                                            style={{
                                                fontSize: 'clamp(40px, 16vw, 80px)',
                                                fontWeight: 500,
                                            }}
                                        >
                                            3
                                        </span>

                                        {/* "000+" Part */}
                                        <span
                                            style={{
                                                fontSize: 'clamp(20px, 7vw, 40px)',
                                                fontWeight: 'bold',
                                                position: window.innerWidth >= 600 ? 'absolute' : 'absolute',
                                                top: window.innerWidth >= 600 ? 25 : 20,
                                                left: window.innerWidth >= 600 ? 48 : 32,
                                                marginLeft: window.innerWidth < 600 ? '4px' : '0px',
                                                lineHeight: 1,
                                            }}
                                        >
                                            000+
                                        </span>
                                    </Box>

                                    {/* Label */}
                                    <div
                                        style={{
                                            marginTop: '-20px',
                                            fontSize: 'clamp(14px, 3vw, 16px)',
                                            textAlign: 'left',
                                        }}
                                    >
                                        Finished Projects 🎉
                                    </div>
                                </Box>



                                <Box
                                    sx={{
                                        position: "relative",
                                        display: "inline-block",
                                        ml: { xs: 0, sm: '150px' },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            position: { xs: 'relative', sm: 'static' },
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: 'clamp(30px, 12vw, 50px)',
                                                fontWeight: 500,
                                            }}
                                        >
                                            21
                                        </span>

                                        <span
                                            style={{
                                                fontSize: 'clamp(20px, 6vw, 40px)',
                                                fontWeight: 'bold',
                                                position: window.innerWidth >= 600 ? 'absolute' : 'static',
                                                top: window.innerWidth >= 600 ? 10 : 'auto',
                                                left: window.innerWidth >= 600 ? 55 : 'auto',
                                                marginLeft: window.innerWidth < 600 ? '4px' : '0',
                                            }}
                                        >
                                            00+
                                        </span>
                                    </Box>

                                    <div
                                        style={{
                                            marginTop: '-10px',
                                            fontSize: 'clamp(14px, 3vw, 16px)',
                                            textAlign: 'left',
                                        }}
                                    >
                                        Seminars Taken 🎓
                                    </div>
                                </Box>

                            </Box>
                        </Grid>

                        {/* Right Images */}
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            sx={{
                                position: "relative",
                                width: { xs: "100%", sm: 320 },
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                mt: { xs: 4, md: 0 },
                            }}
                        >
                            <Box
                                component="img"
                                src="https://www.irohub.com/home/images/ir-asset-1.webp"
                                alt="student"
                                sx={{
                                    width: "100%",
                                    maxWidth: { xs: "100%", sm: "90%", md: "90%" },
                                    height: "auto",
                                    borderRadius: "25px",
                                    backgroundColor: "yellow",
                                    transition: "box-shadow 0.3s ease-in-out",
                                    "&:hover": {
                                        boxShadow: "8px 8px 15px green",
                                    },
                                }}
                            />

                            <Box
                                component="img"
                                src="https://www.irohub.com/home/images/Clients-Love-Us-2.svg"
                                alt="review"
                                sx={{
                                    width: "100%",
                                    maxWidth: { xs: "100%", sm: "90%", md: "90%" },
                                    height: "auto",
                                    mt: { xs: 3, md: 2 },
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>





            </div>
        </div>

    </div>)
};
