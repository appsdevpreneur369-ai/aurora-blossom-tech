import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const CLIENTS = [
  {
    name: "Vishudha",
    logo: "/img/lsk_imgs/vishudha-client.png",
    description: "E-Commerce & Retail Platform",
  },
  {
    name: "Tek Centrix",
    logo: "/img/lsk_imgs/tek-centrix-client.png",
    description: "Enterprise Technology Solutions",
  },
];

export default function SectionClients({ ...rest }) {
  return (
    <section
      id="clients"
      className="cd-section"
      aria-labelledby="clients-heading"
      {...rest}
    >
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 6 }, maxWidth: 1200, mx: "auto" }}>

        {/* Section header */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            id="clients-heading"
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
            Our Clients
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 500, mx: "auto", fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            Trusted by forward-thinking businesses who chose Aurora Blossom Tech
            to power their digital transformation.
          </Typography>
        </Box>

        {/* Client logos */}
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {CLIENTS.map((client) => (
            <Grid key={client.name} item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  borderRadius: 3,
                  border: "1px solid rgba(124,58,237,0.12)",
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  height: "100%",
                  bgcolor: "#fff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 40px rgba(124,58,237,0.12)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={client.logo}
                  alt={`${client.name} logo`}
                  loading="lazy"
                  sx={{
                    width: "auto",
                    maxWidth: 240,
                    height: 80,
                    objectFit: "contain",
                    filter: "grayscale(20%)",
                    transition: "filter 0.25s ease",
                    "&:hover": { filter: "grayscale(0%)" },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 500,
                    fontSize: "0.85rem",
                    textAlign: "center",
                  }}
                >
                  {client.description}
                </Typography>
              </Box>
            </Grid>
          ))}

          {/* Social proof CTA card */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                borderRadius: 3,
                p: 4,
                height: "100%",
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                background: "linear-gradient(135deg, #7C3AED 0%, #0891B2 100%)",
                boxShadow: "0 8px 30px rgba(124,58,237,0.3)",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: "#fff", fontSize: "1.1rem" }}
              >
                Become Our Next Success Story
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                Join a growing list of businesses transforming with Aurora Blossom Tech.
              </Typography>
              <Box
                component="a"
                href="#contactUs"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contactUs")?.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  mt: 1, px: 3, py: 1,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "#fff",
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.4)",
                  transition: "background 0.2s ease",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
                }}
              >
                Let's Talk →
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
