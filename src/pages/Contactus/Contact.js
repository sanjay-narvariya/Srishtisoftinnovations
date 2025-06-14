import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, TextareaAutosize, useMediaQuery } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import Section1 from '../../components/Contacts/Section1.js';

export default function Contact() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Optionally: you can add validation or send data to backend here
        navigate('/thankyou');
        setFormData({ firstName: '', lastName: '', email: '', mobile: '', message: '' });
    };



    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate(); // 👈 navigation hook

    return (<>
        <Box sx={{ paddingLeft: isMobile ? '0px' : '60px', paddingTop: isMobile ? '50px' : '10px', background: 'transparent', position: 'relative', overflow: "hidden", }}>
            <Grid container spacing={2} display="flex" flexDirection={isMobile ? "column" : "row"} alignItems="center" justifyContent="flex-start" >

                {/* Left Side */}
                <Grid item xs={12} md={6} sx={{ width: isMobile ? 'auto' : 'auto' }}>
                    <Box className="text-center text-md-start" >
                        <Box
                            sx={{
                                position: 'relative',
                                marginTop: isMobile ? '90px' : '40px',
                                marginLeft: isMobile ? '100px' : '50px',
                                marginBottom: isMobile ? '40px' : '60px',
                                background: '#f8c291',
                                width: isMobile ? 240 : 165,
                                height: isMobile ? 240 : 120,
                                borderRadius: '125px 125px 15px 15px',
                                transition: 'box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    boxShadow: '5px 6px 0#0e0c0d',
                                },
                            }}
                        >
                            <svg style={{ position: 'absolute', zIndex: 2, background: 'transparent', top: '150px', left: isMobile ? '-140' : '-145px', animation: 'rotate360 5s linear infinite' }} id='object1' width={isMobile ? '110' : "120"} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 471.9 476.19'>
                                <polygon fill="#ff802e" strokeWidth="0px" points='471.9 193.96 461.4 159.52 307.1 206.55 407.89 121.24 384.63 93.77 290.69 173.28 349.56 65.2 317.95 47.98 254.78 163.94 269.64 3.32 233.79 0 214.95 203.73 104.16 67.83 76.26 90.58 159.69 192.92 16.63 118.39 0 150.32 181.45 244.85 13.73 295.98 24.23 330.41 150.54 291.91 27.41 396.13 50.67 423.61 166.95 325.18 94.08 458.97 125.69 476.19 202.85 334.53 190.7 466.01 226.54 469.33 242.69 294.73 371.97 453.32 399.87 430.57 297.95 305.54 415.05 366.55 431.68 334.63 276.18 253.61 471.9 193.96'></polygon>
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

                            <AutoAwesomeIcon style={{ position: 'absolute', zIndex: 1, marginTop: isMobile ? '-40px' : '-30px', marginLeft: isMobile ? '2px' : '-50px', width: isMobile ? '110px' : '70px', height: isMobile ? '65px' : '70px', color: '#e84393', animation: 'bulbGlow 2.5s ease-in-out infinite', }} />

                            <img
                                src="https://www.irohub.com/home/images/ir-asset-6.webp"
                                alt="student1"
                                style={{ marginLeft: isMobile ? '5px' : '', marginTop: isMobile ? '-60px' : '-30px', width: isMobile ? '220px' : '150px', height: isMobile ? '300px' : '150px' }}
                            />
                        </Box>

                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                ml: isMobile ? '-10px' : '50px',
                                backgroundColor: '#d67bc9',
                                borderRadius: '20px',
                                textTransform: 'none',
                                mb: 2,
                            }}
                        >
                            Contact Us
                        </Button>

                        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ padding: isMobile ? '20px' : '', ml: isMobile ? '-10px' : '50px', }}>
                            Get In Touch !
                        </Typography>
                        <Typography sx={{ mb: 2, ml: isMobile ? '-10px' : '50px', paddingLeft: isMobile ? '50px' : '', paddingRight: isMobile ? '50px' : '' }}>
                            Discover More: Explore Our Repository for Engaging Content
                        </Typography>

                        <Typography sx={{ mt: '60px', fontWeight: 500, letterSpacing: 1.5, lineHeight: 1.5, fontSize: '25px', color: '#74b9ff', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '-2px', WebkitTextDecorationSkip: 'none', MozTextDecorationSkip: 'none', transform: 'rotate(-3deg)', ml: isMobile ? '-10px' : '50px', }}>
                            <strong style={{ color: 'pink' }}>LET’S MAKE</strong> SOMETHING
                        </Typography>
                        <Typography sx={{ fontWeight: 500, letterSpacing: 1.5, lineHeight: 1.5, fontSize: '25px', color: '#74b9ff', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '-2px', WebkitTextDecorationSkip: 'none', MozTextDecorationSkip: 'none', transform: 'rotate(-3deg)', ml: isMobile ? '-10px' : '50px', }}>
                            <strong style={{ color: 'pink' }}>GREAT </strong>TOGETHER!
                        </Typography>
                    </Box>
                </Grid>

                {/* Right Side Form */}
                <Grid item xs={12} md={6} sx={{ width: isMobile ? '350px' : '500px', height: isMobile ? 'auto' : '600px', mt: '10px', mb: isMobile ? '80px' : '150px' }} >
                    <Box
                        sx={{
                            border: '1px solid black',
                            borderRadius: '4px',
                            padding: '24px',
                            boxShadow: '5px 5px 0 black',
                            width: isMobile ? '350px' : '100%',
                            height: isMobile ? 'auto' : '90%',
                            ml: isMobile ? '0px' : '70px',
                            mt: isMobile ? '10px' : '160px',

                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: '30px', mt: '20px' }}>
                                Say Hi.
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="First Name *" name="firstName" onChange={handleChange} value={formData.firstName} variant="outlined" size="small" sx={{
                                        '&:hover': {
                                            boxShadow: '5px 6px 0#0e0c0d',
                                        },
                                        mb: '20px'
                                    }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Last Name *" name="lastName" onChange={handleChange} value={formData.lastName} variant="outlined" size="small" sx={{
                                        '&:hover': {
                                            boxShadow: '5px 6px 0#0e0c0d',
                                        },
                                        mb: '20px'
                                    }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="E-Mail *" name="email" onChange={handleChange} value={formData.email} variant="outlined" size="small" sx={{
                                        '&:hover': {
                                            boxShadow: '5px 6px 0#0e0c0d',
                                        },
                                        mb: '20px'
                                    }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Mobile *" name="mobile" onChange={handleChange} value={formData.mobile} variant="outlined" size="small" sx={{
                                        '&:hover': {
                                            boxShadow: '5px 6px 0#0e0c0d',
                                        },
                                        mb: '20px'
                                    }} />
                                </Grid>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Grid item xs={12} sm={12} md={12} sx={{ mt: '10px', width: '450px' }}>
                                        <Typography variant="h6" fontWeight="bold">
                                            Message →
                                        </Typography>
                                        <Box
                                            component={TextareaAutosize}
                                            minRows={5}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write your message"
                                            sx={{
                                                width: isMobile ? '67%' : '100%',
                                                padding: '10px',
                                                border: '1px solid #ccc',
                                                borderRadius: 1,
                                                transition: 'box-shadow 0.3s ease',
                                                '&:hover': {
                                                    boxShadow: '5px 6px 0 #0e0c0d',
                                                },
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} sx={{ mt: '1px', width: isMobile ? '300px' : '450px' }}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            type="submit"
                                            sx={{
                                                backgroundColor: 'black',
                                                color: 'white',
                                                borderRadius: '25px',
                                                padding: '12px',
                                                mt: 2,
                                                boxShadow: '0px 4px 8px hsla(0, 90.50%, 49.40%, 0.82)',
                                            }}
                                        >
                                            SUBMIT
                                        </Button>
                                    </Grid>
                                </div>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
                <svg style={{ position: 'absolute', zIndex: 2, background: 'transparent', top: isMobile ? '200px' : '150px', right: isMobile ? '-110px' : '-250px', }} id='object2' width={isMobile ? '220' : "350"} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 121.52 119.22'>
                    <path opacity="0.9" fill="#4697c7" strokeWidth="2px" d='M60.76,119.22C27.26,119.22,0,91.96,0,58.46c0-.44.36-.8.8-.8s.8.36.8.8c0,32.63,26.54,59.17,59.17,59.17s59.17-26.54,59.17-59.17S94.42,1.59,63.07,1.59,6.21,27.1,6.21,58.46s24.47,54.56,54.56,54.56,54.56-24.47,54.56-54.56S91.88,6.21,63.07,6.21,10.82,29.64,10.82,58.46s22.4,49.94,49.94,49.94,49.94-22.4,49.94-49.94S89.33,10.82,63.07,10.82,15.43,32.19,15.43,58.46s20.33,45.33,45.33,45.33,45.33-20.34,45.33-45.33S86.79,15.43,63.07,15.43,20.04,34.73,20.04,58.46c0,22.45,18.27,40.72,40.72,40.72s40.72-18.27,40.72-40.72c0-21.18-17.23-38.41-38.41-38.41S24.66,37.27,24.66,58.46c0,19.91,16.2,36.1,36.1,36.1s36.1-16.2,36.1-36.1c0-18.64-15.16-33.8-33.8-33.8s-33.8,15.16-33.8,33.8c0,17.36,14.13,31.49,31.49,31.49s31.49-14.13,31.49-31.49c0-16.09-13.09-29.19-29.19-29.19s-29.19,13.09-29.19,29.19c0,14.82,12.06,26.88,26.88,26.88s26.88-12.06,26.88-26.88c0-13.55-11.02-24.57-24.57-24.57s-24.57,11.02-24.57,24.57c0,12.28,9.99,22.27,22.27,22.27s22.27-9.99,22.27-22.27c0-11.01-8.95-19.96-19.96-19.96s-19.96,8.95-19.96,19.96c0,9.73,7.92,17.65,17.65,17.65s17.65-7.92,17.65-17.65c0-8.46-6.89-15.35-15.35-15.35s-15.35,6.89-15.35,15.35c0,7.19,5.85,13.04,13.04,13.04s13.04-5.85,13.04-13.04c0-5.92-4.82-10.74-10.74-10.74s-10.74,4.82-10.74,10.74c0,4.65,3.78,8.43,8.43,8.43s8.43-3.78,8.43-8.43c0-3.38-2.75-6.12-6.12-6.12s-6.12,2.75-6.12,6.12c0,2.1,1.71,3.82,3.82,3.82s3.82-1.71,3.82-3.82c0-.83-.68-1.51-1.51-1.51-.44,0-.8-.36-.8-.8s.36-.8.8-.8c1.71,0,3.1,1.39,3.1,3.1,0,2.98-2.43,5.41-5.41,5.41s-5.41-2.43-5.41-5.41c0-4.25,3.46-7.72,7.72-7.72s7.72,3.46,7.72,7.72c0,5.53-4.5,10.02-10.02,10.02s-10.02-4.5-10.02-10.02c0-6.8,5.53-12.33,12.33-12.33s12.33,5.53,12.33,12.33c0,8.07-6.56,14.63-14.63,14.63s-14.63-6.56-14.63-14.63c0-9.34,7.6-16.94,16.94-16.94s16.94,7.6,16.94,16.94c0,10.61-8.63,19.25-19.25,19.25s-19.25-8.63-19.25-19.25c0-11.88,9.67-21.55,21.55-21.55s21.55,9.67,21.55,21.55c0,13.16-10.7,23.86-23.86,23.86s-23.86-10.7-23.86-23.86c0-14.43,11.74-26.17,26.17-26.17s26.17,11.74,26.17,26.17c0,15.7-12.77,28.47-28.47,28.47s-28.47-12.77-28.47-28.47c0-16.97,13.81-30.78,30.78-30.78s30.78,13.81,30.78,30.78c0,18.24-14.84,33.09-33.09,33.09s-33.09-14.84-33.09-33.09c0-19.51,15.88-35.39,35.39-35.39s35.39,15.88,35.39,35.39c0,20.79-16.91,37.7-37.7,37.7s-37.7-16.91-37.7-37.7c0-22.06,17.95-40,40-40s40,17.95,40,40c0,23.33-18.98,42.31-42.31,42.31s-42.31-18.98-42.31-42.31c0-24.6,20.01-44.62,44.62-44.62s44.62,20.02,44.62,44.62c0,25.87-21.05,46.92-46.92,46.92S13.84,84.33,13.84,58.46c0-27.15,22.08-49.23,49.23-49.23s49.23,22.08,49.23,49.23-23.12,51.54-51.54,51.54S9.23,86.87,9.23,58.46,33.38,4.61,63.07,4.61s53.84,24.15,53.84,53.84-25.19,56.15-56.15,56.15S4.61,89.42,4.61,58.46,30.84,0,63.07,0s58.45,26.22,58.45,58.46-27.26,60.76-60.76,60.76Z'></path>
                </svg>
            </Grid>

            <Box
                sx={{
                    marginTop: '0px',
                    marginBottom:'50px',
                    display: 'flex',
                    width: '100%',
                }}
            >
                <Section1 />
            </Box>

        </Box>
    </>
    );
}
