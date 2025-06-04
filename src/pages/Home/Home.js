import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Box, Modal, TextField, Button, IconButton, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

import Section1 from "../../components/Home/Section1";
import Section2 from "../../components/Home/Section2";
import Section3 from "../../components/Home/Section3";
import Section4 from "../../components/Home/Section4";
import Section5 from "../../components/Home/Section5";
import Section6 from "../../components/Home/Section6";



// Styled Paper
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    height: 50,
    width: 150,
    lineHeight: "60px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "15px",
    transition: "opacity 0.5s ease-in-out",
    '&:hover': {
        borderBottom: '2px solid yellow',
        backgroundColor: '#2c3e50', // subtle hover background
        cursor: 'pointer',
    },
}));

export default function Home() {

    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const iconStyle = {
        width: isMobile ? '30px' : '40px',
        height: isMobile ? '30px' : '40px',
    };

    const texts = ["C Training", "C++ Training", "Mern-Technology", "SEO", "Google-Services"];
    const icons = [
        <AddPhotoAlternateIcon sx={{ ...iconStyle, color: '#33fff9' }} />,
        <AdsClickIcon sx={{ ...iconStyle, color: '#ceff33' }} />,
        <AssistantDirectionIcon sx={{ ...iconStyle, color: '#B33771' }} />,
        <AutoAwesomeMosaicIcon sx={{ ...iconStyle, color: '#05c46b' }} />,
        <AutoAwesomeMotionIcon sx={{ ...iconStyle, color: '#ffa801' }} />,
    ];
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true); // control fading


    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
    const [submitted, setSubmitted] = useState(false);
    const [showToast, setShowToast] = useState(false);


    const handleOpen = () => {
        setOpen(true);
        setSubmitted(false);
    };

    const handleClose = () => {
        setOpen(false);
        setFormData({ name: '', phone: '', address: '' });
        setSubmitted(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add API call here
        setSubmitted(true);
        setShowToast(true);
        setFormData({ name: '', phone: '', address: '' });

        // Hide message after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setShowToast(false);
        }, 3000);
    };



    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade out

            setTimeout(() => {
                // After fade-out ends, switch content and fade in
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setFade(true);
            }, 500); // must match transition duration (0.5s)
        }, 3000);

        return () => clearInterval(interval);
    }, []);




    const imageData = [
        { src: "/1.png", left: 30 },
        { src: "/4.jpg", left: 65 },
        { src: "/5.jpg", left: 95 },
        { src: "/5.jpg", left: 125 },
        { src: "/2.png", left: 155 },
    ];

    const items = [
        { text: 'Expert Faculties' },
        { text: ['100% Placement', 'Assistance'] },
        { text: 'Live Projects' },
    ];



    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={{ position: 'relative', margin: '50px' }} sx={{ position: 'relative', m: { xs: 2, sm: 4, md: 6 } }}>
                    <img src="/images/star.png" alt="star" style={{
                        width: isMobile ? '100px' : '140px',
                        height: isMobile ? '75px' : '120px',
                        display: 'block',
                        maxWidth: '100%',
                        height: 'auto'
                    }} />
                    <Box
                        sx={{
                            p: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 0,
                            position: 'absolute',
                            opacity: 0.8,
                            marginTop: { xs: '40px', sm: '70px' },
                        }}
                    >

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                opacity: fade ? 1 : 0,
                                filter: fade ? 'blur(0px)' : 'blur(4px)',
                                transition: 'opacity 1s ease-in-out, filter 1s ease-in-out',
                            }}
                        >
                            <Item
                                elevation={24}
                                sx={{
                                    width: { xs: 40, sm: 55 },
                                    height: { xs: 40, sm: 55 },
                                    borderRadius: '50px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                {icons[index]}
                            </Item>

                            <Item
                                elevation={24}
                                sx={{
                                    fontSize: { xs: '0.8rem', sm: '1rem' },
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    px: 1,
                                    height: { xs: 40, sm: 50 },
                                    width: { sm: 160 },
                                }}
                            >
                                {texts[index]}
                            </Item>
                        </div>

                    </Box>
                </Grid>





                <Box
                    sx={{
                        overflowX: "auto",
                        mt: { xs: 8, md: 12 },
                        px: { xs: 2, md: 5 }
                    }}
                >
                    <Grid container spacing={2} wrap="nowrap" sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}>

                        <Grid
                            item
                            xs={12}
                            md={4}
                            sx={{
                                width: { xs: '100%', md: 450 },
                                textAlign: { xs: 'center', md: 'left' },
                                px: { xs: 2, md: 5 }
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: 'clamp(28px, 5vw, 50px)',
                                    margin: '0 auto',
                                    fontFamily: `'Montserrat', sans-serif`,
                                }}
                            >
                                Best <strong style={{ color: '#1da589' }}>Software Training </strong> Institute in Bharatpur
                            </h1>


                            <p style={{ fontFamily: `'Poppins', sans-serif`, marginLeft: '5px', }}>
                                <strong>Srishtisoft Innovation Institute</strong>, located in Bharatpur, is a premier IT training center dedicated to providing industry-focused education in cutting-edge software technologies. We offer expert-led courses in <strong>Full-Stack Development</strong>, <strong>Mobile App Development</strong>, <strong>UI/UX Design</strong>, <strong>Software Testing</strong>, <strong>Digital Marketing</strong>, and more.
                            </p>
                            <p style={{ fontFamily: `'Poppins', sans-serif`, marginLeft: '5px', }}>
                                Our programs are designed by seasoned professionals with real-world experience to ensure you gain practical, job-ready skills. With hands-on projects, personalized mentorship, and strong placement support, Srishtisoft helps students and professionals build successful, future-proof careers in the tech industry.
                            </p>

                            <Box
                                sx={{
                                    p: 1,
                                    width: { xs: '100%', sm: '90%', md: '450px' },
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    m: { xs: 2, sm: 4, md: '12%' },
                                }}
                            >
                                {/* Left side - See All Courses with image below */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: { xs: 'center', md: 'flex-start' },
                                        width: '100%',
                                    }}
                                >
                                    <Item
                                        elevation={24}
                                        sx={{
                                            fontFamily: `'Poppins', sans-serif`,
                                            fontSize: '17px',
                                            letterSpacing: '1px',
                                            background: '#1ac243',
                                            width: { xs: '60%', sm: '180px' },
                                            mb: 1,
                                            ml: { xs: 0, md: 0 },
                                        }}
                                    >
                                        {`See All Courses`}
                                    </Item>

                                    {/* Floating Image just below text */}
                                    <Box
                                        component="img"
                                        src="/zigzag.png"
                                        alt="Decorative zigzag"
                                        sx={{
                                            marginTop: '20px',
                                            mx: { xs: 'auto', sm: 'auto', md: 0 }, // centers horizontally on small screens
                                            marginLeft: { md: '180px', lg: '180px' }, // offset on larger screens
                                            width: { xs: '200px', sm: '200px', md: '220px', lg: '280px' },
                                            height: 'auto',
                                            borderRadius: '8px',
                                            objectFit: 'cover',
                                            pointerEvents: 'none',
                                            animation: 'floatX 2s ease-in-out infinite',
                                            display: 'block', // needed to respect mx: auto
                                        }}
                                    />

                                </Box>
                            </Box>

                        </Grid>




                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            sx={{
                                position: 'relative',
                                overflow: 'visible',
                                width: { xs: '100%', sm: 320 },
                                mx: 'auto',
                            }}
                        >
                            {/* Shadow box */}
                            <Box
                                className="shadow-box"
                                sx={{
                                    mt: { xs: 0, sm: 0, md: '105px' },
                                    width: { xs: '100%', sm: '120%', md: '140%' },
                                    height: { xs: '230px', sm: '250px', md: '50%' },
                                    background: '#222f3e',
                                    boxShadow: '0 0 10px hsla(0, 49.30%, 44.10%, 0.20)',
                                    opacity: 0.8,
                                    animation: 'bulbGlow 1.0s ease-out-in infinite',
                                    borderRadius: '25px',
                                    position: 'relative',
                                }}
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: '40% 80%',
                                        borderRadius: '25px',
                                        animation: 'bulbGlow 2.5s ease-in-out infinite',
                                    }}
                                >
                                    <source src="/videos/146100-788410052_tiny.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Box>

                            {/* Floating Student Image */}
                            <Box
                                component="img"
                                src="/student1.png"
                                alt="Student"
                                sx={{
                                    position: 'absolute',
                                    top: { xs: '10px', sm: '10px', md: '100px', lg: '120px' },
                                    left: { xs: '10px', sm: '20px', md: '0' },
                                    width: { xs: '90px', sm: '90px', md: '120px', lg: '140px' },
                                    height: { xs: '100px', sm: '100px', md: '120px', lg: '140px' },
                                    borderRadius: '8px',
                                    objectFit: 'cover',
                                    pointerEvents: 'none',
                                    animation: 'floatY 2s ease-in-out infinite',
                                    zIndex: 2,
                                }}
                            />


                            {/* Placement Text Box */}
                            <Item
                                elevation={24}
                                sx={{
                                    background: '#fff',
                                    width: { xs: '65%', sm: '250px' },
                                    height: { xs: '42%', sm: 'auto' },
                                    position: 'absolute',
                                    top: { xs: '65%', sm: '120px' },
                                    left: { xs: '32%', sm: '250px' },
                                    borderRadius: '8px',
                                    pointerEvents: 'none',
                                    animation: 'floatX 2s ease-in-out infinite',
                                    zIndex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center', // align content to top-left
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    p: 1,
                                    boxSizing: 'border-box',
                                }}
                            >
                                {/* This text now appears at the top */}
                                <Box sx={{ fontSize: '14px', fontWeight: 'bold', mb: 6 }}>
                                    <strong style={{ color: '#45c21a', marginRight: 4 }}>1500+</strong>
                                    Successful Placement
                                </Box>

                                {/* Images inside a flexible row */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        gap: 1,
                                        flexWrap: 'wrap',
                                        marginLeft: '-40px'
                                    }}
                                >
                                    {imageData.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image.src}
                                            alt="Descriptive alt text"
                                            style={{
                                                position: 'absolute',
                                                top: isMobile ? '40px' : '60px',
                                                left: `${image.left}px`,
                                                width: image.src === "/2.png" ? '45px' : '50px',
                                                height: '45px',
                                                borderRadius: '25px',
                                                objectFit: 'cover',
                                                objectPosition: '2% 2%',
                                                pointerEvents: 'none',
                                                zIndex: 2,
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Item>

                        </Grid>




                        <Grid item xs={12} md={4}>

                            <Box
                                component="img"
                                src="/star.png"
                                alt="Descriptive alt text"
                                sx={{
                                    position: 'absolute',
                                    top: { xs: '1400px', sm: '1150px', md: '300px', lg: '300px' },
                                    left: { xs: 'calc(10% - 30px)', sm: 'calc(10% - 35px)', md: '950px', lg: '950px' },
                                    width: { xs: '60px', sm: '70px', md: '80px', lg: '80px' },
                                    height: { xs: '60px', sm: '70px', md: '80px', lg: '80px' },
                                    objectFit: 'cover',
                                    pointerEvents: 'none',
                                    zIndex: 2,
                                    animation: 'spin360 10s linear infinite',
                                }}
                            />



                            {/* Animated Placement Text Box */}
                            <Item
                                elevation={24}
                                sx={{
                                    mt: { xs: '100px', sm: '60px', md: 1 },
                                    ml: { xs: '90px', sm: '90px', md: '200px' }, // Left margin only on medium+ screens
                                    // mr: { xs: 'auto', sm: 'auto' }, // Center horizontally on small screens
                                    // marginTop: '5px',
                                    // marginLeft: '200px',
                                    background: '#efccc6',
                                    width: { xs: '80%', sm: '250px' },
                                    height: '80px !important',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                                onClick={handleOpen}
                            >
                                <Box
                                    className="white-box"
                                    sx={{
                                        mt: '10px',
                                        mr: '10px',
                                        width: '80px',
                                        height: '60px',
                                        background: '#fff',
                                        borderRadius: '25px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src="/arrow.png"
                                        alt="Arrow"
                                        className="hover-arrow"
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        mt: '10px',
                                        fontFamily: `'Poppins', sans-serif`,
                                        fontSize: '18px',
                                        letterSpacing: '0.8px',
                                    }}
                                >
                                    Enquiry Now
                                </Box>
                            </Item>


                            {/************************************************************** */}

                            {showToast && (
                                <Box
                                    sx={{
                                        position: 'fixed',
                                        top: { xs: '250px', sm: '200px' },
                                        left: isMobile ? '190px' : '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: '#4caf50',
                                        color: 'white',
                                        padding: { xs: '16px 20px', sm: '30px 40px' },
                                        borderRadius: '8px',
                                        boxShadow: 3,
                                        zIndex: 1500,
                                        fontWeight: 'bold',
                                        fontSize: { xs: '14px', sm: '16px' },
                                        textAlign: 'center',
                                        maxWidth: '90vw',  // ✅ limit width to 90% of screen
                                        wordWrap: 'break-word',  // ✅ text should wrap if long
                                    }}
                                >
                                    Sent Successfully
                                </Box>


                            )}


                            {/* Modal */}
                            <Modal open={open} onClose={handleClose}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: isMobile ? '190px' : '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: { xs: '72%', sm: '72%', md: 500 }, // ✅ better responsiveness
                                        bgcolor: 'background.paper',
                                        borderRadius: '12px',
                                        boxShadow: 24,
                                        p: { xs: 2, sm: 4 }, // ✅ mobile-friendly padding
                                        outline: 'none',
                                    }}
                                >
                                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontSize: { xs: '18px', sm: '20px' }, fontWeight: 'bold' }}
                                        >
                                            Enquiry Form
                                        </Typography>
                                        <IconButton onClick={handleClose}>
                                            <CloseIcon />
                                        </IconButton>
                                    </Box>

                                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                        <TextField
                                            fullWidth
                                            name="name"
                                            label="Name"
                                            variant="outlined"
                                            margin="dense"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            size="small" // ✅ better on mobile
                                        />
                                        <TextField
                                            fullWidth
                                            name="phone"
                                            label="Phone"
                                            variant="outlined"
                                            margin="dense"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            size="small"
                                        />
                                        <TextField
                                            fullWidth
                                            name="address"
                                            label="Address"
                                            variant="outlined"
                                            margin="dense"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                            size="small"
                                        />

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            sx={{ mt: 2, py: 1 }}
                                        >
                                            Submit
                                        </Button>

                                        {submitted && (
                                            <Typography
                                                variant="body2"
                                                sx={{ color: 'green', mt: 2, textAlign: 'center' }}
                                            >
                                                Thanks
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            </Modal>

                            { /********************************************************* */}
                            <Box
                                sx={{
                                    position: 'relative',
                                    backgroundImage: `url('/spring.webp')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '70% 70%',
                                    backgroundPosition: 'left bottom',
                                    padding: '100px 0',
                                    paddingLeft: { xs: '1px', sm: '1px', md: '100px' },
                                    overflow: 'visible',
                                    animation: 'moveDiagonal 10s linear infinite alternate',
                                    zIndex: -1,
                                }}
                            >
                                {items.map((item, index) => (
                                    <Item
                                        key={index}
                                        elevation={24}
                                        className="circle-motion"
                                        sx={{
                                            mt: { xs: '10px', sm: '10px', md: '50px' },
                                            ml: { xs: '45px', sm: '90px', md: '100px' }, // Left margin only on medium+ screens
                                            mr: { xs: 'auto', sm: 'auto' }, // Center horizontally on small screens
                                            // mt: index === 0 ? '90px' : '50px',
                                            // ml: '100px',
                                            background: 'transparent',
                                            width: '200px',
                                            height: Array.isArray(item.text) ? '70px !important' : '50px !important',
                                            borderRadius: '25px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontWeight: 'bold',
                                            pointerEvents: 'none',
                                            textAlign: Array.isArray(item.text) ? 'left' : 'center',
                                            p: Array.isArray(item.text) ? '5px 10px' : 0,
                                            zIndex: 2, // 👈 ensures it's above the background image
                                        }}
                                    >

                                        <img
                                            src="/right.png"
                                            alt="right"
                                            style={{ width: '20px', height: '30px', marginRight: '10px' }}
                                        />
                                        <div
                                            style={{
                                                fontFamily: `'Poppins', sans-serif`,
                                                fontSize: '15px',
                                                lineHeight: Array.isArray(item.text) ? '18px' : 'normal',
                                            }}
                                        >
                                            {Array.isArray(item.text)
                                                ? item.text.map((line, i) => <div key={i}>{line}</div>)
                                                : item.text}
                                        </div>
                                    </Item>
                                ))}
                            </Box>

                        </Grid>
                    </Grid>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <Section1 />
                </Box>

                <Box
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <Section2 />
                </Box>

                <Box
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <Section3 />
                </Box>


                <Box
                    sx={{
                        marginTop: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    <Section4 />
                </Box>


                <Box
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        width: '100%',
                    }}
                >
                    <Section5 />
                </Box>


                <Box
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        width: '100%',
                    }}
                >
                    <Section6 />
                </Box>


                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <img
                        src="/tyre.png"
                        alt="Rolling Tyre"
                        style={{
                            width: '150px',
                            height: '150px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                            pointerEvents: 'none',
                            animation: 'rollFullLeftRight 10s linear infinite',
                            position: 'relative',
                        }}
                    />
                </Box>





            </Box>
        </div>
    );
}
