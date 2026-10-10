import React from "react";
import { Box, Typography } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import ErrorLayout from "/components/ui/ErrorLayout.js";
import { color, layout, focusRingOnDark } from "/styles/tokens.js";

// Copy and links are unchanged from the original template page; only the layout is new.
const FOOTER_LINKS = [
  { href: "https://www.aurora-blossom.com", label: "Sunil", external: true },
  { href: "https://www.aurora-blossom.com", label: "About us", external: true },
  { href: "http://blog.creative-tim.com/?ref=njsmkp-error", label: "Blog" },
  { href: "https://www.aurora-blossom.com", label: "Licenses", external: true },
];

const linkSx = {
  display: "inline-block",
  py: "4px",
  color: "rgba(255,255,255,0.75)",
  textDecoration: "none",
  borderRadius: "4px",
  "&:hover": { color: color.white, textDecoration: "underline" },
  "&:focus-visible": focusRingOnDark,
};

export default function ErrorPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  return (
    <div>
      <Header absolute color="transparent" brand="NextJS Material Kit PRO" links={<HeaderLinks dropdownHoverColor="dark" />} {...rest} />
      <ErrorLayout code="404" title="Page not found :(">
        <Typography component="p" sx={{ mt: 2, fontSize: { xs: "1.125rem", md: "1.25rem" }, color: "rgba(255,255,255,0.82)" }}>
          Ooooups! Looks like you got lost.
        </Typography>
      </ErrorLayout>
      <Box
        component="footer"
        sx={{
          bgcolor: color.ink,
          color: "rgba(255,255,255,0.6)",
          px: layout.gutter,
          py: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          fontSize: "0.85rem",
        }}
      >
        <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexWrap: "wrap", gap: 3 }}>
          {FOOTER_LINKS.map((l) => (
            <li key={l.label}>
              <Box component="a" href={l.href} target={l.external ? "_blank" : undefined} rel={l.external ? "noopener noreferrer" : undefined} sx={linkSx}>
                {l.label}
              </Box>
            </li>
          ))}
        </Box>
        <Box>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite aria-label="love" sx={{ fontSize: 14, verticalAlign: "-2px", color: "#F472B6" }} /> by{" "}
          <Box component="a" href="https://www.aurora-blossom.com" target="_blank" rel="noopener noreferrer" sx={linkSx}>
            Sunil
          </Box>{" "}
          for a better web.
        </Box>
      </Box>
    </div>
  );
}
