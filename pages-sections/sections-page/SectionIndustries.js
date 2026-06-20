import React from "react";
import Router from "next/router";
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Typography, Divider, Button, Box } from "@mui/material";
import { services } from "../../data/services-data";
import SectionIndustriesCarousel from "./SectionIndustriesCarousel";
const useStyles = makeStyles(headersStyle);
const routeToAiDetails = () => {
  Router.push("/ai-details");
}

const routeToContactUs = () => {
  Router.push("/contact-us");
}

export default function SectionIndustries({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        <GridContainer style={{ marginBottom: '.25rem' }}>
          <GridItem md={6} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  Industries
            </h1>
            {/* <Divider style={{
              backgroundColor: '#0D47A1',
              color: '#0D47A1',
              border: '#0D47A1',
              borderRadius: '5px',
              borderTop: '0.25rem solid #0D47A1',
              width: '40%'
            }}></Divider> */}
          </GridItem>
        </GridContainer> 
        <SectionIndustriesCarousel/>
      </div>
    </div>
  );
}
