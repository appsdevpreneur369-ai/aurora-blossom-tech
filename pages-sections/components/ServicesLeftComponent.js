import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import Chat from "@mui/icons-material/Chat";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import Fingerprint from "@mui/icons-material/Fingerprint";
import GroupWork from "@mui/icons-material/GroupWork";
import Airplay from "@mui/icons-material/Airplay";
import LocationOn from "@mui/icons-material/LocationOn";
import Extension from "@mui/icons-material/Extension";
import ChildFriendly from "@mui/icons-material/ChildFriendly";
import WatchLater from "@mui/icons-material/WatchLater";
import Code from "@mui/icons-material/Code";
import FormatPaint from "@mui/icons-material/FormatPaint";
import Dashboard from "@mui/icons-material/Dashboard";
import ViewCarousel from "@mui/icons-material/ViewCarousel";
import AccessTime from "@mui/icons-material/AccessTime";
import AttachMoney from "@mui/icons-material/AttachMoney";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import featuresStyle from "/styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";
import { Button, Divider, Typography } from "@mui/material";

const useStyles = makeStyles(featuresStyle);

export default function ServicesLeftComponent({ ...rest }) {
    const classes = useStyles();
    const {data }  = rest
    
    return (
        <div className="cd-section" {...rest}>
            <div className={classes.container}>
                {/* Services Left START */}
                {/* <div className={classes.features3}>
                    <GridContainer>
                        <GridItem xs={12} sm={4} md={4}>
                            <div className={classes.phoneContainer}>
                                <img src="img/latest/ai-bg-1.jpg" alt="..." style={{
                                    width: '20rem', height: "30rem", width: '100%',
                                    minWidth: '15rem', marginTop: "30px"
                                }} />
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={8} md={8}>
                            <h1 style={{
                                fontFamily: 'Montserrat',
                                fontSize: '2rem',
                                lineHeight: '2rem',
                                fontWeight: '600',
                                textAlign: "left",
                                color: '#112A46'
                            }}>Enterprise Application- Packaged Software and Open Source</h1>
                            <Divider style={{
                                backgroundColor: '#0D47A1',
                                color: '#0D47A1',
                                border: '#0D47A1',
                                borderRadius: '5px',
                                borderTop: '0.25rem solid #0D47A1',
                                width: '40%'
                            }}></Divider>
                            <Typography component="div" style={{ textAlign: "left" }}>
                                <ul>
                                    <li><h5>We provide  ERP –SAP/ Oracle Apps/ Open Source ERP consulting, implementation, and maintenance services leveraging our 100+ ERP experts. We bring deep business understanding to enable the transformation, keeping the business user at the centre.</h5></li>
                                    <li><h5>In light of Oracle and SAP's recent announcements about phasing out standard support for older versions of their enterprise resource planning (ERP) suites in the coming years, executives whose businesses rely on these systems are seizing the opportunity to reassess their ERP programs</h5></li>
                                    <li><h5>Leverage Our  Skills on S4 HANA for general industries and expertise in areas of SAP S/4 for Fashion and Retail to get you the unfair advantage.</h5></li>
                                    <li><h5>We provide SAP consulting, implementation, and maintenance services leveraging our 100+ SAP experts. We bring deep business understanding across SAP modules to enable the transformation, keeping the business user at the centre.</h5></li>
                                </ul>
                            </Typography>
                            <GridContainer style={{ marginBottom: "2rem" }}>
                                <GridItem xs={12} sm={12} md={12} style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                                    <Button
                                        size="medium"
                                        variant="contained"
                                        type="submit"
                                        style={{
                                            textTransform: "none",
                                            color: '#112A46',
                                            background: '#0D47A1',
                                            textAlign: "left",
                                            marginLeft: '2em',
                                            marginRight: '2em',

                                            width: "10rem",
                                        }}
                                        onClick={() => {}}
                                    >
                                        Contact Us
                                    </Button>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                    </GridContainer>
                </div> */}
            </div>
        </div>
    );
}
