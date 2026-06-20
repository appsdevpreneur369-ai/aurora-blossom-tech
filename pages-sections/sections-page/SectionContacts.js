import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
// @mui/icons-material
import PinDrop from "@mui/icons-material/PinDrop";
import Phone from "@mui/icons-material/Phone";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import contactsStyle from "/styles/jss/novel-logiks/pages/sectionsSections/contactsStyle.js";
import { Typography } from "@mui/material";

const useStyles = makeStyles(contactsStyle);

export default function SectionContacts({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Contact us 1 START */}
      <div
        className={classes.contacts + " " + classes.section}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} >
              <div className={classes.container}>
                <GridContainer
                  className={classes.gridContainer}
                  style={{ margin: "0!important" }}
                >
                  <GridItem xs={12} sm={12} className={classes.gridItem} style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                    <h2 className={classes.title} style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>Get in Touch</h2>
                  </GridItem>
                  <GridItem xs={12} sm={12} className={classes.gridItem} style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                    <span >
                      <Typography className={classes.infoArea} style={{ color: "white", fontWeight: "700", fontFamily: '"Montserrat"' }}>What Does Your Business Need?</Typography>
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={12} className={classes.gridItem} style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                    <span >
                      <Typography className={classes.infoArea} style={{ color: "white", fontWeight: "700", fontFamily: '"Montserrat"' }}>Learn how Aurora Blossom Tech can move your technology and business strategy forward. Please contact us with any inquiries or requests to help you grow your business.</Typography>
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={12} className={classes.gridItem} style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                    <span >
                      <Typography className={classes.infoArea} style={{ color: "white", fontWeight: "700", fontFamily: '"Montserrat"' }}>You need a partner. We're here to help</Typography>
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={12} className={classes.gridItem} style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                    <span >
                      <Typography className={classes.infoArea} style={{ color: "white", fontWeight: "700", fontFamily: '"Montserrat"' }}>(+91) 2244451109<br />Mon - Fri, 8:00-22:00</Typography>
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={12} className={classes.gridItem} style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                    <span >
                      <Typography className={classes.infoArea} style={{ color: "white", fontWeight: "700", fontFamily: '"Montserrat"' }}>contact@aurora-blossom.com<br />hr@aurora-blossom.com<br /></Typography>
                    </span>
                  </GridItem>
                </GridContainer>

              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Contact us 1 END */}
    </div>
  );
}
