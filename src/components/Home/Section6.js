import React, { useEffect, useState } from "react";
import { Grid, Typography, Paper, Avatar, Box } from '@mui/material';
import './Section4.css'; // external CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export default function Section6() {

    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (<div className="placement-section " >
        <Grid container spacing={2} >
            {/* Left Column */}
            <Grid item xs={12} md={5} sx={{ width: isMobile ? 'auto' : '500px', marginLeft: isMobile ? '20px' : '80px', marginRight: isMobile ? '20px' : '', }}>
                <Typography variant="h5" className="mb-2 text-center text-md-start" style={{ marginLeft: isMobile ? '' : '', width: isMobile ? 'auto' : '640px', fontSize: isMobile ? 28 : 38, letterSpacing: isMobile ? '0.3rem' : '0.4rem', lineHeight: 1 }}>
                    <strong> Trusted Partners & Clients: <span style={{ fontWeight: 900, letterSpacing: '5.5px', textShadow: '0px 0px 1px black', fontFamily: 'Arial Blue, Impact, sans-serif', marginLeft: isMobile ? '' : '20px' }}> A Diverse Portfolio. 🤝🌐</span></strong>
                </Typography>
                <Typography variant="body1" className="mt-3 opacity-75  fs-5 font-poppins" sx={{ marginLeft: isMobile ? 2 : 3, width: isMobile ? 250 : 580, height: isMobile ? 300 : 570, marginTop: '10px', }}>
                    <div>Our commitment to fostering the future success of our students extends to the pinnacle of our comprehensive support system, where we proudly offer unparalleled placement assistance. At SRISHTISOFT we are committed to the unwavering dedication to providing an extraordinary platform for our students to not only excel academically but to seamlessly transition into the professional realm with utmost success.</div>
                    <div style={{ marginTop: '20px' }}>Our network of industry connections and partnerships with leading corporations further amplifies the effectiveness of our placement assistance, creating a bridge between academia and the dynamic demands of the professional landscape.</div>
                </Typography>

                <Typography sx={{ marginLeft: isMobile ? 2 : 3 }}>
                    <Box
                        component="img"
                        src="companylogo.png"
                        alt="company"
                        sx={{
                           color:'Highlight', width: isMobile ? 250 : 550, height: isMobile ? 300 : 500, marginTop: isMobile?'620px':'-220px', marginLeft: isMobile ? '25px' : '-20px', filter: 'contrast(120%) brightness(100%)',

                        }}
                    />
                </Typography>

            </Grid>


            {/* Right Column */}
            <Grid item xs={12} md={7} sx={{ width: isMobile ? 'auto' : '530px', marginLeft: isMobile ? '25px' : '150px', marginRight: isMobile ? '25px' : '',  filter: 'contrast(150%) brightness(150%)', }}>
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
                            ml: { xs: '10px', sm: '50px' },
                        }}
                    >
                        {/* "3" Part */}
                        <span
                            style={{
                                fontSize: window.innerWidth >= 600 ? 'clamp(20px, 10vw, 60px)' : 'clamp(20px, 10vw, 60px)',
                    
                               
                                position: window.innerWidth >= 600 ? 'absolute' : 'absolute',
                                top: window.innerWidth >= 600 ? 23 : 20,
                                left: window.innerWidth >= 600 ? -25 : -20,
                                marginLeft: window.innerWidth < 600 ? '4px' : '0px',
                                lineHeight: 1,
                            }}
                        >
                            1
                        </span>
                        <span
                            style={{
                                fontSize: 'clamp(40px, 16vw, 70px)',
                              
                            }}
                        >
                            5
                        </span>

                        {/* "000+" Part */}
                        <span
                            style={{
                                fontSize: window.innerWidth >= 600 ? 'clamp(20px, 10vw, 60px)' : 'clamp(20px, 10vw, 60px)',

                             
                                position: window.innerWidth >= 600 ? 'absolute' : 'absolute',
                                top: window.innerWidth >= 600 ? 20 : 20,
                                left: window.innerWidth >= 600 ? 40 : 32,
                                marginLeft: window.innerWidth < 600 ? '4px' : '0px',
                                lineHeight: 1,
                            }}
                        >
                            00+
                        </span>
                    </Box>

                    {/* Label */}
                    <div
                        style={{
                            marginTop: window.innerWidth < 600 ? '-10px' : '-10px',
                            fontSize: 'clamp(14px, 3vw, 26px)',
                            textAlign: 'center',
                            width: window.innerWidth < 600 ? '100%' : '250px',
                        }}
                    >
                        Over 1500 students have scored rad placements! 🎉🚀💼 Keep slaying, folks!
                    </div>
                </Box>




                 <Box
                    sx={{
                        position: "relative",
                        display: "inline-block",
                        ml: { xs: 0, sm: '100px' },
                        mt: { xs: '20px', sm: '25px'}
                    }}
                >
                    {/* Wrapper for mobile alignment */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            position: { xs: 'relative', sm: 'relative' },
                            ml: { xs: '10px', sm: '50px' },
                        }}
                    >
                        {/* "3" Part */}
                        <span
                            style={{
                                fontSize: window.innerWidth >= 600 ? 'clamp(20px, 10vw, 60px)' : 'clamp(20px, 10vw, 60px)',
                        
                              
                                position: window.innerWidth >= 600 ? 'absolute' : 'absolute',
                                top: window.innerWidth >= 600 ? 23 : 20,
                                left: window.innerWidth >= 600 ? -25 : -16,
                                marginLeft: window.innerWidth < 600 ? '4px' : '0px',
                                lineHeight: 1,
                            }}
                        >
                            22
                        </span>
                       

                        {/* "000+" Part */}
                        <span
                            style={{
                                fontSize: window.innerWidth >= 600 ? 'clamp(20px, 10vw, 60px)' : 'clamp(20px, 10vw, 60px)',

                              
                                position: window.innerWidth >= 600 ? 'absolute' : 'absolute',
                                top: window.innerWidth >= 600 ? 20 : 20,
                                left: window.innerWidth >= 600 ? 40 : 25,
                                marginLeft: window.innerWidth < 600 ? '4px' : '0px',
                                lineHeight: 1,
                            }}
                        >
                            00+
                        </span>
                    </Box>

                    {/* Label */}
                    <div
                        style={{
                            marginTop: window.innerWidth < 600 ? '68px' : '100px',
                            fontSize: 'clamp(14px, 3vw, 26px)',
                            textAlign: 'center',
                            width: window.innerWidth < 600 ? '100%' : '250px',
                            marginBottom: window.innerWidth < 600 ? '50px' : '25px',
                        }}
                    >
                      We've smashed through over 2200 live projects! 💪🔥 Let's keep the momentum going! 🚀
                    </div>
                </Box>
            </Grid>
        </Grid>
    </div>)
}
