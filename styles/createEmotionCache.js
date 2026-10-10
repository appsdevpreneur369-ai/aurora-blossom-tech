import createCache from "@emotion/cache";

const isBrowser = typeof document !== "undefined";

// Shared Emotion cache for MUI. On the client, styles are inserted right after
// the <meta name="emotion-insertion-point"> tag in <head>, so the SSR-extracted
// critical CSS and client-inserted styles keep the same order (and MUI styles
// stay ahead of the global SCSS, matching StyledEngineProvider injectFirst).
export default function createEmotionCache() {
  let insertionPoint;
  if (isBrowser) {
    insertionPoint = document.querySelector('meta[name="emotion-insertion-point"]') || undefined;
  }
  return createCache({ key: "mui-style", insertionPoint });
}
