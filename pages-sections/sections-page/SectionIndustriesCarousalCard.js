/*eslint-disable*/
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import featuresStyle from "/styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";

import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardFooter from "/components/Card/CardFooter.js";
import Button from "/components/CustomButtons/Button.js";
import { industries } from "../../data/industries-data";
import { Typography } from "@mui/material";

const useStyles = makeStyles(featuresStyle);

const SectionIndustriesCarousalCard = (props)=> { 
    const classes = useStyles();
    const {index} = props
    return (
        <GridItem xs={12} sm={6} md={4}>
            <Card plain blog style={{ background: "#0D47A1", borderColor: "#0D47A1", borderStyle: "solid", borderWidth: "medium" }}>
                <CardHeader plain image>
                    <img src={industries[index].serviceImageUrl} alt="..." style={{ height: "20rem", padding: "1rem", boxShadow: "none" }} />
                </CardHeader>
                <CardBody plain>
                    <Typography style={{
                        fontFamily: 'Montserrat',
                        fontSize: '1.125rem',
                        lineHeight: '1.719rem',
                        fontWeight: '600',
                        textAlign: "left",
                        color: '#212121',
                        padding: "1rem"
                    }}>
                        {industries[index].serviceTitle}
                    </Typography>
                    <Typography style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: '0.875rem',
                        lineHeight: '1.719rem',
                        fontWeight: '500',
                        textAlign: "left",
                        color: '#212121',
                        padding: "1rem"
                    }}>
                        {industries[index].serviceOneLiner}
                    </Typography>
                </CardBody>
            </Card>
        </GridItem>
    );
}

export default SectionIndustriesCarousalCard

