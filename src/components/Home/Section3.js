
import React, { useEffect, useState } from "react";
import "./Section2.css";
import { Link, useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";
import { Box, Modal, TextField, Button, IconButton, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';



export default function Section3() {

    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));



    const targetNumber = 1500;
    const targetNumber1 = 428;
    const targetNumber2 = 207;
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [isCounting, setIsCounting] = useState(true);
    const [hasScrolled, setHasScrolled] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            if (!hasScrolled) {
                setHasScrolled(true);  // ✅ Sirf pehli scroll pe trigger karo
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasScrolled]);

/**************************************************************************************** */

    useEffect(() => {

         if (hasScrolled) {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev < targetNumber) return prev + 10;
                clearInterval(interval);
                setIsCounting(false);
                return targetNumber;
            });
        }, 10);
 
        return () => clearInterval(interval);
    }
    }, [hasScrolled]);

    /********************** */
    useEffect(() => {

         if (hasScrolled) {
        const interval = setInterval(() => {
            setCount1((prev) => {
                if (prev < targetNumber1) return prev + 5;
                clearInterval(interval);
                setIsCounting(false);
                return targetNumber1;
            });
        }, 10);
    
        return () => clearInterval(interval);
    }
    }, [hasScrolled]);

    /*********************************** */

    useEffect(() => {

         if (hasScrolled) {
        const interval = setInterval(() => {
            setCount2((prev) => {
                if (prev < targetNumber2) return prev + 5;
                clearInterval(interval);
                setIsCounting(false);
                return targetNumber2;
            });
        }, 10);
    
        return () => clearInterval(interval);
    }
    }, [hasScrolled]);

    /********************************* */


    const fixedSizes = [72, 80, 60, 60]; // fallback sizes for digits (used if available)
    const fixedSizes1 = [92, 60, 50, 60]; // fallback sizes for digits (used if available)
    const fixedSizes2 = [72, 60, 90, 60]; // fallback sizes for digits (used if available)

    /********************************************** */

    const getStyledDigits = () => {
        const digits = String(count).split(""); // ✅ no padStart

        return digits.map((digit, index) => {
            const fontSize = isCounting
                ? Math.floor(Math.random() * 30) + 50
                : fixedSizes[index] || 60; // fallback if more than 4 digits

            const offset = isCounting ? Math.floor(Math.random() * 20) - 10 : 0;

            return (
                <Typography
                    key={index}
                    component="span"
                    sx={{
                        fontSize: `${fontSize}px`,
                        position: "relative",
                        top: `${offset}px`,
                        fontWeight: "bold",
                        color: "#D5A550",
                        transition: "all 0.3s ease-in-out",
                        mb: '20px',
                    }}
                >
                    {digit}
                </Typography>
            );
        });
    };
    /************************************************************************************************* */

    const getStyledDigits1 = () => {
        const digits = String(count1).split(""); // ✅ no padStart

        return digits.map((digit, index) => {
            const fontSize = isCounting
                ? Math.floor(Math.random() * 30) + 50
                : fixedSizes1[index] || 60; // fallback if more than 4 digits

            const offset = isCounting ? Math.floor(Math.random() * 20) - 10 : 0;

            return (
                <Typography
                    key={index}
                    component="span"
                    sx={{
                        fontSize: `${fontSize}px`,
                        position: "relative",
                        top: `${offset}px`,
                        fontWeight: "bold",
                        color: "green",
                        transition: "all 0.3s ease-in-out",
                        mb: '20px',
                    }}
                >
                    {digit}
                </Typography>
            );
        });
    };
    /********************************************** */

    const getStyledDigits2 = () => {
        const digits = String(count2).split(""); // ✅ no padStart

        return digits.map((digit, index) => {
            const fontSize = isCounting
                ? Math.floor(Math.random() * 30) + 50
                : fixedSizes2[index] || 60; // fallback if more than 4 digits

            const offset = isCounting ? Math.floor(Math.random() * 20) - 10 : 0;

            return (
                <Typography
                    key={index}
                    component="span"
                    sx={{
                        fontSize: `${fontSize}px`,
                        position: "relative",
                        top: `${offset}px`,
                        fontWeight: "bold",
                        color: "pink",
                        transition: "all 0.3s ease-in-out",
                        mb: '20px',
                    }}
                >
                    {digit}
                </Typography>
            );
        });
    };

    /*************************************************Stop ************************************************* */
    return (<>
        {/* Stats */}
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column" },
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: { sm: "space-around" },
                mt: 0,
                ml: isMobile ? 5 : 8,
                mb: 10,
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
                    {getStyledDigits()}
                </Box>

                {/* Label */}
                <div
                    style={{
                        marginTop: window.innerWidth < 600 ? '-10px' : '-40px',
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
                    {getStyledDigits1()}
                </Box>

                {/* Label */}
                <div
                    style={{
                        marginTop: window.innerWidth < 600 ? '-10px' : '-40px',
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
                        ml: { xs: '30px', sm: '75px' },
                    }}
                >
                    {getStyledDigits2()}

                </Box>

                {/* Label */}
                <div
                    style={{
                        marginTop: window.innerWidth < 600 ? '-10px' : '-40px',
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