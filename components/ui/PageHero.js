import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import StaticIsland from "/components/ui/StaticIsland.js";
import { color, font, gradient, layout, type } from "/styles/tokens.js";

// Faint engineering grid used behind dark heroes — pure CSS, no image request.
export const gridPattern = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
  maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 100%)",
};

/**
 * Dark hero band for interior pages. Content (overline/title/lead/actions)
 * is always supplied by the page so existing copy stays untouched.
 */
export default function PageHero({ overline, title, lead, actions, footnote, align, aside, titleSx }) {
  const centered = align === "center" && !aside;
  const Content = aside ? React.Fragment : StaticIsland;
  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: gradient.night,
        color: color.white,
        pt: { xs: "112px", md: "148px" },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Box aria-hidden="true" sx={gridPattern} />
      {/* Without an `aside` the hero is text + links only, so it skips hydration
          on first load (see components/ui/StaticIsland.js). */}
      <Content>
      <Box
        sx={{
          position: "relative",
          maxWidth: layout.maxWidth,
          mx: "auto",
          px: layout.gutter,
          display: "grid",
          gridTemplateColumns: aside ? { xs: "1fr", md: "1.15fr 0.85fr" } : "1fr",
          gap: { xs: 6, md: 8 },
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: centered ? "center" : "left", maxWidth: centered ? 820 : "none", mx: centered ? "auto" : 0 }}>
          {overline && (
            <Typography
              component="p"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.75,
                mb: 3,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                bgcolor: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.85)",
                fontFamily: font.display,
                fontWeight: 700,
                fontSize: type.micro,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              <Box component="span" aria-hidden="true" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: color.teal400 }} />
              {overline}
            </Typography>
          )}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: font.display,
              fontWeight: 800,
              fontSize: type.h1,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: color.white,
              m: 0,
              ...titleSx,
            }}
          >
            {title}
          </Typography>
          {lead && (
            <Typography
              sx={{
                mt: 2.5,
                fontSize: type.lead,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.80)",
                maxWidth: 680,
                mx: centered ? "auto" : 0,
              }}
            >
              {lead}
            </Typography>
          )}
          {actions && (
            <Box
              sx={{
                mt: 4,
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                justifyContent: centered ? "center" : "flex-start",
                "& > *": { width: { xs: "100%", sm: "auto" } },
              }}
            >
              {actions}
            </Box>
          )}
          {footnote && (
            <Typography sx={{ mt: 3, color: "rgba(255,255,255,0.62)", fontSize: type.small }}>
              {footnote}
            </Typography>
          )}
        </Box>
        {aside && <Box sx={{ minWidth: 0 }}>{aside}</Box>}
      </Box>
      </Content>
    </Box>
  );
}

PageHero.defaultProps = { align: "center" };

PageHero.propTypes = {
  overline: PropTypes.node,
  title: PropTypes.node.isRequired,
  lead: PropTypes.node,
  actions: PropTypes.node,
  footnote: PropTypes.node,
  align: PropTypes.oneOf(["center", "left"]),
  aside: PropTypes.node,
  titleSx: PropTypes.object,
};
