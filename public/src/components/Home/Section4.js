import React, { useEffect, useState } from "react";
import { Grid, Typography, Paper, Avatar, Box } from '@mui/material';
import './Section4.css'; // external CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const Section4 = () => {

    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));



    return (
        <div className="placement-section " >
            <Grid container spacing={2} >
                {/* Left Column */}
                <Grid item xs={12} md={4} sx={{ width: isMobile ? 'auto' : '350px', marginLeft: isMobile ? '30px' : '85px', }}>
                    <Paper elevation={3} className="left-box p-3 text-center" sx={{ height: isMobile ? 'auto' : 'auto', marginLeft: isMobile ? '10px' : '', marginRight: isMobile ? '50px' : '' }} >
                        <Typography sx={{
                            background: '#f8c291',
                            width: isMobile ? 220 : 265,
                            height: isMobile ? 210 : 320,
                            borderRadius: 15,
                            marginLeft: isMobile ? 2 : 3,
                            position: 'relative',
                            zIndex: 1,
                            transition: 'box-shadow 0.3s ease-in-out',
                            '&:hover': {
                                boxShadow: '4px 4px 0 black',
                            },
                        }} >
                            <Avatar
                                src="https://www.irohub.com/home/images/ir-asset-2.webp"
                                alt="Student"
                                sx={{ width: isMobile ? 200 : 250, height: isMobile ? 300 : 400, marginTop: '-100px', marginLeft: isMobile ? '10px' : '8px', position: 'absolute', zIndex: 2 }}
                            />
                        </Typography>
                        <Typography variant="body1" className="mt-3 opacity-75  fs-5 font-poppins" style={{ fontSize: 18, width: isMobile ? 'auto' : 'auto', }}>
                            Being the best software training institute 💻 in Bharatpur, SRISHTISOFT never failed to accomplish young aspirants’ dreams. With the in-house team of industrial experts 🖋 who have experience and expertise, we provide exceptional learning experiences to each one of our students through individual training.📈
                        </Typography>
                        <Typography variant="body1" className="mt-3 opacity-75  fs-5 font-poppins" style={{ fontSize: 18, width: isMobile ? 'auto' : 'auto', }}>
                            With a track record of successful placements, we continue to strive toward creating lucrative opportunities and promising careers for our students. We strive and thrive on the success of our students. 🧾
                        </Typography>
                    </Paper>
                </Grid>

                {!isMobile && (<><div style={{ height: '1.4px', width: '490px', marginLeft: '0px', marginTop: '996px', backgroundColor: 'black', position: 'absolute', zIndex: '2' }}></div>
                    <div style={{ width: '1.5px', height: '780px', marginLeft: '490px', marginTop: '218px', backgroundColor: 'black', position: 'absolute', zIndex: '2' }}></div>
                    <div style={{ height: '7px', width: '800px', marginLeft: '490px', marginTop: '218px', backgroundColor: 'black', position: 'absolute', zIndex: '2' }}></div></>)}


                {/* Right Column */}
                <Grid item xs={12} md={8} sx={{ width: isMobile ? 'auto' : '700px', marginLeft: isMobile ? '20px' : '100px', marginRight: isMobile ? '20px' : '' }}>
                    <Typography variant="h5" className="mb-2 text-center text-md-start" style={{ marginLeft: isMobile ? '' : '', width: isMobile ? 'auto' : 'auto', fontSize: isMobile ? 28 : 38, letterSpacing: isMobile ? '0.3rem' : '0.6rem', lineHeight: 1 }}>
                        <strong>CREATING A FUTURE 🌟 YOUR LOVE 💖</strong>
                    </Typography>
                    <Typography variant="body1" className="mb-4 text-center text-md-start mt-3 opacity-75  fs-5 font-poppins" style={{ marginLeft: isMobile ? '' : '', width: isMobile ? 'auto' : 'auto', }}>
                        We boost your confidence by organizing practice interviews that cover various aspects, including problem-solving, technical knowledge, and personal skills.
                    </Typography>

                    <Grid container spacing={3}>
                        {[
                            {
                                title: "Mock Interview's",
                                desc: 'We build up confidence, conduct mock interview sessions with the support of our highly dedicated professional team.',
                                icon: '📝',
                            },
                            {
                                title: 'Placement Classes',
                                desc: 'Our placement classes include Aptitude, Technical and also Personality skills.',
                                icon: '🎯',
                            },
                            {
                                title: 'Technical Evaluation',
                                desc: 'We conduct technical evaluations to determine the knowledge of our candidates and also take steps for the improvement.',
                                icon: '⚙️',
                            },
                            {
                                title: 'Project Assistance',
                                desc: 'Our candidates can work on our live projects and it will boost their practical knowledge.',
                                icon: '📂',
                            },
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} key={index} sx={{ width: isMobile ? 'auto' : '320px', marginTop: '40px', marginLeft: isMobile ? '' : '10px' }}>
                                <Paper className="info-card p-3 h-100" elevation={3}>
                                    <Typography variant="h6" className="icon-title mb-2">
                                        {item.icon} {item.title}
                                    </Typography>
                                    <Typography variant="body2" className='mt-3 opacity-75  fs-5 font-poppins'>{item.desc}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>



            <Grid container spacing={4} sx={{ mt: isMobile ? 10 : 20, mb: 4, position: 'relative', overflow: 'visible', }} >
                {/* 🔁 Repeating Background Box */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: isMobile ? '100%':'200%',
                        height: isMobile ? '100%':'100%',
                        backgroundImage: 'url(/image1.png)',
                        backgroundRepeat: 'repeat',
                        backgroundSize: 'auto',
                        zIndex: 2, // behind all content
                        pointerEvents: 'none',
                         opacity: 0.4, // ⬆️ increased from 0.15 to 0.4 for visibility
                         filter: 'contrast(120%) brightness(110%)',
                    }}
                />



                {/* Left Column */}
                <Grid item xs={12} md={5} sx={{ width: isMobile ? 'auto' : '500px', marginLeft: isMobile ? '20px' : '80px', marginRight: isMobile ? '20px' : '',  zIndex: 1, }}>
                    <Typography variant="h5" className="mb-2 text-center text-md-start" style={{ marginLeft: isMobile ? '' : '', width: isMobile ? 'auto' : '600px', fontSize: isMobile ? 28 : 38, letterSpacing: isMobile ? '0.3rem' : '0.4rem', lineHeight: 1 }}>
                        <strong> THE STORY BEHIND 📖✨</strong>
                    </Typography>
                    <Typography sx={{ marginLeft: isMobile ? 2 : 3 }}>
                        <Box
                            component="img"
                            src="https://www.irohub.com/home/images/03598-sixteen_ten0.webp"
                            alt="Student"
                            sx={{
                                width: isMobile ? 250 : 580, height: isMobile ? 300 : 570, marginTop: '10px', marginLeft: isMobile ? '25px' : '-20px', transition: 'box-shadow 0.3s ease-in-out',opacity: 0.75, filter: 'contrast(120%) brightness(100%)',
                                '&:hover': {
                                    boxShadow: '4px 4px 4px 4px black',
                                }
                            }}
                        />
                    </Typography>

                </Grid>


                {/* Right Column */}
                <Grid item xs={12} md={7} sx={{ width: isMobile ? 'auto' : '530px', marginLeft: isMobile ? '25px' : '110px', marginRight: isMobile ? '25px' : '',  zIndex: 3, opacity: 5, filter: 'contrast(150%) brightness(150%)', }}>
                    <Typography variant="h5" className="mb-2 text-center text-md-start" style={{ marginLeft: isMobile ? '' : '', width: isMobile ? 'auto' : 'auto', fontSize: isMobile ? 25 : 28, letterSpacing: isMobile ? '0.1rem' : '0.1rem', fontWeight: 500, lineHeight: 1.2, marginTop: '50px' }}>
                        “With the record of thousands of placements, we continue to strive to help students land their dream job” 🌟📈💼
                    </Typography>
                    <Typography variant="body1" className="mb-4 text-center text-md-start mt-3 opacity-75  fs-5 font-poppins" style={{ marginLeft: isMobile ? '' : '', width: isMobile ? 'auto' : 'auto',opacity: 10, backgroundColor:'#e84393', borderRadius:'18px', padding:'10px'}}>
                        SrishtiSoft is the learning and career-building division of Srishti Technologies, a reputed name in delivering smart IT solutions across India. Driven by a team of passionate industry professionals, SrishtiSoft was founded with one clear goal — to bridge the gap between academic learning and real-world experience for aspiring developers and IT professionals.

                        During our early recruitment drives, we observed a common challenge among fresh graduates — a lack of hands-on experience and exposure to live project environments. This insight led to the birth of SrishtiSoft, where we made it our mission to equip freshers with the practical skills and confidence they need to thrive in the IT industry.

                        Our flagship Internship Program spans nearly 90 working days and offers deep, project-based learning in key areas like Mobile App Development (Android & iOS) and Full-Stack Web Development. Sessions are held on weekdays, ensuring a consistent and focused learning path.

                        At SrishtiSoft, we go beyond just training. We provide:

                        Real-time project experience,

                        Structured mentorship,

                        Interview preparation sessions,

                        Mock interviews,

                        And dedicated placement support.

                        Our aim is simple — to nurture fresh talent into skilled professionals, ready to take on opportunities in top IT companies.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section4;
