import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Grid, Box, Typography, useMediaQuery, Avatar } from '@mui/material';
import { AccessAlarm, School, Star, Assignment, Work, ThumbUp } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';






const cardData = [
    {
        icon: <AccessAlarm fontSize="large" />,
        title: "Mock Interview’s",
        desc: "We build up confidence, conduct mock interview sessions with the support of our highly dedicated professional team.",
    },
    {
        icon: <School fontSize="large" />,
        title: "Placement Classes",
        desc: "We provide placement classes that boost your confidence and hone your skills, guided by seasoned professionals.",
    },
    {
        icon: <Star fontSize="large" />,
        title: "Technical Evaluation",
        desc: "We conduct technical evaluations to determine the knowledge of our candidates and take steps for improvement.",
    },
    {
        icon: <Assignment fontSize="large" />,
        title: "Project Assistance",
        desc: "We help you do projects with industrial standards enabling you to deliver exceptional results that exceed expectations.",
    },
    {
        icon: <Work fontSize="large" />,
        title: "Live Projects",
        desc: "We provide the opportunity to work on live projects, practicing skills essential for growth and success.",
    },
    {
        icon: <ThumbUp fontSize="large" />,
        title: "Placement Assistance",
        desc: "Embark on your career journey with our tailored placement assistance program to match your interests and skills.",
    },
];





export default function Section3() {

    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (<div style={{ display: 'flex', flexDirection: 'column' ,}}>
        {/* Right Column */}
        <Grid item xs={12} md={8} sx={{ width: isMobile ? '92%' : '100%', maxWidth: '700px', marginLeft: isMobile ? '20px' : '110px' }}>
            <Typography variant="h5" className="mb-2 text-center text-md-start" style={{ fontWeight: 400, marginLeft: isMobile ? '10px' : '', width: isMobile ? '90%' : 'auto', fontSize: isMobile ? 28 : 38, letterSpacing: isMobile ? '0.1rem' : '0.1rem', lineHeight: isMobile ? 1 : 0.5 }}>
                CREATING A FUTURE YOUR LOVE
            </Typography>
            <Typography className="mb-4 text-center text-md-start mt-3 opacity-100  font-poppins" style={{ marginLeft: isMobile ? '10px' : '', width: isMobile ? '90%' : 'auto', fontSize: isMobile ? 20 : 25, lineHeight: isMobile ? 1.2 : 1 }}>
                We boost your confidence by organizing practice interviews that cover various aspects, including problem-solving, technical knowledge, and personal skills.
            </Typography>

        </Grid>



        <Box
            sx={{
                backgroundColor: '#e6e0f8',
                px: isMobile ? 2 : 5,
                py: isMobile ? 3.5 : 6,
                width: '100%', // Make fully responsive
                maxWidth: isMobile ? '92%' : '1205px',
                ml: isMobile ? '0px' : '150px', // Align to right
                position: 'relative',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    background: 'transparent'
                },
            }}
        >
            <Container>
                <Row >
                    {/* 'me' = margin-end (right in LTR) */}
                    {cardData.map((card, index) => (
                        <Col key={index} md={4} sm={6} xs={12} className="d-flex justify-content-center mb-4">
                            <Box
                                sx={{
                                    px: { xs: 1, sm: 2 },
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        background: '#e6e0f8',
                                        borderRadius: 2,
                                        p: { xs: 2, sm: 3 },
                                        height: '100%',
                                        width: { xs: '100%', sm: 250, md: 300 },
                                        textAlign: 'start',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                                            background: '#006266',
                                        },
                                    }}
                                >
                                    <Box sx={{ mb: 2, color: '#6c5ce7' }}>{card.icon}</Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 1,
                                            color: '#141414',
                                            fontSize: { xs: 16, sm: 18 },
                                        }}
                                    >
                                        {card.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#141414',
                                            fontSize: { xs: 13, sm: 14 },
                                        }}
                                    >
                                        {card.desc}
                                    </Typography>
                                </Box>
                            </Box>
                        </Col>
                    ))}

                </Row>
            </Container>
        </Box>


        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', mt: isMobile?5:10, ml: isMobile?3:5, textAlign: 'start' }}>
            {/* Left Column */}
            <Grid item xs={12} md={5} sx={{ width: isMobile ? '95%' : '560px', marginLeft: isMobile ? '5px' : '80px', zIndex: 1, }}>
                <Typography
                    variant="h5"
                    className="mb-2 text-center text-md-start"
                    style={{
                        marginLeft: isMobile ? '' : '',
                        opacity: '0.9',
                        width: isMobile ? 'auto' : '600px',
                        fontSize: isMobile ? 28 : 38,
                        transform: 'scaleY(0.8)', // <-- this compresses height
                    }}
                >
                    Mission
                </Typography>

                <Typography variant="h5" className="mb-2 text-center text-md-start" style={{ marginLeft: isMobile ? '' : '', width: isMobile ? '95%' : 'auto', fontSize: isMobile ? 15 : 15, fontWeight: 500, opacity: '0.8', marginTop: '10px' }}>
                    We aim for excellence, and our affection for what we do compels us to arrive at a better quality. We assign a cost-effective dedicated team of trainers to all our candidates that not only assures quality but gives excellent support and satisfaction and treat each other with consideration and respect.
                </Typography>

            </Grid>


            {/* Right Column */}
            <Grid item xs={12} md={7} sx={{ width: isMobile ? '95%' : '570px', marginLeft: isMobile ? '4px' : '50px', zIndex: 3, opacity: 5, filter: 'contrast(150%) brightness(150%)', }}>
                <Typography
                    variant="h5"
                    className="mb-2 text-center text-md-start"
                    style={{
                        marginLeft: isMobile ? '' : '',
                        opacity: '0.9',
                        width: isMobile ? '95%' : '600px',
                        fontSize: isMobile ? 28 : 38,
                        transform: 'scaleY(0.8)', // <-- this compresses height
                    }}
                >
                    Vision
                </Typography>

                <Typography variant="h5" className="mb-2 text-center text-md-start" style={{ marginLeft: isMobile ? '' : '', width: isMobile ? '95%' : 'auto', fontSize: isMobile ? 15 : 15, fontWeight: 500, opacity: '0.8', marginTop: '10px' }}>
                    We apply teaching techniques and experience that we have gathered over the years while teaching several candidates and working on different projects. We combine traditional values with modern technology to ensure quality education at the optimum level. We are always looking for talented candidates who will grow with us.
                </Typography>
            </Grid>
        </Box>


    </div>);


};