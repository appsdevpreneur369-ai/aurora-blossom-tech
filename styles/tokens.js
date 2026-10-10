// Aurora Blossom design tokens — single source of truth for the MUI theme and
// component `sx` styles. Palette follows the documented brand colours
// (violet primary, teal secondary, slate neutrals) — see README "Brand Colours".

export const color = {
  // Brand
  violet900: "#2E1065",
  violet800: "#4C1D95",
  violet700: "#5B21B6",
  violet600: "#6D28D9",
  violet500: "#7C3AED",
  violet300: "#C4B5FD",
  violet100: "#EDE9FE",
  violet50: "#F5F3FF",
  teal700: "#0E7490",
  teal600: "#0891B2",
  teal400: "#22D3EE",
  teal100: "#CFFAFE",
  teal50: "#ECFEFF",

  // Neutrals
  ink: "#0B1120",
  ink2: "#0F172A",
  slate800: "#1E293B",
  slate700: "#334155",
  slate600: "#475569",
  slate500: "#64748B",
  slate400: "#94A3B8",
  slate300: "#CBD5E1",
  slate200: "#E2E8F0",
  slate100: "#F1F5F9",
  slate50: "#F8FAFC",
  white: "#FFFFFF",

  // Semantic
  success: "#047857",
  successBg: "#ECFDF5",
  successBorder: "#A7F3D0",
  warning: "#B45309",
  warningBg: "#FFF7ED",
  warningBorder: "#FED7AA",
  error: "#B91C1C",
  whatsapp: "#25D366",
  whatsappHover: "#1EBE5A",
};

export const gradient = {
  brand: `linear-gradient(135deg, ${color.violet600} 0%, ${color.teal600} 100%)`,
  brandText: `linear-gradient(90deg, ${color.violet800} 0%, ${color.teal600} 100%)`,
  // Dark hero surface: deep ink with a restrained violet → teal glow
  night: `radial-gradient(1200px 600px at 85% -10%, rgba(8,145,178,0.35) 0%, rgba(8,145,178,0) 60%),
          radial-gradient(900px 500px at 0% 110%, rgba(124,58,237,0.45) 0%, rgba(124,58,237,0) 60%),
          linear-gradient(160deg, ${color.ink2} 0%, #1A1145 100%)`,
};

export const font = {
  display: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
  body: '"Inter", "Helvetica Neue", Arial, sans-serif',
};

// Fluid type scale (rem). Values are used via `sx` fontSize.
export const type = {
  display: { xs: "2.375rem", sm: "3rem", md: "3.75rem", lg: "4.25rem" },
  h1: { xs: "2rem", sm: "2.5rem", md: "3rem" },
  h2: { xs: "1.75rem", sm: "2.125rem", md: "2.5rem" },
  h3: { xs: "1.25rem", md: "1.375rem" },
  h4: "1.0625rem",
  lead: { xs: "1.0625rem", md: "1.1875rem" },
  body: "1rem",
  small: "0.875rem",
  micro: "0.75rem",
};

export const radius = { sm: 8, md: 12, lg: 16, xl: 24, pill: 999 };

export const shadow = {
  xs: "0 1px 2px rgba(15,23,42,0.06)",
  sm: "0 1px 3px rgba(15,23,42,0.08), 0 1px 2px rgba(15,23,42,0.04)",
  md: "0 8px 24px -6px rgba(15,23,42,0.12), 0 2px 6px rgba(15,23,42,0.05)",
  lg: "0 24px 48px -12px rgba(15,23,42,0.22)",
  brand: "0 10px 30px -8px rgba(109,40,217,0.45)",
};

export const layout = {
  maxWidth: 1200,
  narrow: 800,
  gutter: { xs: 2.5, sm: 3, md: 4 }, // MUI spacing units (8px)
  sectionY: { xs: 9, md: 14 }, // 72px / 112px
  headerHeight: { xs: 64, md: 76 },
};

export const motion = {
  fast: "160ms",
  base: "240ms",
  slow: "400ms",
  ease: "cubic-bezier(0.2, 0.8, 0.2, 1)",
};

export const focusRing = {
  outline: `3px solid ${color.violet500}`,
  outlineOffset: "2px",
};

export const focusRingOnDark = {
  outline: `3px solid ${color.violet300}`,
  outlineOffset: "2px",
};

// Breakpoints mirror MUI defaults (xs 0, sm 600, md 900, lg 1200, xl 1536).
export const breakpoints = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 };
