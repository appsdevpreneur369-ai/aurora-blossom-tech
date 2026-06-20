import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Router from "next/router";
import { headerLinksData } from "../../data/header-links-data.js";
import makeStyles from "@mui/styles/makeStyles";
import styles from "/styles/jss/novel-logiks/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const AURORA_GRADIENT = "linear-gradient(90deg, #7C3AED 0%, #0891B2 100%)";

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
  const animateScroll = () => {
    currentTime += 20;
    element.scrollTop = easeInOutQuad(currentTime, start, change, duration);
    if (currentTime < duration) setTimeout(animateScroll, 20);
  };
  animateScroll();
};

export default function HeaderLinks({ dropdownHoverColor }) {
  const [activeItem, setActiveItem] = useState(null);
  const classes = useStyles();
  const { links } = headerLinksData;

  const handleNavClick = useCallback((e, link) => {
    setActiveItem(link.title);
    if (link.title === "Services") {
      Router.push(link.href);
      return;
    }
    if (window.location.pathname === "/sections") {
      const isMobile = /iPad|iPhone|iPod|android|webOS/i.test(navigator.userAgent);
      if (!isMobile) {
        e.preventDefault();
        const target = document.getElementById(link.smoothScroll);
        if (target) scrollGo(document.documentElement, target.offsetTop, 1250);
      }
    }
  }, []);

  return (
    <nav aria-label="Main navigation" style={{ display: "flex", alignItems: "center", width: "100%" }}>
      {/* Brand logo */}
      <Link href="/sections#home" passHref>
        <a
          aria-label="Aurora Blossom Tech — Home"
          style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none", marginRight: "0.5rem" }}
        >
          {/* Logo mark — save your logo as /public/img/logo/aurora-blossom-logo.png */}
          <img
            src="/img/logo/aurora-blossom-logo.png"
            alt="Aurora Blossom Tech logo"
            style={{ width: "2.25rem", height: "2.25rem", objectFit: "contain" }}
          />
          {/* Brand name as styled text — no image needed */}
          <span
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "0.02em",
              background: "linear-gradient(90deg, #4C1D95 0%, #0891B2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              whiteSpace: "nowrap",
            }}
          >
            Aurora Blossom Tech
          </span>
        </a>
      </Link>

      {/* Push nav links to the right */}
      <span style={{ flex: 1 }} />

      {/* Navigation links */}
      {links.map((link) => {
        const isActive = activeItem === link.title;
        return (
          <Link key={link.title} href={link.href} passHref>
            <a
              className={classes.dropdownLink}
              aria-current={isActive ? "page" : undefined}
              onClick={(e) => handleNavClick(e, link)}
              style={{
                position: "relative",
                color: isActive ? "#7C3AED" : "#1E293B",
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "0.625rem 0.875rem",
                whiteSpace: "nowrap",
                lineHeight: "2rem",
                transition: "color 0.2s ease",
                textDecoration: "none",
              }}
            >
              {link.title}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "0.875rem",
                  right: "0.875rem",
                  height: 2,
                  borderRadius: 2,
                  background: isActive ? AURORA_GRADIENT : "transparent",
                  transition: "background 0.25s ease",
                }}
              />
            </a>
          </Link>
        );
        })}
    </nav>
  );
}
