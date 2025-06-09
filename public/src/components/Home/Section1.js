import React, { useEffect, useState } from "react";
import "./Section1.css";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Box, Modal, TextField, Button, IconButton, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';


export default function Section1() {

            const navigate = useNavigate();
            const [categoryList, setCategoryList] = useState([]);

  
             const photos=[[1,'Adarsh Saxena','Frontend Developer'],[2,'Pooja Gupta','Senior Software Developer'],[3,'CChaya Mohar','Software Developer'],[4,'Praduman Singh','SDE'],[5,'Shailendra Pal','Python(Backend)'],[6,'Aman Tiwari','Backend Developer'],[7,'Deepak Kumar','SalesForce'],[8,'Mukesh Singh','Frontend Developer'],[9,'Vishnu Shau','Senior Frontend Developer'],[10,'Suresh Prajapati', 'UI/UX'],[11,'Gaurav Kumar','Backend Developer']]

    useEffect(() => {
        const handleFocus = () => {
            window.location.reload(); // 👈 Page refresh on window focus
        };

        window.addEventListener("focus", handleFocus);
        return () => {
            window.removeEventListener("focus", handleFocus);
        };
    }, []);


    return (
        <div className="RentalEquipment" >
            <div className="row">
                <div className="equipment-title" >
                    <h3 style={{background:'#52ade5', borderRadius:'15px',width:'90px',padding:'5px',fontSize:'15px'}}>Spotlight</h3>
                    <h1>SUCCESS STORIES  🎉 </h1>
                </div>

                {/* Auto-scrolling Equipment Cards */}
                <div className="equipment-slider" style={{marginTop: '10px'}}>
                    <div className="equipment-track">
                        {[...photos,...photos,...photos].map((item, i) => (
                            <div key={i} className="equipment-card-wrapper">
                                <div className="card equipment-card">
                                    <div
                                        className="equipment-img"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <img
                                            src={`/images/${item[0]}.jpg`}
                                            className="card-img-top"
                                            alt={item[1]}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="card-title">{`${item[1]}`}</h2>
                                        <h4 className="card-title1">{`${item[2]}`}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

};