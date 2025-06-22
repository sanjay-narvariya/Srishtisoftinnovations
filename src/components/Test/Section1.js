import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, Avatar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

const Section1 = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                mt:'20px',
                width:'100%',
                position: 'relative',
                textAlign: 'center',
                background: 'transparent',
                overflow: 'hidden',
                px: 2,
                py: isMobile ? 6 : 10,
            }}
        >
            {/* Background blob shape */}
            <img
              src="https://d2ecljqfw49px2.cloudfront.net/assets/brochure/blobs/blob-gradient.svg"
                style={{
                    position: 'absolute',
                    top: isMobile?'-300px':0,
                    left:  isMobile?'-350px':0,
                    width:isMobile ? '800px': '100%',
                    height: isMobile ? '950px':'100%',
                    zIndex: 0,
                }}
            
               / >
    
            {/* Testimonial Card */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    background: '#fff',
                    maxWidth: 600,
                    mx: 'auto',
                    p: 3,
                    borderRadius: 3,
                    boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
                    textAlign: 'left',
                }}
            >
                {/* Stars */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <StarIcon key={idx} sx={{ color: '#ffce00', fontSize: 20 }} />
                    ))}
                </Box>

                {/* Avatar and name */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Rahul Singh"
                        sx={{ width: 40, height: 40, mr: 1 }}
                    />
                    <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>Rahul Singh.</Typography>
                        <Typography sx={{ fontSize: '13px', color: '#666' }}>
                            Python Leader @ Emerge
                        </Typography>
                    </Box>
                </Box>

                {/* Testimonial text */}
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, fontSize: isMobile ? '16px' : '20px',color:'#00a8ff' }}
                >
                    Exceptional quality and professionalism. — I'm thoroughly impressed!
                </Typography>
            </Box>

            {/* Bottom Text */}
            <Typography
                variant="h6"
                sx={{
                    color: '#fab1a0',
                    fontWeight: 600,
                    mt: 6,
                    zIndex: 1,
                    position: 'relative',
                    fontSize: isMobile ? '16px' : '24px',
                }}
            >
                Thriving with thousands of<br />
                placement stories.
            </Typography>
        </Box>
    );
};

export default Section1;












