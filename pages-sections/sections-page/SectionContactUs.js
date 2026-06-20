import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { contactUs } from "../../data/contact-us-data";

// Contact info rows — icon, label, lines
const CONTACT_ITEMS = [
  {
    Icon: PlaceOutlinedIcon,
    label: "Office Address",
    lines: contactUs.address_lines,
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
  },
  {
    Icon: EmailOutlinedIcon,
    label: "Email",
    lines: contactUs.email_ids.map((e) => ({ text: e, href: `mailto:${e}` })),
    color: "#0891B2",
    bg: "rgba(8,145,178,0.08)",
  },
  {
    Icon: PhoneOutlinedIcon,
    label: "Phone",
    lines: contactUs.phone_no.map((p) => ({ text: p, href: `tel:${p.replace(/\D/g, "")}` })),
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
  },
  {
    Icon: AccessTimeOutlinedIcon,
    label: "Working Hours",
    lines: [contactUs.working_hours],
    color: "#D97706",
    bg: "rgba(217,119,6,0.08)",
  },
];

function ContactRow({ item }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        p: 2.5,
        borderRadius: 2.5,
        bgcolor: item.bg,
        border: `1px solid ${item.color}22`,
        transition: "transform 0.2s ease",
        "&:hover": { transform: "translateX(4px)" },
      }}
    >
      {/* Icon badge */}
      <Box
        aria-hidden="true"
        sx={{
          flexShrink: 0,
          width: 44,
          height: 44,
          borderRadius: 2,
          bgcolor: `${item.color}18`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <item.Icon sx={{ color: item.color, fontSize: "1.25rem" }} />
      </Box>

      {/* Content */}
      <Box>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 700,
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: item.color,
            mb: 0.5,
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
                fontFamily: '"Inter", sans-serif',
                fontWeight: 500,
                fontSize: "0.9rem",
                color: "text.primary",
                lineHeight: 1.6,
                textDecoration: "none",
                "&:hover": { color: item.color, textDecoration: "underline" },
              }}
            >
              {text}
            </Typography>
          ) : (
            <Typography
              key={i}
              sx={{
                display: "block",
                fontFamily: '"Inter", sans-serif',
                fontWeight: 500,
                fontSize: "0.9rem",
                color: "text.primary",
                lineHeight: 1.6,
              }}
            >
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
    <section
      id="contactUs"
      className="cd-section"
      aria-labelledby="contact-heading"
      {...rest}
    >
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        <Grid container spacing={6} alignItems="flex-start">
          {/* Left — CTA copy */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "sticky",
                top: 100,
              }}
            >
              <Typography
                id="contact-heading"
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: "1.75rem", md: "2.5rem" },
                  backgroundImage: "linear-gradient(135deg, #4C1D95 0%, #0891B2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Let's Build Something Great Together
              </Typography>

              {contactUs.points.map((point, i) => (
                <Typography
                  key={i}
                  variant={i < 2 ? "body1" : "h6"}
                  sx={{
                    fontFamily: i < 2 ? '"Inter", sans-serif' : '"Montserrat", sans-serif',
                    fontWeight: i < 2 ? 400 : 700,
                    fontSize: i < 2 ? "1.05rem" : "1.1rem",
                    color: i < 2 ? "text.secondary" : "#4C1D95",
                    lineHeight: 1.75,
                    mb: 2,
                  }}
                >
                  {point}
                </Typography>
              ))}

              {/* Email CTA */}
              <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  component="a"
                  href={`mailto:${contactUs.email_ids[0]}`}
                  sx={{
                    textTransform: "none",
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 600,
                    borderRadius: 2,
                    px: 3,
                    py: 1.25,
                    background: "linear-gradient(135deg, #7C3AED 0%, #0891B2 100%)",
                    boxShadow: "0 4px 14px rgba(124,58,237,0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #6D28D9 0%, #0E7490 100%)",
                      boxShadow: "0 6px 20px rgba(124,58,237,0.45)",
                      transform: "translateY(-1px)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  Email Us
                </Button>
                <Button
                  variant="outlined"
                  component="a"
                  href={`tel:${contactUs.phone_no[0].replace(/\D/g, "")}`}
                  sx={{
                    textTransform: "none",
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 600,
                    borderRadius: 2,
                    px: 3,
                    py: 1.25,
                    borderColor: "#7C3AED",
                    color: "#7C3AED",
                    "&:hover": {
                      bgcolor: "rgba(124,58,237,0.06)",
                      borderColor: "#6D28D9",
                    },
                  }}
                >
                  Call Us
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right — contact details */}
          <Grid item xs={12} md={7}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {CONTACT_ITEMS.map((item) => (
                <ContactRow key={item.label} item={item} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
