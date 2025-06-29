import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, TextareaAutosize, useMediaQuery, Divider, List, ListItem, ListItemText, ListItemIcon, Paper, } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AccessTime, Label } from '@mui/icons-material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



const trainings = [
    {
        date: '25 Jan 2025',
        name: 'INTERNSHIP',
        title: "Powered by Numeric Infosystem Pvt. Ltd.",
        desc: 'Empowering Students with Real-World Software Expertise: At SrishtiSoft Institute, we believe in bridging the gap between academic learning and real industry practices. That’s why we’ve partnered with Numeric — a leading global software development company known for its modern, high-performance solutions and deep expertise across multiple domains. Through this strategic tie-up, our students get the opportunity to work closely with Numeric Infosystem Company’s experienced professionals and learn from live projects in areas like end-to-end software product development, mobile application design and deployment, enterprise portals and web applications, e-commerce platforms and scalable solutions, technical support and enterprise mobility, as well as data analytics and AI-powered insights — ensuring they gain practical, industry-ready skills that truly prepare them for the dynamic world of software innovation.',
        image: '/partner-logo.jpg',
    },
    {
        date: '29 Feb 2025',
        name: 'INTERNSHIP',
        title: "Powered by Unique High Rank Solution IT Services Pvt. Ltd.",
        desc: 'At SrishtiSoft Institute, we are committed to preparing our students for the real-world digital landscape by connecting them with the industry’s best. That’s why we’re proud to collaborate with UHRS (Unique High Rank Solution) IT Services Pvt. Ltd., a trusted name in India’s digital marketing and IT services industry since 2014. Through this partnership, learners get direct exposure to UHRS’s expertise across SEO, SMO, ORM, Local SEO, Mobile SEO, Video Optimization, Web Designing, Web Development, PPC Campaigning, Digital Marketing, and Content Marketing. Students not only gain hands-on experience but also understand the importance of creating a user-friendly digital presence and driving the right traffic to maximize conversion rates. By blending UHRS’s practical approach to unique and result-driven strategies with SrishtiSoft Institute’s in-depth training modules, we help shape future digital marketers and IT professionals who can deliver real impact.',
        image: 'https://www.highranksolution.in/images/3.png',
    },

];



export default function Associate() {

    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate(); // 👈 navigation hook

    return (<div >
        <Paper
            elevation={3}
            style={{
                fontFamily: `'Comic Relief', system-ui`,
                fontWeight: 900,                          // max bold
                fontSize: isMobile ? '20px' : '28px',
                marginLeft: isMobile ? 40 : 350,
                marginTop: isMobile ? '150px' : '200px',
                borderRadius:'10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobile?'80%':'50%',
                height: '50px',
                backgroundColor: '#bdc3c7',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                letterSpacing: '-0.5px',
                textTransform: 'uppercase',
                textShadow: '1px 1px 1px rgba(0,0,0,0.4)'  // subtle shadow to boost boldness
            }}

        >
            OUR ASSOCIATES
        </Paper>

        <Box sx={{ ml: isMobile ? '0px' : '100px', mt: isMobile ? '0px' : '0px', display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
            <Box sx={{ padding: isMobile ? 2 : 2, mt: isMobile ? '50px' : '50px', width: isMobile ? '100%' : 'auto', }}>
                <Grid container spacing={5}>
                    {trainings.map((item, index) => (
                        <Grid item xs={12} sm={3} md={3} key={index} >
                            <Box
                                sx={{
                                    width: isMobile ? '95%' : '520px',
                                    textAlign: 'start',
                                    borderRadius: '12px',
                                    paddingLeft: isMobile ? 2 : 0,
                                    marginRight: isMobile ? 2 : 5,
                                    backgroundColor: 'transparent',
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: isMobile ? '310px' : '500px',
                                        height: isMobile ? '310px' : '350px',
                                        border: '2px solid #ccc', // light grey border
                                        padding: '10px', // space between image and border
                                        boxSizing: 'border-box',
                                        borderRadius: '15px',
                                        backgroundColor:'#22a6b3',
                                    }}
                                />

                                <Typography variant="h6" sx={{
                                    fontWeight: 600, mb: 1, textDecoration: 'underline',
                                    fontSize: '18px',
                                    // wordBreak: 'break-all',
                                    '&:hover': {
                                        textDecoration: 'none', // remove underline on hover
                                    },
                                }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 2, mr:2, fontSize: '13px', fontWeight: 500, opacity: 0.7 }}>
                                    {item.desc}
                                </Typography>

                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    </div>)
};