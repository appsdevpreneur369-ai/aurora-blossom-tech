import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import ClinicFlowLogo, { CLINICFLOW_BRAND } from "/components/ui/ClinicFlowLogo.js";
import HeroVisual, { fadeEdges } from "/components/ClinicFlow/HeroVisual.js";

export const BANNER_ALT = "ClinicFlow247 – Less Chaos. More Care. Clinic management platform by Aurora Blossom";

/*
 * HTML/CSS replacement for the old flat ClinicFlow247 banner image: brand lockup
 * and tagline on the left, the clinicflow247.com hero composition on the right.
 * Everything is sized in container units (cqw) so it scales exactly like an
 * image would at any width, and the text stays crisp and indexable.
 * Screen readers get the banner as one image with BANNER_ALT, as before.
 */
export default function ClinicFlowBanner({ sizes, sx }) {
  return (
    <Box
      role="img"
      aria-label={BANNER_ALT}
      sx={{
        containerType: "inline-size",
        position: "relative",
        width: "100%",
        minHeight: 0,
        aspectRatio: "16 / 9",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 70% 90% at 100% 0%, rgba(0,184,232,0.18) 0%, rgba(0,184,232,0) 70%), linear-gradient(160deg, #F8FCFF 0%, #E4F5FC 55%, #D3EEF9 100%)",
        ...sx,
      }}
    >
      {/* Product composition, faded in from the left so it sits behind the lockup */}
      <Box
        sx={{
          position: "absolute",
          right: "-1cqw",
          top: "50%",
          transform: "translateY(-50%)",
          width: "55cqw",
          ...fadeEdges({ left: "24%", right: "3%", top: "8%", bottom: "8%" }),
        }}
      >
        <HeroVisual alt="" sizes={sizes} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: "5cqw",
          top: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "max(8px, 2.8cqw)",
        }}
      >
        <ClinicFlowLogo size={96} cssSize="max(26px, 7.5cqw)" textSize="max(16px, 4.2cqw)" />
        <Box
          component="span"
          sx={{
            pl: "0.4cqw",
            fontWeight: 600,
            fontSize: "max(12px, 2.9cqw)",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            color: CLINICFLOW_BRAND.navy,
            whiteSpace: "nowrap",
          }}
        >
          Less Chaos. More Care.
        </Box>
      </Box>
    </Box>
  );
}

ClinicFlowBanner.propTypes = {
  sizes: PropTypes.string.isRequired,
  sx: PropTypes.object,
};
