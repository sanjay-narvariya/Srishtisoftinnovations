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
import { Box, Modal, TextField, Button, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';



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
    const texts = ["C Training", "C++ Training", "Mern-Technology", "SEO", "Google-Services"];
    const icons = [<AddPhotoAlternateIcon style={{ width: '40px', height: '40px', color: '#33fff9' }} />, <AdsClickIcon style={{ width: '40px', height: '40px', color: '#ceff33' }} />, <AssistantDirectionIcon style={{ width: '40px', height: '40px', color: '#B33771' }} />, <AutoAwesomeMosaicIcon style={{ width: '40px', height: '40px', color: '#05c46b' }} />, <AutoAwesomeMotionIcon style={{ width: '40px', height: '40px', color: '#ffa801' }} />]
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
                <Grid container spacing={2} style={{ position: 'relative', margin: '50px' }}>
                    <img src="/images/star.png" alt="star" style={{ width: '200px', height: '150px', display: 'block' }} />
                    <Box
                        sx={{
                            p: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 0,
                            position: 'absolute',
                            opacity: 0.8,
                            marginTop: '70px'
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
                                style={{ width: '60px', height: '60px', borderRadius: '50px' }}
                            >
                                {icons[index]}
                            </Item>

                            <Item elevation={24}>
                                {texts[index]}
                            </Item>
                        </div>


                    </Box>
                </Grid>

                <Box sx={{ overflowX: "auto", marginTop: '90px' }}>
                    <Grid container spacing={2} wrap="nowrap">
                        <Grid item xs={3} style={{ width: 500 }}>
                            <h1
                                style={{
                                    width: '300px',
                                    fontSize: 50,
                                    marginLeft: '50px',
                                    fontFamily: `'Montserrat', sans-serif`,
                                    // letterSpacing: '-0.5px',
                                    // lineHeight: '0.8',
                                }}

                            >
                                Best <strong style={{ color: '#1da589' }}>Software Training </strong> Institute in Bharatpur
                            </h1>

                            <p style={{ fontFamily: `'Poppins', sans-serif`, marginLeft: '50px', }}>
                                <strong>Srishtisoft Innovation Institute</strong>, located in Bharatpur, is a premier IT training center dedicated to providing industry-focused education in cutting-edge software technologies. We offer expert-led courses in <strong>Full-Stack Development</strong>, <strong>Mobile App Development</strong>, <strong>UI/UX Design</strong>, <strong>Software Testing</strong>, <strong>Digital Marketing</strong>, and more.
                            </p>
                            <p style={{ fontFamily: `'Poppins', sans-serif`, marginLeft: '50px', }}>
                                Our programs are designed by seasoned professionals with real-world experience to ensure you gain practical, job-ready skills. With hands-on projects, personalized mentorship, and strong placement support, Srishtisoft helps students and professionals build successful, future-proof careers in the tech industry.
                            </p>

                            <Box
                                sx={{
                                    p: 1,
                                    width: '450px',
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start", // so children stack correctly
                                    margin: '12%',
                                }}
                            >
                                {/* Left side - See All Courses with image below */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Item
                                        elevation={24}
                                        style={{
                                            fontFamily: `'Poppins', sans-serif`,
                                            fontSize: '20px',
                                            letterSpacing: '1px',
                                            background: '#1ac243',
                                            width: '200px',
                                            marginRight: '200px'
                                        }}
                                    >
                                        {`See All courses`}
                                    </Item>

                                    {/* Floating Image just below text */}
                                    <img
                                        src="/zigzag.png"
                                        alt="Descriptive alt text"
                                        style={{
                                            marginTop: '20px',
                                            marginLeft: '300px',
                                            width: '150px',
                                            height: '150px',
                                            borderRadius: '8px',
                                            objectFit: 'cover',
                                            pointerEvents: 'none',
                                            animation: 'floatX 2s ease-in-out infinite',
                                        }}
                                    />
                                </Box>
                            </Box>


                        </Grid>


                        <Grid item xs={4} style={{ position: 'relative', overflow: 'visible', width: 320 }} >

                            <div className="shadow-box" style={{
                                marginTop: '105px',
                                width: '140%',
                                height: '50%',
                                background: '#222f3e',
                                boxShadow: '0 0 10px hsla(0, 49.30%, 44.10%, 0.20)',
                                display: 'block',
                                opacity: 0.80,
                                animation: 'bulbGlow 1.0s ease-out-in infinite',
                                borderRadius: '25px'
                            }}>


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
                                        boxShadow: '0 0 10px hsla(0, 49.30%, 44.10%, 0.20)',
                                        display: 'block',
                                        animation: 'bulbGlow 2.5s ease-in-out infinite',
                                        borderRadius: '25px'
                                    }}
                                >
                                    <source src="/videos/146100-788410052_tiny.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* Floating Image */}
                            <img
                                src="/student1.png"
                                alt="Descriptive alt text"
                                style={{
                                    position: 'absolute',
                                    top: '100px',
                                    left: '0',
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '8px',
                                    objectFit: 'cover',
                                    pointerEvents: 'none',
                                    animation: 'floatY 2s ease-in-out infinite',
                                    zIndex: 2,
                                }}
                            />

                            {/* Animated Placement Text Box */}
                            <Item
                                elevation={24}
                                sx={{
                                    background: '#fff',
                                    width: '250px',
                                    height: '100px !important',
                                    position: 'absolute',
                                    top: '120px', // better alignment
                                    left: '220px',
                                    borderRadius: '8px',
                                    pointerEvents: 'none',
                                    animation: 'floatX 2s ease-in-out infinite',
                                    zIndex: 1,
                                    display: 'flex',
                                    // alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                }}
                            >
                                <div style={{ marginTop: '-10px' }}><strong style={{ color: '#45c21a', marginRight: 4 }}>1500+</strong>
                                    Successful Placement</div>
                                <div>
                                    {imageData.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image.src}
                                            alt="Descriptive alt text"
                                            style={{
                                                position: 'absolute',
                                                top: '40px',
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
                                </div>
                            </Item>



                        </Grid>



                        <Grid item xs={4}>
                            <h2>
                                <img
                                    src="/star.avif"
                                    alt="Descriptive alt text"
                                    style={{
                                        position: 'absolute',
                                        marginTop: '-50px',
                                        marginLeft: '100px',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '40px',
                                        objectFit: 'fit',
                                        pointerEvents: 'none',
                                        zIndex: 2,
                                        animation: 'spin360 10s linear infinite',
                                    }}
                                /></h2>

                            {/* Animated Placement Text Box */}
                            <Item
                                elevation={24}
                                sx={{
                                    marginTop: '5px',
                                    marginLeft: '200px',
                                    background: '#efccc6',
                                    width: '250px',
                                    height: '80px !important',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                                onClick={handleOpen}
                            >
                                <div
                                    className="white-box"
                                    style={{
                                        marginTop: '10px',
                                        marginRight: '10px',
                                        width: '90px',
                                        height: '60px',
                                        background: '#fff',
                                        borderRadius: '25px',
                                        display: 'block',
                                        position: 'relative',
                                        overflow: 'visible',
                                    }}
                                >
                                    <img
                                        src="/arrow.png"
                                        alt="Arrow"
                                        className="hover-arrow"
                                    />
                                </div>
                                <div
                                    style={{
                                        marginTop: '10px',
                                        fontFamily: `'Poppins', sans-serif`,
                                        fontSize: '20px',
                                        letterSpacing: '1px',
                                    }}
                                >
                                    Enquiry Now
                                </div>
                            </Item>


                            {/************************************************************** */}

                            {showToast && (
                                <Box
                                    sx={{
                                        position: 'fixed',
                                        top: '200px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: '#4caf50',
                                        color: 'white',
                                        padding: '50px 50px',
                                        borderRadius: '8px',
                                        boxShadow: 3,
                                        zIndex: 1500,
                                        fontWeight: 'bold',
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
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: 400,
                                        bgcolor: 'background.paper',
                                        borderRadius: '12px',
                                        boxShadow: 24,
                                        p: 4,
                                        outline: 'none',
                                    }}
                                >
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            Enquiry Form
                                        </Typography>
                                        <IconButton onClick={handleClose}>
                                            <CloseIcon />
                                        </IconButton>
                                    </Box>

                                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                                        <TextField
                                            fullWidth
                                            name="name"
                                            label="Name"
                                            variant="outlined"
                                            margin="normal"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        <TextField
                                            fullWidth
                                            name="phone"
                                            label="Phone"
                                            variant="outlined"
                                            margin="normal"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                        <TextField
                                            fullWidth
                                            name="address"
                                            label="Address"
                                            variant="outlined"
                                            margin="normal"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                        />

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            sx={{ mt: 2 }}
                                        >
                                            Submit
                                        </Button>

                                        {submitted && (
                                            <Typography
                                                variant="body1"
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
                                    backgroundSize: '70% 70%',        // Maintain full height, let width auto adjust
                                    backgroundPosition: 'right center', // Push image to the right side
                                    padding: '100px 0',
                                    paddingLeft: '100px',              // Keep content away from the left
                                    overflow: 'visible',

                                }}
                            >
                                {items.map((item, index) => (
                                    <Item
                                        key={index}
                                        elevation={24}
                                        className="circle-motion"
                                        sx={{
                                            mt: index === 0 ? '90px' : '50px',
                                            ml: '100px',
                                            background: '#fff transparent',
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
