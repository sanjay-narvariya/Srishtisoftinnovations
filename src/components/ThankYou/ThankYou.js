import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme, keyframes, styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';






// Keyframe for scaling the icon
const scaleAnimation = keyframes`
  0%, 100% {
    transform: scale(0.1);
  }
  50% {
    transform: scale(1.8);
  }
`;

// Keyframe for glowing ring
const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.1);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(46, 204, 113, 1);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.1);
  }
`;

// Styled Box with glow animation
const AnimatedBox = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  backgroundColor: '#2ecc71',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: `${glowAnimation} 2s infinite`,
}));

// Styled Icon with scale animation
const AnimatedIcon = styled(CheckCircleIcon)(({ theme }) => ({
  color: '#fff',
  animation: `${scaleAnimation} 2s infinite`,
  transition: 'transform 0.3s ease-in-out',
}));





export default function ThankYou() {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(5);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));




    useEffect(() => {
        const container = document.getElementById('scrollContainer');
        if (container) {
            container.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }

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
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: 'transparent',
                px: 2,
            }}
        >
            <AnimatedBox
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
                <AnimatedIcon sx={{ fontSize: isMobile ? 40 : 60, color: '#fff' }} />
            </AnimatedBox>

            <Typography variant={isMobile ? 'h5' : 'h4'} fontWeight="bold" sx={{ mb: isMobile ? 1 : 2 }}>
                Thank You
            </Typography>

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

            <Typography variant="body2" color="text.primary" fontSize={isMobile ? '13px' : '14px'}>
                You will be redirected to home page in {seconds} second{seconds !== 1 && 's'}.
            </Typography>
        </Box>
    );
}
