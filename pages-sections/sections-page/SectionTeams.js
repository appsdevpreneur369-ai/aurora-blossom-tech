import React, { useEffect, useCallback } from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import { Typography, Box } from "@mui/material";
import styles from "/styles/jss/novel-logiks/pages/componentsSections/sectionCards.js";

const useStyles = makeStyles(styles);

// ── Aurora Blossom Team Data ──────────────────────────────────────────────────
// Renames applied: Sunil → Suhasini (CEO), Kumar → Sunil (Front End Lead)
// ─────────────────────────────────────────────────────────────────────────────
const TEAM = [
  {
    name: "Suhasini",
    role: "Chief Executive Officer",
    emoji: "👩‍💼",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)",
    bio: "A visionary leader and Full Stack Developer proficient across the complete technology stack — front-end, back-end, server management, and security. Suhasini steers Aurora Blossom Tech's strategy, culture, and engineering excellence.",
  },
  {
    name: "Venkat Raju",
    role: "Cloud Architect",
    emoji: "☁️",
    gradient: "linear-gradient(135deg, #0891B2 0%, #7C3AED 100%)",
    bio: "Expert in designing, implementing, and managing cloud computing architecture. Venkat leads Cloud Strategy, Architecture Design, Cloud Service Integration, Security & Compliance, Cost Optimisation, Migration Planning, and Disaster Recovery.",
  },
  {
    name: "Farhaan",
    role: "Data Analyst & Data Scientist",
    emoji: "📊",
    gradient: "linear-gradient(135deg, #0891B2 0%, #1D4ED8 100%)",
    bio: "Farhaan leverages advanced statistical and machine learning techniques to extract actionable insights from complex datasets, while driving data-driven decision-making and business strategy through expert visualisation.",
  },
  {
    name: "Sunil",
    role: "Front End Lead",
    emoji: "🎨",
    gradient: "linear-gradient(135deg, #6D28D9 0%, #0891B2 100%)",
    bio: "Sunil leads and manages the front-end development team, architecting intuitive user interfaces and exceptional user experiences across web and mobile. Expert in React, Next.js, and modern CSS systems.",
  },
  {
    name: "Shanti",
    role: "Technical Lead",
    emoji: "⚙️",
    gradient: "linear-gradient(135deg, #BE185D 0%, #7C3AED 100%)",
    bio: "Defines architecture, selects tech stacks, and ensures scalability. Shanti writes and reviews high-quality code, upskills the team, bridges stakeholders, and champions automation, cloud solutions, and secure deployments.",
  },
  {
    name: "Sri Charan",
    role: "Full Stack Developer",
    emoji: "💻",
    gradient: "linear-gradient(135deg, #1D4ED8 0%, #0891B2 100%)",
    bio: "Oversees all technical, functional, and visual components of software development. Sri Charan ensures cross-device compatibility, optimises performance, seamlessly integrates design with functionality, and continuously expands skills.",
  },
];

// ── Shared text styles ────────────────────────────────────────────────────────
const NAME_STYLE = {
  color: "#fff",
  fontFamily: '"Montserrat", sans-serif',
  fontSize: "1.4rem",
  fontWeight: 700,
  lineHeight: 1.2,
  margin: "0.5rem 0 0.25rem",
};
const ROLE_STYLE = {
  color: "rgba(255,255,255,0.85)",
  fontFamily: '"Montserrat", sans-serif',
  fontSize: "0.875rem",
  fontWeight: 600,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  margin: "0 0 0",
};
const BIO_STYLE = {
  color: "rgba(255,255,255,0.88)",
  fontFamily: '"Inter", sans-serif',
  fontSize: "0.8rem",
  fontWeight: 400,
  lineHeight: 1.65,
  marginTop: "0.75rem",
  textAlign: "left",
};

// ── Flip Card Face ────────────────────────────────────────────────────────────
function CardFace({ member, faceName, showBio, classes }) {
  return (
    <div className={faceName} style={{ backgroundImage: member.gradient }}>
      <CardBody background className={classes.cardBodyRotate}>
        <Box sx={{ textAlign: "center", width: "100%" }}>
          {/* Emoji avatar */}
          <Box
            aria-hidden="true"
            sx={{
              fontSize: "2.5rem",
              lineHeight: 1,
              mb: 1,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))",
            }}
          >
            {member.emoji}
          </Box>

          {/* Name */}
          <p style={NAME_STYLE}>{member.name}</p>

          {/* Role */}
          <p style={ROLE_STYLE}>{member.role}</p>

          {/* Bio — only on back face */}
          {showBio && <p style={BIO_STYLE}>{member.bio}</p>}

          {/* Flip hint — only on front face */}
          {!showBio && (
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.7rem",
                marginTop: "1rem",
                fontStyle: "italic",
              }}
            >
              hover to learn more
            </p>
          )}
        </Box>
      </CardBody>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function SectionTeams({ ...rest }) {
  const classes = useStyles();

  const addStylesForRotatingCards = useCallback(() => {
    const rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      const rotatingCard = rotatingCards[i];
      const cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      const cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      if (!cardFront || !cardBack) continue;

      // Reset first
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";

      const rotatingWrapper = rotatingCard.parentElement;
      const cardWidth = rotatingCard.parentElement.offsetWidth;
      const cardHeight = rotatingCard.children[0]?.children[0]?.offsetHeight ?? 0;

      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style.marginBottom = "30px";

      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  }, [classes]);

  useEffect(() => {
    addStylesForRotatingCards();
    window.addEventListener("resize", addStylesForRotatingCards);
    return () => window.removeEventListener("resize", addStylesForRotatingCards);
  }, [addStylesForRotatingCards]);

  return (
    <section
      id="teams"
      className="cd-section"
      aria-labelledby="teams-heading"
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
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 520, mx: "auto", fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            Passionate technologists, architects, and strategists — united by
            one mission: making technology work for you.
          </Typography>
        </Box>

        {/* Flip Cards Grid */}
        <div className={classes.team}>
          <div className={classes.container}>
            <GridContainer>
              {TEAM.map((member) => (
                <GridItem key={member.name} xs={12} md={4}>
                  <div className={classes.rotatingCardContainer}>
                    <Card background className={classes.cardRotate}>
                      <CardFace
                        member={member}
                        faceName={classes.front}
                        showBio={false}
                        classes={classes}
                      />
                      <CardFace
                        member={member}
                        faceName={classes.back}
                        showBio={true}
                        classes={classes}
                      />
                    </Card>
                  </div>
                </GridItem>
              ))}
            </GridContainer>
          </div>
        </div>
      </Box>
    </section>
  );
}
