import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Router from "next/router";

export default function SectionHome({ ...rest }) {
  return (
    <section
      id="home"
      className="cd-section"
      aria-label="Aurora Blossom Tech home"
      {...rest}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/img/lsk_imgs/business_home.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />

        {/* Aurora gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(76,29,149,0.88) 0%, rgba(124,58,237,0.75) 30%, rgba(8,145,178,0.70) 60%, rgba(236,72,153,0.55) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1200,
            mx: "auto",
            px: { xs: 3, md: 6 },
            py: { xs: 10, md: 12 },
            width: "100%",
          }}
        >
          {/* Eyebrow pill */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              px: 2,
              py: 0.5,
              borderRadius: "999px",
              bgcolor: "rgba(34,211,238,0.18)",
              border: "1px solid rgba(34,211,238,0.4)",
              mb: 3,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#22D3EE",
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Aurora Blossom Tech
            </Typography>
          </Box>

          {/* H1 */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 900,
              fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
              lineHeight: 1.1,
              backgroundImage:
                "linear-gradient(135deg, #FFFFFF 0%, #22D3EE 50%, #EC4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              mb: 3,
              maxWidth: 800,
            }}
          >
            Transforming Ideas Into Digital Reality
          </Typography>

          {/* Typewriter */}
          <Box
            sx={{
              mb: 4,
              minHeight: { xs: "4rem", md: "3rem" },
            }}
          >
            <TypeAnimation
              sequence={[
                "We provide Digital Solutions cutting across Sectors.",
                2500,
                "Transformative AI capabilities help enterprises reach the future faster.",
                2500,
                "Propelling business and lives like never before.",
                2500,
              ]}
              speed={55}
              deletionSpeed={75}
              repeat={Infinity}
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
              }}
            />
          </Box>

          {/* CTA buttons */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => Router.push("/ai-details")}
              sx={{
                textTransform: "none",
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 700,
                borderRadius: 2,
                px: 4,
                py: 1.5,
                background: "linear-gradient(135deg, #7C3AED 0%, #0891B2 100%)",
                boxShadow: "0 4px 20px rgba(124,58,237,0.45)",
                "&:hover": {
                  background: "linear-gradient(135deg, #6D28D9 0%, #0E7490 100%)",
                  boxShadow: "0 8px 30px rgba(124,58,237,0.6)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.25s ease",
              }}
            >
              Explore Our Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                document.getElementById("contactUs")?.scrollIntoView({ behavior: "smooth" });
              }}
              sx={{
                textTransform: "none",
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 700,
                borderRadius: 2,
                px: 4,
                py: 1.5,
                borderColor: "rgba(255,255,255,0.5)",
                color: "#fff",
                "&:hover": {
                  borderColor: "#fff",
                  bgcolor: "rgba(255,255,255,0.1)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.25s ease",
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Box>

        {/* Scroll indicator */}
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.75,
            opacity: 0.6,
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
              "50%": { transform: "translateX(-50%) translateY(8px)" },
            },
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 38,
              borderRadius: "12px",
              border: "2px solid rgba(255,255,255,0.6)",
              display: "flex",
              justifyContent: "center",
              pt: "6px",
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 8,
                borderRadius: "2px",
                bgcolor: "rgba(255,255,255,0.8)",
                animation: "scroll 2s infinite",
                "@keyframes scroll": {
                  "0%": { opacity: 1, transform: "translateY(0)" },
                  "100%": { opacity: 0, transform: "translateY(10px)" },
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
}
