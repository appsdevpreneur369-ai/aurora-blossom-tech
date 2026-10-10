import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { AppBar, Box, Drawer, IconButton } from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import MailOutlineRounded from "@mui/icons-material/MailOutlineRounded";
import BrandMark from "/components/ui/BrandMark.js";
import { headerLinksData } from "../../data/header-links-data.js";
import { scrollToSection, useActiveNavItem } from "./navUtils.js";
import { color, font, layout, motion, radius, focusRing } from "/styles/tokens.js";

const DRAWER_ID = "mobile-navigation";

export default function Header({ links }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const router = useRouter();
  const active = useActiveNavItem();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever navigation completes
  React.useEffect(() => {
    const close = () => setMobileOpen(false);
    router.events.on("routeChangeComplete", close);
    router.events.on("hashChangeComplete", close);
    return () => {
      router.events.off("routeChangeComplete", close);
      router.events.off("hashChangeComplete", close);
    };
  }, [router.events]);

  const handleDrawerToggle = () => setMobileOpen((o) => !o);

  const handleMobileNav = (e, link) => {
    setMobileOpen(false);
    if (link.title === "Services") return;
    if (window.location.pathname === "/" && document.getElementById(link.smoothScroll)) {
      e.preventDefault();
      // Wait for the drawer to release its scroll lock before scrolling.
      setTimeout(() => scrollToSection(link.smoothScroll), 260);
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: scrolled ? "rgba(255,255,255,0.92)" : color.white,
        backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        color: color.ink2,
        borderBottom: `1px solid ${scrolled ? color.slate200 : "transparent"}`,
        boxShadow: scrolled ? "0 6px 24px -12px rgba(15,23,42,0.18)" : "none",
        transition: `box-shadow ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}, background-color ${motion.base} ${motion.ease}`,
      }}
    >
      <Box
        sx={{
          maxWidth: layout.maxWidth + 64,
          width: "100%",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 3 },
          height: layout.headerHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Link href="/#home" passHref>
          <Box
            component="a"
            aria-label="Aurora Blossom — Home"
            onClick={(e) => {
              if (scrollToSection("home")) e.preventDefault();
            }}
            sx={{ display: "inline-flex", alignItems: "center", textDecoration: "none", borderRadius: `${radius.sm}px`, "&:focus-visible": focusRing }}
          >
            <BrandMark size={40} />
          </Box>
        </Link>

        {/* Desktop navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>{links}</Box>

        {/* Mobile menu button */}
        <IconButton
          aria-label="Open navigation menu"
          aria-controls={DRAWER_ID}
          aria-expanded={mobileOpen}
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "inline-flex", md: "none" },
            width: 44,
            height: 44,
            borderRadius: `${radius.md}px`,
            border: `1px solid ${color.slate200}`,
            color: color.violet800,
            "&.Mui-focusVisible": focusRing,
          }}
        >
          <Menu />
        </IconButton>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          id: DRAWER_ID,
          sx: { width: { xs: "86vw", sm: 360 }, maxWidth: 380, display: "flex", flexDirection: "column", bgcolor: color.white },
        }}
        sx={{ display: { md: "none" } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2.5,
            height: 64,
            borderBottom: `1px solid ${color.slate200}`,
          }}
        >
          <BrandMark size={36} />
          <IconButton
            aria-label="Close navigation menu"
            onClick={handleDrawerToggle}
            sx={{ width: 44, height: 44, color: color.violet800, "&.Mui-focusVisible": focusRing }}
          >
            <Close />
          </IconButton>
        </Box>

        <Box component="nav" aria-label="Mobile navigation" sx={{ py: 1.5, px: 1.5, overflowY: "auto" }}>
          <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
            {headerLinksData.links.map((link) => {
              const isActive = active === link.title;
              return (
                <li key={link.title}>
                  <Link href={link.href} passHref>
                    <Box
                      component="a"
                      aria-current={isActive ? "true" : undefined}
                      onClick={(e) => handleMobileNav(e, link)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        minHeight: 52,
                        px: 2,
                        borderRadius: `${radius.md}px`,
                        fontFamily: font.display,
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: isActive ? color.violet700 : color.slate800,
                        bgcolor: isActive ? color.violet50 : "transparent",
                        textDecoration: "none",
                        transition: `background-color ${motion.fast} ${motion.ease}, color ${motion.fast} ${motion.ease}`,
                        "&:hover": { bgcolor: color.violet50, color: color.violet700 },
                        "&:focus-visible": focusRing,
                      }}
                    >
                      {link.title}
                    </Box>
                  </Link>
                </li>
              );
            })}
          </Box>
        </Box>

        <Box sx={{ mt: "auto", p: 2.5, borderTop: `1px solid ${color.slate200}` }}>
          <Box
            component="a"
            href="mailto:contact@aurora-blossom.com"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              minHeight: 50,
              borderRadius: `${radius.sm + 2}px`,
              bgcolor: color.violet600,
              color: color.white,
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              "&:hover": { bgcolor: color.violet700 },
              "&:focus-visible": focusRing,
            }}
          >
            <MailOutlineRounded fontSize="small" aria-hidden="true" />
            Get in Touch
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}

Header.defaultProps = {
  color: "white",
};

// Legacy props (color, fixed, brand, changeColorOnScroll…) are still accepted
// so existing page call-sites keep working; the header is always fixed/white.
Header.propTypes = {
  color: PropTypes.oneOf([
    "primary", "info", "success", "warning", "danger",
    "transparent", "white", "rose", "dark",
  ]),
  links: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary", "info", "success", "warning", "danger",
      "transparent", "white", "rose", "dark",
    ]).isRequired,
  }),
};
