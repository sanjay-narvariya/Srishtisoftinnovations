import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Inform.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Box, Modal, TextField, Button, IconButton, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Section1 from "../../components/About/Section1";
import Section2 from "../../components/About/Section2";
import Section3 from "../../components/About/Section3";
import Section4 from "../../components/About/Section4";

export default function Inform () {

    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            <div className="RentalEquipment2" >
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between' }}>
                    <div className="equipment-title2">
                        <h3 style={{ background: '#7b61a0', borderRadius: '15px', width: '90px', padding: '5px', fontSize: '15px' }}>Aboutus</h3>
                        <h1>Created for the <span style={{ color: '#f7b731' }}> love </span> of kinks and curls </h1>
                        <h5 style={{ width: isMobile ? '300px' : '510px', marginTop: '30px' }}>Experience practical expertise, workplace familiarity and greater knowledge of industry.</h5>
                    </div>

                    <Box
                        sx={{
                            marginTop: isMobile ? '10px' : '-30px',
                            marginLeft: isMobile ? '68px' : '50px',
                            background: '#f8c291',
                            width: isMobile ? 240 : 265,
                            height: isMobile ? 310 : 420,
                            borderRadius: 2,
                            transition: 'box-shadow 0.3s ease-in-out',
                            '&:hover': {
                                boxShadow: '5px 6px 0 #B53471',
                            },
                        }}
                    >
                        <img
                            src="https://www.irohub.com/home/images/ir-asset-3.webp"
                            alt="student1"
                            style={{ marginLeft: isMobile ? '10px' : '', marginTop: isMobile ? '10px' : '70px', width: isMobile ? '220px' : '250px', height: isMobile ? '300px' : '350px' }}
                        />
                    </Box>

                    <Box sx={{
                        marginTop: isMobile ? '30px' : '-10px',
                        marginLeft: isMobile ? '68px' : '50px',
                        background: '#70a1ff',
                        width: isMobile ? 240 : 250,
                        height: isMobile ? 310 : 380,
                        borderRadius: 15,
                        transition: 'box-shadow 0.3s ease-in-out',
                        '&:hover': {
                            boxShadow: '5px 6px 0 #B53471',
                        },
                    }}>
                        <img src="https://www.irohub.com/home/images/ir-asset-4.webp" alt="student1" style={{ marginTop: isMobile ? '1px' : '60px', marginLeft: isMobile ? '2px' : '', width: '230px', height: isMobile ? '310px' : '320px' }} />
                    </Box>

                </div>
            </div>


            <Box
                sx={{
                    width: '100vw', // viewport width
                    height: '200px',
                    overflow: 'hidden', // to prevent scrollbars
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '-50px',
                    padding: 0,
                }}
            >
                <img
                    src="/wavylines.png"
                    alt="Wavy Line"
                    style={{
                        width: '100vw', // force full width
                        display: 'block', // remove inline gap
                        margin: 0,
                        padding: 0,
                    }}
                />
            </Box>


            <Box
                sx={{
                    marginTop: '50px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <Section1 />
            </Box>

            <Box
                sx={{
                    marginTop: '50px',
                    display: 'flex',
                    width: '100%',
                }}
            >
                <Section2 />
            </Box>

            <Box
                sx={{
                    marginTop: '50px',                   
                }}
            >
                <Section3 />
            </Box>

            <Box
                sx={{
                    marginTop: '50px',
                    display: 'flex',
                }}
            >
                <Section4 />
            </Box>



        </div>)
}