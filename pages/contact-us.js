/*eslint-disable*/
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Divider, Typography } from "@mui/material";
import Footer from "/components/Footer/Footer.js";
import Button from "/components/CustomButtons/Button.js";

const useStyles = makeStyles(headersStyle);

export default function ContactUsPage() {
  const classes = useStyles();
  return (
    <React.Fragment style={{ backgroundColor: "#FFFFFF" }}>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <div style={{ marginTop: "5em", backgroundColor: "#FFFFFF" }}>
        <GridContainer style={{ marginBottom: '.25rem' }}>
          <GridItem md={12} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  Contact Us
            </h1>
            {/* <Divider style={{
              backgroundColor: '#0D47A1',
              color: '#0D47A1',
              border: '#0D47A1',
              borderRadius: '5px',
              borderTop: '0.25rem solid #0D47A1',
              width: '25%'
            }}></Divider> */}
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem md={6} style={{ color: '#112A46', marginTop: "5rem" }}>
            <Typography style={{ fontWeight: "600", fontFamily: '"Montserrat"' }}>
              <GridItem xs={12} sm={12} md={12} style={{ textAlign: "left", justifyContent: "center", alignItems: "center", marginTop: "5rem" }}>
                What Does Your Business Need?
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{ textAlign: "left", justifyContent: "center", alignItems: "center" }}>
                <Typography style={{ fontWeight: "600", fontFamily: '"Montserrat"' }}>Learn how Aurora Blossom Tech can move your technology and business strategy forward. Please contact us with any inquiries or requests to help you grow your business.</Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{ textAlign: "left", justifyContent: "center", alignItems: "center" }}>
                <Typography style={{ fontWeight: "500", fontFamily: '"Montserrat"' }}>Please contact us with any inquiries or requests to help you grow your business.</Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{ textAlign: "left", justifyContent: "center", alignItems: "center" }}>
                <Typography style={{ fontWeight: "500", fontFamily: '"Montserrat"' }}>(+91) 2244451109<br />Mon - Fri, 8:00-22:00</Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{ textAlign: "left", justifyContent: "center", alignItems: "center" }}>
                <Typography style={{ fontWeight: "500", fontFamily: '"Montserrat"' }}>contact@aurora-blossom.com<br />hr@aurora-blossom.com<br /></Typography>
              </GridItem>
            </Typography>
          </GridItem>
          <GridItem md={6} style={{ color: '#112A46', marginTop: "5rem" }}>
            <GridContainer>
              <GridItem md={12} style={{ textAlign: "center", justifyContent: "center" }} >
                <img
                  src="img/resized_imgs/nl-logo.png"
                  alt="ai pic"
                  style={{ width: '50%' }}
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
       <Footer
          className={classes.footer}
          content={
            <div>
              {/* <Divider /> */}
              <div className={classes.container}>
                <GridContainer style={{ alignItems: "baseline" }}>
                  <GridItem md={12}>
                    <h4
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "0.75rem",
                        fontWeight: "500",
                        color: "#000",
                      }}
                    >
                      © 2025 Aurora Blossom Tech. All rights reserved.
                    </h4>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          }
        />
      </div>
    </React.Fragment>
  );
}
