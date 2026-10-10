import React, { useEffect, useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { Box, Button, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { gridPattern } from "/components/ui/PageHero.js";
import { color, font, gradient, layout, radius, shadow, type, focusRingOnDark } from "/styles/tokens.js";

const TAGLINES = [
  "We provide Digital Solutions cutting across Sectors.",
  "Transformative AI capabilities help enterprises reach the future faster.",
  "Propelling business and lives like never before.",
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

export default function SectionHome({ ...rest }) {
  const reducedMotion = useReducedMotion();

  return (
    <section id="home" className="cd-section" aria-label="Aurora Blossom home" {...rest}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: gradient.night,
          color: color.white,
          minHeight: { md: "min(100vh, 860px)" },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box aria-hidden="true" sx={gridPattern} />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: layout.maxWidth,
            mx: "auto",
            px: layout.gutter,
            pt: { xs: "120px", md: "150px" },
            pb: { xs: 9, md: 12 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
            gap: { xs: 7, md: 8 },
            alignItems: "center",
          }}
        >
          {/* Copy */}
          <Box>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: font.display,
                fontWeight: 800,
                fontSize: type.display,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: color.white,
                m: 0,
                mb: 3,
                maxWidth: 640,
              }}
            >
              Transforming Ideas Into{" "}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(90deg, ${color.violet300} 0%, ${color.teal400} 100%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Digital Reality
              </Box>
            </Typography>

            {/* Rotating tagline — visual only; full text is exposed to assistive tech below */}
            <Box sx={{ mb: 5, minHeight: { xs: "5.4rem", sm: "3.6rem" }, maxWidth: 560 }}>
              <p className="sr-only">{TAGLINES.join(" ")}</p>
              {reducedMotion ? (
                <Typography aria-hidden="true" sx={{ fontSize: type.lead, lineHeight: 1.7, color: "rgba(255,255,255,0.82)" }}>
                  {TAGLINES.join(" ")}
                </Typography>
              ) : (
                <Box aria-hidden="true">
                  <TypeAnimation
                    sequence={[TAGLINES[0], 2500, TAGLINES[1], 2500, TAGLINES[2], 2500]}
                    speed={55}
                    deletionSpeed={75}
                    repeat={Infinity}
                    style={{
                      fontFamily: font.body,
                      fontSize: "clamp(1.0625rem, 2.2vw, 1.25rem)",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.82)",
                      lineHeight: 1.7,
                    }}
                  />
                </Box>
              )}
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexDirection: { xs: "column", sm: "row" } }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRounded />}
                onClick={() => Router.push("/ai-details")}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  bgcolor: color.white,
                  color: color.violet800,
                  "&:hover": { bgcolor: color.violet50, boxShadow: shadow.brand },
                  "&.Mui-focusVisible": focusRingOnDark,
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
                  width: { xs: "100%", sm: "auto" },
                  borderWidth: 1.5,
                  borderColor: "rgba(255,255,255,0.45)",
                  color: color.white,
                  "&:hover": { borderWidth: 1.5, borderColor: color.white, bgcolor: "rgba(255,255,255,0.08)" },
                  "&.Mui-focusVisible": focusRingOnDark,
                }}
              >
                Get in Touch
              </Button>
            </Box>
          </Box>

          {/* Visual */}
          <Box sx={{ position: "relative", maxWidth: { xs: 560, md: "none" }, mx: { xs: "auto", md: 0 }, width: "100%" }}>
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                inset: "-12% -8% auto auto",
                width: "60%",
                aspectRatio: "1",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(34,211,238,0) 70%)",
                filter: "blur(10px)",
              }}
            />
            <Box
              sx={{
                position: "relative",
                p: "6px",
                borderRadius: `${radius.xl}px`,
                background: "linear-gradient(140deg, rgba(196,181,253,0.55), rgba(34,211,238,0.35) 50%, rgba(255,255,255,0.06))",
                boxShadow: "0 40px 80px -30px rgba(0,0,0,0.6)",
              }}
            >
              <Box sx={{ position: "relative", borderRadius: `${radius.xl - 6}px`, overflow: "hidden", lineHeight: 0 }}>
                <Image
                  src="/img/lsk_imgs/business_home.png"
                  alt=""
                  width={823}
                  height={500}
                  layout="responsive"
                  priority
                  sizes="(max-width: 900px) 100vw, 560px"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Scroll indicator */}
        <Box
          aria-hidden="true"
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.55,
            animation: "abBounce 2.4s infinite",
            "@keyframes abBounce": {
              "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
              "50%": { transform: "translateX(-50%) translateY(6px)" },
            },
          }}
        >
          <Box sx={{ width: 22, height: 36, borderRadius: "12px", border: "2px solid rgba(255,255,255,0.6)", display: "flex", justifyContent: "center", pt: "6px" }}>
            <Box sx={{ width: 3, height: 7, borderRadius: "2px", bgcolor: "rgba(255,255,255,0.85)" }} />
          </Box>
        </Box>
      </Box>
    </section>
  );
}
