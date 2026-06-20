import React from "react";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
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
import { Button, Divider, Typography } from "@mui/material";
import { aboutUs } from "../../data/about-us-data.js";
const useStyles = makeStyles(headersStyle);

const SectionAboutUsCard = (props) => {
  const classes = useStyles();
  const { index } = props

  return (
    <Card blog style={{ backgroundColor: "#FFF", borderRadius:"1rem",  boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', minHeight:"15rem", minWidth: "15.5rem"}}
    sx={{ 
      height:{
        xs :"15rem",
        sm :"15rem",
        md :"18rem",
        lg :"21rem",
      } , 
      width: {
        xs :"15.5rem",
        sm :"15.5rem",
        md :"18.5rem",
        lg :"21.5rem" 
      }
    }}
    >
      <CardBody>
        <GridItem style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
          <img src={aboutUs[index].serviceImageUrl} alt={aboutUs[index].serviceImageUrl} style={{ width: "4.375rem", height: "4.375rem", textAlign: "center", justifyContent: "center" }} />
        </GridItem>
        <h6 className={classes.cardCategory} style={{
          fontFamily: 'Montserrat',
          fontSize: '1.5rem',
          lineHeight: '1.5rem',
          fontWeight: '600',
          textAlign: "center",
          color: '#112A46'
        }}>{aboutUs[index].serviceTitle}</h6>
          {aboutUs[index].serviceOneLiner && (<Grid container>
            <Grid item xs={12} style={{ lineHeight:"1.313rem", color:"#112A46", fontWeight:"600"}}>
              {aboutUs[index].serviceOneLiner}
            </Grid>
          </Grid>)}
          {aboutUs[index].servicePoints && (<Grid container>
            <Grid item xs={12}>
                <Grid container>
                  {aboutUs[index].servicePoints.map((e, index) => <Grid item key={index} xs={6} style={{textAlign:"center", color:"#112A46", lineHeight:"1.313rem", fontWeight:"600"}}>
                    {e}
                  </Grid>)}
                </Grid>
            </Grid>
          </Grid>)}
      </CardBody>
    </Card>

  );
}

export default SectionAboutUsCard