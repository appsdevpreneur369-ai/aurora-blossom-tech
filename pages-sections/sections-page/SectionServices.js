import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { services } from "../../data/services-data";
import Router from "next/router";

const SERVICE_COLORS = [
  { color: "#7C3AED", bg: "rgba(124,58,237,0.07)", border: "rgba(124,58,237,0.15)" },
  { color: "#0891B2", bg: "rgba(8,145,178,0.07)",  border: "rgba(8,145,178,0.15)"  },
  { color: "#059669", bg: "rgba(5,150,105,0.07)",  border: "rgba(5,150,105,0.15)"  },
  { color: "#D97706", bg: "rgba(217,119,6,0.07)",  border: "rgba(217,119,6,0.15)"  },
  { color: "#BE185D", bg: "rgba(190,24,93,0.07)",  border: "rgba(190,24,93,0.15)"  },
  { color: "#1D4ED8", bg: "rgba(29,78,216,0.07)",  border: "rgba(29,78,216,0.15)"  },
];
const SERVICE_ICONS = ["🚀", "🤖", "☁️", "💼", "🛒", "📊"];

export default function SectionServices({ ...rest }) {
  return (
    <section
      id="services"
      className="cd-section"
      aria-labelledby="services-heading"
      {...rest}
    >
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 6 }, maxWidth: 1200, mx: "auto" }}>

        {/* Section header */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            id="services-heading"
            variant="h2"
            component="h2"
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 800,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              backgroundImage: "linear-gradient(135deg, #4C1D95 0%, #0891B2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              mb: 2,
            }}
          >
            What We Do
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto", fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            End-to-end technology services tailored to your industry and scale.
          </Typography>
          <Button
            variant="text"
            onClick={() => Router.push("/services-details")}
            sx={{
              mt: 2,
              textTransform: "none",
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 600,
              color: "#7C3AED",
              "&:hover": { bgcolor: "rgba(124,58,237,0.06)" },
            }}
          >
            View All Services →
          </Button>
        </Box>

        {/* Services grid */}
        <Grid container spacing={3}>
          {services.map((svc, idx) => {
            const palette = SERVICE_COLORS[idx % SERVICE_COLORS.length];
            return (
              <Grid key={svc.serviceTitle} item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: "100%",
                    background: palette.bg,
                    border: `1px solid ${palette.border}`,
                    cursor: "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 12px 36px ${palette.color}20`,
                    },
                  }}
                  onClick={() => Router.push("/services-details")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && Router.push("/services-details")}
                >
                  <Box
                    aria-hidden="true"
                    sx={{ fontSize: "2rem", mb: 1.5, lineHeight: 1 }}
                  >
                    {SERVICE_ICONS[idx]}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: palette.color,
                      mb: 1,
                    }}
                  >
                    {svc.serviceTitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", lineHeight: 1.7, fontSize: "0.875rem" }}
                  >
                    {svc.serviceOneLiner}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="contained"
            onClick={() => Router.push("/contact-us")}
            sx={{
              textTransform: "none",
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 600,
              borderRadius: 2,
              px: 4,
              py: 1.5,
              background: "linear-gradient(135deg, #7C3AED 0%, #0891B2 100%)",
              boxShadow: "0 4px 14px rgba(124,58,237,0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #6D28D9 0%, #0E7490 100%)",
                boxShadow: "0 6px 20px rgba(124,58,237,0.45)",
                transform: "translateY(-1px)",
              },
              transition: "all 0.2s ease",
            }}
          >
            Talk to Our Experts
          </Button>
        </Box>
      </Box>
    </section>
  );
}
