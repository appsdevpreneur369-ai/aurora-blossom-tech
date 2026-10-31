import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

/*
 * The product composition from the clinicflow247.com hero (analytics dashboard,
 * mobile app, doctor, floating stat cards). The live hero is assembled in HTML,
 * so this is a 3x Playwright capture of just that composition (2026-10-31),
 * exported as AVIF / WebP / JPG at 640–1920 px wide.
 */
const BASE = "/images/clinicflow/clinicflow247-hero-visual";
const WIDTHS = [640, 960, 1280, 1920];
const srcSet = (ext) => WIDTHS.map((w) => `${BASE}-${w}.${ext} ${w}w`).join(", ");

export const HERO_VISUAL_ALT =
  "ClinicFlow247 clinic management dashboard showing appointments, queue token, revenue analytics and WhatsApp reminder";

/** Softly fades the capture's edges so its light page background melts into any light panel. */
export function fadeEdges({ left = "6%", right = "6%", top = "6%", bottom = "6%" } = {}) {
  const x = `linear-gradient(to right, transparent 0, #000 ${left}, #000 calc(100% - ${right}), transparent 100%)`;
  const y = `linear-gradient(to bottom, transparent 0, #000 ${top}, #000 calc(100% - ${bottom}), transparent 100%)`;
  return {
    WebkitMaskImage: `${x}, ${y}`,
    WebkitMaskComposite: "source-in",
    maskImage: `${x}, ${y}`,
    maskComposite: "intersect",
  };
}

export default function HeroVisual({ sizes, alt = HERO_VISUAL_ALT, loading = "lazy", sx }) {
  return (
    <Box component="picture" sx={{ display: "contents" }}>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <Box
        component="img"
        src={`${BASE}-1280.jpg`}
        srcSet={srcSet("jpg")}
        sizes={sizes}
        alt={alt}
        width={1920}
        height={1511}
        loading={loading}
        decoding="async"
        sx={{ display: "block", width: "100%", height: "auto", ...sx }}
      />
    </Box>
  );
}

HeroVisual.propTypes = {
  sizes: PropTypes.string.isRequired,
  alt: PropTypes.string,
  loading: PropTypes.oneOf(["lazy", "eager"]),
  sx: PropTypes.object,
};
