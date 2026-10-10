import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import NorthEastRounded from "@mui/icons-material/NorthEastRounded";
import { services } from "../../data/services-data";
import Section from "/components/ui/Section.js";
import SectionHeader from "/components/ui/SectionHeader.js";
import { color, font, motion, radius, shadow, focusRing } from "/styles/tokens.js";

function ServiceCard({ svc, index }) {
  return (
    <Link prefetch={false} href={`/services-details#service-${index + 1}`} passHref>
      <Box
        component="a"
        aria-label={svc.serviceTitle}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          borderRadius: `${radius.lg}px`,
          overflow: "hidden",
          bgcolor: color.white,
          border: `1px solid ${color.slate200}`,
          boxShadow: shadow.xs,
          textDecoration: "none",
          color: "inherit",
          transition: `box-shadow ${motion.base} ${motion.ease}, transform ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
          "&:hover": { boxShadow: shadow.md, transform: "translateY(-4px)", borderColor: color.violet300 },
          "&:hover .svc-img img": { transform: "scale(1.04)" },
          "&:hover .svc-arrow": { bgcolor: color.violet600, color: color.white, borderColor: color.violet600 },
          "&:focus-visible": focusRing,
        }}
      >
        <Box
          className="svc-img"
          sx={{
            position: "relative",
            aspectRatio: "16 / 9",
            bgcolor: color.slate100,
            overflow: "hidden",
            "& img": { transition: `transform ${motion.slow} ${motion.ease}` },
          }}
        >
          <Image
            src={`/${svc.serviceImageUrl}`}
            alt=""
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 380px"
          />
        </Box>
        <Box sx={{ p: { xs: 3, md: 3.5 }, display: "flex", flexDirection: "column", flex: 1 }}>
          <Typography
            aria-hidden="true"
            sx={{ fontFamily: font.display, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em", color: color.violet600, mb: 1.25 }}
          >
            {String(index + 1).padStart(2, "0")}
          </Typography>
          <Typography
            component="h3"
            sx={{ fontFamily: font.display, fontWeight: 700, fontSize: "1.125rem", lineHeight: 1.35, color: color.ink2, m: 0, mb: 1.25 }}
          >
            {svc.serviceTitle}
          </Typography>
          <Typography sx={{ color: color.slate600, fontSize: "0.9375rem", lineHeight: 1.7, mb: 3 }}>{svc.serviceOneLiner}</Typography>
          <Box
            className="svc-arrow"
            aria-hidden="true"
            sx={{
              mt: "auto",
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: `1px solid ${color.slate200}`,
              color: color.violet700,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: `all ${motion.base} ${motion.ease}`,
            }}
          >
            <NorthEastRounded sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default function SectionServices({ ...rest }) {
  return (
    <Section tone="subtle" id="services" className="cd-section" aria-labelledby="services-heading" {...rest}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "flex-end" },
          justifyContent: "space-between",
          gap: 3,
          mb: { xs: 5, md: 7 },
        }}
      >
        <SectionHeader
          id="services-heading"
          align="left"
          title="What We Do"
          lead="End-to-end technology services tailored to your industry and scale."
          sx={{ mb: 0 }}
        />
        <Link prefetch={false} href="/services-details" passHref>
          <Button component="a" variant="outlined" color="primary" sx={{ flexShrink: 0 }}>
            View All Services →
          </Button>
        </Link>
      </Box>

      <Box
        component="ul"
        sx={{
          listStyle: "none",
          m: 0,
          p: 0,
          display: "grid",
          gap: { xs: 2.5, md: 3 },
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
        }}
      >
        {services.map((svc, idx) => (
          <li key={svc.serviceTitle}>
            <ServiceCard svc={svc} index={idx} />
          </li>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", mt: { xs: 6, md: 8 } }}>
        <Link prefetch={false} href="/contact-us" passHref>
          <Button component="a" variant="contained" color="primary" size="large" endIcon={<ArrowForwardRounded />}>
            Talk to Our Experts
          </Button>
        </Link>
      </Box>
    </Section>
  );
}
