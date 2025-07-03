import React from 'react';
import { Container, Typography, Card, CardContent, Box,useMediaQuery } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from '@mui/material/styles';

const Language = ({ darkMode, setDarkMode }) => {

        // Inside your component
        const theme = useTheme();
        const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (<>
        <Box sx={{ backgroundColor: 'transparent', py: 6 , position:'relative'}}>
            
            <Container maxWidth="lg">
                {/* Top Heading */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 10,
                        mb: 5,
                    }}
                >
                    <img
                        src="/india.jpg"
                        alt="Make in India"
                        style={{
                            height: '80px',
                            marginRight: '10px',
                            borderRadius: '20px',
                            marginBottom: 15,
                            filter: 'drop-shadow(0 0 2px rgba(25,118,210,0.6))',
                        }}
                    />
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            color: '#535c68',
                            textTransform: 'uppercase',
                            textShadow: `
              0 0 5px rgba(25, 118, 210, 0.5),
              0 0 10px rgba(25, 118, 210, 0.4),
              0 0 15px rgba(25, 118, 210, 0.3)
            `,
                            background: 'linear-gradient(90deg,rgb(89, 107, 124),rgb(82, 99, 112))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textAlign: 'center',
                        }}
                    >
                        Skilled Digital India and Make India
                    </Typography>
                </Box>

                <div className="row justify-content-center">
                    {/* C Programming Card */}
                    <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                        <Card sx={{ width: '100%', maxWidth: 500, borderRadius: 3,  boxShadow: 3 ,  backgroundImage: darkMode ? 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/logo.png)':'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(/logo.png)',overflow:'hidden', backgroundSize:'cover', backgroundPosition:'center'}}>
                            <CardContent>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
                                    alt="C Programming"
                                    style={{
                                        width: 100,
                                        height: 90,
                                        marginBottom: 20,
                                        background: '#1abc9c',
                                        padding: 10,
                                        borderRadius: '15px',
                                    }}
                                />
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#44bd32', }}>
                                    📚 What We Cover in C Programming
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: '15px' }}>
                                    Dive into the fundamentals of computer programming with C — a timeless,
                                    high-performance language that powers operating systems, embedded systems,
                                    and more. Our course introduces students to the building blocks of programming.
                                    <div style={{ marginTop: '5px' }}>: Data types, variables, and operators</div>
                                    <div>: Control structures (loops & conditional statements)</div>
                                    <div>: Functions and modular programming</div>
                                    <div>: Arrays, pointers, and dynamic memory management</div>
                                    <div style={{ marginBottom: '5px' }}>: Structures and file handling</div>
                                    Beyond syntax, we teach logical thinking and algorithm design, empowering students
                                    to write efficient and elegant code from scratch.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    {/* C++ Programming Card */}
                    <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                         <Card sx={{ width: '100%', maxWidth: 500, borderRadius: 3, boxShadow: 3 , backgroundImage: darkMode ? 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/logo.png)':'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(/logo.png)', overflow:'hidden', backgroundSize:'cover', backgroundPosition:'center'}}>
                            <CardContent>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
                                    alt="C++ Programming"
                                    style={{
                                        width: 100,
                                        height: 90,
                                        marginBottom: 20,
                                        background: '#1abc9c',
                                        padding: 10,
                                        borderRadius: '15px',
                                    }}
                                />
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#44bd32' }}>
                                    ⚙ What We Explore in C++ Programming
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: '15px' }}>
                                    Unlock the power of Object-Oriented Programming (OOP) with C++, blending speed
                                    with advanced abstraction. Students learn to structure complex software by mastering.
                                    <div style={{ marginTop: '5px' }}>: Classes and objects</div>
                                    <div>: Constructors & destructors</div>
                                    <div>: Inheritance and polymorphism</div>
                                    <div>: Operator overloading and templates</div>
                                    <div style={{ marginBottom: '5px' }}>: File streams and exception handling</div>
                                    We emphasize writing clean, maintainable, and reusable code, preparing learners
                                    for real-world software development, game engines, and large-scale applications.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                     {/* MERN Full Stack Card */}
        <div className="col-12 col-md-6 mt-4 d-flex justify-content-center">
           <Card sx={{ width: '100%', maxWidth: 500, borderRadius: 3,  boxShadow: 3 ,  backgroundImage: darkMode ? 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/logo.png)':'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(/logo.png)', overflow:'hidden', backgroundSize:'cover', backgroundPosition:'center'}}>
            <CardContent>
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                alt="MERN Stack"
                style={{
                  width: 100,
                  height: 90,
                  marginBottom: 20,
                  background: '#1abc9c',
                  padding: 10,
                  borderRadius: '15px',
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#44bd32' }}>
                🚀 What We Cover in MERN & Database Development
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '15px' }}>
                Step into modern web development with the powerful MERN stack — MongoDB, Express.js,
                React.js, Node.js — now combined with relational power of MySQL.
                <div style={{ marginTop: '5px' }}>: Dynamic UIs with React.js</div>
                <div>: RESTful APIs with Node.js & Express.js</div>
                <div>: MongoDB & MySQL for data storage</div>
                <div>: Authentication & user management</div>
                <div style={{ marginBottom: '5px' }}>: Deployment & production best practices</div>
                Focused on real projects, helping students build portfolio-ready apps and master both NoSQL & SQL databases.
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Python Programming Card */}
        <div className="col-12 col-md-6 mt-4 d-flex justify-content-center">
         <Card sx={{ width: '100%', maxWidth: 500, borderRadius: 3, boxShadow: 3 , backgroundImage: darkMode ? 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/logo.png)':'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(/logo.png)', overflow:'hidden', backgroundSize:'cover', backgroundPosition:'center',}}>
            <CardContent>
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/python-3521655-2945099.png"
                alt="Python Programming"
                style={{
                  width: 100,
                  height: 90,
                  marginBottom: 20,
                  background: '#1abc9c',
                  padding: 10,
                  borderRadius: '15px',
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#44bd32' }}>
                ✨ What We Explore in Python Programming
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '15px' }}>
                Discover Python’s elegance and versatility, used in web apps, AI & data science.
                This course empowers learners with essential coding skills.
                <div style={{ marginTop: '5px' }}>: Syntax, data types & control structures</div>
                <div>: Functions, modules & packages</div>
                <div>: Object-Oriented Programming</div>
                <div>: File handling & exceptions</div>
                <div style={{ marginBottom: '5px' }}>: Intro to Pandas, NumPy, matplotlib</div>
                We teach how to think algorithmically and write efficient, maintainable code for real-world tasks.
              </Typography>
            </CardContent>
          </Card>
        </div>
                </div>
            </Container>
        </Box>

  </>
    );

};

export default Language;
