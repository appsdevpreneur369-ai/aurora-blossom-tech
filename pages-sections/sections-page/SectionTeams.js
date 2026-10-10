import React from "react";
import { Box, Typography } from "@mui/material";
import Section from "/components/ui/Section.js";
import SectionHeader from "/components/ui/SectionHeader.js";
import { color, font, motion, radius, shadow } from "/styles/tokens.js";

const TEAM = [
  {
    name: "Suhasini",
    role: "Chief Executive Officer",
    bio: "A visionary leader and Full Stack Developer proficient across the complete technology stack — front-end, back-end, server management, and security. Suhasini steers Aurora Blossom's strategy, culture, and engineering excellence.",
  },
  {
    name: "Farhaan",
    role: "Data Analyst & Data Scientist",
    bio: "Farhaan leverages advanced statistical and machine learning techniques to extract actionable insights from complex datasets, while driving data-driven decision-making and business strategy through expert visualisation.",
  },
  {
    name: "Sunil",
    role: "Cloud Architect",
    bio: "Sunil leads and manages the front-end development team, architecting intuitive user interfaces and exceptional user experiences across web and mobile. Expert in React, Next.js, and modern CSS systems.",
  },
  {
    name: "Shanti",
    role: "Technical Lead",
    bio: "Defines architecture, selects tech stacks, and ensures scalability. Shanti writes and reviews high-quality code, upskills the team, bridges stakeholders, and champions automation, cloud solutions, and secure deployments.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

// Bios were previously hidden behind a hover/tap flip; they are now always visible.
function TeamCard({ member, index }) {
  const tealFirst = index % 2 === 1;
  return (
    <Box
      component="article"
      aria-labelledby={`team-${index}`}
      sx={{
        height: "100%",
        p: { xs: 3, md: 3.5 },
        borderRadius: `${radius.lg}px`,
        bgcolor: color.white,
        border: `1px solid ${color.slate200}`,
        boxShadow: shadow.xs,
        transition: `box-shadow ${motion.base} ${motion.ease}, transform ${motion.base} ${motion.ease}`,
        "&:hover": { boxShadow: shadow.md, transform: "translateY(-3px)" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
        <Box
          aria-hidden="true"
          sx={{
            width: 56,
            height: 56,
            flexShrink: 0,
            borderRadius: "50%",
            background: tealFirst
              ? `linear-gradient(135deg, ${color.teal600}, ${color.violet600})`
              : `linear-gradient(135deg, ${color.violet600}, ${color.teal600})`,
            color: color.white,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: font.display,
            fontWeight: 800,
            fontSize: "1.05rem",
            boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.25)",
          }}
        >
          {initials(member.name)}
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography
            id={`team-${index}`}
            component="h3"
            sx={{ fontFamily: font.display, fontWeight: 800, fontSize: "1.125rem", color: color.ink2, m: 0, lineHeight: 1.3 }}
          >
            {member.name}
          </Typography>
          <Typography
            sx={{
              mt: 0.5,
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: color.violet700,
            }}
          >
            {member.role}
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ color: color.slate600, fontSize: "0.9375rem", lineHeight: 1.75 }}>{member.bio}</Typography>
    </Box>
  );
}

export default function SectionTeams({ ...rest }) {
  return (
    <Section id="teams" className="cd-section" aria-labelledby="teams-heading" isStatic {...rest}>
      <SectionHeader
        id="teams-heading"
        title="Meet the Team"
        lead="Passionate technologists, architects, and strategists — united by one mission: making technology work for you."
      />
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          m: 0,
          p: 0,
          display: "grid",
          gap: { xs: 2.5, md: 3 },
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          maxWidth: 960,
          mx: "auto",
        }}
      >
        {TEAM.map((member, i) => (
          <li key={member.name}>
            <TeamCard member={member} index={i} />
          </li>
        ))}
      </Box>
    </Section>
  );
}
