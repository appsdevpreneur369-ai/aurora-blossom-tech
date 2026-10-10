import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Box } from "@mui/material";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { headerLinksData } from "../../data/header-links-data.js";
import { services } from "../../data/services-data.js";
import { scrollToSection, useActiveNavItem } from "./navUtils.js";
import { color, font, motion, radius, shadow, focusRing } from "/styles/tokens.js";

const linkSx = (isActive) => ({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  height: 40,
  px: { md: 1.1, lg: 1.5 },
  borderRadius: `${radius.sm}px`,
  fontFamily: font.display,
  fontSize: { md: "0.84rem", lg: "0.9rem" },
  fontWeight: 600,
  whiteSpace: "nowrap",
  color: isActive ? color.violet700 : color.slate700,
  textDecoration: "none",
  transition: `color ${motion.fast} ${motion.ease}, background-color ${motion.fast} ${motion.ease}`,
  "&:hover": { color: color.violet700, bgcolor: color.violet50 },
  "&:focus-visible": focusRing,
  "&::after": {
    content: '""',
    position: "absolute",
    left: { md: 9, lg: 12 },
    right: { md: 9, lg: 12 },
    bottom: 2,
    height: 2,
    borderRadius: 2,
    background: `linear-gradient(90deg, ${color.violet600}, ${color.teal600})`,
    transform: isActive ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "left",
    transition: `transform ${motion.base} ${motion.ease}`,
  },
});

const ctaSx = (isActive) => ({
  display: "inline-flex",
  alignItems: "center",
  height: 42,
  px: 2.25,
  ml: { md: 0.75, lg: 1.5 },
  borderRadius: `${radius.pill}px`,
  fontFamily: font.display,
  fontSize: { md: "0.84rem", lg: "0.9rem" },
  fontWeight: 700,
  whiteSpace: "nowrap",
  textDecoration: "none",
  color: color.white,
  bgcolor: isActive ? color.violet800 : color.violet600,
  transition: `background-color ${motion.fast} ${motion.ease}, box-shadow ${motion.fast} ${motion.ease}`,
  "&:hover": { bgcolor: color.violet700, boxShadow: shadow.brand },
  "&:focus-visible": focusRing,
});

function ServicesMenu({ link, isActive, onNavigate }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);

  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <Box
      ref={wrapperRef}
      sx={{ position: "relative", display: "inline-flex", alignItems: "center" }}
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <Link href={link.href} passHref>
        <Box component="a" aria-current={isActive ? "page" : undefined} sx={{ ...linkSx(isActive), pr: { md: 0.5, lg: 0.75 } }} onClick={() => onNavigate(link)}>
          {link.title}
        </Box>
      </Link>
      <Box
        component="button"
        type="button"
        ref={buttonRef}
        aria-expanded={open}
        aria-controls="services-menu"
        aria-label={`${link.title} menu`}
        onClick={() => setOpen((o) => !o)}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 32,
          p: 0,
          border: 0,
          borderRadius: `${radius.sm}px`,
          bgcolor: "transparent",
          color: isActive ? color.violet700 : color.slate600,
          cursor: "pointer",
          "&:hover": { bgcolor: color.violet50, color: color.violet700 },
          "&:focus-visible": focusRing,
          "& svg": { transition: `transform ${motion.base} ${motion.ease}`, transform: open ? "rotate(180deg)" : "none" },
        }}
      >
        <KeyboardArrowDownRounded fontSize="small" />
      </Box>

      <Box
        id="services-menu"
        hidden={!open}
        sx={{
          position: "absolute",
          top: "calc(100% + 14px)",
          left: "50%",
          transform: "translateX(-50%)",
          width: 640,
          maxWidth: "calc(100vw - 48px)",
          p: 1.5,
          borderRadius: `${radius.lg}px`,
          bgcolor: color.white,
          border: `1px solid ${color.slate200}`,
          boxShadow: shadow.lg,
          display: open ? "grid" : "none",
          gridTemplateColumns: "1fr 1fr",
          gap: 0.5,
          zIndex: 10,
          // hover bridge so the pointer can travel from the trigger to the panel
          "&::before": { content: '""', position: "absolute", left: 0, right: 0, top: -16, height: 16 },
        }}
      >
        {services.map((svc, idx) => (
          <Link key={svc.serviceTitle} href={`/services-details#service-${idx + 1}`} passHref>
            <Box
              component="a"
              onClick={() => setOpen(false)}
              sx={{
                display: "block",
                p: 1.75,
                borderRadius: `${radius.md}px`,
                textDecoration: "none",
                transition: `background-color ${motion.fast} ${motion.ease}`,
                "&:hover": { bgcolor: color.violet50 },
                "&:hover .svc-title": { color: color.violet700 },
                "&:focus-visible": focusRing,
              }}
            >
              <Box className="svc-title" component="span" sx={{ display: "block", fontFamily: font.display, fontWeight: 700, fontSize: "0.9rem", color: color.ink2, lineHeight: 1.35, mb: 0.5 }}>
                {svc.serviceTitle}
              </Box>
              <Box component="span" sx={{ display: "block", fontSize: "0.8125rem", color: color.slate600, lineHeight: 1.5 }}>
                {svc.serviceOneLiner}
              </Box>
            </Box>
          </Link>
        ))}
        <Link href={link.href} passHref>
          <Box
            component="a"
            onClick={() => setOpen(false)}
            sx={{
              gridColumn: "1 / -1",
              display: "flex",
              alignItems: "center",
              gap: 1,
              mt: 0.5,
              px: 1.75,
              py: 1.25,
              borderRadius: `${radius.md}px`,
              bgcolor: color.slate50,
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: "0.875rem",
              color: color.violet700,
              textDecoration: "none",
              "&:hover": { bgcolor: color.violet50 },
              "&:focus-visible": focusRing,
            }}
          >
            {link.title}
            <ArrowForwardRounded sx={{ fontSize: 18 }} aria-hidden="true" />
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

ServicesMenu.propTypes = {
  link: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
  onNavigate: PropTypes.func.isRequired,
};

/** Desktop navigation (rendered by Header at md and up). */
export default function HeaderLinks() {
  const { links } = headerLinksData;
  const active = useActiveNavItem();

  const handleNavClick = useCallback((e, link) => {
    if (link.title === "Services") return; // routes to /services-details
    if (scrollToSection(link.smoothScroll)) e.preventDefault();
  }, []);

  const lastIndex = links.length - 1;

  return (
    <Box component="nav" aria-label="Main navigation" sx={{ display: "flex", alignItems: "center" }}>
      <Box component="ul" sx={{ display: "flex", alignItems: "center", gap: { md: 0, lg: 0.25 }, listStyle: "none", m: 0, p: 0 }}>
        {links.map((link, i) => {
          const isActive = active === link.title;
          if (link.title === "Services") {
            return (
              <li key={link.title}>
                <ServicesMenu link={link} isActive={isActive} onNavigate={() => {}} />
              </li>
            );
          }
          return (
            <li key={link.title}>
              <Link href={link.href} passHref>
                <Box
                  component="a"
                  aria-current={isActive ? "true" : undefined}
                  onClick={(e) => handleNavClick(e, link)}
                  sx={i === lastIndex ? ctaSx(isActive) : linkSx(isActive)}
                >
                  {link.title}
                </Box>
              </Link>
            </li>
          );
        })}
      </Box>
    </Box>
  );
}

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.string,
};
