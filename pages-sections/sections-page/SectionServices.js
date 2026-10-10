import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import NorthEastRounded from "@mui/icons-material/NorthEastRounded";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
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

// Full-width highlight for a service backed by an Aurora Blossom product (ClinicFlow247).
function FeaturedService({ svc, index }) {
  const { featured } = svc;
  const headingId = `featured-service-${index + 1}`;
  return (
    <Box
      component="article"
      aria-labelledby={headingId}
      sx={{
        mt: { xs: 2.5, md: 3 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
        borderRadius: `${radius.xl}px`,
        overflow: "hidden",
        bgcolor: color.white,
        border: `1px solid ${color.teal100}`,
        boxShadow: shadow.md,
      }}
    >
      {/* Banner shown uncropped; the backdrop continues the artwork's own light-blue wash */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(160deg, #F8FDFF 0%, #DCF3FF 100%)",
        }}
      >
        <Box sx={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
          <Image
            src={`/${svc.serviceImageUrl}`}
            alt={svc.serviceImageAlt || svc.serviceTitle}
            layout="fill"
            objectFit="contain"
            sizes="(max-width: 900px) 100vw, 620px"
          />
        </Box>
      </Box>
      <Box sx={{ p: { xs: 3, sm: 4, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
          <Typography aria-hidden="true" sx={{ fontFamily: font.display, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em", color: color.teal700 }}>
            {String(index + 1).padStart(2, "0")}
          </Typography>
          <Box
            component="span"
            sx={{
              px: 1.25,
              py: 0.4,
              borderRadius: 999,
              bgcolor: color.teal50,
              border: `1px solid ${color.teal100}`,
              color: color.teal700,
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.06em",
            }}
          >
            {featured.product}
          </Box>
        </Box>
        <Typography
          id={headingId}
          component="h3"
          sx={{ fontFamily: font.display, fontWeight: 800, fontSize: { xs: "1.5rem", md: "1.875rem" }, lineHeight: 1.2, color: color.ink2, m: 0, mb: 1.5 }}
        >
          {svc.serviceTitle}
        </Typography>
        <Typography sx={{ color: color.slate600, fontSize: "1.0625rem", lineHeight: 1.7, mb: 1.5 }}>{svc.serviceOneLiner}</Typography>
        <Typography sx={{ fontFamily: font.display, fontWeight: 700, color: color.teal700, mb: 3 }}>{featured.tagline}</Typography>
        <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, mb: 3.5, display: "grid", gap: 1.25, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
          {featured.highlights.map((h) => (
            <Box component="li" key={h} sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "0.9375rem", fontWeight: 600, color: color.slate800 }}>
              <CheckCircleRounded aria-hidden="true" sx={{ fontSize: 20, color: color.teal600 }} />
              {h}
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, "& > a": { flex: { xs: "1 1 100%", sm: "0 0 auto" } } }}>
          {featured.links.map((l, i) => (
            <Link key={l.href} prefetch={false} href={l.href} passHref>
              <Button component="a" variant={i === 0 ? "contained" : "outlined"} color="primary" endIcon={i === 0 ? <ArrowForwardRounded /> : undefined}>
                {l.label}
              </Button>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
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
        {services.map((svc, idx) =>
          svc.featured ? null : (
            <li key={svc.serviceTitle}>
              <ServiceCard svc={svc} index={idx} />
            </li>
          )
        )}
      </Box>

      {services.map((svc, idx) =>
        svc.featured ? <FeaturedService key={svc.serviceTitle} svc={svc} index={idx} /> : null
      )}

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
