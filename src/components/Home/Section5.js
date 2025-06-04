import React, { useState } from 'react';
import "./Section5.css";
import { useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Section5() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [isHovered, setIsHovered] = useState(false);

    const courses = [
        {
            img: "https://www.irohub.com/testimonials/2011817033.jpg",
            name: "VISHNU ",
            title: "Android Developer@Thinkpalm Technologies",
            desc: " I have done my android internship training from Srishtisoft Innovations. It was a great time working with Srishtisoft Innovations for an Internship. Very friendly environment."
        },
        {
            img: "https://www.irohub.com/testimonials/768972480.jpg",
            name: "SARANYA",
            title: "Android Developer@Sinergia Labs",
            desc: " I have completed my android internship from Srishtisoft Innovations. The best thing about Srishtisoft Innovations is that their Internship team is so supportive."
        },
        {
            img: "https://www.irohub.com/testimonials/905746959.jpg",
            name: "SACHIN",
            title: "iOS Developer@Mobme Wireless Solutions Limited",
            desc: " I have done my internship in ios application development from Srishtisoft Innovations and it has been a wonderful experience."
        },
        {
            img: "https://www.irohub.com/testimonials/842629656.jpg",
            name: "JANE",
            title: "Android Developer@Thinkpalm Technologies",
            desc: " It was an excellent course which exceeded my expectations. Very good experience and I will recommend it to my friends and colleagues. I got placed in..."
        },
        {
            img: "https://www.irohub.com/testimonials/2069853638.jpg",
            name: "ANEESH PV",
            title: "Android Developer@Tech Innovations Technologies",
            desc: " Very good environment to learn new things and I have improved a lot in programming skills. I have completed android internship training from Srishtisoft Innovations an..."
        },
        {
            img: "https://www.irohub.com/testimonials/1555070113.jpg",
            name: "NANDHU SREEKUMAR ",
            title: "Android Developer@Airo Global Software",
            desc: " I had a very good experience in Android training. One of the best internship training centre in Kochi is Srishtisoft Innovations. They have experienced faculties for t..."
        },
        {
            img: "https://www.irohub.com/testimonials/621647174.JPG",
            name: "SANJAY NARVARIYA",
            title: "Android Developer@Mobatia Technology Pvt Ltd",
            desc: " Android development in Srishtisoft Innovations Infotech helped me a lot. This internship gave me the basic idea of android & java. The company & atmosphere and facilit..."
        },
        {
            img: "https://www.irohub.com/testimonials/1605265713.jpg",
            name: 'ANANTHU MURALI',
            title: "iOS Developer@Sharp Liquids Pvt Ltd",
            desc: " An wonderful platform to learn, grow and explore. The faculty department has been well-qualified and professional to teach the students with the best..."
        },
    ];

    return (
        <div style={{ position: 'relative', zIndex: 0, overflow: 'hidden', height: '550px', width: '100%' }}>
            {/* Zigzag Background */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: isMobile?'200%':'130%',
                    height: '100%',
                    backgroundImage: 'url(/zigzagline.png)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto',
                    objectFit: 'cover',
                    opacity: 1,
                    zIndex: -1,
                }}
            />

            <section className='about-sec2' style={{ height:  isMobile ? '60%' :'90%', width:  isMobile ? '30%' :'40%', marginLeft: isMobile ? '20%' : '750px', marginTop: '-70px', position: 'absolute', zIndex: 1, transform: isHovered ? 'rotate(0deg)' : 'rotate(20deg)', transition: 'transform 0.3s ease', }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="container sec2">
                    <div className="row">
                        {courses.map((course, index) => (
                            <div className="col-md-6 col-12 mb-6" key={index}>
                                <div
                                    className="item"
                                    style={{
                                        padding: '20px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        height:  isMobile ? '88%' :'92%',
                                    }}
                                >
                                    <div><img src={course.img} height={isMobile?25:50} alt={course.title} /></div>
                                    <h4 style={{ margin: isMobile ? '-30px 5px 2px 20%' : '2px 5px 2px 20%', fontSize: 15 }}>{course.name}</h4>
                                    <div style={{ margin: '2px 5px 10px 20%', fontSize: 10 }}>{course.title}</div>
                                    <div style={{ fontSize: 10 }}>{course.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Box
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: isMobile?'100%':'130%',
                    height: '100%',
                    backgroundColor: 'hsla(0, 7.70%, 2.50%, 0.60)', // optional background
                    zIndex: 9999, // ensures it's above everything else
                    pointerEvents: 'none', // lets mouse events pass through if needed
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'flex-start',
                    padding: isMobile?'20px':'80px'
                   
                }}
            >
                <div style={{color:'#fff', width: isMobile?'80%':'26%', fontSize:  isMobile?40:50, lineHeight:1, fontWeight:'bold'}}>Listen to what our students have to say 🗣️👂</div>
                <div style={{color:'#fff', width: isMobile?'80%':'26%',marginTop: isMobile?'30px':'80px', fontSize:  isMobile?20:18, letterSpacing : 1.5, lineHeight:1,color:'#bcbcc2',fontFamily: `'Poppins', sans-serif`,}}>Our mission is to provide quality job-oriented training with live project exposure that can help our students get on the right lucrative career path. We care for the best for our interns. Check out what our students have to say about their experiences at Srishtisoft Innovations Info.</div>
               
            </Box>

        </div>
    );
}
