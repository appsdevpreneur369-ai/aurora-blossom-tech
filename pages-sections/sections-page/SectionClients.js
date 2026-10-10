import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Section from "/components/ui/Section.js";
import SectionHeader from "/components/ui/SectionHeader.js";
import { gridPattern } from "/components/ui/PageHero.js";
import { color, font, gradient, motion, radius, shadow, focusRingOnDark } from "/styles/tokens.js";

const CLIENTS = [
  {
    name: "Vishudha",
    logo: "/img/lsk_imgs/vishudha-client.png",
    width: 1024,
    height: 376,
    description: "E-Commerce & Retail Platform",
  },
  {
    name: "Tek Centrix",
    logo: "/img/lsk_imgs/tek-centrix-client.png",
    width: 308,
    height: 63,
    description: "Enterprise Technology Solutions",
  },
];

export default function SectionClients({ ...rest }) {
  return (
    <Section tone="subtle" id="clients" className="cd-section" aria-labelledby="clients-heading" {...rest}>
      <SectionHeader
        id="clients-heading"
        title="Our Clients"
        lead="Trusted by forward-thinking businesses who chose Aurora Blossom to power their digital transformation."
      />

      <Box
        sx={{
          display: "grid",
          gap: { xs: 2.5, md: 3 },
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
        }}
      >
        {CLIENTS.map((client) => (
          <Box
            key={client.name}
            sx={{
              borderRadius: `${radius.lg}px`,
              border: `1px solid ${color.slate200}`,
              bgcolor: color.white,
              boxShadow: shadow.xs,
              p: { xs: 4, md: 5 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              minHeight: 240,
              transition: `box-shadow ${motion.base} ${motion.ease}, transform ${motion.base} ${motion.ease}`,
              "&:hover": { boxShadow: shadow.md, transform: "translateY(-3px)" },
            }}
          >
            <Box sx={{ position: "relative", width: "100%", maxWidth: 220, height: 80 }}>
              <Image src={client.logo} alt={`${client.name} logo`} layout="fill" objectFit="contain" sizes="220px" />
            </Box>
            <Typography
              sx={{
                pt: 2.5,
                borderTop: `1px solid ${color.slate100}`,
                width: "100%",
                textAlign: "center",
                color: color.slate600,
                fontFamily: font.display,
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              {client.description}
            </Typography>
          </Box>
        ))}

        {/* Social proof CTA card */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: `${radius.lg}px`,
            p: { xs: 4, md: 5 },
            minHeight: 240,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1.5,
            background: gradient.night,
            color: color.white,
            gridColumn: { sm: "1 / -1", md: "auto" },
          }}
        >
          <Box aria-hidden="true" sx={gridPattern} />
          <Typography
            component="h3"
            sx={{ position: "relative", fontFamily: font.display, fontWeight: 800, fontSize: "1.375rem", lineHeight: 1.25, m: 0 }}
          >
            Become Our Next Success Story
          </Typography>
          <Typography sx={{ position: "relative", color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
            Join a growing list of businesses transforming with Aurora Blossom.
          </Typography>
          <Box
            component="a"
            href="#contactUs"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contactUs")?.scrollIntoView({ behavior: "smooth" });
            }}
            sx={{
              position: "relative",
              alignSelf: "flex-start",
              mt: 1.5,
              px: 2.75,
              minHeight: 44,
              display: "inline-flex",
              alignItems: "center",
              borderRadius: `${radius.pill}px`,
              bgcolor: color.white,
              color: color.violet800,
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: `background-color ${motion.fast} ${motion.ease}`,
              "&:hover": { bgcolor: color.violet50 },
              "&:focus-visible": focusRingOnDark,
            }}
          >
            Let&apos;s Talk →
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
