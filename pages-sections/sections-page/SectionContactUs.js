import React from "react";
import { Box, Button, Typography } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { contactUs } from "../../data/contact-us-data";
import Section from "/components/ui/Section.js";
import IconTile from "/components/ui/IconTile.js";
import { color, font, gradient, radius, shadow, type, focusRing } from "/styles/tokens.js";

// Contact info rows — icon, label, lines
const CONTACT_ITEMS = [
  { Icon: PlaceOutlinedIcon, label: "Office Address", lines: contactUs.address_lines },
  { Icon: EmailOutlinedIcon, label: "Email", lines: contactUs.email_ids.map((e) => ({ text: e, href: `mailto:${e}` })) },
  { Icon: PhoneOutlinedIcon, label: "Phone", lines: contactUs.phone_no.map((p) => ({ text: p, href: `tel:${p.replace(/\D/g, "")}` })) },
  { Icon: AccessTimeOutlinedIcon, label: "Working Hours", lines: [contactUs.working_hours] },
];

function ContactRow({ item, index }) {
  return (
    <Box
      component="li"
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2.5,
        p: { xs: 2.5, md: 3 },
        "& + &": { borderTop: `1px solid ${color.slate200}` },
      }}
    >
      <IconTile icon={item.Icon} variant={index % 2 ? "teal" : "violet"} size={44} />
      <Box sx={{ minWidth: 0 }}>
        <Typography
          component="h3"
          sx={{
            fontFamily: font.display,
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: color.slate500,
            m: 0,
            mb: 0.75,
          }}
        >
          {item.label}
        </Typography>
        {item.lines.map((line, i) => {
          const text = typeof line === "string" ? line : line.text;
          const href = typeof line === "object" ? line.href : undefined;
          return href ? (
            <Typography
              key={i}
              component="a"
              href={href}
              sx={{
                display: "block",
                fontWeight: 600,
                fontSize: "1rem",
                color: color.ink2,
                lineHeight: 1.7,
                textDecoration: "none",
                overflowWrap: "anywhere",
                borderRadius: "4px",
                "&:hover": { color: color.violet700, textDecoration: "underline", textUnderlineOffset: "3px" },
                "&:focus-visible": focusRing,
              }}
            >
              {text}
            </Typography>
          ) : (
            <Typography key={i} sx={{ display: "block", fontWeight: i === 0 && item.lines.length > 1 ? 700 : 500, fontSize: "1rem", color: color.slate800, lineHeight: 1.7 }}>
              {text}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
}

export default function SectionContactUs({ ...rest }) {
  return (
    <Section tone="subtle" id="contactUs" className="cd-section" aria-labelledby="contact-heading" isStatic {...rest}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "5fr 7fr" },
          gap: { xs: 5, md: 8 },
          alignItems: "start",
        }}
      >
        {/* Left — CTA copy */}
        <Box sx={{ position: { xs: "static", md: "sticky" }, top: 112 }}>
          <Box aria-hidden="true" sx={{ width: 48, height: 4, borderRadius: 2, background: gradient.brand, mb: 2.5 }} />
          <Typography
            id="contact-heading"
            variant="h2"
            component="h2"
            sx={{ fontFamily: font.display, fontWeight: 800, fontSize: type.h2, lineHeight: 1.15, color: color.ink2, m: 0, mb: 3 }}
          >
            Let&apos;s Build Something Great Together
          </Typography>

          {contactUs.points.map((point, i) => (
            <Typography
              key={i}
              sx={{
                fontFamily: i < 2 ? font.body : font.display,
                fontWeight: i < 2 ? 400 : 700,
                fontSize: i < 2 ? type.lead : "1.125rem",
                color: i < 2 ? color.slate600 : color.violet800,
                lineHeight: 1.7,
                mb: i < 2 ? 1.5 : 1,
              }}
            >
              {point}
            </Typography>
          ))}

          <Box sx={{ mt: 4, display: "flex", gap: 1.5, flexWrap: "wrap", "& > *": { flex: { xs: "1 1 100%", sm: "0 0 auto" } } }}>
            <Button variant="contained" color="primary" size="large" component="a" href={`mailto:${contactUs.email_ids[0]}`} startIcon={<EmailOutlinedIcon />}>
              Email Us
            </Button>
            <Button variant="outlined" color="primary" size="large" component="a" href={`tel:${contactUs.phone_no[0].replace(/\D/g, "")}`} startIcon={<PhoneOutlinedIcon />}>
              Call Us
            </Button>
          </Box>
        </Box>

        {/* Right — contact details */}
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            borderRadius: `${radius.lg}px`,
            bgcolor: color.white,
            border: `1px solid ${color.slate200}`,
            boxShadow: shadow.md,
            overflow: "hidden",
          }}
        >
          {CONTACT_ITEMS.map((item, i) => (
            <ContactRow key={item.label} item={item} index={i} />
          ))}
        </Box>
      </Box>
    </Section>
  );
}
