import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { color, gradient, layout } from "/styles/tokens.js";

const TONES = {
  default: { bgcolor: color.white, color: color.ink2 },
  subtle: { bgcolor: color.slate50, color: color.ink2 },
  tint: { background: `linear-gradient(180deg, ${color.violet50} 0%, ${color.white} 100%)`, color: color.ink2 },
  dark: { background: gradient.night, color: color.white },
};

/**
 * Page section with consistent vertical rhythm and a centred content container.
 * Extra props (id, className, aria-*) are forwarded to the <section> element.
 */
export default function Section({ tone, width, children, sx, innerSx, component, py, ...rest }) {
  return (
    <Box
      component={component}
      sx={{ position: "relative", ...TONES[tone], ...sx }}
      {...rest}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: width === "narrow" ? layout.narrow : layout.maxWidth,
          mx: "auto",
          px: layout.gutter,
          py: py || layout.sectionY,
          ...innerSx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

Section.defaultProps = {
  tone: "default",
  width: "default",
  component: "section",
};

Section.propTypes = {
  tone: PropTypes.oneOf(["default", "subtle", "tint", "dark"]),
  width: PropTypes.oneOf(["default", "narrow"]),
  component: PropTypes.elementType,
  children: PropTypes.node,
  sx: PropTypes.object,
  innerSx: PropTypes.object,
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};
