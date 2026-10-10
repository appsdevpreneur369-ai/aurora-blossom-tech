import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { color, font } from "/styles/tokens.js";

/** Logo + wordmark. The logo artwork has a white ground, so it sits on a white tile. */
export default function BrandMark({ size, onDark }) {
  return (
    <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 1.25 }}>
      <Box
        component="span"
        sx={{
          width: size,
          height: size,
          flexShrink: 0,
          borderRadius: "10px",
          bgcolor: color.white,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          boxShadow: onDark ? "none" : `inset 0 0 0 1px ${color.slate200}`,
        }}
      >
        <picture style={{ display: "contents" }}>
          <source
            type="image/webp"
            srcSet="/img/logo/aurora-blossom-logo-96.webp 1x, /img/logo/aurora-blossom-logo-192.webp 2x"
          />
          <img
            src="/img/logo/aurora-blossom-logo-96.png"
            srcSet="/img/logo/aurora-blossom-logo-96.png 1x, /img/logo/aurora-blossom-logo-192.png 2x"
            alt="Aurora Blossom logo"
            width={96}
            height={88}
            style={{ width: size - 6, height: size - 6, objectFit: "contain", display: "block" }}
          />
        </picture>
      </Box>
      <Box
        component="span"
        sx={{
          fontFamily: font.display,
          fontWeight: 800,
          fontSize: size >= 40 ? "1.125rem" : "1rem",
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
          color: onDark ? color.white : color.ink2,
          lineHeight: 1,
        }}
      >
        Aurora Blossom
      </Box>
    </Box>
  );
}

BrandMark.defaultProps = { size: 40, onDark: false };

BrandMark.propTypes = { size: PropTypes.number, onDark: PropTypes.bool };
