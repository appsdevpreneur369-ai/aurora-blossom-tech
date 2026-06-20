import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PageChange from "/components/PageChange/PageChange.js";
import "/styles/scss/novel-logiks.scss";
import "/styles/css/novel-logiks.css";

// ── Aurora Blossom MUI Theme ──────────────────────────────────────────────────
const auroraTheme = createTheme({
  palette: {
    primary:   { main: "#7C3AED", dark: "#4C1D95", light: "#A78BFA" },
    secondary: { main: "#0891B2", dark: "#0E7490", light: "#22D3EE" },
    error:     { main: "#EF4444" },
    warning:   { main: "#F59E0B" },
    success:   { main: "#10B981" },
    background:{ default: "#F8FAFC", paper: "#FFFFFF" },
    text:      { primary: "#0F172A", secondary: "#475569", disabled: "#94A3B8" },
  },
  typography: {
    fontFamily: '"Inter", "Montserrat", "Helvetica Neue", Arial, sans-serif',
    h1: { fontFamily: '"Montserrat", sans-serif', fontWeight: 900 },
    h2: { fontFamily: '"Montserrat", sans-serif', fontWeight: 800 },
    h3: { fontFamily: '"Montserrat", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Montserrat", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Montserrat", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Montserrat", sans-serif', fontWeight: 600 },
    button: { fontFamily: '"Montserrat", sans-serif', fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  shadows: [
    "none",
    "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
    "0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.04)",
    "0 10px 15px rgba(0,0,0,0.06), 0 4px 6px rgba(0,0,0,0.04)",
    "0 20px 25px rgba(0,0,0,0.06), 0 10px 10px rgba(0,0,0,0.04)",
    "0 25px 50px rgba(0,0,0,0.08)",
    ...Array(19).fill("none"),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          letterSpacing: "0.02em",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: "0 2px 20px rgba(0,0,0,0.06)" },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": { boxSizing: "border-box" },
        html: { scrollBehavior: "smooth" },
        body: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        "img, video": { maxWidth: "100%", height: "auto" },
        "a": {
          color: "inherit",
          textDecoration: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined", size: "small" },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: { borderRadius: 12, boxShadow: "0 8px 30px rgba(0,0,0,0.1)" },
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

// ── App component ─────────────────────────────────────────────────────────────
export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={auroraTheme}>
          <CssBaseline />
          <Head>
            <title>Aurora Blossom Tech | Digital Transformation &amp; IT Services</title>
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}
