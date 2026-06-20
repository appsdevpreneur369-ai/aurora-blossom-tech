import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import featuresStyle from "../../styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles(featuresStyle);

export default function SectionHomeLeft({ ...rest }) {
  const classes = useStyles();
  const { data } = rest;
  const { serviceTitle, serviceImageUrl } = data;

  return (
    <div className={classes.container} {...rest}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "auto",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Responsive Background Image */}
        <Box
          component="img"
          src={serviceImageUrl}
          alt="Background"
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "100vh",
            display: "block",
          }}
        />

        {/* Overlay container for centered text */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            zIndex: 1,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: { lg: "2.25rem", md: "2rem", sm: "2rem", xs: "1.5rem" },
              lineHeight: "1.2",
              textAlign: "center",
            }}
          >
            {serviceTitle}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
