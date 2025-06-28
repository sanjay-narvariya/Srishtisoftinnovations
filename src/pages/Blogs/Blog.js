import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Box, Modal, TextField, Button, IconButton, Typography, useMediaQuery } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from '@mui/material/styles';


import Section1 from '../../components/Blog/Section1.js';



export default function Blog() {

    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (<div style={{ position: 'relative', overflow: 'hidden', }}>
        <div className="RentalEquipment5" >
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between' }}>
                <div className="equipment-title5" style={{ position: 'relative', marginTop: isMobile ? '50px' : '1px', }}>
                    <h3 style={{
                        background: '#7b61a0',
                        borderRadius: '20px',
                        display: 'inline-block',
                        padding: '6px 14px',
                        fontSize: '16px',
                        color: 'white',
                        lineHeight: 1
                    }}>
                        Blogs
                    </h3>

                    <StarIcon style={{ position: 'absolute', zIndex: -1, marginTop: isMobile ? '-40px' : '-40px', marginLeft: isMobile ? '-100px' : '-100px', width: isMobile ? '70px' : '70px', height: isMobile ? '65px' : '70px', color: '#e84393', animation: 'bulbGlow 2.5s ease-in-out infinite', }} />

                    <h1>Welcome to Our <span style={{ color: '#8e44ad' }}> Hub:</span> Where Knowledge Meets Inspiration.</h1>
                    <h5 style={{ width: isMobile ? '300px' : '510px', marginTop: '30px' }}>Discover More: Explore Our Repository for Engaging Content.</h5>
                </div>

                <Box
                    sx={{

                        marginTop: isMobile ? '10px' : '50px',
                        marginLeft: isMobile ? '80px' : '100px',
                    }}
                >
                    <img
                        src="/home.webp"
                        alt="student1"
                        style={{ marginLeft: isMobile ? '10px' : '', marginTop: isMobile ? '10px' : '-30px', width: isMobile ? '220px' : '250px', height: isMobile ? '250px' : '250px' }}
                    />
                </Box>


            </div>
        </div>

        <svg style={{ fillRule: 'evenodd', position: 'absolute', zIndex:isMobile? -1 : 1, background: 'transparent', top: '120px', left: isMobile ? '140px' : '1130px', }} id='object1' width={isMobile ? '300' : "450"} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 121.52 119.22'>
            <path opacity="0.8" fill="rgb(162, 70, 199)" strokeWidth="2px" d='M60.76,119.22C27.26,119.22,0,91.96,0,58.46c0-.44.36-.8.8-.8s.8.36.8.8c0,32.63,26.54,59.17,59.17,59.17s59.17-26.54,59.17-59.17S94.42,1.59,63.07,1.59,6.21,27.1,6.21,58.46s24.47,54.56,54.56,54.56,54.56-24.47,54.56-54.56S91.88,6.21,63.07,6.21,10.82,29.64,10.82,58.46s22.4,49.94,49.94,49.94,49.94-22.4,49.94-49.94S89.33,10.82,63.07,10.82,15.43,32.19,15.43,58.46s20.33,45.33,45.33,45.33,45.33-20.34,45.33-45.33S86.79,15.43,63.07,15.43,20.04,34.73,20.04,58.46c0,22.45,18.27,40.72,40.72,40.72s40.72-18.27,40.72-40.72c0-21.18-17.23-38.41-38.41-38.41S24.66,37.27,24.66,58.46c0,19.91,16.2,36.1,36.1,36.1s36.1-16.2,36.1-36.1c0-18.64-15.16-33.8-33.8-33.8s-33.8,15.16-33.8,33.8c0,17.36,14.13,31.49,31.49,31.49s31.49-14.13,31.49-31.49c0-16.09-13.09-29.19-29.19-29.19s-29.19,13.09-29.19,29.19c0,14.82,12.06,26.88,26.88,26.88s26.88-12.06,26.88-26.88c0-13.55-11.02-24.57-24.57-24.57s-24.57,11.02-24.57,24.57c0,12.28,9.99,22.27,22.27,22.27s22.27-9.99,22.27-22.27c0-11.01-8.95-19.96-19.96-19.96s-19.96,8.95-19.96,19.96c0,9.73,7.92,17.65,17.65,17.65s17.65-7.92,17.65-17.65c0-8.46-6.89-15.35-15.35-15.35s-15.35,6.89-15.35,15.35c0,7.19,5.85,13.04,13.04,13.04s13.04-5.85,13.04-13.04c0-5.92-4.82-10.74-10.74-10.74s-10.74,4.82-10.74,10.74c0,4.65,3.78,8.43,8.43,8.43s8.43-3.78,8.43-8.43c0-3.38-2.75-6.12-6.12-6.12s-6.12,2.75-6.12,6.12c0,2.1,1.71,3.82,3.82,3.82s3.82-1.71,3.82-3.82c0-.83-.68-1.51-1.51-1.51-.44,0-.8-.36-.8-.8s.36-.8.8-.8c1.71,0,3.1,1.39,3.1,3.1,0,2.98-2.43,5.41-5.41,5.41s-5.41-2.43-5.41-5.41c0-4.25,3.46-7.72,7.72-7.72s7.72,3.46,7.72,7.72c0,5.53-4.5,10.02-10.02,10.02s-10.02-4.5-10.02-10.02c0-6.8,5.53-12.33,12.33-12.33s12.33,5.53,12.33,12.33c0,8.07-6.56,14.63-14.63,14.63s-14.63-6.56-14.63-14.63c0-9.34,7.6-16.94,16.94-16.94s16.94,7.6,16.94,16.94c0,10.61-8.63,19.25-19.25,19.25s-19.25-8.63-19.25-19.25c0-11.88,9.67-21.55,21.55-21.55s21.55,9.67,21.55,21.55c0,13.16-10.7,23.86-23.86,23.86s-23.86-10.7-23.86-23.86c0-14.43,11.74-26.17,26.17-26.17s26.17,11.74,26.17,26.17c0,15.7-12.77,28.47-28.47,28.47s-28.47-12.77-28.47-28.47c0-16.97,13.81-30.78,30.78-30.78s30.78,13.81,30.78,30.78c0,18.24-14.84,33.09-33.09,33.09s-33.09-14.84-33.09-33.09c0-19.51,15.88-35.39,35.39-35.39s35.39,15.88,35.39,35.39c0,20.79-16.91,37.7-37.7,37.7s-37.7-16.91-37.7-37.7c0-22.06,17.95-40,40-40s40,17.95,40,40c0,23.33-18.98,42.31-42.31,42.31s-42.31-18.98-42.31-42.31c0-24.6,20.01-44.62,44.62-44.62s44.62,20.02,44.62,44.62c0,25.87-21.05,46.92-46.92,46.92S13.84,84.33,13.84,58.46c0-27.15,22.08-49.23,49.23-49.23s49.23,22.08,49.23,49.23-23.12,51.54-51.54,51.54S9.23,86.87,9.23,58.46,33.38,4.61,63.07,4.61s53.84,24.15,53.84,53.84-25.19,56.15-56.15,56.15S4.61,89.42,4.61,58.46,30.84,0,63.07,0s58.45,26.22,58.45,58.46-27.26,60.76-60.76,60.76Z'></path>
        </svg>


        <Box
            sx={{
                marginTop: isMobile?'40px':'100px',
                marginBottom: '10px',
                marginLeft:isMobile?'30px':'70px',
                fontWeight:600,
                fontSize:'22px',
                 fontFamily: `"Comic Relief", system-ui`,
            }}
        >
            Blogs
        </Box>



       
         <Box
            sx={{
                marginBottom:'10px',
                width: '100%',
            }}
        >
            <Section1 />
        </Box>

    </div>)

}