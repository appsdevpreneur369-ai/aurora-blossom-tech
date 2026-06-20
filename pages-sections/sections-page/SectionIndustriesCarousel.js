/*eslint-disable*/
import React from "react";
import Router from "next/router";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import Carousel from "react-slick";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Parallax from "/components/Parallax/Parallax.js";
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import featuresStyle from "/styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";

import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardFooter from "/components/Card/CardFooter.js";
import Button from "/components/CustomButtons/Button.js";
import { industries } from "../../data/industries-data";
import { Typography } from "@mui/material";
import SectionIndustriesCarousalCard from "./SectionIndustriesCarousalCard";


const useStyles = makeStyles(featuresStyle);

export default function SectionIndustriesCarousel() {
  const classes = useStyles();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  const showAllServices = ()=>{
    Router.push("/service-details");
  }

  const routeToContactUs = ()=>{
    Router.push("/sections#contactUs");
  }

  return (
    <>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <div className={classes.container}>
        <Carousel {...settings}>
          <div >
            <GridContainer>
             <SectionIndustriesCarousalCard index ={0}/>
             <SectionIndustriesCarousalCard index ={1}/>
             <SectionIndustriesCarousalCard index ={2}/>
            </GridContainer>
          </div>
          <div >
            <GridContainer>
              <SectionIndustriesCarousalCard index ={3}/>
             <SectionIndustriesCarousalCard index ={4}/>
             <SectionIndustriesCarousalCard index ={5}/>
            </GridContainer>
          </div>
          <div >
            <GridContainer>
            <SectionIndustriesCarousalCard index ={6}/>
            <SectionIndustriesCarousalCard index ={7}/>
            </GridContainer>
          </div>
        </Carousel>
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
                color: '#112A46',
                background: '#0D47A1',
                textAlign: "left",
                margin: '1em',
                fontSize : "1.5rem",
                boxShadow: "none",
                borderRadius:"0px"
              }}
              onClick={routeToContactUs}
            >
              Contact Us
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
                color: '#112A46',
                textTransform: "none",
                fontFamily:"Montserrat",
                fontSize:"1.5rem",
                borderColor: 'black',
                border: '2px solid',
                background: '#FFF',
                textAlign: "right",
                boxShadow: "none",
                borderRadius:"0px",
                fontWeight : "600"
              }}
              onClick={showAllServices}
            >
              Explore Services
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}
