import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import featuresStyle from "../../styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";
import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const useStyles = makeStyles(featuresStyle);

export default function SectionHomeRight({ ...rest }) {
  const classes = useStyles();
  const { data } = rest;
  const { serviceTitle, serviceImageUrl } = data;

  return (
    <div className={classes.container} {...rest} style={{ margin: "0.125rem" }}>
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

        {/* Overlay with centered animated gradient text */}
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
          <TypeAnimation
            sequence={[
              "Delivery Driven by outcomes bettering expected, Speed on time, Customer Centric Culture.",
              "End-to end IT service expertise enabling better managed integrated portfolios.",
            ]}
            speed={25}
            repeat={Infinity}
            style={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: "2.5em",
              lineHeight: "2.75em",
              background: "linear-gradient(90deg, #F4D03F, #16A085)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              display: "inline-block",
              maxWidth: "90%",
            }}
          />
        </Box>
      </Box>
    </div>
  );
}
