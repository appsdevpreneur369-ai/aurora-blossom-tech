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
import { services } from "../../data/services-data";
import { Typography } from "@mui/material";

const useStyles = makeStyles(featuresStyle);

const SectionServicesCarousalCard = ({ index }) => {
    return (
        <GridItem xs={12} sm={6} md={4}>
            {/* <Card plain blog style={{ background: "#0D47A1", borderColor: "#0D47A1", borderStyle: "solid", borderWidth: "medium" }}> */}
            <Card plain blog>
                <CardHeader plain image>
                    <img src={services[index].serviceImageUrl} alt="..." style={{ height: "15rem"}} />
                </CardHeader>
                <CardBody plain style={{marginBottom: "0.1rem"}}>
                    <Typography style={{
                        fontFamily: 'Montserrat',
                        fontSize: '1.125rem',
                        lineHeight: '1.5rem',
                        fontWeight: '600',
                        textAlign: "left",
                        color: '#212121',
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        marginBottom:"0.25rem"
                    }}>
                        {services[index].serviceTitle}
                    </Typography>
                    <Typography style={{
                        fontFamily: 'Montserrat',
                        fontSize: '1rem',
                        lineHeight: '1.5rem',
                        fontWeight: '500',
                        textAlign: "left",
                        color: '#212121',
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                    }}>
                        {services[index].serviceOneLiner}
                    </Typography>
                </CardBody>
            </Card>
        </GridItem>
    );
}

export default SectionServicesCarousalCard

