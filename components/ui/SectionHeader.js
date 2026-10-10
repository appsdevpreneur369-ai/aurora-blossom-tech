import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { color, font, gradient, type } from "/styles/tokens.js";

/**
 * Heading block used at the top of every section: accent rule, title, lead.
 * Renders existing copy only — no eyebrow text is introduced.
 */
export default function SectionHeader({ id, title, lead, align, onDark, headingComponent, children, sx }) {
  const centered = align === "center";
  return (
    <Box
      sx={{
        textAlign: centered ? "center" : "left",
        maxWidth: centered ? 720 : 760,
        mx: centered ? "auto" : 0,
        mb: { xs: 5, md: 7 },
        ...sx,
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          width: 48,
          height: 4,
          borderRadius: 2,
          background: onDark ? `linear-gradient(90deg, ${color.violet300}, ${color.teal400})` : gradient.brand,
          mb: 2.5,
          mx: centered ? "auto" : 0,
        }}
      />
      <Typography
        id={id}
        variant="h2"
        component={headingComponent}
        sx={{
          fontFamily: font.display,
          fontWeight: 800,
          fontSize: type.h2,
          lineHeight: 1.15,
          color: onDark ? color.white : color.ink2,
          m: 0,
        }}
      >
        {title}
      </Typography>
      {lead && (
        <Typography
          sx={{
            mt: 2,
            fontSize: type.lead,
            lineHeight: 1.7,
            color: onDark ? "rgba(255,255,255,0.78)" : color.slate600,
          }}
        >
          {lead}
        </Typography>
      )}
      {children}
    </Box>
  );
}

SectionHeader.defaultProps = {
  align: "center",
  onDark: false,
  headingComponent: "h2",
};

SectionHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
  lead: PropTypes.node,
  align: PropTypes.oneOf(["center", "left"]),
  onDark: PropTypes.bool,
  headingComponent: PropTypes.elementType,
  children: PropTypes.node,
  sx: PropTypes.object,
};
