import React from "react";
import { Box, Grid, Typography } from "@mui/material";

// Aurora Blossom — About section cards
// Vision: violet→pink (aurora blossom)
// Mission: teal→violet (aurora sky)
// Values: rose→amber (blossom sunset)
const CARDS = [
  {
    id: "vision",
    label: "Vision",
    icon: "🌅",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)",
    shadow: "rgba(124,58,237,0.35)",
    body: "To inspire people and improve lives through technology — delivered with purpose, precision, and passion.",
  },
  {
    id: "mission",
    label: "Mission",
    icon: "🎯",
    gradient: "linear-gradient(135deg, #0891B2 0%, #7C3AED 100%)",
    shadow: "rgba(8,145,178,0.35)",
    body: "To contribute to the overall wellbeing of the communities we operate in — by building technology that genuinely matters.",
  },
  {
    id: "values",
    label: "Values",
    icon: "💎",
    gradient: "linear-gradient(135deg, #BE185D 0%, #D97706 100%)",
    shadow: "rgba(190,24,93,0.35)",
    body: "Oneness · Integrity · Humour · Trust · Thrive · Strive — the six pillars that define how we work and who we are.",
  },
];

export default function SectionAboutUsDetails({ ...rest }) {
  return (
    <section
      id="about-us"
      className="cd-section"
      aria-labelledby="about-heading"
      {...rest}
    >
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* Section heading */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            id="about-heading"
            variant="h2"
            component="h2"
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 800,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              backgroundImage:
                "linear-gradient(135deg, #4C1D95 0%, #0891B2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              mb: 2,
            }}
          >
            About Aurora Blossom Tech
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            We are a technology company driven by purpose — building enterprise
            solutions that transform organisations and enrich communities.
          </Typography>
        </Box>

        {/* VMV Cards */}
        <Grid container spacing={4} justifyContent="center">
          {CARDS.map((card) => (
            <Grid key={card.id} item xs={12} sm={6} md={4}>
              <Box
                component="article"
                aria-label={card.label}
                sx={{
                  borderRadius: 4,
                  p: 4,
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: card.gradient,
                  boxShadow: `0 12px 40px ${card.shadow}`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: `0 20px 56px ${card.shadow}`,
                  },
                }}
              >
                {/* Icon */}
                <Box
                  aria-hidden="true"
                  sx={{
                    fontSize: "2.5rem",
                    mb: 2,
                    lineHeight: 1,
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                  }}
                >
                  {card.icon}
                </Box>

                {/* Title */}
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#fff",
                    mb: 2,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {card.label}
                </Typography>

                {/* Body */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {card.body}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
}
