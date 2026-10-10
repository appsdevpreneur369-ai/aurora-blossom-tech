import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import SiteFooter from "/components/Footer/SiteFooter.js";
import ErrorLayout from "/components/ui/ErrorLayout.js";
import { CtaLink } from "/components/ClinicFlow/LandingBlocks.js";

// Target of pages/_error.js for runtime errors.
export default function ErrorPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header brand="" links={<HeaderLinks dropdownHoverColor="info" />} fixed color="white" />
      <ErrorLayout code="404" title="Page not found :(">
        <Typography component="p" sx={{ mt: 2, fontSize: { xs: "1.125rem", md: "1.25rem" }, color: "rgba(255,255,255,0.82)" }}>
          Ooooups! Looks like you got lost.
        </Typography>
        <Box sx={{ mt: 5 }}>
          <CtaLink href="/">← Back to Home</CtaLink>
        </Box>
      </ErrorLayout>
      <SiteFooter legal={`© ${new Date().getFullYear()} Aurora Blossom. All rights reserved.`} />
    </>
  );
}
