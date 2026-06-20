import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import BusinessIcon from '@mui/icons-material/Business';
import featuresStyle from "/styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";

const useStyles = makeStyles(featuresStyle);

export default function SectionOffices({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
      </div>
      <div
        className={classes.features5}
        style={{ backgroundImage: "url('/img/latest/our-offices.jpg')" }}
      >
        <GridContainer className={classes.margin0}>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h2 className={classes.title}>Our Offices</h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer
              className={classes.gridContainer}
              style={{ margin: "0!important" }}
            >
              <GridItem xs={12}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={BusinessIcon}
                  title="India"
                  description={
                    <p>
                      Aurora Blossom Tech Pvt Ltd<br />
                      Opp. ISB, Gachibowli Main Road, Hyderabad, TS 500075
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </div>
    </div>
  );
}
