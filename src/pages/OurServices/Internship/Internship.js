import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, TextareaAutosize, useMediaQuery } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import './Internship.css';
import Section1 from '../../../components/Intern/Section1.js';
import Section2 from '../../../components/Intern/Section2.js';




const trainings = [
    {
        title: 'ME(A)RN Stack Training',
        desc: 'ME(A)RN stack offers a seamless development experience, efficient data handling, and the ability to build modern and responsive user interfaces. Enrolling in SRISHTISOFT’s training opens a secure & successful future for the candidates.',
        image: 'https://www.irohub.com/irohub/public/intenship/1142584958.webp', // Place actual image paths
    },
    {
        title: 'C Training',
        desc: 'C-Language course in Bharatpur provided at SRISHTISOFT, led by seasoned experts boasting years of industrial experience, makes it one of the leading institutes in Kerala. It offers unparalleled exposure to real-life projects, making it the top choice apart from the rest',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
    },
    {
        title: 'C++ Training',
        desc: 'C++ is one of the most demanding segments in web app industry. Being a high level object orient programming language it is easy and flexible for a beginner to start his/her career as a C++',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    },
    {
        title: 'Android Training',
        desc: 'Internship in Android led by Expert developer with more than 4 years of Industrial experience is the best of its kind in India with exposure towards Live projects',
        image: 'https://www.irohub.com/irohub/public/intenship/397236510.svg',
    },
    {
        title: 'iOS Training',
        desc: 'Internship in iOS includes training sessions with appropriate hardware simulations further enhanced by hands on experience with the latest Apple devices that include iPhone and the iPad',
        image: 'https://www.irohub.com/irohub/public/intenship/857435201.svg',
    },
    {
        title: 'DATABASE Training',
        desc: 'DATA BASE is one of the most frequently used programming languages in web segment. SRISHTISOFT’s expert Data Base developers will guide a candidate through the various modules in php from basic stuff to the advanced features',
        image: 'https://www.irohub.com/irohub/public/intenship/144821830.webp',
    },

    {
        title: 'Python Training',
        desc: 'Python, an open-source data language that was easy to use and cross platform code, is reshaping the future of programming in India. There is no simple or unified way to find the top programming languages.',
        image: 'https://www.irohub.com/irohub/public/intenship/1005499818.svg',
    },
    {
        title: 'Digital Marketing',
        desc: "In today's fast-paced, technology-driven world, digital marketing has become the cornerstone of success for businesses and individuals alike. Whether you're a novice seeking a rewarding career or a business owner looking to expand your online presence, a digital marketing course can be your ticket to achieving your goals.",
        image: 'https://www.irohub.com/irohub/public/intenship/835097830.svg',
    }, {
        title: 'Data Analytics',
        desc: "Unlock the power of data with our Data Analytics Training in Bharatpur! Designed for both beginners and professionals, our program offers a comprehensive learning experience covering key concepts like data collection, analysis, visualization, and real-world application",
        image: 'https://www.irohub.com/irohub/public/intenship/834030805.png',
    }, {
        title: 'Software Testing',
        desc: "Choosing a software testing course can be a rewarding career move due to the high demand for skilled professionals, the opportunity for career growth, and the essential role testing plays in delivering high-quality software. Whether you're new to the field or seeking to enhance your existing skills, a software testing course can pave the way for a fulfilling and prosperous career in the software industry.",
        image: 'https://www.irohub.com/irohub/public/intenship/368127381.webp',
    },
];



export default function Internship() {

    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate(); // 👈 navigation hook

    return (<>
        <Box sx={{ paddingTop: isMobile ? '50px' : '130px', background: 'transparent', position: 'relative', overflow:isMobile? 'hidden':'visible', }}>
            <Grid container spacing={2} display="flex" flexDirection={isMobile ? "column" : "row"} alignItems="center" justifyContent="flex-start" >
                {/* <div className="equipment-title4">
                 <h3 style={{ background: '#7b61a0', borderRadius: '15px', width: '90px', padding: '5px', fontSize: '15px' }}>Aboutus</h3>
                 <h1>Created for the <span style={{ color: '#f7b731' }}> love </span> of kinks and curls </h1>
                  <h5 style={{ width: isMobile ? '300px' : '510px', marginTop: '30px' }}>Experience practical expertise, workplace familiarity and greater knowledge of industry.</h5>
              </div> */}
                <img
                    src="/background.png"
                    alt="student1"
                    style={{ position: 'absolute', zIndex: -1, marginLeft: isMobile ? '' : '20%', width: isMobile ? '130%' : '80%',  height: isMobile ? '100vw' : '100%', objectFit: 'contain', display: 'block', color: 'darkblue',  marginTop: isMobile ? '-38px' : '-40px', }}
                />

                {/* Left Side */}
                <Grid item xs={12} md={6} sx={{ width: isMobile ? 'auto' : 'auto' }}>
                    <Box className="text-center text-md-start" >
                        <Box
                            sx={{
                                marginTop: isMobile ? '0px' : '40px',
                                marginLeft: isMobile ? '100px' : '50px',
                                marginBottom: isMobile ? '30px' : '60px',
                                background: 'transparent',
                                width: isMobile ? 240 : 165,
                                height: isMobile ? 240 : 120,
                                borderRadius: '125px 125px 15px 15px',

                            }}
                        >
                            <svg style={{ position: 'absolute', zIndex: 1, background: 'transparent', top: '140px', left: isMobile ? '-140px' : '-250px', animation: 'rotate360 5s linear infinite' }} id='object1' width={isMobile ? '200' : "350"} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 121.52 119.22'>
                                <path opacity="0.9" fill="#4697c7" strokeWidth="2px" d='M60.76,119.22C27.26,119.22,0,91.96,0,58.46c0-.44.36-.8.8-.8s.8.36.8.8c0,32.63,26.54,59.17,59.17,59.17s59.17-26.54,59.17-59.17S94.42,1.59,63.07,1.59,6.21,27.1,6.21,58.46s24.47,54.56,54.56,54.56,54.56-24.47,54.56-54.56S91.88,6.21,63.07,6.21,10.82,29.64,10.82,58.46s22.4,49.94,49.94,49.94,49.94-22.4,49.94-49.94S89.33,10.82,63.07,10.82,15.43,32.19,15.43,58.46s20.33,45.33,45.33,45.33,45.33-20.34,45.33-45.33S86.79,15.43,63.07,15.43,20.04,34.73,20.04,58.46c0,22.45,18.27,40.72,40.72,40.72s40.72-18.27,40.72-40.72c0-21.18-17.23-38.41-38.41-38.41S24.66,37.27,24.66,58.46c0,19.91,16.2,36.1,36.1,36.1s36.1-16.2,36.1-36.1c0-18.64-15.16-33.8-33.8-33.8s-33.8,15.16-33.8,33.8c0,17.36,14.13,31.49,31.49,31.49s31.49-14.13,31.49-31.49c0-16.09-13.09-29.19-29.19-29.19s-29.19,13.09-29.19,29.19c0,14.82,12.06,26.88,26.88,26.88s26.88-12.06,26.88-26.88c0-13.55-11.02-24.57-24.57-24.57s-24.57,11.02-24.57,24.57c0,12.28,9.99,22.27,22.27,22.27s22.27-9.99,22.27-22.27c0-11.01-8.95-19.96-19.96-19.96s-19.96,8.95-19.96,19.96c0,9.73,7.92,17.65,17.65,17.65s17.65-7.92,17.65-17.65c0-8.46-6.89-15.35-15.35-15.35s-15.35,6.89-15.35,15.35c0,7.19,5.85,13.04,13.04,13.04s13.04-5.85,13.04-13.04c0-5.92-4.82-10.74-10.74-10.74s-10.74,4.82-10.74,10.74c0,4.65,3.78,8.43,8.43,8.43s8.43-3.78,8.43-8.43c0-3.38-2.75-6.12-6.12-6.12s-6.12,2.75-6.12,6.12c0,2.1,1.71,3.82,3.82,3.82s3.82-1.71,3.82-3.82c0-.83-.68-1.51-1.51-1.51-.44,0-.8-.36-.8-.8s.36-.8.8-.8c1.71,0,3.1,1.39,3.1,3.1,0,2.98-2.43,5.41-5.41,5.41s-5.41-2.43-5.41-5.41c0-4.25,3.46-7.72,7.72-7.72s7.72,3.46,7.72,7.72c0,5.53-4.5,10.02-10.02,10.02s-10.02-4.5-10.02-10.02c0-6.8,5.53-12.33,12.33-12.33s12.33,5.53,12.33,12.33c0,8.07-6.56,14.63-14.63,14.63s-14.63-6.56-14.63-14.63c0-9.34,7.6-16.94,16.94-16.94s16.94,7.6,16.94,16.94c0,10.61-8.63,19.25-19.25,19.25s-19.25-8.63-19.25-19.25c0-11.88,9.67-21.55,21.55-21.55s21.55,9.67,21.55,21.55c0,13.16-10.7,23.86-23.86,23.86s-23.86-10.7-23.86-23.86c0-14.43,11.74-26.17,26.17-26.17s26.17,11.74,26.17,26.17c0,15.7-12.77,28.47-28.47,28.47s-28.47-12.77-28.47-28.47c0-16.97,13.81-30.78,30.78-30.78s30.78,13.81,30.78,30.78c0,18.24-14.84,33.09-33.09,33.09s-33.09-14.84-33.09-33.09c0-19.51,15.88-35.39,35.39-35.39s35.39,15.88,35.39,35.39c0,20.79-16.91,37.7-37.7,37.7s-37.7-16.91-37.7-37.7c0-22.06,17.95-40,40-40s40,17.95,40,40c0,23.33-18.98,42.31-42.31,42.31s-42.31-18.98-42.31-42.31c0-24.6,20.01-44.62,44.62-44.62s44.62,20.02,44.62,44.62c0,25.87-21.05,46.92-46.92,46.92S13.84,84.33,13.84,58.46c0-27.15,22.08-49.23,49.23-49.23s49.23,22.08,49.23,49.23-23.12,51.54-51.54,51.54S9.23,86.87,9.23,58.46,33.38,4.61,63.07,4.61s53.84,24.15,53.84,53.84-25.19,56.15-56.15,56.15S4.61,89.42,4.61,58.46,30.84,0,63.07,0s58.45,26.22,58.45,58.46-27.26,60.76-60.76,60.76Z'></path>
                            </svg>

                            <style>
                                {`@keyframes rotate360 {
                                             from {
                                                 transform: rotate(0deg);
                                                   }
                                              to {
                                                 transform: rotate(360deg);
                                                  }
                                                  }
                                              `}
                            </style>

                            <AutoAwesomeIcon style={{ position: 'absolute', zIndex: 1, marginTop: isMobile ? '40px' : '-30px', marginLeft: isMobile ? '-200px' : '50px', width: isMobile ? '110px' : '70px', height: isMobile ? '65px' : '70px', color: '#16a085', animation: 'bulbGlow 2.5s ease-in-out infinite', }} />


                        </Box>

                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                mt:isMobile? '-180px':'0px',
                                ml: isMobile ? '-100px' : '100px',
                                backgroundColor: '#d67bc9',
                                borderRadius: '20px',
                                textTransform: 'none',
                                fontSize: '20px',
                                mb: 2,
                            }}
                        >
                            Internship
                        </Button>

                        <Typography variant="h3" gutterBottom sx={{ width:isMobile? '80%':'58%', fontFamily: `'Montserrat', sans-serif`, mt: isMobile ? '-50px' : '', ml: isMobile ? '70px' : '100px', textAlign:isMobile?'start':'', fontWeight: 500, fontSize:isMobile?'20px':'auto' }}>
                            Discover your passion,
                            acquire the skills, and upscale your talent
                        </Typography>
                        <Typography sx={{ width:isMobile? '80%':'50%', fontFamily: `'Montserrat', sans-serif`, mt: 5, ml: isMobile ? '-10px' : '100px', paddingLeft: isMobile ? '30px' : '', paddingRight: isMobile ? '10px' : '', textAlign:isMobile?'start':'', }}>
                            Experience practical expertise, workplace familiarity and greater knowledge of industry.
                        </Typography>


                    </Box>
                </Grid>


            </Grid>
        </Box>



        <Box>
            <Typography sx={{ width:isMobile?'95%': '62%', mt: isMobile?'50px':'90px', fontWeight: 500, letterSpacing: isMobile?1: 1.5, lineHeight:isMobile?1: 1.5, fontSize: isMobile?'20px': '25px', ml: isMobile ? '10px' : '100px', p: isMobile ? '10px' : '0px', }}>
                Srishtisoft Innovations through our unparalleled training with live project helps you achieve your dream career.
            </Typography>

        </Box>


        <Box sx={{ padding: isMobile ? 2 : 10 }}>
            <Grid container spacing={4}>
                {trainings.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            sx={{
                                width: '350px',
                                textAlign: 'start',
                                borderRadius: '12px',
                                padding: 2,
                                backgroundColor: 'transparent',
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{ width: 100, height: 90, marginBottom: 20, background: '#1abc9c', padding: 10, borderRadius: '15px' }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                {item.desc}
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    background: 'linear-gradient(to right, #eeeeee, #ffffff)',
                                    borderRadius: '30px',
                                    color: '#000',
                                    fontWeight: 500,
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                                    '&:hover': {
                                        background: '#e0e0e0',
                                    },
                                }}
                            >
                                Learn
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>


        <Box
            sx={{
                marginTop: isMobile ? '0px' : '0px',
                display: 'flex',
                paddingLeft: isMobile ? '0px' : '100px',
                paddingRight: isMobile ? '0px' : '100px',
                width: '100%',
            }}
        >

            <Section1 />

        </Box>


        <Box
            sx={{
                 marginTop: isMobile ? '0px' : '0px',
                display: 'flex',
                marginLeft: isMobile ? '0px' : '-10px',
                paddingRight: isMobile ? '0px' : '10px',
                width: '100%',
            }}
        >

            <Section2 />

        </Box>



    </>
    )
};