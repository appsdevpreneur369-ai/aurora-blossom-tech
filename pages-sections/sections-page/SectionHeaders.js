import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Share from "@mui/icons-material/Share";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
// core components
import Header from "/components/Header/Header.js";
import Button from "/components/CustomButtons/Button.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CustomInput from "/components/CustomInput/CustomInput.js";

import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <div className={classes.sectionBlank} id="blanksection" />
       {/* HEADER 1 START */}
       <div>
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: "url('/img/bg111.jpg')" }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Aurora Blossom</h1>
                <h4>
                  There{"'"}s no doubt that Tesla is delighted with the
                  interest, but the data also raises a few questions. How long
                  will it take for Tesla to fulfill all those extra orders?
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
