import React from 'react';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import RoomIcon from '@mui/icons-material/Room';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import { styled, keyframes } from '@mui/system';



// Keyframe animation for subtle random motion

const randomMove = keyframes`
  0%   { transform: translateY(0); }
  25%  { transform: translateY(-5px); }
  50%  { transform: translateY(5px); }
  75%  { transform: translateY(-3px); }
  100% { transform: translateY(0); }
`;

const AnimatedDigit = styled('span')(({ fontSize, delay, duration }) => ({
    display: 'inline-block',
    fontSize,
    animation: `${randomMove} ${duration} ease-in-out ${delay} infinite`,
}));


const AnimatedPhone = styled('a')({
    color: '#3498db',
    textDecoration: 'none',
    fontSize: '22px',
    display: 'inline-block',
    fontFamily: 'monospace',
    cursor: 'pointer',
});


export default function Section1() {

    const phone = "+91 8504069643";
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ flexGrow: 1, p: isMobile ? 3 : 8, }}>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between" >
                {/* LEFT: CONTACT INFO */}
                <Grid item xs={12} md={5} sx={{ ml: isMobile ? '-20px' : '-40px' }}>
                    <Box sx={{ px: isMobile ? 1 : 0, width: isMobile ? 'auto' : '80%' }}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: '30px' }}>
                            SrishtiSoft Innovations
                        </Typography>

                        <Box display="flex" alignItems="flex-start" mb={2}>
                            <RoomIcon sx={{ mr: 1, mt: 0.5 }} />
                            <Typography variant="body1" sx={{ fontSize: '22px' }}>
                                1st floor, Near Dr Surendra Singh Narvariya, <br />
                                Suraj Mal Nagar, Bharatpur,<br />
                                Bharatpur<br />
                                Rajasthan 321001
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" mb={2}>
                            <PhoneAndroidIcon sx={{ mr: 1 }} />
                            <AnimatedPhone href="tel:+918504069643">
                                {phone.split('').map((char, i) => {
                                    const fontSize = `${18 + Math.floor(Math.random() * 8)}px`;
                                    const delay = `${(Math.random() * 2).toFixed(2)}s`;
                                    const duration = `${1.5 + Math.random()}s`;

                                    return (
                                        <AnimatedDigit
                                            key={i}
                                            fontSize={fontSize}
                                            delay={delay}
                                            duration={duration}
                                        >
                                            {char}
                                        </AnimatedDigit>
                                    );
                                })}
                            </AnimatedPhone>


                        </Box>


                        <Box display="flex" alignItems="center" mb={2}>
                            <EmailIcon sx={{ mr: 1 }} />
                            <Typography variant="body1" component="a" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CrpPbDzGcdqvRxrZRbvmSgtCfknsGnPWqvgmBXqTwrfQFXknnbQGfcHqTNdnlDwvdDXGblfZhXmljrtThbDq" sx={{ color: '#3498db', textDecoration: 'none', fontSize: '22px' }}>
                                sanjaynarvariya12@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* RIGHT: EMBEDDED MAP */}
                <Grid item xs={12} md={7} sx={{ background: 'red', width: isMobile ? '320px' : '680px', ml: isMobile ? '-5px' : '-40px', mr: isMobile ? '10px' : '0px' }}>
                    <Box sx={{ borderRadius: 1, boxShadow: 3,  }}>
                        <iframe
                            title="Near By Dr. Surendra Singh Narvariya Homeopathic Clinic"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14126.32872881328!2d77.50072717996155!3d27.22932541781257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973a3c007361d59%3A0xf157b12fcef2a17d!2sDr%20Surendra%20Singh%20Narvariya%20Homeopathic%20Clinic!5e0!3m2!1sen!2sin!4v1718364222000!5m2!1sen!2sin"
                            width="100%"
                            height={isMobile ? 300 : 400}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
}
