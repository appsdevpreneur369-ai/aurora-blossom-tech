import React from "react";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import { makeStyles } from '@mui/styles';
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import Link from 'next/link'
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import Warning from "/components/Typography/Warning.js";
// import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Divider, Typography } from "@mui/material";
import { aboutUs } from "../../data/about-us-data.js";
import SectionAboutUsCard from "./SectionAboutUsCard.js";
const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const routeToAiDetails = () => {
    Router.push("/ai-details");
  }

  const routeToContactUs = () => {
    Router.push("/contact-us");
  }

  return (
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
      </div>
    </div>
  );
}