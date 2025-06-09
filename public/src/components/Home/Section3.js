import React, { useEffect, useState } from "react";
import "./Section2.css";
import { Link, useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";
import { Box, Modal, TextField, Button, IconButton, Typography, useMediaQuery } from '@mui/material';



export default function Section2() {

    return (<>
        {/* Stats */}
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column" },
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: { sm: "space-around" },
                mt: 0,
                ml:5,
                gap: 2,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    display: "inline-block",
                    ml: { xs: 0, sm: '100px' },
                }}
            >
                {/* Wrapper for mobile alignment */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        position: { xs: 'relative', sm: 'relative' },
                         ml: { xs: '10px', sm: '50px' },
                    }}
                >
                    {/* "3" Part */}
                     <span
                        style={{
                            fontSize: window.innerWidth >= 600 ? 'clamp(20px, 10vw, 190px)':'clamp(20px, 10vw, 200px)',
                            fontWeight: 'bold',
                            color:'pink',
                            position: window.innerWidth >= 600 ? 'absolute' : 'absolute',
                            top: window.innerWidth >= 600 ? 55 : 20,
                            left: window.innerWidth >= 600 ? -60 : -20,
                            marginLeft: window.innerWidth < 600 ? '4px' : '0px',
                            lineHeight: 1,
                        }}
                    >
                        1
                    </span>
                    <span
                        style={{
                            fontSize: 'clamp(40px, 16vw, 160px)',
                            fontWeight: 500,
                            color:'pink',
                        }}
                    >
                        5
                    </span>

                    {/* "000+" Part */}
                    <span
                        style={{
                            fontSize: window.innerWidth >= 600 ? 'clamp(20px, 10vw, 190px)':'clamp(20px, 10vw, 200px)',
                            fontWeight: 'bold',
                            color:'pink',
                            position: window.innerWidth >= 600 ? 'absolute' : 'absolute',
                            top: window.innerWidth >= 600 ? 45 : 20,
                            left: window.innerWidth >= 600 ? 90 : 32,
                            marginLeft: window.innerWidth < 600 ? '4px' : '0px',
                            lineHeight: 1,
                        }}
                    >
                        00
                    </span>
                </Box>

                {/* Label */}
                <div
                    style={{
                        marginTop:window.innerWidth <600 ? '-10px':'-40px',
                        fontSize: 'clamp(14px, 3vw, 26px)',
                        textAlign: 'left',
                        width: window.innerWidth < 600 ? '100%' : '550px',
                    }}
                >
                    Students have been successfully placed 🎓, securing high-paying 💰 jobs. 💼🚀
                </div>
            </Box>



           <Box
                sx={{
                    position: "relative",
                    display: "inline-block",
                    ml: { xs: 10, sm: 80 },
                     mr: { xs: -10, sm: 0 },
                }}
            >
                {/* Wrapper for mobile alignment */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        position: { xs: 'relative', sm: 'relative' },
                         ml: { xs: '10px', sm: '50px' },
                    }}
                >
                    {/* "3" Part */}
                    <span
                        style={{
                            fontSize: 'clamp(40px, 16vw, 160px)',
                            fontWeight: 500,
                            color:'green',
                        }}
                    >
                        4
                    </span>

                     <span
                        style={{
                            fontSize: window.innerWidth >= 600 ? 'clamp(20px, 10vw, 200px)':'clamp(20px, 13vw, 200px)',
                            fontWeight: 'bold',
                            color:'green',
                            position: window.innerWidth >= 600 ? 'absolute' : 'absolute',
                            top: window.innerWidth >= 600 ? 30 : 15,
                            left: window.innerWidth >= 600 ? 90 : -20,
                            marginLeft: window.innerWidth < 600 ? '55px' : '0px',
                            lineHeight: 1,
                        }}
                    >
                        2
                    </span>

                    {/* "000+" Part */}
                    <span
                        style={{
                            fontSize: window.innerWidth >= 600 ? 'clamp(20px, 10vw, 190px)':'clamp(20px, 12vw, 200px)',
                            fontWeight: 'bold',
                            color:'green',
                            position: window.innerWidth >= 600 ? 'absolute' : 'absolute',
                            top: window.innerWidth >= 600 ? 20 : 11,
                            left: window.innerWidth >= 600 ? 165 : 38,
                            marginLeft: window.innerWidth < 600 ? '25px' : '0px',
                            lineHeight: 1,
                        }}
                    >
                        8
                    </span>
                </Box>

                {/* Label */}
                <div
                    style={{
                        marginTop:window.innerWidth <600 ? '-10px':'-40px',
                        fontSize: 'clamp(14px, 3vw, 26px)',
                        textAlign: 'left',
                        width: window.innerWidth < 600 ? '70%' : '550px',
                    }}
                >
                    Industrial experts 👩‍🏭 aiding interns in honing their skills along with practical 🔧 and career-oriented training. 🏭👨‍🔧📚🎓
                </div>
            </Box>

             
              <Box
                sx={{
                    position: "relative",
                    display: "inline-block",
                    ml: { xs: 0, sm: '100px' },
                }}
            >
                {/* Wrapper for mobile alignment */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        position: { xs: 'relative', sm: 'relative' },
                         ml: { xs: '36px', sm: '150px' },
                    }}
                >
                    {/* "3" Part */}
                     <span
                        style={{
                            fontSize: window.innerWidth >= 600 ? 'clamp(20px, 10vw, 190px)':'clamp(20px, 10vw, 200px)',
                            fontWeight: 'bold',
                            color:'#6c5ce7',
                            position: window.innerWidth >= 600 ? 'absolute' : 'absolute',
                            top: window.innerWidth >= 600 ? 90 : 42,
                            left: window.innerWidth >= 600 ? -140 : -35,
                            marginLeft: window.innerWidth < 600 ? '4px' : '0px',
                            lineHeight: 1,
                        }}
                    >
                        20
                    </span>
                    <span
                        style={{
                            fontSize: 'clamp(40px, 20vw, 200px)',
                            fontWeight: 500,
                            color:'#6c5ce7',
                        }}
                    >
                        7
                    </span>

                </Box>

                {/* Label */}
                <div
                    style={{
                        marginTop:window.innerWidth <600 ? '-10px':'-40px',
                        fontSize: 'clamp(14px, 3vw, 26px)',
                        textAlign: 'left',
                        width: window.innerWidth < 600 ? '90%' : '550px',
                    }}
                >
                    🏭 Industry ties all over India 🇮🇳, boosting placements, & ensuring students secure lucrative 💰 jobs easily. 💼🚀
                </div>
            </Box>




        </Box>


        

    </>)
};