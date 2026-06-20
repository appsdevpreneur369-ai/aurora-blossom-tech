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
import SectionServicesRight from "../pages-sections/components/SectionServicesRight.js";
import SectionServicesLeft from "../pages-sections/components/SectionServicesLeft.js";
import { services } from "../data/services-data.js";

const useStyles = makeStyles(headersStyle);

export default function ServicesDetails({ ...rest }) {
  const classes = useStyles();
  return (
    <> <h3>Services   </h3>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <div className={classes.container} style={{ marginTop: "5.5em", backgroundColor:"" }}>
        <GridContainer style={{ marginBottom: '.25rem' }}>
          <GridItem md={6} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: "black",
            }}>  Services
            </h1>
          </GridItem>
        </GridContainer>
        {services && services[0] && (<GridContainer id='0' style={{ marginBottom: '.25rem' }}>
          <SectionServicesLeft data={services[0]} />
        </GridContainer>)}
        {services && services[1] && (<GridContainer id='1' style={{ marginBottom: '.25rem' }}>
          <SectionServicesRight data={services[1]} />
        </GridContainer>)}
        {services && services[2] && (<GridContainer id='2' style={{ marginBottom: '.25rem' }}>
          <SectionServicesLeft data={services[2]} />
        </GridContainer>)}
      </div>
    </>
  );
}
