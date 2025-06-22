import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';

export default function Section1() {
    const [expanded, setExpanded] = useState('panel1');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container fluid className="p-4">
            <Row>
                {/* Left Side Content */}
                <Col xs={12} md={8} className="mb-4" style={{ paddingRight: isMobile ? '10px' : '100px' }}>
                    <Box>
                        <Typography variant="h5" fontWeight="bold" mb={2} >
                            Learn to code next Build a mobile application next Develop a website
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            SRISHTISOFT is a way proud to mention that the Job oriented IT Training is inclusive of platforms such as Mobile Application Development and Web Development that have wider scope in the prevailing and forthcoming IT Job Market. These platforms are picked after a thorough research and analysis is based upon the existing and prospective IT industry in mind. Android & iOS Training provides a set of classes that aim to help you build great mobile apps for Android & iOS. Our experienced app developers explain the steps required to solve a problem or implement a feature using code snippets and sample code for you to use in your apps. We work with a crew of highly skilled professionals who are dedicated to expanding the talent of the students. We have designed our curriculum based on advanced technology and constantly being updated with the latest developments in Mobile App field. This is how we have become an expert in iOS & Android training in Bharatpur.
                        </Typography>
                    </Box>
                </Col>

                {/* Right Side Accordions */}
                <Col xs={12} md={4}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ mb: 2 }} >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'#22a6b3'}}/>} sx={{backgroundColor:'#f5f6fa',
                            minHeight: 64, // increase height (default is ~48)
                            '& .MuiAccordionSummary-content': {
                                my: 1, // vertical padding inside summary content
                            },
                        }} >
                            <Typography color="#3498db" fontWeight="bold">Develop a website</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You’ll learn the basics to build a website in MERN with an introduction to Framework, CMS, text editors, basic HTML tabs, and advanced HTML skills.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ mb: 2 }} >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'#22a6b3'}} />} sx={{backgroundColor:'#f5f6fa',
                            minHeight: 64, // increase height (default is ~48)
                            '& .MuiAccordionSummary-content': {
                                my: 1, // vertical padding inside summary content
                            },
                        }}>
                            <Typography color="#3498db" fontWeight="bold">Build a mobile application</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Learn how to build apps for Android & iOS using practical code and real-world examples explained step-by-step by experts.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ mb: 2 }} >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'#22a6b3'}} />} sx={{backgroundColor:'#f5f6fa',
                            minHeight: 64, // increase height (default is ~48)
                            '& .MuiAccordionSummary-content': {
                                my: 1, // vertical padding inside summary content
                            },
                        }}>
                            <Typography color="#3498db" fontWeight="bold">Learn to code</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Get started with fundamental programming concepts and problem-solving skills essential for software development careers.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}
