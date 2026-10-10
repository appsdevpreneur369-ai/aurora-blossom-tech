import React from "react";
import { Box, Typography } from "@mui/material";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import FlagOutlined from "@mui/icons-material/FlagOutlined";
import DiamondOutlined from "@mui/icons-material/DiamondOutlined";
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
    </Section>
  );
}
