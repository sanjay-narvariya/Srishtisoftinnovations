import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, TextareaAutosize, useMediaQuery, Divider, List, ListItem, ListItemText, ListItemIcon, } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AccessTime, Label } from '@mui/icons-material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const trainings = [
    {
        date: '25 Jan 2025',
        name: 'INTERNSHIP',
        title: "The Future of Flutter: What's New and What to Expect in 2025",
        desc: 'Flutter has evolved at a rapid rate from being merely a mobile app SDK to being a robust and feature-rich cross-platform development platform. As we m...',
        image: '/nar1.jpg',
    },
    {
        date: '29 Feb 2025',
        name: 'INTERNSHIP',
        title: "How to Get Certified in Digital Marketing: Best Courses & Certifications",
        desc: 'In today&#39;s digital-first business landscape, marketing professionals with verified skills are in high demand. According to recent industry reports...',
        image: '/nar2.jpg',
    },

    {
        date: '08 May 2025',
        name: 'REACT NATIVE JS',
        title: "Flutter vs. React Native: Which One Should You Choose?",
        desc: 'For mobile developers in the making, the biggest question probably on their minds is: What cross-platform toolset is one to learn &mdash; Flutter or R...',
        image: '/nar3.png',
    },
    {
        date: '26 March 2025',
        name: 'INTERNSHIP',
        title: "Common Software Testing Mistakes and How to Avoid Them",
        desc: 'Software testing is an essential part of ensuring that the app works smoothly before it reaches users. Many experienced professionals who have learned...',
        image: '/nar4.jpg',
    },
    {
        date: '20 March 2025',
        name: 'PYTHON',
        title: "How Learning Python Can Boost Your Career in 2025",
        desc: 'Professionals can access significant employment opportunities in multiple sectors because of rising industrial requirements for Python language knowle...',
        image: '/nar5.jpg',
    },
    {
        date: '02 Jan 2025',
        name: 'INTERNSHIP',
        title: "Exploring the World of Data Science: Career Opportunities and Skills Needed",
        desc: 'Students and working professionals find the field of data science to be an appealing career choice as the need for data scientists grows.&nbsp;This en...',
        image: '/nar6.png',
    },
    {
        date: '04 Sept 2024',
        name: 'INTERNSHIP',
        title: "Career Paths in Python: Developer, Data Scientist, and Beyond",
        desc: 'Python has emerged as the go-to programming language for artificial intelligence, machine learning, and data analysis. Learning Python and getting Pyt...',
        image: '/nar7.jpg',
    },

    {
        date: '10 May 2024',
        name: 'INTERNSHIP',
        title: "Best Software training institutes in Bharatpur",
        desc: 'With years of expertise, SrishtiSoft has emerged as the best software training institute in Bharatpur. Providing best-in-class training that emphasizes practi...',
        image: '/nar8.jpg',
    },
    {
        date: '18 Aug 2024',
        name: 'INTERNSHIP',
        title: "Reasons to Pursue a Career in Digital Marketing: Unveiling the Exciting Opportunities",
        desc: 'Choosing a career path is a difficult task. You&#39;re meant to find something you enjoy while also considering long-term stability and the general li...',
        image: '/nar9.png',
    },
    {
        date: '18 Aug 2024',
        name: 'INTERNSHIP',
        title: "Best Python training institute in Bharatpur -2024",
        desc: 'Python is one of the most popular languages among developers today. It has gained popularity due to its simple syntax and powerful capabilities. It&#3...',
        image: '/nar10.jpg',
    },



];







const latestPosts = [
    {
        title: 'The Future of Flutter: What’s New and What to Expect in 2025',
        date: 'Jan 25, 2025',
        thumbnail: '/nar1.jpg', // Replace with actual
    },
    {
        title: 'How to Get Certified in Digital Marketing: Best Courses & Certifications',
        date: 'Feb 29, 2025',
        thumbnail: 'nar2.jpg',
    },
    {
        title: 'Flutter vs. React Native: Which One Should You Choose?',
        date: 'May 08, 2025',
        thumbnail: 'nar3.png',
    },
    {
        title: 'Common Software Testing Mistakes and How to Avoid Them',
        date: 'Mar 26, 2025',
        thumbnail: 'nar4.jpg',
    },
];

const categories = [
    { name: 'MERN', count: 11 },
    { name: 'Android development', count: 11 },
    { name: 'IOS', count: 13 },
    { name: 'Python', count: 18 },
    { name: 'TESTING', count: 7 },
    { name: 'Internship', count: 15 },
    { name: 'Apps', count: 4 },
    { name: 'React native js', count: 1 },
];




export default function Section1() {

    const [activePage, setActivePage] = useState(1);
    const totalPages = 8;


    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate(); // 👈 navigation hook
    const [email, setEmail] = useState('');



    const handleSubscribe = () => {
        if (email.trim() !== '') {
            // Simulate form submission if needed
            navigate('/thankyou'); // Redirect after success
        } else {
            alert('Please enter a valid email.');
        }
    };



    return (<>
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
            <Box sx={{ padding: isMobile ? 2 : 2, mt: isMobile ? '50px' : '50px', width: isMobile ? '100%' : '1000px', }}>
                <Grid container spacing={5}>
                    {trainings.map((item, index) => (
                        <Grid item xs={12} sm={3} md={3} key={index}>
                            <Box
                                sx={{
                                    width: isMobile ? '95%' : '430px',
                                    textAlign: 'start',
                                    borderRadius: '12px',
                                    paddingLeft: isMobile ? 2 : 5,
                                    backgroundColor: 'transparent',
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: isMobile ? '310px' : '400px',
                                        height: isMobile ? '310px' : '250px',
                                        border: '2px solid #ccc', // light grey border
                                        padding: '10px', // space between image and border
                                        boxSizing: 'border-box',
                                        padding: 10,
                                        borderRadius: '15px',
                                    }}
                                />

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: 10, ml: '10px', opacity: 0.6, display: 'flex', justifyContent: 'space-between' }}>
                                    <span>{item.date}</span>
                                    <span>{item.name}</span>
                                </Typography>
                                <Typography variant="h6" sx={{
                                    fontWeight: 600, mb: 1, textDecoration: 'underline',
                                    fontSize: '13px',
                                    // wordBreak: 'break-all',
                                    '&:hover': {
                                        textDecoration: 'none', // remove underline on hover
                                    },
                                }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 2, fontSize: '13px', fontWeight: 500, opacity: 0.7 }}>
                                    {item.desc}
                                </Typography>

                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>





            {/***************************** */}

            <Box sx={{  ml:isMobile?'10px':'-50px', p: 2, width: isMobile ? '100%' : '330px', pl: isMobile ? 0 : 3, mt: 3 }}>
                {/* Latest Posts */}
                  <Box
                    sx={{
                        border: '1px solid #eee',
                        borderRadius: '6px',
                        p: 2,
                        width:isMobile?'100%':'330px',
                    }}
                >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Latest Posts
                </Typography>
                {latestPosts.map((post, index) => (
                    <Box key={index} sx={{ display: 'flex', mb: 2 }}>
                        <img
                            src={post.thumbnail}
                            alt={post.title}
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '5px',
                                objectFit: 'cover',
                                marginRight: '10px',
                            }}
                        />
                        <Box>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                {post.title}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {post.date}
                            </Typography>
                        </Box>
                    </Box>
                ))}
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Categories */}
                <Box
                    sx={{
                        border: '1px solid #eee',
                        borderRadius: '6px',
                        p: 2,
                        width:isMobile?'100%':'330px',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                        Categories
                    </Typography>

                    {categories.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                 boxSizing: 'border-box',
                                justifyContent: 'space-between',
                                py: 1.2,
                                px: 1.5,
                                borderRadius: '4px',
                                transition: 'background-color 0.2s ease',
                                '&:hover': {
                                    backgroundColor: '#00cec9',
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 500,
                                     textDecoration: 'underline',
                                    '&:hover': {
                                        textDecoration: 'none',
                                    },
                                }}
                            >
                                {item.name}
                            </Typography>
                            <Typography variant="body2" >
                                {item.count}
                            </Typography>
                        </Box>
                    ))}
                </Box>
        </Box>




            </Box>

            {/************************************ */}

            <Box sx={{ px: isMobile ? 0 : 6, py: 6, width: '100%', textAlign: 'center' }}>
                {/* Pagination Section */}
                <Box
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        mb: 4,
                        gap: 0.5,
                        flexWrap: 'wrap',
                    }}
                >
                    <Button
                        disabled={activePage === 1}
                        onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
                    >
                        &lt;
                    </Button>

                    {[...Array(totalPages)].map((_, index) => {
                        const pageNum = index + 1;
                        return (
                            <Button
                                key={pageNum}
                                onClick={() => setActivePage(pageNum)}
                                variant={activePage === pageNum ? 'contained' : 'outlined'}
                                sx={{
                                    minWidth:isMobile?'10px': '36px',
                                    px: isMobile?1:2,
                                    backgroundColor: activePage === pageNum ? '#1976d2' : 'transparent',
                                    color: activePage === pageNum ? '#fff' : '#000',
                                    borderColor: '#ccc',
                                }}
                            >
                                {pageNum}
                            </Button>
                        );
                    })}

                    <Button
                        disabled={activePage === totalPages}
                        onClick={() => setActivePage((prev) => Math.min(prev + 1, totalPages))}
                    >
                        &gt;
                    </Button>
                </Box>

                {/* Newsletter Form */}
                <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, mb: 3, textAlign: 'center' }}
                >
                    Subscribe to Newsletter
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        width: isMobile ? '80%' : '60%',
                        maxWidth:isMobile?'500px':'600px',
                        margin: '0 auto',
                        border: '1px solid #000',
                        borderRadius: '5px',
                        overflow: 'hidden',
                    }}
                >
                    <TextField
                        fullWidth
                        placeholder="Type your email address"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            input: { padding: '12px', fontSize: '16px' },
                            '& fieldset': { border: 'none' },
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleSubscribe}
                        sx={{
                            bgcolor: '#111',
                            color: '#fff',
                            px: 4,
                            fontWeight: 500,
                            fontSize: '15px',
                            borderRadius: 0,
                            '&:hover': {
                                bgcolor: '#333',
                            },
                        }}
                    >
                        Subscribe
                    </Button>
                </Box>
            </Box>

        </>)

};