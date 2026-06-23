import React, { useEffect, useCallback } from "react";
import Head from "next/head";
import makeStyles from "@mui/styles/makeStyles";
import { Box, Typography } from "@mui/material";

import Header      from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer      from "../components/Footer/Footer";

import SectionHome           from "/pages-sections/sections-page/SectionHome.js";
import SectionAboutUsDetails from "/pages-sections/sections-page/SectionAboutUsDetails.js";
import SectionServices       from "/pages-sections/sections-page/SectionServices.js";
import SectionProducts       from "/pages-sections/sections-page/SectionProducts.js";
import SectionClients        from "/pages-sections/sections-page/SectionClients.js";
import SectionTeams          from "/pages-sections/sections-page/SectionTeams.js";
import SectionCareers        from "/pages-sections/sections-page/SectionCareers.js";
import SectionContactUs      from "/pages-sections/sections-page/SectionContactUs.js";

import sectionsPageStyle from "/styles/jss/novel-logiks/pages/sectionsPageStyle.js";

const useStyles = makeStyles(sectionsPageStyle);

const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

const scrollGo = (element, to, duration) => {
  const start = element.scrollTop;
  const change = to - start;
  let currentTime = 0;
  const animate = () => {
    currentTime += 20;
    element.scrollTop = easeInOutQuad(currentTime, start, change, duration);
    if (currentTime < duration) setTimeout(animate, 20);
  };
  animate();
};

const NAV_ITEMS = [
  { id: "home",      label: "Home" },
  { id: "about-us",  label: "About" },
  { id: "services",  label: "Services" },
  { id: "products",  label: "Products" },
  { id: "clients",   label: "Clients" },
  { id: "teams",     label: "Team" },
  { id: "careers",   label: "Careers" },
  { id: "contactUs", label: "Contact" },
];

export default function HomePage() {
  const classes = useStyles();

  const updateView = useCallback(() => {
    const contentSections = document.getElementsByClassName("cd-section");
    const nav = document.getElementById("cd-vertical-nav");
    if (!nav) return;
    const navLinks = nav.getElementsByTagName("a");
    for (let i = 0; i < contentSections.length; i++) {
      if (!navLinks[i]) continue;
      const midY = window.pageYOffset + window.innerHeight / 2;
      const top  = contentSections[i].offsetTop;
      const bot  = top + contentSections[i].scrollHeight;
      if (midY > top && midY < bot) {
        navLinks[i].classList.add("is-selected");
      } else {
        navLinks[i].classList.remove("is-selected");
      }
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const target = document.getElementById(hash);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
    window.addEventListener("scroll", updateView, { passive: true });
    updateView();
    return () => window.removeEventListener("scroll", updateView);
  }, [updateView]);

  const handleNavClick = (e, id) => {
    const isMobile = /iPad|iPhone|iPod|android|webOS/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      const target = document.getElementById(id);
      if (target) scrollGo(document.documentElement, target.offsetTop, 1250);
    }
  };

  return (
    <>
      <Head>
        <title>Aurora Blossom | Digital Transformation &amp; IT Services</title>
        <meta
          name="description"
          content="Aurora Blossom — enterprise IT consulting, AI &amp; analytics, cloud architecture, SAP, e-commerce, and digital marketing. Hyderabad, India."
        />
        <link rel="canonical" href="https://www.aurora-blossom.com/" />
        <meta property="og:url"   content="https://www.aurora-blossom.com/" />
        <meta property="og:title" content="Aurora Blossom | Digital Transformation &amp; IT Services" />
        <link rel="preload" as="image" href="/img/lsk_imgs/business_home.png" type="image/png" />
      </Head>

      <Header
        color="white"
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{ height: 80, color: "white" }}
      />

      <main id="main-content" className={classes.main}>
        <SectionHome />
        <SectionAboutUsDetails />
        <SectionServices />
        <SectionProducts />
        <SectionClients />
        <SectionTeams />
        <SectionCareers />
        <SectionContactUs />
      </main>

      <nav id="cd-vertical-nav" aria-hidden="true" style={{ display: "none" }}>
        <ul>
          {NAV_ITEMS.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-number={i + 1}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                <span className="cd-dot" />
                <span className="cd-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Footer
        className={classes.footer}
        content={
          <Box
            sx={{
              py: 3,
              px: { xs: 3, md: 6 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              borderTop: "1px solid rgba(0,0,0,0.06)",
              maxWidth: 1200,
              mx: "auto",
              width: "100%",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 500,
                color: "text.secondary",
                fontSize: "0.8rem",
              }}
            >
              {`© ${new Date().getFullYear()} Aurora Blossom. All rights reserved.`}
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              {["Home", "Services", "Careers", "Contact"].map((label) => (
                <Box
                  key={label}
                  component="a"
                  href={`/#${label.toLowerCase()}`}
                  sx={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    color: "text.secondary",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    "&:hover": { color: "#7C3AED" },
                    transition: "color 0.2s ease",
                  }}
                >
                  {label}
                </Box>
              ))}
            </Box>
            <Typography
              variant="body2"
              sx={{ fontFamily: '"Inter", sans-serif', color: "text.disabled", fontSize: "0.75rem" }}
            >
              Made with ☀️ in Hyderabad, India
            </Typography>
          </Box>
        }
      />
    </>
  );
}
