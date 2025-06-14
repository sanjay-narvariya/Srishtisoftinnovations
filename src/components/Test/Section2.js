import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography, useMediaQuery, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const videoData = [
    {
        name: 'Nidhin',
        role: 'Android Developer',
        company: 'Turbohit Technologies',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        name: 'Ananthu',
        role: 'iOS Developer',
        company: 'Iroid Technologies',
        video: 'https://www.w3schools.com/html/movie.mp4',
    },
    {
        name: 'Jinu',
        role: 'iOS Developer',
        company: 'Furian Technologies',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        name: 'Nivedhya',
        role: 'Android Developer',
        company: 'Feather Technologies',
        video: 'https://www.w3schools.com/html/movie.mp4',
    },
    {
        name: 'Ravi',
        role: 'Web Developer',
        company: 'CodeShack',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        name: 'Pooja',
        role: 'Data Scientist',
        company: 'AI Labs',
        video: 'https://www.w3schools.com/html/movie.mp4',
    },
];

const CustomPrevArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: 'absolute',
            top: '30%',
            left: '10px',
            zIndex: 1,
            backgroundColor: '#fdcb6e',
            boxShadow: 2,
            '&:hover': { backgroundColor: '#eee' },
        }}
    >
        <ArrowBackIos fontSize="small" />
    </IconButton>
);

const CustomNextArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: 'absolute',
            top: '30%',
            right: '10px',
            zIndex: 1,
            backgroundColor: '#fdcb6e',
            boxShadow: 2,
            '&:hover': { backgroundColor: '#eee' },
        }}
    >
        <ArrowForwardIos fontSize="small" />
    </IconButton>
);

const Section2 = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [currentSlide, setCurrentSlide] = useState(0);
    const videoRefs = useRef([]);

    const pauseAllVideos = () => {
        videoRefs.current.forEach((video) => {
            if (video && !video.paused) {
                video.pause();
            }
        });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: isMobile ? 1 : 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        beforeChange: () => pauseAllVideos(),
        customPaging: (i) => (
            <div
                style={{
                    marginTop: '40px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: i === currentSlide ? '#4caf50' : '#ccc',
                }}
            />
        ),
        afterChange: (index) => setCurrentSlide(index),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box
            sx={{
                px: 5,
                py: 5,
                position: 'relative',
                '& .slick-dots': {
                    marginTop: '20px', // 🔹 adjust spacing here
                },
            }}
            >
            <Slider {...settings}>
                {videoData.map((user, index) => (
                    <Box key={index} sx={{ px: 2 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    mb: 4,
                                }}
                            >
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    src={user.video}
                                    controls
                                    style={{
                                        width: '250px',
                                        height: '250px',
                                        borderRadius: '16px',
                                        backgroundColor: '#000',
                                    }}
                                />
                            </Box>
                            <Typography sx={{ fontWeight: 600 }}>{user.name}</Typography>
                            <Typography sx={{ fontSize: '14px', color: '#555' }}>{user.role}</Typography>
                            <Typography sx={{ fontSize: '13px', color: '#888' }}>{user.company}</Typography>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Section2;
