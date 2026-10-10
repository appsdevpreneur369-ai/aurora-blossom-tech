import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import ErrorLayout from "/components/ui/ErrorLayout.js";
import { CtaLink } from "/components/ClinicFlow/LandingBlocks.js";

export default function ErrorPage() {
  return (
    <>
      <Header brand="" links={<HeaderLinks dropdownHoverColor="info" />} fixed color="white" />
      <ErrorLayout code="404">
        <Typography component="p" sx={{ mt: 3, fontSize: { xs: "1.125rem", md: "1.25rem" }, lineHeight: 1.7, color: "rgba(255,255,255,0.82)" }}>
          Ooooups! Looks like you got lost. Om Sai Ram
        </Typography>
        <Box sx={{ mt: 5 }}>
          <CtaLink href="/">← Back to Home</CtaLink>
        </Box>
      </ErrorLayout>
    </>
  );
}
