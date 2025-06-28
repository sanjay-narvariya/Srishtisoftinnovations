import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Grid, Box, Typography, useMediaQuery, Avatar } from '@mui/material';
import { AccessAlarm, School, Star, Assignment, Work, ThumbUp } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';




const teamMembers = [
    {
        name: 'Sanjay Narvariya',
        position: 'Chief Executive Officer',
        desc: 'Leading with vision, driving innovation, and empowering growth.',
        image: '/sanjay.png',
    },
    {
        name: 'Sanjay Narvariya',
        position: 'Tech Lead',
        desc: 'Tech geek who codes, leads, mentors, and scales',
        image: '/sanjay.png',
    },
    {
        name: 'Sanjay Narvariya',
        position: 'HR Executive',
        desc: 'Passionate HR who builds teams by unlocking talent.',
        image: '/sanjay.png',
    },
    {
        name: 'Sanjay Narvariya',
        position: 'Assistant Manager : Marketing & Sales',
        desc: 'Driving growth through strategic marketing and impactful sales solutions.',
        image: '/sanjay.png',
    },
];


/********************************* */


export default function Section4() {

    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <Box sx={{ py: isMobile?2:5, backgroundColor: 'transparent', width: '100%' }}>
            <Container>
                <Typography
                    variant="h4"
                    className="text-center mb-5 fw-bold"
                    sx={{ fontSize: isMobile ? 28 : 36 }}
                >
                    Our Team
                </Typography>
                <Row className="justify-content-center">
                        <div>
                            <Avatar
                                    alt="sanjay"
                                    src="/sanjay.png"
                                    sx={{
                                        width: '100%',
                                        maxWidth: 250,
                                        height: 'auto',
                                        margin: '0 auto',
                                        borderRadius: 5,
                                        objectFit: 'contain',
                                    }}
                                    variant="rounded"
                                />
                                </div>
                    {teamMembers.map((member, index) => (
                        <Col
                            key={index}
                            lg={3}
                            md={4}
                            sm={6}
                            xs={12}
                            className="d-flex justify-content-center mb-4"
                        >
                            <Box
                                sx={{
                                    borderRadius: 4,
                                    background: 'transparent',
                                    py: isMobile?0:3,
                                    px: 2,
                                    width: '100%',
                                    maxWidth: 300,
                                    textAlign: 'center',
                                }}
                            >
                            
                                <Typography variant="h6" className="fw-bold mt-3">
                                    {member.name}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: '#555', mb: 1, fontWeight: 500 }}
                                >
                                    {member.position}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#777',
                                        fontSize: 14,
                                        maxWidth: '90%',
                                        mx: 'auto',
                                    }}
                                >
                                    {member.desc}
                                </Typography>
                            </Box>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Box>
    );

}