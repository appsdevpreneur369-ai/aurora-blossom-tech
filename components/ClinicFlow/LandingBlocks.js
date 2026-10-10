import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import Section from "/components/ui/Section.js";
import SectionHeader from "/components/ui/SectionHeader.js";
import FeatureCard from "/components/ui/FeatureCard.js";
import { gridPattern } from "/components/ui/PageHero.js";
import { color, font, gradient, layout, motion, radius, shadow, type, focusRing, focusRingOnDark } from "/styles/tokens.js";

// Shared building blocks for the ClinicFlow247 product landing pages.
// All copy is passed in by each page so its existing wording is preserved.

const baseCta = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  px: 3.5,
  borderRadius: `${radius.sm + 2}px`,
  fontFamily: font.display,
  fontWeight: 700,
  fontSize: "0.975rem",
  textDecoration: "none",
  transition: `background-color ${motion.fast} ${motion.ease}, border-color ${motion.fast} ${motion.ease}, box-shadow ${motion.fast} ${motion.ease}`,
};

/** Internal link styled as a button. `tone`: light (white on dark), ghost (outline on dark), primary. */
export function CtaLink({ href, tone, children }) {
  const tones = {
    light: { bgcolor: color.white, color: color.violet800, "&:hover": { bgcolor: color.violet50, boxShadow: shadow.brand }, "&:focus-visible": focusRingOnDark },
    ghost: { border: "1.5px solid rgba(255,255,255,0.5)", color: color.white, "&:hover": { borderColor: color.white, bgcolor: "rgba(255,255,255,0.08)" }, "&:focus-visible": focusRingOnDark },
    primary: { bgcolor: color.violet600, color: color.white, "&:hover": { bgcolor: color.violet700, boxShadow: shadow.brand }, "&:focus-visible": focusRing },
    secondary: { bgcolor: color.slate100, color: color.ink2, "&:hover": { bgcolor: color.slate200 }, "&:focus-visible": focusRing },
  };
  return (
    <Link href={href} passHref>
      <Box component="a" sx={{ ...baseCta, ...tones[tone] }}>
        {children}
      </Box>
    </Link>
  );
}

CtaLink.defaultProps = { tone: "light" };
CtaLink.propTypes = { href: PropTypes.string.isRequired, tone: PropTypes.oneOf(["light", "ghost", "primary", "secondary"]), children: PropTypes.node };

/** "Problem" band: heading, paragraph, pain-point cards. */
export function ProblemBand({ title, body, pains }) {
  return (
    <Section tone="subtle" aria-labelledby="problem-heading">
      <SectionHeader id="problem-heading" title={title} lead={body} />
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          m: 0,
          p: 0,
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
        }}
      >
        {pains.map((pain) => (
          <Box
            component="li"
            key={pain}
            sx={{
              p: 2.5,
              borderRadius: `${radius.md}px`,
              bgcolor: color.white,
              border: `1px solid ${color.warningBorder}`,
              borderLeft: `4px solid ${color.warning}`,
              fontSize: "0.95rem",
              lineHeight: 1.6,
              fontWeight: 500,
              color: color.slate800,
            }}
          >
            {pain}
          </Box>
        ))}
      </Box>
    </Section>
  );
}

ProblemBand.propTypes = { title: PropTypes.node, body: PropTypes.node, pains: PropTypes.arrayOf(PropTypes.string) };

/** Feature grid section. Features: { icon, title, desc }. */
export function FeatureSection({ title, subtitle, features, iconVariant }) {
  return (
    <Section aria-labelledby="features-heading">
      <SectionHeader id="features-heading" title={title} lead={subtitle} />
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
        {features.map((f) => (
          <li key={f.title}>
            <FeatureCard icon={f.icon} title={f.title} description={f.desc} iconVariant={iconVariant} />
          </li>
        ))}
      </Box>
    </Section>
  );
}

FeatureSection.defaultProps = { iconVariant: "violet" };
FeatureSection.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  features: PropTypes.array.isRequired,
  iconVariant: PropTypes.oneOf(["violet", "teal"]),
};

/** FAQ list — answers are always visible (they mirror the page's FAQ structured data). */
export function FaqSection({ faqs }) {
  return (
    <Section tone="subtle" width="narrow" aria-labelledby="faq-heading">
      <SectionHeader id="faq-heading" title="Frequently Asked Questions" />
      <Box component="dl" sx={{ m: 0, display: "grid", gap: 2 }}>
        {faqs.map((faq) => (
          <Box
            key={faq.q}
            sx={{
              p: { xs: 2.5, md: 3.5 },
              borderRadius: `${radius.lg}px`,
              bgcolor: color.white,
              border: `1px solid ${color.slate200}`,
              boxShadow: shadow.xs,
            }}
          >
            <Typography component="dt" sx={{ fontFamily: font.display, fontWeight: 700, fontSize: "1.0625rem", color: color.ink2, mb: 1 }}>
              {faq.q}
            </Typography>
            <Typography component="dd" sx={{ m: 0, color: color.slate600, fontSize: "0.975rem", lineHeight: 1.75 }}>
              {faq.a}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
}

FaqSection.propTypes = { faqs: PropTypes.arrayOf(PropTypes.shape({ q: PropTypes.node, a: PropTypes.node })).isRequired };

/** Closing call-to-action band on the dark brand surface. */
export function CtaBand({ title, body, children }) {
  return (
    <Box component="section" aria-labelledby="cta-heading" sx={{ bgcolor: color.white, px: layout.gutter, py: { xs: 6, md: 10 } }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          maxWidth: layout.maxWidth,
          mx: "auto",
          borderRadius: `${radius.xl}px`,
          background: gradient.night,
          color: color.white,
          textAlign: "center",
          px: { xs: 3, md: 8 },
          py: { xs: 7, md: 10 },
        }}
      >
        <Box aria-hidden="true" sx={gridPattern} />
        <Box sx={{ position: "relative" }}>
          <Typography
            id="cta-heading"
            component="h2"
            sx={{ fontFamily: font.display, fontWeight: 800, fontSize: type.h2, lineHeight: 1.15, m: 0, mb: 2 }}
          >
            {title}
          </Typography>
          {body && (
            <Typography sx={{ maxWidth: 600, mx: "auto", mb: 4, color: "rgba(255,255,255,0.82)", fontSize: type.lead, lineHeight: 1.7 }}>
              {body}
            </Typography>
          )}
          {children}
        </Box>
      </Box>
    </Box>
  );
}

CtaBand.propTypes = { title: PropTypes.node, body: PropTypes.node, children: PropTypes.node };
