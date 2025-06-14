import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ThankYou() {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(5);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const countdown = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        const redirect = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => {
            clearInterval(countdown);
            clearTimeout(redirect);
        };
    }, [navigate]);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#fff',
                px: 2,
            }}
        >
            {/* Green Tick Icon */}
            <Box
                sx={{
                    width: isMobile ? 80 : 100,
                    height: isMobile ? 80 : 100,
                    borderRadius: '50%',
                    backgroundColor: '#2ecc71',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    mb: isMobile ? 2 : 3,
                }}
            >
                <CheckCircleIcon sx={{ fontSize: isMobile ? 40 : 60, color: '#fff' }} />
            </Box>

            {/* Thank You Heading */}
            <Typography
                variant={isMobile ? 'h5' : 'h4'}
                fontWeight="bold"
                sx={{ mb: isMobile ? 1 : 2 }}
            >
                Thank You
            </Typography>

            {/* Description */}
            <Typography
                variant="body1"
                sx={{
                    maxWidth: 600,
                    fontSize: isMobile ? '14px' : '16px',
                    mb: 2,
                    px: isMobile ? 1 : 0,
                }}
            >
                Thank you for your interest. It has been submitted successfully. We will be in touch shortly.
            </Typography>

            {/* Countdown Message */}
            <Typography variant="body2" color="text.secondary" fontSize={isMobile ? '13px' : '14px'}>
                You will be redirected to home page in {seconds} second{seconds !== 1 && 's'}.
            </Typography>
        </Box>
    );
}
