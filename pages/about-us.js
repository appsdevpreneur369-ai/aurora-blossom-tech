import React from "react";
import Router from "next/router";
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import headersStyle from "../styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Typography, Divider, Box } from "@mui/material";
import Button from "/components/CustomButtons/Button.js";
import { aboutUs } from "../data/about-us-data.js";
import SectionAboutUsCard from "../pages-sections/sections-page/SectionAboutUsCard.js";

const useStyles = makeStyles(headersStyle);

const routeToAiDetails = () => {
  Router.push("/ai-details");
}

const routeToContactUs = () => {
  Router.push("/contact-us");
}

export default function AboutUs({ ...rest }) {
  const classes = useStyles();
  <div className="cd-section" {...rest} style={{background : "#0D47A1"}}>
  {/* HEADER 1 START */}

  <div className={classes.container}>
    <GridContainer >
      <GridItem xs={12} sm={4} md={4} style={{ marginTop: "2rem" }}>
        <SectionAboutUsCard index={0} />
      </GridItem>
      <GridItem xs={12} sm={4} md={4}>
        <SectionAboutUsCard index={1} />
      </GridItem>
      <GridItem xs={12} sm={4} md={4} style={{ marginTop: "2rem" }}>
        <SectionAboutUsCard index={2} />
      </GridItem>
    </GridContainer>
     {/*  CONTACT US AND SEE ALL SERVICES */}
     <GridContainer style={{ marginBottom: "2rem", textAlign: "center" }}>
      <GridItem xs={12} sm={12} md={12}>
        <Button
          size="medium"
          variant="contained"
          type="submit"
          sx={{
            width: {
              lg: '21rem',
              md: '21rem',
              sm: '15rem',
              xs: '15rem'
            },
            height:{
              lg: '4rem',
              md: '4rem',
              sm: '3rem',
              xs: '3rem' 
            },
            fontSize : {
              lg: '1.5rem',
              md: '1.5rem',
              sm: '1.25rem',
              xs: '1.125rem' 
          }
          }}

          style={{
            textTransform: "none",
            fontFamily:"Montserrat",
            fontSize:"1.5rem",
            fontWeight : "600",
            color: '#FFF',
            background: '#0D47A1',
            textAlign: "left",
            margin: '1em',
            fontSize : "1.5rem",
            boxShadow: "none",
            borderRadius:"0px"
          }}
          onClick={()=>{}}
        >
          More About Us
        </Button>
        <Button
          size="medium"
          variant="contained"
          type="submit"
          sx={{
            width: {
              lg: '21rem',
              md: '21rem',
              sm: '15rem',
              xs: '15rem'
            },
            height:{
              lg: '4rem',
              md: '4rem',
              sm: '3rem',
              xs: '3rem' 
            },
            fontSize : {
              lg: '1.5rem',
              md: '1.5rem',
              sm: '1.25rem',
              xs: '1.125rem' 
          }
          }}

          style={{
            color: '#FFF',
            textTransform: "none",
            fontFamily:"Montserrat",
            fontSize:"1.5rem",
            borderColor: 'black',
            border: '2px solid',
            background: '#0D47A1',
            textAlign: "right",
            boxShadow: "none",
            borderRadius:"0px",
            fontWeight : "600"
          }}
          onClick={()=>{}}
        >
          Meet Our Team
        </Button>
      </GridItem>
    </GridContainer>
  </div>
</div>
}
