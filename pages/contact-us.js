import React from "react";
import { Box, Typography } from "@mui/material";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import SiteFooter from "/components/Footer/SiteFooter.js";
import PageHero from "/components/ui/PageHero.js";
import Section from "/components/ui/Section.js";
import IconTile from "/components/ui/IconTile.js";
import { color, font, gradient, radius, shadow, type, focusRing } from "/styles/tokens.js";

const linkSx = {
  display: "inline-block",
  py: "2px",
  color: color.ink2,
  fontWeight: 600,
  textDecoration: "none",
  borderRadius: "4px",
  overflowWrap: "anywhere",
  "&:hover": { color: color.violet700, textDecoration: "underline", textUnderlineOffset: "3px" },
  "&:focus-visible": focusRing,
};

function InfoCard({ icon, variant, children }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2.5,
        alignItems: "flex-start",
        p: { xs: 2.5, md: 3 },
        borderRadius: `${radius.lg}px`,
        bgcolor: color.white,
        border: `1px solid ${color.slate200}`,
        boxShadow: shadow.xs,
      }}
    >
      <IconTile icon={icon} variant={variant} size={44} />
      <Typography component="div" sx={{ fontSize: "1rem", lineHeight: 1.75, color: color.slate700 }}>
        {children}
      </Typography>
    </Box>
  );
}

export default function ContactUsPage() {
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
        <PageHero title="Contact Us" />
        <Section isStatic>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "7fr 5fr" },
              gap: { xs: 6, md: 8 },
              alignItems: "center",
            }}
          >
            <Box>
              <Box aria-hidden="true" sx={{ width: 48, height: 4, borderRadius: 2, background: gradient.brand, mb: 2.5 }} />
              <Typography
                component="h2"
                sx={{ fontFamily: font.display, fontWeight: 800, fontSize: type.h2, lineHeight: 1.15, color: color.ink2, m: 0, mb: 3 }}
              >
                What Does Your Business Need?
              </Typography>
              <Typography sx={{ fontSize: type.lead, lineHeight: 1.75, color: color.slate700, fontWeight: 500, mb: 2 }}>
                Learn how Aurora Blossom can move your technology and business strategy forward. Please contact us with any inquiries or requests to help you grow your business.
              </Typography>
              <Typography sx={{ fontSize: "1rem", lineHeight: 1.75, color: color.slate600, mb: 4 }}>
                Please contact us with any inquiries or requests to help you grow your business.
              </Typography>

              <Box sx={{ display: "grid", gap: 2, maxWidth: 520 }}>
                <InfoCard icon={PhoneOutlined} variant="violet">
                  <Box component="a" href="tel:917032405627" sx={linkSx}>
                    (+91) 7032405627
                  </Box>
                  <br />
                  Mon - Fri, 8:00-22:00
                </InfoCard>
                <InfoCard icon={EmailOutlined} variant="teal">
                  <Box component="a" href="mailto:contact@aurora-blossom.com" sx={linkSx}>
                    contact@aurora-blossom.com
                  </Box>
                  <br />
                  <Box component="a" href="mailto:hr@aurora-blossom.com" sx={linkSx}>
                    hr@aurora-blossom.com
                  </Box>
                </InfoCard>
              </Box>
            </Box>

            <Box
              sx={{
                position: "relative",
                borderRadius: `${radius.xl}px`,
                p: { xs: 6, md: 8 },
                background: `radial-gradient(circle at 50% 40%, ${color.violet100} 0%, ${color.slate50} 70%)`,
                border: `1px solid ${color.slate200}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "min(60%, 220px)",
                  aspectRatio: "1",
                  borderRadius: "28px",
                  bgcolor: color.white,
                  boxShadow: shadow.lg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 3,
                }}
              >
                <picture style={{ display: "block", width: "100%" }}>
                  <source
                    type="image/webp"
                    srcSet="/img/logo/aurora-blossom-logo-192.webp 1x, /img/logo/aurora-blossom-logo-512.webp 2x"
                  />
                  <img
                    src="/img/logo/aurora-blossom-logo-192.png"
                    srcSet="/img/logo/aurora-blossom-logo-192.png 1x, /img/logo/aurora-blossom-logo-512.png 2x"
                    alt="Aurora Blossom logo"
                    width={192}
                    height={176}
                    loading="lazy"
                    style={{ width: "100%", height: "auto" }}
                  />
                </picture>
              </Box>
            </Box>
          </Box>
        </Section>
      </main>
      <SiteFooter legal="© 2025 Aurora Blossom. All rights reserved." />
    </>
  );
}
