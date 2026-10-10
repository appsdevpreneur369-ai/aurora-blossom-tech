import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import IconTile from "./IconTile.js";
import { color, font, motion, radius, shadow } from "/styles/tokens.js";

/** Bordered card with icon, title and description — the shared feature pattern. */
export default function FeatureCard({ icon, title, description, headingComponent, iconVariant, children }) {
  return (
    <Box
      sx={{
        height: "100%",
        p: { xs: 3, md: 3.5 },
        borderRadius: `${radius.lg}px`,
        bgcolor: color.white,
        border: `1px solid ${color.slate200}`,
        boxShadow: shadow.xs,
        transition: `border-color ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}, transform ${motion.base} ${motion.ease}`,
        "&:hover": {
          borderColor: color.violet300,
          boxShadow: shadow.md,
          transform: "translateY(-2px)",
        },
      }}
    >
      {icon && (
        <Box sx={{ mb: 2.5 }}>
          <IconTile icon={icon} variant={iconVariant} />
        </Box>
      )}
      <Typography
        component={headingComponent}
        sx={{
          fontFamily: font.display,
          fontWeight: 700,
          fontSize: "1.0625rem",
          lineHeight: 1.35,
          color: color.ink2,
          m: 0,
          mb: 1,
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography sx={{ color: color.slate600, fontSize: "0.9375rem", lineHeight: 1.7 }}>
          {description}
        </Typography>
      )}
      {children}
    </Box>
  );
}

FeatureCard.defaultProps = { headingComponent: "h3", iconVariant: "violet" };

FeatureCard.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  headingComponent: PropTypes.elementType,
  iconVariant: PropTypes.oneOf(["violet", "teal", "onDark"]),
  children: PropTypes.node,
};
