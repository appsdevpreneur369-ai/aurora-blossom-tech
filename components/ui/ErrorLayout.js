import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { gridPattern } from "./PageHero.js";
import { color, font, gradient, layout } from "/styles/tokens.js";

/** Centred status message on the dark brand surface (404 / error pages). */
export default function ErrorLayout({ code, title, children }) {
  return (
    <Box
      component="main"
      id="main-content"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: gradient.night,
        color: color.white,
        textAlign: "center",
        px: layout.gutter,
        pt: "120px",
        pb: 10,
      }}
    >
      <Box aria-hidden="true" sx={gridPattern} />
      <Box sx={{ position: "relative", maxWidth: 640 }}>
        <Typography
          component="h1"
          sx={{
            fontFamily: font.display,
            fontWeight: 800,
            fontSize: { xs: "6rem", md: "9rem" },
            lineHeight: 1,
            letterSpacing: "-0.04em",
            m: 0,
            background: `linear-gradient(90deg, ${color.violet300} 0%, ${color.teal400} 100%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {code}
        </Typography>
        {title && (
          <Typography component="h2" sx={{ fontFamily: font.display, fontWeight: 800, fontSize: { xs: "1.5rem", md: "2rem" }, mt: 2, mb: 0 }}>
            {title}
          </Typography>
        )}
        {children}
      </Box>
    </Box>
  );
}

ErrorLayout.propTypes = { code: PropTypes.node.isRequired, title: PropTypes.node, children: PropTypes.node };
