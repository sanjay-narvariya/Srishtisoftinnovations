import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Modal, TextField, Button, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';



export default function Section1() {
                             // Inside your component
                             const theme = useTheme();
                             const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
              
    const features = [
        {
            icon: '❤️',
            title: 'Personalized classes',
            description:
                'Each learner has individual choices and learning goals. We offer one-to-one individual training to our students so that our faculties can provide the knowledge and expertise to the fullest.',
        },
        {
            icon: '🧭',
            title: 'Job oriented training',
            description:
                'We provide hands-on coaching focused on real-world career readiness, tailored to empower individuals ensuring they are fully prepared to step into IT roles after completing the course.',
        },
        {
            icon: '📘',
            title: 'Updated curriculum',
            description:
                'Our syllabus is continually updated with cutting-edge technologies, prepared by industry experts to ensure you receive the latest and most relevant knowledge and skills.',
        },
    ];



    return (
        <Box className="container py-5" >
            <Grid container spacing={2} justifyContent="center" >
                {features.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                        <Box
                            sx={{
                                textAlign: 'center',
                                px: 2,
                                width:'350px'
                            }}
                        >
                            <Box
                                sx={{
                                    width: '180px',
                                    height: '190px',
                                    backgroundColor: '#eeebff',
                                borderRadius: '45% 55% 60% 40% / 60% 45% 55% 40%', // irregular oval
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px',
                                     fontSize: '70px', // increased icon size
                                }}
                            >
                                {item.icon}
                            </Box>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {item.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );

};