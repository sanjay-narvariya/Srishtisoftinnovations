import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Modal, TextField, Button, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';



export default function Section2() {
    // Inside your component
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className="container " >
            <div className="RentalEquipment3" >
                <div style={{ display: 'flex', flexDirection: 'row', }}>
                    <div className="equipment-title3">
                        <h1 style={{ fontWeight: 700, fontSize: '30px', fontFamily: `'Poppins', sans-serif` }}>SRISHTISOFT Infotech is the research and training wing of SRISHTIID Technologies, a Cochin-based global IT solutions provider, with the backbone of a bunch of experienced professionals in the software industry. </h1>
                        <h3 style={{ width: '90%', padding: '10px', fontSize: '18px' }}>We are inspired to offer our training expertise in iOS Application Development, Android Application Development & Web Development. Ranging with a client base of leading industry giants across the Domestic & Overseas market.</h3>
                        <h3 style={{ width: '90%', padding: '10px', fontSize: '18px' }}>SrishtiSoft offers hands-on experience through live projects, enabling candidates to solidify their knowledge in the most dynamic areas of the software industry.
                            Our training programs are designed to give trainees real-world exposure by engaging them in the development of innovative solutions for the service sector. Beyond training, SrishtiSoft also offers exceptional performers a chance to join our in-house development team, giving them a launchpad for a successful career in IT.</h3>
                    </div>

                </div>
            </div>




        </div>
    )

}