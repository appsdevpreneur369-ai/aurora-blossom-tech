import React, { useState, useEffect, useCallback } from "react";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import { Typography, Box } from "@mui/material";

const TEAM = [
  {
    name: "Suhasini",
    role: "Chief Executive Officer",
    emoji: "\u{1F469}\u200D\u{1F4BC}",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)",
    bio: "A visionary leader and Full Stack Developer proficient across the complete technology stack — front-end, back-end, server management, and security. Suhasini steers Aurora Blossom's strategy, culture, and engineering excellence.",
  },
  {
    name: "Venkat Raju",
    role: "Cloud Architect",
    emoji: "\u2601\uFE0F",
    gradient: "linear-gradient(135deg, #0891B2 0%, #7C3AED 100%)",
    bio: "Expert in designing, implementing, and managing cloud computing architecture. Venkat leads Cloud Strategy, Architecture Design, Cloud Service Integration, Security & Compliance, Cost Optimisation, Migration Planning, and Disaster Recovery.",
  },
  {
    name: "Farhaan",
    role: "Data Analyst & Data Scientist",
    emoji: "\u{1F4CA}",
    gradient: "linear-gradient(135deg, #0891B2 0%, #1D4ED8 100%)",
    bio: "Farhaan leverages advanced statistical and machine learning techniques to extract actionable insights from complex datasets, while driving data-driven decision-making and business strategy through expert visualisation.",
  },
  {
    name: "Sunil",
    role: "Front End Lead",
    emoji: "\u{1F3A8}",
    gradient: "linear-gradient(135deg, #6D28D9 0%, #0891B2 100%)",
    bio: "Sunil leads and manages the front-end development team, architecting intuitive user interfaces and exceptional user experiences across web and mobile. Expert in React, Next.js, and modern CSS systems.",
  },
  {
    name: "Shanti",
    role: "Technical Lead",
    emoji: "\u2699\uFE0F",
    gradient: "linear-gradient(135deg, #BE185D 0%, #7C3AED 100%)",
    bio: "Defines architecture, selects tech stacks, and ensures scalability. Shanti writes and reviews high-quality code, upskills the team, bridges stakeholders, and champions automation, cloud solutions, and secure deployments.",
  },
  {
    name: "Sri Charan",
    role: "Full Stack Developer",
    emoji: "\u{1F4BB}",
    gradient: "linear-gradient(135deg, #1D4ED8 0%, #0891B2 100%)",
    bio: "Oversees all technical, functional, and visual components of software development. Sri Charan ensures cross-device compatibility, optimises performance, seamlessly integrates design with functionality, and continuously expands skills.",
  },
];

function TeamCard({ member }) {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <Box
      onClick={() => isTouch && setFlipped((f) => !f)}
      onMouseEnter={() => !isTouch && setFlipped(true)}
      onMouseLeave={() => !isTouch && setFlipped(false)}
      aria-label={`${member.name} — ${member.role}. ${isTouch ? "Tap" : "Hover"} to ${flipped ? "see front" : "learn more"}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
      sx={{
        perspective: "1000px",
        cursor: "pointer",
        height: { xs: 280, sm: 300 },
        mb: { xs: 2, md: 3 },
        WebkitTapHighlightColor: "transparent",
        outline: "none",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: 3,
            background: member.gradient,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        >
          <Box sx={{ fontSize: "3rem", lineHeight: 1, mb: 1.5, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))" }}>
            {member.emoji}
          </Box>
          <Typography sx={{ color: "#fff", fontFamily: '"Montserrat", sans-serif', fontSize: "1.3rem", fontWeight: 700, textAlign: "center", mb: 0.5 }}>
            {member.name}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", fontFamily: '"Montserrat", sans-serif', fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center" }}>
            {member.role}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", mt: 2, fontStyle: "italic" }}>
            {isTouch ? "tap to learn more" : "hover to learn more"}
          </Typography>
        </Box>

        {/* Back */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 3,
            background: member.gradient,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        >
          <Typography sx={{ color: "#fff", fontFamily: '"Montserrat", sans-serif', fontSize: "1.1rem", fontWeight: 700, textAlign: "center", mb: 0.5 }}>
            {member.name}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", fontFamily: '"Montserrat", sans-serif', fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center", mb: 1.5 }}>
            {member.role}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.9)", fontFamily: '"Inter", sans-serif', fontSize: "0.8rem", lineHeight: 1.65, textAlign: "center" }}>
            {member.bio}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function SectionTeams({ ...rest }) {
  return (
    <section id="teams" className="cd-section" aria-labelledby="teams-heading" {...rest}>
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 6 }, maxWidth: 1200, mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography
            id="teams-heading"
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
            Meet the Team
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 520, mx: "auto", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Passionate technologists, architects, and strategists — united by one mission: making technology work for you.
          </Typography>
        </Box>

        <GridContainer spacing={3}>
          {TEAM.map((member) => (
            <GridItem key={member.name} xs={12} sm={6} md={4}>
              <TeamCard member={member} />
            </GridItem>
          ))}
        </GridContainer>
      </Box>
    </section>
  );
}
