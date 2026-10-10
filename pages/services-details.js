import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import CheckRounded from "@mui/icons-material/CheckRounded";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import SiteFooter from "../components/Footer/SiteFooter.js";
import PageHero from "../components/ui/PageHero.js";
import Section from "../components/ui/Section.js";
import { services } from "../data/services-data.js";
import { color, font, radius, shadow, type, focusRingOnDark } from "../styles/tokens.js";

function ServiceRow({ svc, index }) {
  const reverse = index % 2 === 1;
  const headingId = `service-${index + 1}-title`;
  return (
    <Box
      component="article"
      id={`service-${index + 1}`}
      aria-labelledby={headingId}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 4, md: 8 },
        alignItems: "center",
        py: { xs: 6, md: 9 },
        "& + &": { borderTop: `1px solid ${color.slate200}` },
      }}
    >
      <Box sx={{ order: { md: reverse ? 2 : 1 } }}>
        <Box
          sx={{
            position: "relative",
            aspectRatio: svc.featured ? "16 / 9" : "4 / 3",
            borderRadius: `${radius.xl}px`,
            overflow: "hidden",
            bgcolor: color.slate100,
            ...(svc.featured && { background: "linear-gradient(160deg, #F8FDFF 0%, #DCF3FF 100%)" }),
            boxShadow: shadow.lg,
          }}
        >
          <Image src={`/${svc.serviceImageUrl}`} alt={svc.serviceImageAlt || svc.serviceTitle} layout="fill" objectFit={svc.featured ? "contain" : "cover"} sizes="(max-width: 900px) 100vw, 560px" priority={index === 0} />
        </Box>
      </Box>
      <Box sx={{ order: { md: reverse ? 1 : 2 } }}>
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
          {svc.serviceTitle}
        </Typography>
        <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gap: 1.75 }}>
          {svc.servicePoints.map((each, idx) => (
            <Box component="li" key={idx} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
              <Box
                aria-hidden="true"
                sx={{
                  mt: "3px",
                  width: 22,
                  height: 22,
                  flexShrink: 0,
                  borderRadius: "50%",
                  bgcolor: color.violet50,
                  color: color.violet700,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckRounded sx={{ fontSize: 15 }} />
              </Box>
              <Typography sx={{ color: color.slate700, fontSize: type.lead, lineHeight: 1.75 }}>{each}</Typography>
            </Box>
          ))}
        </Box>
        {svc.featured && (
          <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", gap: 1.5, "& > a": { flex: { xs: "1 1 100%", sm: "0 0 auto" } } }}>
            {svc.featured.links.map((l, i) => (
              <Link key={l.href} prefetch={false} href={l.href} passHref>
                <Button component="a" size="large" variant={i === 0 ? "contained" : "outlined"} color="primary">
                  {l.label}
                </Button>
              </Link>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default function ServicesDetails() {
  return (
    <>
      {/* Pre-existing heading retained as-is (sits beneath the fixed header) */}
      <h3>Services   </h3>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <main id="main-content">
        <PageHero
          title="Services"
          actions={
            <Box component="nav" aria-label="Services on this page" sx={{ width: "100%" }}>
              <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
                {services.map((svc, i) => (
                  <li key={svc.serviceTitle}>
                    <Box
                      component="a"
                      href={`#service-${i + 1}`}
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        minHeight: 40,
                        px: 2,
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,0.22)",
                        bgcolor: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.9)",
                        fontFamily: font.display,
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        "&:hover": { bgcolor: "rgba(255,255,255,0.14)", color: color.white },
                        "&:focus-visible": focusRingOnDark,
                      }}
                    >
                      {svc.serviceTitle}
                    </Box>
                  </li>
                ))}
              </Box>
            </Box>
          }
        />
        <Section py={{ xs: 2, md: 4 }}>
          {services.map((svc, i) => (
            <ServiceRow key={svc.serviceTitle} svc={svc} index={i} />
          ))}
        </Section>
      </main>
      <SiteFooter legal={`© ${new Date().getFullYear()} Aurora Blossom. All rights reserved.`} />
    </>
  );
}
