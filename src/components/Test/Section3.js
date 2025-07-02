import React from 'react';
import { Box, Typography, Avatar, useMediaQuery, Fade } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';


const moreTestimonials = [
  {
    name: 'ANJALI',
    designation: 'UI/UX Designer@Tata Elxsi',
    message: 'The internship at SrishtiSoft helped me build a strong portfolio and get industry exposure. Great mentors and resources!',
    img: 'https://via.placeholder.com/50/ff6666?text=A',
  },
  {
    name: 'ROHAN',
    designation: 'Backend Developer@Infosys',
    message: 'I learned Node.js and API development during my internship at SrishtiSoft. The guidance I received was outstanding.',
    img: 'https://via.placeholder.com/50/3399ff?text=R',
  },
  {
    name: 'NEHA',
    designation: 'Full Stack Developer@Wipro',
    message: 'SrishtiSoft gave me a platform to learn full-stack development practically. The projects were challenging and rewarding.',
    img: 'https://via.placeholder.com/50/9966cc?text=N',
  },
  {
    name: 'ARJUN',
    designation: 'Software Engineer@Capgemini',
    message: 'From beginner to job-ready developer — my SrishtiSoft journey was career-changing. Thanks to the entire team.',
    img: 'https://via.placeholder.com/50/00cc99?text=AR',
  },
  {
    name: 'DIVYA',
    designation: 'Data Analyst@TCS',
    message: 'I received excellent training in data analysis tools. Interning at SrishtiSoft helped me crack the TCS interview.',
    img: 'https://via.placeholder.com/50/cc66ff?text=D',
  },
  {
    name: 'VIJAY',
    designation: 'Frontend Developer@UST Global',
    message: 'Amazing hands-on sessions at SrishtiSoft. They helped me develop real-world frontend skills and land a job at UST.',
    img: 'https://via.placeholder.com/50/ffcc66?text=V',
  },
  {
    name: 'RESHMA',
    designation: 'QA Engineer@Tech Mahindra',
    message: 'The QA internship curriculum was very thorough and helped me gain practical insights into testing frameworks.',
    img: 'https://via.placeholder.com/50/66cccc?text=RE',
  },
  {
    name: 'FAIZAL',
    designation: 'DevOps Engineer@HCL',
    message: 'I completed my Internship in Android at SrishtiSoft. It was an excellent course that exceeded my expectations. They provide excellent android training and their android team supported me a lot to improve my programming skills. I got placed in Tranz software Solutions, Trivandrum. Thanks to team SrishtiSoft.',
    img: 'https://via.placeholder.com/50/ff9933?text=F',
  },
  {
    name: 'ANUSHA',
    designation: 'ML Engineer@Cognizant',
    message: 'With strong mentoring and structured training in machine learning, I got placed in Cognizant. Thanks SrishtiSoft!',
    img: 'https://via.placeholder.com/50/9999ff?text=AN',
  },
  {
    name: 'AKHIL',
    designation: 'iOS Developer@QBurst',
    message: 'The iOS training was practical and up-to-date with Swift and Xcode. Internship experience at SrishtiSoft was the best.',
    img: 'https://via.placeholder.com/50/ccff66?text=AK',
  },
];






const Section3 = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ mb: '100px' }}>
       <div style={{display:'flex', justifyContent:'center',padding:'20px'}}><h1>WHAT THEY THINK</h1></div>
       <Box className="d-flex flex-wrap justify-content-center gap-4">
       
        {moreTestimonials.map((testimonial, index) => {

          if (index == 6) {

            return (
              <Box
                key={index}
                sx={{
                  maxWidth: 600,
                  borderRadius: '20px',
                  p: 0,
                  position: 'relative',
                  pb: 5,
                  zIndex: 0,
                }}
              >
                
                {/* Bubble message box */}
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    padding: '24px',
                    boxShadow: '0 10px 15px rgba(0,0,0,0.1), 0 40px 60px rgba(0,0,0,0.3)',
                    position: 'relative',
                    textAlign: 'center',
                    mx: 2,
                    mt: 2,
                    zIndex: 1,
                  }}
                >
                  <Typography sx={{ fontSize: '16px', color: '#333', lineHeight: 1.6 }}>
                    {testimonial.message}
                  </Typography>
                </Box>

                {/* Arrow triangle */}

                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderLeft: '30px solid transparent',
                    borderRight: '30px solid transparent',
                    borderBottom: '30px solid #fff',
                    position: 'absolute',
                    top:isMobile?'calc(100% - 145px)': 'calc(100% - 223px)',
                    left: '10%',
                    transform: 'rotate(90deg)', // 👈 Rotate triangle
                    zIndex: 0,

                    // Add a shadow using filter (since border can't take box-shadow)
                    filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))',
                  }}
                />
                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderLeft: '30px solid transparent',
                    borderRight: '30px solid transparent',
                    borderBottom: '30px solid #fff',
                    position: 'absolute',
                    top:isMobile?'calc(100% - 145px)': 'calc(100% - 223px)',
                    left: '10%',
                    transform: 'rotate(90deg)', // 👈 Rotate triangle
                    zIndex: 2,

                    // // Add a shadow using filter (since border can't take box-shadow)
                    // filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))',
                  }}
                />



                {/* Profile section */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    mt: 5,
                    ml: 5.5,
                    gap: 2,
                  }}
                >
                  <Avatar
                    src={testimonial.img}
                    alt={testimonial.name}
                    sx={{ width: 50, height: 50 }}
                  />
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: 14 }}>{testimonial.name}</Typography>
                    <Typography sx={{ fontSize: 13, color: '#555' }}>
                      {testimonial.designation}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          }
          else {
            return (
              <Box
                key={index}
                sx={{
                  maxWidth: 600,
                  borderRadius: '20px',
                  p: 0,
                  position: 'relative',
                  pb: 5,
                  zIndex: 0,
                }}
              >
                {/* Bubble message box */}
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    padding: '24px',
                    boxShadow: '0 10px 15px rgba(0,0,0,0.1), 0 40px 60px rgba(0,0,0,0.3)',
                    position: 'relative',
                    textAlign: 'center',
                    mx: 2,
                    mt: 2,
                    zIndex: 1,
                  }}
                >
                  <Typography sx={{ fontSize: '16px', color: '#333', lineHeight: 1.6 }}>
                    {testimonial.message}
                  </Typography>
                </Box>

                {/* Arrow triangle */}

                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderLeft: '30px solid transparent',
                    borderRight: '30px solid transparent',
                    borderBottom: '30px solid #fff',
                    position: 'absolute',
                    top: 'calc(100% - 145px)',
                    left: '10%',
                    transform: 'rotate(90deg)', // 👈 Rotate triangle
                    zIndex: 0,

                    // Add a shadow using filter (since border can't take box-shadow)
                    filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))',
                  }}
                />
                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderLeft: '30px solid transparent',
                    borderRight: '30px solid transparent',
                    borderBottom: '30px solid #fff',
                    position: 'absolute',
                    top: 'calc(100% - 145px)',
                    left: '10%',
                    transform: 'rotate(90deg)', // 👈 Rotate triangle
                    zIndex: 2,

                    // // Add a shadow using filter (since border can't take box-shadow)
                    // filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))',
                  }}
                />



                {/* Profile section */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    mt: 5,
                    ml: 5.5,
                    gap: 2,
                  }}
                >
                  <Avatar
                    src={testimonial.img}
                    alt={testimonial.name}
                    sx={{ width: 50, height: 50 }}
                  />
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: 14 }}>{testimonial.name}</Typography>
                    <Typography sx={{ fontSize: 13, color: '#555' }}>
                      {testimonial.designation}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          }

        })}



      </Box>
    </Box >
  );
};

export default Section3;
