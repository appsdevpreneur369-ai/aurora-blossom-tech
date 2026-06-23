import React from "react";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import { makeStyles } from '@mui/styles';
import styles from "../../styles/jss/novel-logiks/pages/componentsSections/footerStyle.js";
import { Typography, Divider, Button, Box } from "@mui/material";
import Footer from "../../components/Footer/Footer";

const useStyles = makeStyles(styles);

const SectionFooter = () => {
  const classes = useStyles();

  return (
      <div  >
        <GridContainer style={{ marginBottom: '2rem', marginTop: '4rem' }}>
          <GridItem md={12} style={{ color: '#112A46' }}>
            <Footer
              className={classes.footer}
              content={
                <div>
                  <div className={classes.left}>
                    <Button
                      href=""
                      target="_blank"
                      color="twitter"
                      justIcon
                      simple
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      href=""
                      target="_blank"
                      color="instagram"
                      justIcon
                      simple
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                    <Button href=""
                      justIcon simple color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
                  </div>
                  <div className={classes.right}>
                    <Typography style={{ color: "gray" }}>All rights reserved by Aurora Blossom © 2025</Typography>
                  </div>
                </div>
              }
            />
          </GridItem>
        </GridContainer>
        {/* <GridContainer style={{ marginBottom: '2rem', marginTop: '4rem' }}>
          <GridItem md={6} style={{ color: '#112A46' }}>

          </GridItem>
        </GridContainer> */}
      </div>
  );
}
export default SectionFooter
