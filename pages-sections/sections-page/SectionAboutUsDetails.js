import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import EventAvailableOutlined from "@mui/icons-material/EventAvailableOutlined";
import AssignmentIndOutlined from "@mui/icons-material/AssignmentIndOutlined";
import ForumOutlined from "@mui/icons-material/ForumOutlined";
import ReceiptLongOutlined from "@mui/icons-material/ReceiptLongOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import FlagOutlined from "@mui/icons-material/FlagOutlined";
import DiamondOutlined from "@mui/icons-material/DiamondOutlined";
import LocalHospitalOutlined from "@mui/icons-material/LocalHospitalOutlined";
import Section from "/components/ui/Section.js";
import SectionHeader from "/components/ui/SectionHeader.js";
import IconTile from "/components/ui/IconTile.js";
import { color, font, motion, radius, shadow } from "/styles/tokens.js";

const CARDS = [
  {
    id: "vision",
    label: "Vision",
    icon: VisibilityOutlined,
    body: "To inspire people and improve lives through technology — delivered with purpose, precision, and passion.",
  },
  {
    id: "mission",
    label: "Mission",
    icon: FlagOutlined,
    body: "To contribute to the overall wellbeing of the communities we operate in — by building technology that genuinely matters.",
  },
  {
    id: "values",
    label: "Values",
    icon: DiamondOutlined,
    body: "Oneness · Integrity · Humour · Trust · Thrive · Strive — the six pillars that define how we work and who we are.",
  },
];

const HEALTHCARE_POINTS = [
  { icon: EventAvailableOutlined, text: "Online appointment booking with real-time slots" },
  { icon: AssignmentIndOutlined, text: "Digital patient records and e-prescriptions" },
  { icon: ForumOutlined, text: "Automated WhatsApp & SMS reminders" },
  { icon: ReceiptLongOutlined, text: "Billing, invoicing, and clinic analytics" },
];

// Healthcare focus — introduces ClinicFlow247, Aurora Blossom's healthcare product.
function HealthcareHighlight() {
  return (
    <Box
      component="article"
      aria-labelledby="about-healthcare"
      sx={{
        mt: { xs: 4, md: 5 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
        borderRadius: `${radius.xl}px`,
        overflow: "hidden",
        bgcolor: color.white,
        border: `1px solid ${color.slate200}`,
        boxShadow: shadow.md,
      }}
    >
      <Box sx={{ position: "relative", minHeight: { xs: 0, md: 420 }, aspectRatio: { xs: "4 / 3", md: "auto" }, bgcolor: "#E3F5FF" }}>
        <Image
          src="/img/clinicflow/clinicflow247-doctor.jpg"
          alt="A clinic doctor with the ClinicFlow247 dashboard"
          layout="fill"
          objectFit="cover"
          objectPosition="70% 30%"
          sizes="(max-width: 900px) 100vw, 540px"
        />
      </Box>
      <Box sx={{ p: { xs: 3.5, sm: 4.5, md: 6 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
          <IconTile icon={LocalHospitalOutlined} variant="teal" size={48} />
          <Typography sx={{ fontFamily: font.display, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: color.teal700 }}>
            Healthcare
          </Typography>
        </Box>
        <Typography
          id="about-healthcare"
          component="h3"
          sx={{ fontFamily: font.display, fontWeight: 800, fontSize: { xs: "1.5rem", md: "1.875rem" }, lineHeight: 1.2, color: color.ink2, m: 0, mb: 2 }}
        >
          Technology for Better Healthcare
        </Typography>
        <Typography sx={{ color: color.slate600, fontSize: "1.0625rem", lineHeight: 1.75, mb: 3 }}>
          Improving lives through technology starts where people go for care. That is why Aurora Blossom built ClinicFlow247 — a clinic management platform that connects clinics, doctors, and patients 24/7, from the first appointment to the final invoice.
        </Typography>
        <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, mb: 4, display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
          {HEALTHCARE_POINTS.map(({ icon: Icon, text }) => (
            <Box component="li" key={text} sx={{ display: "flex", alignItems: "flex-start", gap: 1.25, fontSize: "0.9375rem", lineHeight: 1.5, color: color.slate800, fontWeight: 500 }}>
              <Icon aria-hidden="true" sx={{ fontSize: 20, mt: "1px", color: color.teal600, flexShrink: 0 }} />
              {text}
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, "& > a": { flex: { xs: "1 1 100%", sm: "0 0 auto" } } }}>
          <Link prefetch={false} href="/clinic-management-software-india" passHref>
            <Button component="a" variant="contained" color="primary" endIcon={<ArrowForwardRounded />}>
              Explore ClinicFlow247
            </Button>
          </Link>
          <Link prefetch={false} href="/book-demo" passHref>
            <Button component="a" variant="outlined" color="primary">
              Book a Free Demo
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default function SectionAboutUsDetails({ ...rest }) {
  return (
    <Section id="about-us" className="cd-section" aria-labelledby="about-heading" {...rest}>
      <SectionHeader
        id="about-heading"
        title="About Aurora Blossom"
        lead="We are a technology company driven by purpose — building enterprise solutions that transform organisations and enrich communities."
      />

      <Box
        sx={{
          display: "grid",
          gap: { xs: 2.5, md: 3 },
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        }}
      >
        {CARDS.map((card, i) => (
          <Box
            key={card.id}
            component="article"
            aria-labelledby={`about-${card.id}`}
            sx={{
              position: "relative",
              p: { xs: 3.5, md: 4 },
              borderRadius: `${radius.lg}px`,
              bgcolor: color.white,
              border: `1px solid ${color.slate200}`,
              boxShadow: shadow.xs,
              overflow: "hidden",
              transition: `box-shadow ${motion.base} ${motion.ease}, transform ${motion.base} ${motion.ease}`,
              "&::before": {
                content: '""',
                position: "absolute",
                inset: "0 0 auto 0",
                height: 3,
                background: `linear-gradient(90deg, ${color.violet600}, ${color.teal600})`,
                opacity: 0.85,
              },
              "&:hover": { boxShadow: shadow.md, transform: "translateY(-3px)" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
              <IconTile icon={card.icon} variant={i === 1 ? "teal" : "violet"} size={52} />
              <Typography
                aria-hidden="true"
                sx={{ fontFamily: font.display, fontWeight: 800, fontSize: "2.25rem", lineHeight: 1, color: color.slate200 }}
              >
                {`0${i + 1}`}
              </Typography>
            </Box>
            <Typography
              id={`about-${card.id}`}
              component="h3"
              sx={{
                fontFamily: font.display,
                fontWeight: 800,
                fontSize: "1.25rem",
                color: color.ink2,
                m: 0,
                mb: 1.5,
              }}
            >
              {card.label}
            </Typography>
            <Typography sx={{ color: color.slate600, fontSize: "1rem", lineHeight: 1.75 }}>{card.body}</Typography>
          </Box>
        ))}
      </Box>

      <HealthcareHighlight />
    </Section>
  );
}
