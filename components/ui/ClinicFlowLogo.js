import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { font } from "/styles/tokens.js";

/*
 * ClinicFlow247 brand lockup, matched to the navbar logo on clinicflow247.com
 * (inspected 2026-10-31):
 *   mark  — /nano-images/mark_only__transparent_.png from the ClinicFlow247 repo
 *           (teal→blue "C" with a teal "+"), exported to /images/brand/.
 *   text  — Inter, extra-bold, letter-spacing -0.025em (Tailwind `tracking-tight`);
 *           "ClinicFlow" #00133E on light / #FFFFFF on dark, "247" #00B8E8, no gradient.
 *           clinicflow247.com asks for weight 800 but only ships Inter 300–700, so
 *           browsers draw its 700 face; 700 here reproduces what visitors see there.
 * Inter is already self-hosted site-wide (styles/fonts.css, Latin subset,
 * font-display: swap), so the wordmark costs no extra font download.
 */
export const CLINICFLOW_BRAND = {
  navy: "#00133E",
  cyan: "#00B8E8",
  fontWeight: 700,
  letterSpacing: "-0.025em",
};

const SRC = "/images/brand/clinicflow247-logo";

function Mark({ size, cssSize, alt }) {
  // Image at 2x / 4x the display size so the mark stays sharp on high-density screens.
  const pick = size <= 32 ? [64, 128] : size <= 64 ? [128, 256] : [256, 512];
  return (
    <Box component="picture" sx={{ display: "inline-flex", flexShrink: 0, lineHeight: 0 }}>
      <source type="image/webp" srcSet={`${SRC}-${pick[0]}.webp 1x, ${SRC}-${pick[1]}.webp 2x`} />
      <Box
        component="img"
        src={`${SRC}-${pick[0]}.png`}
        srcSet={`${SRC}-${pick[0]}.png 1x, ${SRC}-${pick[1]}.png 2x`}
        alt={alt}
        width={size}
        height={size}
        decoding="async"
        sx={{ width: cssSize || size, height: cssSize || size, display: "block" }}
      />
    </Box>
  );
}

Mark.propTypes = { size: PropTypes.number.isRequired, cssSize: PropTypes.string, alt: PropTypes.string.isRequired };

/**
 * <ClinicFlowLogo variant="icon" />  — the mark alone
 * <ClinicFlowLogo variant="full" />  — mark + "ClinicFlow247" wordmark
 *
 * `size` is the mark height in px; the wordmark scales from it (or set `textSize`).
 * For fluid layouts pass `cssSize` (any CSS length, e.g. "8cqw"); `size` then only
 * picks the image resolution and the intrinsic width/height attributes.
 * The full lockup exposes the brand name as real text, so its mark is decorative.
 * Pass `decorative` when the icon sits next to text that already names the brand.
 */
export default function ClinicFlowLogo({ variant = "full", size = 32, cssSize, textSize, onDark = false, decorative = false, sx, ...rest }) {
  if (variant === "icon") {
    return <Mark size={size} cssSize={cssSize} alt={decorative ? "" : "ClinicFlow247"} />;
  }
  const markSize = cssSize || `${size}px`;
  return (
    <Box
      component="span"
      sx={{ display: "inline-flex", alignItems: "center", gap: `calc(${markSize} * 0.3)`, ...sx }}
      {...rest}
    >
      <Mark size={size} cssSize={cssSize} alt="" />
      <Box
        component="span"
        sx={{
          fontFamily: font.body,
          fontWeight: CLINICFLOW_BRAND.fontWeight,
          letterSpacing: CLINICFLOW_BRAND.letterSpacing,
          fontSize: textSize || `calc(${markSize} * 0.58)`,
          lineHeight: 1,
          whiteSpace: "nowrap",
          color: onDark ? "#FFFFFF" : CLINICFLOW_BRAND.navy,
        }}
      >
        ClinicFlow<Box component="span" sx={{ color: CLINICFLOW_BRAND.cyan }}>247</Box>
      </Box>
    </Box>
  );
}

ClinicFlowLogo.propTypes = {
  variant: PropTypes.oneOf(["icon", "full"]),
  size: PropTypes.number,
  cssSize: PropTypes.string,
  textSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  onDark: PropTypes.bool,
  decorative: PropTypes.bool,
  sx: PropTypes.object,
};
