import React from "react";
import PropTypes from "prop-types";
import StaticIsland from "/components/ui/StaticIsland.js";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import PlaceOutlined from "@mui/icons-material/PlaceOutlined";
import AccessTimeOutlined from "@mui/icons-material/AccessTimeOutlined";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import BrandMark from "/components/ui/BrandMark.js";
import { services } from "../../data/services-data.js";
import { contactUs } from "../../data/contact-us-data.js";
import { color, font, layout, motion, radius, focusRingOnDark } from "/styles/tokens.js";

// Destinations already used on the site (career-details footer / Organization JSON-LD).
const SOCIAL = [
  { label: "Aurora Blossom on Twitter", href: "https://twitter.com/aurorablossomtech", Icon: Twitter },
  { label: "Aurora Blossom on Instagram", href: "https://instagram.com/aurorablossomtech", Icon: Instagram },
  { label: "Aurora Blossom on Facebook", href: "https://www.facebook.com/aurorablossomtech", Icon: Facebook },
];

const PRODUCT_LINKS = [
  { href: "/#products", label: "E-Commerce Platform" },
  { href: "/clinic-management-software-india", label: "Clinic Management Software" },
  { href: "/doctor-appointment-software", label: "Appointment Software" },
  { href: "/electronic-prescription-software", label: "e-Prescription Software" },
  { href: "/book-demo", label: "Book a Free Demo" },
];

// Original homepage footer links (labels unchanged; Contact now targets the real section id).
const QUICK_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#careers", label: "Careers" },
  { href: "/#contactUs", label: "Contact" },
];

const linkSx = {
  display: "inline-block",
  py: "3px",
  color: "rgba(255,255,255,0.72)",
  fontSize: "0.9rem",
  lineHeight: 1.5,
  textDecoration: "none",
  borderRadius: "4px",
  transition: `color ${motion.fast} ${motion.ease}`,
  "&:hover": { color: color.white, textDecoration: "underline", textUnderlineOffset: "3px" },
  "&:focus-visible": focusRingOnDark,
};

function ColumnHeading({ id, children }) {
  return (
    <Typography
      id={id}
      component="h2"
      sx={{
        fontFamily: font.display,
        fontWeight: 700,
        fontSize: "0.8rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: color.white,
        m: 0,
        mb: 2.5,
      }}
    >
      {children}
    </Typography>
  );
}

function LinkList({ items }) {
  return (
    <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gap: 1 }}>
      {items.map((item) => (
        <li key={item.href + item.label}>
          <Link prefetch={false} href={item.href} passHref>
            <Box component="a" sx={linkSx}>
              {item.label}
            </Box>
          </Link>
        </li>
      ))}
    </Box>
  );
}

LinkList.propTypes = { items: PropTypes.array.isRequired };

function ContactLine({ Icon, children }) {
  return (
    <Box component="li" sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
      <Icon aria-hidden="true" sx={{ fontSize: 18, mt: "2px", color: color.violet300, flexShrink: 0 }} />
      <Box sx={{ minWidth: 0 }}>{children}</Box>
    </Box>
  );
}

ColumnHeading.propTypes = { id: PropTypes.string, children: PropTypes.node };

ContactLine.propTypes = { Icon: PropTypes.elementType.isRequired, children: PropTypes.node };

/**
 * Site-wide footer. `legal` carries each page's existing copyright line so the
 * original wording is preserved; `extra` holds any additional existing footer copy.
 */
export default function SiteFooter({ legal, extra }) {
  return (
    <Box component="footer" sx={{ bgcolor: color.ink, color: "rgba(255,255,255,0.72)", mt: "auto" }}>
      {/* Links only — never hydrated on first load (see components/ui/StaticIsland.js) */}
      <StaticIsland>
      <Box sx={{ maxWidth: layout.maxWidth, mx: "auto", px: layout.gutter, pt: { xs: 8, md: 10 }, pb: 5 }}>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 5, md: 6 },
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1.3fr 1.1fr 1fr 1.3fr" },
          }}
        >
          <Box>
            <Link prefetch={false} href="/#home" passHref>
              <Box component="a" aria-label="Aurora Blossom — Home" sx={{ display: "inline-flex", textDecoration: "none", borderRadius: `${radius.sm}px`, "&:focus-visible": focusRingOnDark }}>
                <BrandMark size={44} onDark />
              </Box>
            </Link>
            <Typography sx={{ mt: 2.5, fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 320 }}>
              {contactUs.points[0]}
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, mt: 3, display: "flex", gap: 1 }}>
              {SOCIAL.map(({ label, href, Icon }) => (
                <li key={href}>
                  <Box
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    sx={{
                      width: 40,
                      height: 40,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: `${radius.md}px`,
                      border: "1px solid rgba(255,255,255,0.16)",
                      color: "rgba(255,255,255,0.8)",
                      transition: `background-color ${motion.fast} ${motion.ease}, color ${motion.fast} ${motion.ease}`,
                      "&:hover": { bgcolor: "rgba(255,255,255,0.08)", color: color.white },
                      "&:focus-visible": focusRingOnDark,
                    }}
                  >
                    <Icon sx={{ fontSize: 20 }} aria-hidden="true" />
                  </Box>
                </li>
              ))}
            </Box>
          </Box>

          <Box component="nav" aria-labelledby="footer-services">
            <ColumnHeading id="footer-services">Services</ColumnHeading>
            <LinkList items={services.map((s, i) => ({ href: `/services-details#service-${i + 1}`, label: s.serviceTitle }))} />
          </Box>

          <Box component="nav" aria-labelledby="footer-products">
            <ColumnHeading id="footer-products">Products</ColumnHeading>
            <LinkList items={PRODUCT_LINKS} />
          </Box>

          <Box>
            <ColumnHeading>Contact Us</ColumnHeading>
            <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gap: 2, fontSize: "0.9rem", lineHeight: 1.6 }}>
              <ContactLine Icon={EmailOutlined}>
                {contactUs.email_ids.map((e) => (
                  <Box key={e} component="a" href={`mailto:${e}`} sx={{ ...linkSx, display: "block", overflowWrap: "anywhere" }}>
                    {e}
                  </Box>
                ))}
              </ContactLine>
              <ContactLine Icon={PhoneOutlined}>
                {contactUs.phone_no.map((p) => (
                  <Box key={p} component="a" href={`tel:${p.replace(/\D/g, "")}`} sx={{ ...linkSx, display: "block" }}>
                    {p}
                  </Box>
                ))}
              </ContactLine>
              <ContactLine Icon={AccessTimeOutlined}>{contactUs.working_hours}</ContactLine>
              <ContactLine Icon={PlaceOutlined}>
                <Box component="address" sx={{ fontStyle: "normal" }}>
                  {contactUs.address_lines.slice(1).map((line) => (
                    <Box key={line} component="span" sx={{ display: "block" }}>
                      {line}
                    </Box>
                  ))}
                </Box>
              </ContactLine>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: "0.825rem", color: "rgba(255,255,255,0.6)" }}>{legal}</Typography>
          <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexWrap: "wrap", gap: { xs: 2.5, md: 3 } }}>
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link prefetch={false} href={l.href} passHref>
                  <Box
                    component="a"
                    sx={{ ...linkSx, fontFamily: font.display, fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    {l.label}
                  </Box>
                </Link>
              </li>
            ))}
          </Box>
          {extra && <Typography sx={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>{extra}</Typography>}
        </Box>
      </Box>
      </StaticIsland>
    </Box>
  );
}

SiteFooter.propTypes = {
  legal: PropTypes.node.isRequired,
  extra: PropTypes.node,
};
