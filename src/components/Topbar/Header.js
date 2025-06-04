import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    MenuItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Drawer,
    Divider,
    Paper,
    Popper,
} from '@mui/material';

import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FaTwitter,
    FaInstagram,
    FaFacebookF,
    FaPhoneAlt,
    FaMoon,
    FaSun,
    FaWhatsapp,
} from 'react-icons/fa';

import './Header.css'
import { FaPhone } from "react-icons/fa6";





function Header({ darkMode, setDarkMode }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isActive, setIsActive] = useState("Home");
    const location = useLocation();

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const timeoutRef = useRef();

    const [mobileOpen, setMobileOpen] = useState(false);

    // Drawer code with submenu
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const handleMobileServicesToggle = () => setMobileServicesOpen(!mobileServicesOpen);


    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpen(false);
        }, 100);
    };

    useEffect(() => {
        const path = location.pathname;
        if (path === "/") setIsActive("Home");
        else if (path === "/about") setIsActive("About Us");
        else if (path.startsWith("/services")) setIsActive("Our Services");
        else if (path === "/testimonials") setIsActive("Testimonial");
        else if (path === "/contact") setIsActive("Contact Us");
        else if (path === "/blog") setIsActive("Blog");
    }, [location.pathname]);


    const drawer = (
        <>
            {/* Dark Mode Toggle */}
            <div className="darkmode_float">
                <IconButton
                    onClick={() => setDarkMode(!darkMode)}
                    className={darkMode ? 'ring-sun' : 'ring-moon'}
                    sx={{
                        color: 'white',
                        backgroundColor: '#182C61',
                        borderRadius: '50%',
                        p: 1.5,
                        position: 'relative',
                        zIndex: 1,
                        overflow: 'visible',
                        '&:hover': {
                            backgroundColor: '#7b61a0',
                        },
                    }}
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </IconButton>
            </div>



            <a
                href="https://api.whatsapp.com/send?phone=8504069643"
                target="_blank"
                className="whatsapp_float"
            >
                <FaWhatsapp className="whatsapp-icon" />
            </a>

            <a href="tel:+918504069643" className="call_float">
                <FaPhone />
            </a>


            <Box sx={{ textAlign: 'center', background: '#ffcccc', boxShadow: 'inherit', height: '80%' }}>
                <Typography variant="h6" sx={{ my: 2 }}>
                    SrishtiSoft
                </Typography>
                <Divider />

                <MenuItem
                    component={Link}
                    to="/"
                    onClick={handleDrawerToggle}
                    sx={{
                        borderBottom: isActive === "Home" ? '2px solid yellow' : 'none',
                        '&:hover': {
                            borderBottom: '2px solid yellow',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    Home
                </MenuItem>

                <MenuItem
                    component={Link}
                    to="/about"
                    onClick={handleDrawerToggle}
                    sx={{
                        borderBottom: isActive === "About Us" ? '2px solid yellow' : 'none',
                        '&:hover': {
                            borderBottom: '2px solid yellow',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    About Us
                </MenuItem>

                <MenuItem
                    onClick={handleMobileServicesToggle}
                    sx={{
                        borderBottom: isActive === "Our Services" || open ? '2px solid yellow' : 'none',
                        '&:hover': {
                            borderBottom: '2px solid yellow',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <span>Our Services</span>
                        {mobileServicesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </Box>
                </MenuItem>

                {mobileServicesOpen && (
                    <>
                        <MenuItem
                            component={Link}
                            to="/services/internship"
                            sx={{ pl: 4 }}
                            onClick={handleDrawerToggle}
                        >
                            <WorkIcon fontSize="large" sx={{ color: '#00b894', minWidth: 'unset', mr: 2 }} />
                            Internship
                        </MenuItem>
                        <MenuItem
                            component={Link}
                            to="/services/live-project"
                            sx={{ pl: 4 }}
                            onClick={handleDrawerToggle}
                        >
                            <CodeIcon fontSize="large" sx={{ color: '#00b894', minWidth: 'unset', mr: 2 }} />
                            Live Project
                        </MenuItem>
                    </>
                )}

                <MenuItem
                    component={Link}
                    to="/testimonials"
                    onClick={handleDrawerToggle}
                    sx={{
                        borderBottom: isActive === "Testimonial" ? '2px solid yellow' : 'none',
                        '&:hover': {
                            borderBottom: '2px solid yellow',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    Testimonial
                </MenuItem>

                <MenuItem
                    component={Link}
                    to="/contact"
                    onClick={handleDrawerToggle}
                    sx={{
                        borderBottom: isActive === "Contact Us" ? '2px solid yellow' : 'none',
                        '&:hover': {
                            borderBottom: '2px solid yellow',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    Contact Us
                </MenuItem>

                <MenuItem
                    component={Link}
                    to="/blog"
                    onClick={handleDrawerToggle}
                    sx={{
                        borderBottom: isActive === "Blog" ? '2px solid yellow' : 'none',
                        '&:hover': {
                            borderBottom: '2px solid yellow',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    Blog
                </MenuItem>

                {/* Phone Button */}
                {/* <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                    <a
                        href="tel:+918504069643"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 20px',
                            background: '#7d5fff',
                            borderRadius: '25px',
                            color: '#fff',
                            textDecoration: 'none',
                        }}
                    >
                        <FaPhoneAlt style={{ fontSize: '1.2rem', color: '#ffde59', marginRight: 8 }} />
                        8504069643
                    </a>
                </Box> */}

            </Box>
        </>
    );



    return (
        <>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginLeft: '10px',
                        marginRight: '10px',
                        alignItems: 'center',
                    }}
                >
                    {/* Logo + Name */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/logo.png" alt="Logo" style={{ height: '40px', marginRight: 10 }} />
                        <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, fontWeight: 700 }}>
                            SrishtiSoft Innovations
                        </Typography>
                    </Box>

                    {/* Hamburger for Mobile */}
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Navigation Links */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 0,
                            alignItems: 'center',
                            justifyContent: 'flex-start'
                        }}
                    >
                        <Button
                            color="inherit"
                            component={Link}
                            to="/"
                            sx={{
                                borderBottom: isActive === "Home" ? '2px solid yellow' : 'none',
                                '&:hover': {
                                    borderBottom: '2px solid yellow',
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            Home
                        </Button>

                        <Button
                            color="inherit"
                            component={Link}
                            to="/about"
                            sx={{
                                borderBottom: isActive === "About Us" ? '2px solid yellow' : 'none',
                                '&:hover': {
                                    borderBottom: '2px solid yellow',
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            About Us
                        </Button>

                        {/* Dropdown */}
                        <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Button
                                ref={anchorRef}
                                color="inherit"
                                endIcon={
                                    open ? (
                                        <ExpandLessIcon sx={{ ml: '-10px', width: '25px', height: '25px' }} />
                                    ) : (
                                        <ExpandMoreIcon sx={{ ml: '-10px', width: '25px', height: '25px' }} />
                                    )
                                }
                                sx={{
                                    borderBottom: isActive === "Our Services" || open ? '2px solid yellow' : 'none',
                                    '&:hover': {
                                        borderBottom: '2px solid yellow',
                                        backgroundColor: 'transparent',
                                    },
                                }}
                            >
                                Our Services
                            </Button>

                            <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                placement="bottom"
                                disablePortal
                                style={{ zIndex: 1300 }}
                                modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
                            >
                                <Paper
                                    sx={{
                                        mt: 1.5,
                                        backgroundColor: '#ffcccc',
                                        boxShadow: '0px 6px 20px rgba(0,0,0,0.25)',
                                        borderRadius: 2,
                                        minWidth: 300,
                                        py: 1,
                                        transform: 'translateX(-50%)',
                                        left: '50%',
                                        position: 'relative',
                                        '&::before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%) translateY(-50%)',
                                            width: 26,
                                            height: 26,
                                            bgcolor: '#ffcccc',
                                            boxShadow: '-1px -1px 1px rgba(0,0,0,0.1)',
                                            transformOrigin: '0 0',
                                            rotate: '45deg',
                                            zIndex: 0,
                                        },
                                    }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <MenuItem component={Link} to="/services/internship" onClick={() => setOpen(false)}>
                                        <ListItemIcon sx={{ minWidth: 'unset', mr: 2 }}>
                                            <WorkIcon fontSize="large" sx={{ color: '#00b894' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Internship"
                                            primaryTypographyProps={{
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                                color: '#141414',
                                            }}
                                        />
                                    </MenuItem>
                                    <MenuItem component={Link} to="/services/live-project" onClick={() => setOpen(false)}>
                                        <ListItemIcon sx={{ minWidth: 'unset', mr: 2 }}>
                                            <CodeIcon fontSize="large" sx={{ color: '#00b894' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Live Project"
                                            primaryTypographyProps={{
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                                color: '#141414',
                                            }}
                                        />
                                    </MenuItem>
                                </Paper>
                            </Popper>
                        </Box>

                        <Button
                            color="inherit"
                            component={Link}
                            to="/testimonials"
                            sx={{
                                borderBottom: isActive === "Testimonial" ? '2px solid yellow' : 'none',
                                '&:hover': {
                                    borderBottom: '2px solid yellow',
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            Testimonial
                        </Button>

                        <Button
                            color="inherit"
                            component={Link}
                            to="/contact"
                            sx={{
                                borderBottom: isActive === "Contact Us" ? '2px solid yellow' : 'none',
                                '&:hover': {
                                    borderBottom: '2px solid yellow',
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            Contact Us
                        </Button>

                        <Button
                            color="inherit"
                            component={Link}
                            to="/blog"
                            sx={{
                                borderBottom: isActive === "Blog" ? '2px solid yellow' : 'none',
                                '&:hover': {
                                    borderBottom: '2px solid yellow',
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            Blog
                        </Button>

                        {/* Phone & Theme Toggle */}
                        <Button>
                            <div className="phone-button">
                                <FaPhoneAlt style={{ fontSize: '1.5rem', color: '#941717' }} />
                                <a
                                    href="tel:+918504069643"
                                    style={{
                                        color: '#fff',
                                        fontSize: '1rem',
                                        textDecoration: 'none',
                                        marginLeft: '8px',
                                    }}
                                >
                                    8504069643
                                </a>
                            </div>
                        </Button>



                        {/* <IconButton
                            onClick={() => setDarkMode(!darkMode)}
                            sx={{
                                color: '#fff',
                                ml: '100px', // Apply margin-left here
                                display: { xs: 'none', md: 'flex' }, // Show only on desktop
                                backgroundColor: '#182C61',
                                borderRadius: '50%',
                                p: 1,
                                '&:hover': {
                                    backgroundColor: '#7b61a0', // Slightly darker on hover
                                    transform: 'scale(1.2)',
                                },
                                animation: 'pulse-scale 2s infinite', // Pulse animation applied
                                '@keyframes pulse-scale': {
                                    '0%': {
                                        transform: 'scale(1)',
                                    },
                                    '50%': {
                                        transform: 'scale(1.15)',
                                    },
                                    '100%': {
                                        transform: 'scale(1)',
                                    },
                                },
                            }}
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </IconButton> */}



                        <IconButton
                            onClick={() => setDarkMode(!darkMode)}
                            sx={{
                                color: '#fff',
                                ml: '100px',
                                display: { xs: 'none', md: 'flex' },
                                backgroundColor: '#182C61',
                                borderRadius: '50%',
                                p: 1,
                                position: 'relative',
                                zIndex: 1,
                                overflow: 'visible',

                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    width: '80%',
                                    height: '80%',
                                    border: `2px solid ${darkMode ? '#fff' : '#fff'
                                        }`,
                                    borderRadius: '50%',
                                    transform: 'translate(-50%, -50%) scale(1)',
                                    opacity: 0,
                                    animation: 'ringPulse 2s infinite ease-out',
                                    zIndex: -1,
                                },

                                '&:hover': {
                                    backgroundColor: '#7b61a0',
                                },

                                '@keyframes ringPulse': {
                                    '0%': {
                                        transform: 'translate(-50%, -50%) scale(1)',
                                        opacity: 0.6,
                                    },
                                    '100%': {
                                        transform: 'translate(-50%, -50%) scale(2.2)',
                                        opacity: 0,
                                    },
                                },
                            }}
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </IconButton>





                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}

export default Header;
