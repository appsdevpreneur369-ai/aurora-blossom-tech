import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import SiteFooter from "/components/Footer/SiteFooter.js";
import PageHero from "/components/ui/PageHero.js";
import Section from "/components/ui/Section.js";
import { aiPageTitle, aiTopics } from "../data/ai-details-data.js";
import { color, font, radius, shadow, type, focusRing } from "/styles/tokens.js";

// "Term: explanation" → emphasise the term; the text itself is unchanged.
function Point({ text }) {
  const i = text.indexOf(": ");
  if (i === -1 || i > 60) return text;
  return (
    <>
      <Box component="strong" sx={{ fontWeight: 700, color: color.ink2 }}>
        {text.slice(0, i + 1)}
      </Box>
      {text.slice(i + 1)}
    </>
  );
}

function Topic({ topic, index }) {
  const headingId = `${topic.id}-title`;
  return (
    <Box
      component="article"
      id={topic.id}
      aria-labelledby={headingId}
      sx={{ "& + &": { mt: { xs: 8, md: 11 }, pt: { xs: 8, md: 11 }, borderTop: `1px solid ${color.slate200}` } }}
    >
      <Typography
        aria-hidden="true"
        sx={{ fontFamily: font.display, fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.14em", color: color.violet600, mb: 1.5 }}
      >
        {String(index + 1).padStart(2, "0")}
      </Typography>
      <Typography
        id={headingId}
        component="h2"
        sx={{ fontFamily: font.display, fontWeight: 800, fontSize: { xs: "1.5rem", md: "2rem" }, lineHeight: 1.2, color: color.ink2, m: 0, mb: 3 }}
      >
        {topic.title}
      </Typography>
      <Box
        sx={{
          position: "relative",
          aspectRatio: "16 / 7",
          borderRadius: `${radius.xl}px`,
          overflow: "hidden",
          bgcolor: color.slate100,
          boxShadow: shadow.md,
          mb: 4,
        }}
      >
        <Image src={`/${topic.image.src}`} alt="" layout="fill" objectFit="cover" sizes="(max-width: 1200px) 100vw, 840px" priority={index === 0} />
      </Box>
      <Typography sx={{ fontSize: type.lead, lineHeight: 1.8, color: color.slate700, mb: 4 }}>{topic.intro}</Typography>
      <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gap: 2 }}>
        {topic.points.map((p) => (
          <Box
            component="li"
            key={p}
            sx={{
              position: "relative",
              pl: 3,
              py: 0.25,
              fontSize: "1rem",
              lineHeight: 1.8,
              color: color.slate600,
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: "0.6em",
                width: 8,
                height: 8,
                borderRadius: "2px",
                background: `linear-gradient(135deg, ${color.violet600}, ${color.teal600})`,
              },
            }}
          >
            <Point text={p} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function AiDetails() {
  return (
    <>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <main id="main-content">
        <PageHero title={aiPageTitle} />
        <Section>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "280px minmax(0, 1fr)" },
              gap: { xs: 5, lg: 8 },
              alignItems: "start",
            }}
          >
            <Box
              component="nav"
              aria-label={aiPageTitle}
              sx={{
                position: { lg: "sticky" },
                top: 112,
                p: 3,
                borderRadius: `${radius.lg}px`,
                bgcolor: color.slate50,
                border: `1px solid ${color.slate200}`,
              }}
            >
              <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gap: 0.5 }}>
                {aiTopics.map((t, i) => (
                  <li key={t.id}>
                    <Box
                      component="a"
                      href={`#${t.id}`}
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        p: 1.25,
                        borderRadius: `${radius.sm}px`,
                        fontSize: "0.875rem",
                        lineHeight: 1.45,
                        fontWeight: 600,
                        color: color.slate700,
                        textDecoration: "none",
                        "&:hover": { bgcolor: color.white, color: color.violet700 },
                        "&:focus-visible": focusRing,
                      }}
                    >
                      <Box component="span" aria-hidden="true" sx={{ fontFamily: font.display, fontWeight: 800, color: color.violet600 }}>
                        {String(i + 1).padStart(2, "0")}
                      </Box>
                      {t.title}
                    </Box>
                  </li>
                ))}
              </Box>
            </Box>

            <Box sx={{ maxWidth: 840 }}>
              {aiTopics.map((t, i) => (
                <Topic key={t.id} topic={t} index={i} />
              ))}
            </Box>
          </Box>
        </Section>
      </main>
      <SiteFooter legal="© 2025 Aurora Blossom. All rights reserved." />
    </>
  );
}
