import React from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { createRoot } from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PageChange from "/components/PageChange/PageChange.js";
import createEmotionCache from "/styles/createEmotionCache.js";
import { color, font, radius, shadow, motion, focusRing } from "/styles/tokens.js";
import "/styles/fonts.css";
import "/styles/scss/novel-logiks.scss";
import "/styles/css/novel-logiks.css";

// ── Aurora Blossom MUI Theme (built from /styles/tokens.js) ──────────────────
const auroraTheme = createTheme({
  palette: {
    primary:   { main: color.violet600, dark: color.violet800, light: color.violet300, contrastText: color.white },
    secondary: { main: color.teal600, dark: color.teal700, light: color.teal400, contrastText: color.white },
    error:     { main: color.error },
    warning:   { main: color.warning },
    success:   { main: color.success },
    background:{ default: color.white, paper: color.white },
    text:      { primary: color.ink2, secondary: color.slate600, disabled: color.slate400 },
    divider:   color.slate200,
  },
  typography: {
    fontFamily: font.body,
    h1: { fontFamily: font.display, fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontFamily: font.display, fontWeight: 800, letterSpacing: "-0.015em" },
    h3: { fontFamily: font.display, fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontFamily: font.display, fontWeight: 700 },
    h5: { fontFamily: font.display, fontWeight: 700 },
    h6: { fontFamily: font.display, fontWeight: 700 },
    button: { fontFamily: font.display, fontWeight: 700 },
  },
  shape: { borderRadius: radius.md },
  shadows: [
    "none",
    shadow.xs,
    shadow.sm,
    shadow.md,
    shadow.md,
    shadow.lg,
    ...Array(19).fill(shadow.lg),
  ],
  components: {
    MuiButtonBase: {
      defaultProps: { disableRipple: false },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: radius.sm + 2,
          textTransform: "none",
          fontWeight: 700,
          letterSpacing: "0.01em",
          minHeight: 44,
          paddingLeft: 22,
          paddingRight: 22,
          transition: `background-color ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}, color ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}, transform ${motion.base} ${motion.ease}`,
          "&:active": { transform: "translateY(1px)" },
          "&.Mui-focusVisible": focusRing,
          "&.Mui-disabled": { cursor: "not-allowed", pointerEvents: "auto" },
        },
        sizeLarge: { minHeight: 52, fontSize: "1rem", paddingLeft: 28, paddingRight: 28 },
        sizeSmall: { minHeight: 36, paddingLeft: 14, paddingRight: 14 },
        containedPrimary: {
          backgroundColor: color.violet600,
          "&:hover": { backgroundColor: color.violet700, boxShadow: shadow.brand },
          "&.Mui-disabled": { backgroundColor: color.slate200, color: color.slate500 },
        },
        outlinedPrimary: {
          borderWidth: 1.5,
          borderColor: color.violet300,
          color: color.violet700,
          "&:hover": { borderWidth: 1.5, borderColor: color.violet600, backgroundColor: color.violet50 },
        },
        textPrimary: {
          color: color.violet700,
          "&:hover": { backgroundColor: color.violet50 },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontFamily: font.display, fontWeight: 600, borderRadius: radius.pill },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: radius.lg },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: radius.lg,
          boxShadow: shadow.sm,
          border: `1px solid ${color.slate200}`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: "none" },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: radius.sm + 2,
          backgroundColor: color.white,
          "& .MuiOutlinedInput-notchedOutline": { borderColor: color.slate300 },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: color.slate400 },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: color.violet600, borderWidth: 2 },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { color: color.slate600, "&.Mui-focused": { color: color.violet700 } },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": { boxSizing: "border-box" },
        html: {
          scrollBehavior: "smooth",
          // Anchored sections (/#services etc.) land below the fixed header
          scrollPaddingTop: 88,
        },
        body: {
          fontFamily: font.body,
          color: color.ink2,
          backgroundColor: color.white,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          textRendering: "optimizeLegibility",
        },
        "img, video": { maxWidth: "100%", height: "auto" },
        "a": {
          color: "inherit",
          textDecoration: "none",
        },
        "::selection": { backgroundColor: color.violet100, color: color.violet900 },
        // Visible keyboard focus everywhere (template CSS removed outlines)
        "*:focus-visible": { ...focusRing },
        ".sr-only": {
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        },
        ".skip-link": {
          position: "fixed",
          top: 12,
          left: 12,
          zIndex: 2000,
          padding: "10px 16px",
          borderRadius: radius.sm,
          backgroundColor: color.ink2,
          color: color.white,
          fontFamily: font.display,
          fontWeight: 700,
          fontSize: "0.875rem",
          transform: "translateY(-150%)",
          transition: `transform ${motion.fast} ${motion.ease}`,
          "&:focus": { transform: "translateY(0)" },
        },
        "@media (prefers-reduced-motion: reduce)": {
          html: { scrollBehavior: "auto" },
          "*, *::before, *::after": {
            animationDuration: "0.01ms !important",
            animationIterationCount: "1 !important",
            transitionDuration: "0.01ms !important",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined", size: "small" },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: { borderRadius: radius.md, boxShadow: shadow.md, border: `1px solid ${color.slate200}` },
      },
    },
  },
});

// ── Page-change loading overlay ───────────────────────────────────────────────
let loadingContainer = null;
let loadingRoot = null;

Router.events.on("routeChangeStart", () => {
  loadingContainer = document.getElementById("page-transition");
  if (!loadingContainer) {
    loadingContainer = document.createElement("div");
    loadingContainer.id = "page-transition";
    document.body.appendChild(loadingContainer);
  }
  loadingRoot = createRoot(loadingContainer);
  loadingRoot.render(<PageChange path={Router.pathname} />);
});

Router.events.on("routeChangeComplete", () => {
  if (loadingRoot) {
    loadingRoot.unmount();
    loadingRoot = null;
  }
});

Router.events.on("routeChangeError", () => {
  if (loadingRoot) {
    loadingRoot.unmount();
    loadingRoot = null;
  }
});

// ── Site-wide SEO defaults ────────────────────────────────────────────────────
// Pages override these through next/head: `name` metas de-duplicate by name;
// Open Graph metas and the canonical link de-duplicate by matching `key`.
const SITE_URL = "https://www.aurora-blossom.com";
const SITE_NAME = "Aurora Blossom";
const DEFAULT_TITLE = "Aurora Blossom | Digital Transformation & IT Services";
const DEFAULT_DESCRIPTION =
  "Aurora Blossom — enterprise IT consulting, AI & analytics, cloud architecture, SAP, e-commerce, and digital marketing. Hyderabad, India.";
const OG_IMAGE = `${SITE_URL}/img/og-image.png`;
// Routes that must not advertise themselves as canonical documents.
const NO_CANONICAL = new Set(["/404", "/_error", "/error-page"]);

function DefaultSeo() {
  const { pathname } = useRouter();
  const url = pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
  return (
    <Head>
      <title>{DEFAULT_TITLE}</title>
      <meta name="description" content={DEFAULT_DESCRIPTION} />
      <meta
        name="keywords"
        content="IT services, digital transformation, AI, cloud architecture, SAP, e-commerce, Hyderabad, Aurora Blossom"
      />
      {!NO_CANONICAL.has(pathname) && <link key="canonical" rel="canonical" href={url} />}

      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:title" property="og:title" content={DEFAULT_TITLE} />
      <meta key="og:description" property="og:description" content={DEFAULT_DESCRIPTION} />
      <meta key="og:image" property="og:image" content={OG_IMAGE} />
      <meta key="og:image:width" property="og:image:width" content="1200" />
      <meta key="og:image:height" property="og:image:height" content="630" />
      <meta key="og:locale" property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@aurorablossomtech" />
      <meta name="twitter:title" content={DEFAULT_TITLE} />
      <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Head>
  );
}

// ── App component ─────────────────────────────────────────────────────────────
const clientSideEmotionCache = createEmotionCache();

export default function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={auroraTheme}>
        <CssBaseline />
        <DefaultSeo />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
