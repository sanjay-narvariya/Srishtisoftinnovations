import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Test.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Box, Modal, TextField, Button, IconButton, Typography, useMediaQuery } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTheme } from '@mui/material/styles';

import Section1 from '../../components/Test/Section1.js';
import Section2 from '../../components/Test/Section2.js';
import Section3 from '../../components/Test/Section3.js';


export default function Test() {

    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (<div>
        <div className="RentalEquipment4" >
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between' }}>
                <div className="equipment-title4">
                    <h3 style={{
                        background: '#7b61a0',
                        borderRadius: '20px',
                        display: 'inline-block',
                        padding: '6px 14px',
                        fontSize: '16px',
                        color: 'white',
                        lineHeight: 1
                    }}>
                        Testimonials
                    </h3>

                    <h1>We help <span style={{ color: '#f7b731' }}> students </span> to build a career </h1>
                    <h5 style={{ width: isMobile ? '300px' : '510px', marginTop: '30px' }}>Experience practical expertise, workplace familiarity and greater knowledge of industry.</h5>
                </div>

                <Box
                    sx={{
                        position: 'relative',
                        marginTop: isMobile ? '10px' : '-50px',
                        marginLeft: isMobile ? '80px' : '100px',
                        background: '#f8c291',
                        width: isMobile ? 240 : 265,
                        height: isMobile ? 310 : 320,
                        borderRadius: '125px 125px 15px 15px',
                        transition: 'box-shadow 0.3s ease-in-out',
                        '&:hover': {
                            boxShadow: '5px 6px 0#0e0c0d',
                        },
                    }}
                >

                    <FavoriteIcon style={{ position: 'absolute', zIndex: 1, marginTop: isMobile ? '10px' : '10px', marginLeft: isMobile ? '2px' : '-10px', width: isMobile?'110px':'70px', height: isMobile ? '65px' : '70px', color: '#e84393', animation: 'bulbGlow 2.5s ease-in-out infinite', }} />

                    <img
                        src="https://www.irohub.com/home/images/ir-asset-1.webp"
                        alt="student1"
                        style={{ marginLeft: isMobile ? '10px' : '', marginTop: isMobile ? '10px' : '-30px', width: isMobile ? '220px' : '250px', height: isMobile ? '300px' : '350px' }}
                    />
                </Box>


            </div>
        </div>
        <Box
            sx={{
                marginTop: isMobile ? '-100px' : '-400px',
                display: 'flex',
                justifyContent: isMobile ? 'flex-end' : 'flex-end',
                width: '100%',
                position:'relative',
                pointerEvents: 'none', // lets mouse events pass through if needed
                zIndex: isMobile ? -1 : 2,
            }}
        >
            <img
                src="/ring1.png"
                alt="ring"
                style={{
                    marginTop: isMobile ? '1px' : '60px',
                    width: '230px',
                    height: isMobile ? '310px' : '360px',
                }}
            />
        </Box>



        <Box
            sx={{
                marginTop: '50px',
                display: 'flex',    
                width: '100%',
            }}
        >
            <Section1 />
        </Box>

         <Box
            sx={{
                marginTop: '50px',
                marginBottom:'10px',
                width: '100%',
            }}
        >
            <Section2 />
        </Box>

          <Box
            sx={{
                marginTop: '50px',
                marginBottom:'10px',
                width: '100%',
            }}
        >
            <Section3 />
        </Box>
    </div>)

}