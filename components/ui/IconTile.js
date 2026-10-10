import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { color, radius } from "/styles/tokens.js";

const VARIANTS = {
  violet: { bg: color.violet50, fg: color.violet700, border: color.violet100 },
  teal: { bg: color.teal50, fg: color.teal700, border: color.teal100 },
  onDark: { bg: "rgba(255,255,255,0.10)", fg: color.white, border: "rgba(255,255,255,0.18)" },
};

/** Square icon badge. Accepts an MUI icon component via `icon`. Decorative. */
export default function IconTile({ icon: Icon, variant, size }) {
  const v = VARIANTS[variant];
  return (
    <Box
      aria-hidden="true"
      sx={{
        flexShrink: 0,
        width: size,
        height: size,
        borderRadius: `${radius.md}px`,
        bgcolor: v.bg,
        border: `1px solid ${v.border}`,
        color: v.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        "& svg": { fontSize: size * 0.5 },
      }}
    >
      <Icon />
    </Box>
  );
}

IconTile.defaultProps = { variant: "violet", size: 48 };

IconTile.propTypes = {
  icon: PropTypes.elementType.isRequired,
  variant: PropTypes.oneOf(["violet", "teal", "onDark"]),
  size: PropTypes.number,
};
