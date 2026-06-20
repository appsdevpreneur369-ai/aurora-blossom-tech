import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import featuresStyle from "/styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";
import { Button, Divider, Typography } from "@mui/material";

const useStyles = makeStyles(featuresStyle);

export default function SectionServicesRight({ ...rest }) {
  const classes = useStyles();
  const { data } = rest
  const { serviceTitle, serviceImageUrl, servicePoints } = data

  return (
      <div className={classes.container} {...rest}>
          <GridContainer style={{ borderRadius:"5px"}}>
            <GridItem xs={12} sm={6} md={6}>
            <h1 style={{
                            fontFamily: 'Montserrat',
                            fontSize: '1rem',
                            lineHeight: '1.25rem',
                            fontWeight: '600',
                            textAlign: "left",
                            color: '#112A46'
                        }}>{serviceTitle}</h1>
              <Typography component="div" style={{ textAlign: "left" }}>
                <ul>
                  {servicePoints.map((each, idx) => <li key={idx}><Typography style={{color:"#091133"}}>{each}</Typography></li>)}
                </ul>
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.phoneContainer} style={{textAlign:"center"}} >
              <img src={serviceImageUrl} alt="..." style={{
                                marginTop: ".5rem", marginBottom: ".5rem",
                                width: '20rem', height: "20rem",
                                minWidth: '15rem', borderRadius: "5px", objectFit:"cover",
                                boxShadow: '0 5px 20px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px rgba(156, 39, 176, 0.6)'
                            }} />
              </div>
            </GridItem>
          </GridContainer>
      </div>
  );
}
