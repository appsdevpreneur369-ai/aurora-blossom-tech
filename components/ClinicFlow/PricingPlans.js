import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CheckRounded from "@mui/icons-material/CheckRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import AutoAwesomeOutlined from "@mui/icons-material/AutoAwesomeOutlined";
import { color, font, motion, radius, focusRingOnDark } from "/styles/tokens.js";

// ClinicFlow247 plans, billing cycles and feature matrix — mirrored from
// https://clinicflow247.com/clinic-management-software-india (Oct 2026).
// Keep in sync with the product site when pricing changes.

export const TRIAL_DAYS = 14;
const SIGNUP_URL = "https://clinicflow247.com/start-free-trial";

const CYCLES = [
  { key: "quarterly", label: "Quarterly", months: 3, discountPercent: 0 },
  { key: "semiannual", label: "Semi-Annual", months: 6, discountPercent: 10 },
  { key: "annual", label: "Annual", months: 12, discountPercent: 20 },
];

export const PLANS = [
  { key: "starter", name: "Starter", monthlyPrice: 1199, tagline: "Small clinics, 1–5 doctors", badge: null, quota: "1,000 messages/mo", cta: `Start ${TRIAL_DAYS}-Day Free Trial` },
  { key: "pro", name: "Pro", monthlyPrice: 1999, tagline: "Growing multi-doctor clinics", badge: "Most Popular", quota: "3,000 messages/mo", cta: `Start ${TRIAL_DAYS}-Day Free Trial`, featured: true },
  { key: "enterprise", name: "Enterprise", monthlyPrice: 4999, tagline: "Established clinics wanting their own brand", badge: "White Label", quota: "5,000 messages/mo", cta: "Talk to Us", flatPrice: true },
];

// `true`/`false` = included/not included; a string = included with that value.
const FEATURES = [
  { feature: "Doctors", highlight: true, starter: "Up to 5", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Appointments / month", starter: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Online patient booking", starter: true, pro: true, enterprise: true },
  { feature: "Live queue display", starter: true, pro: true, enterprise: true },
  { feature: "Digital prescriptions", starter: true, pro: true, enterprise: true },
  { feature: "Email confirmations & reminders", starter: true, pro: true, enterprise: true },
  { feature: "WhatsApp & SMS messages", highlight: true, starter: "1,000/mo", pro: "3,000/mo", enterprise: "5,000/mo" },
  { feature: "Clinic gallery", starter: true, pro: true, enterprise: true },
  { feature: "Clinic page", starter: "Hosted on ClinicFlow247 with your logo & colours", pro: "Custom subdomain (yourclinic.clinicflow247.com)", enterprise: "Own domain, fully branded website (white-label, no ClinicFlow branding)" },
  { feature: "Analytics dashboard", starter: "Basic", pro: "Full", enterprise: "Full" },
  { feature: "Post-visit thank-you & review requests", starter: false, pro: true, enterprise: true },
  { feature: "No-show prevention & reception alerts", starter: false, pro: true, enterprise: true },
  { feature: "Missed-visit recovery & win-back campaigns", starter: false, pro: true, enterprise: true },
  { feature: "Onboarding", starter: "Self-setup with guide", pro: "Dedicated onboarding", enterprise: "Dedicated onboarding + data migration" },
  { feature: "Support", starter: "WhatsApp & email, business hours", pro: "Priority WhatsApp support", enterprise: "Priority support with response-time SLA" },
];

const TRUSTED_BY = ["Dr. Suhasini Multi Speciality Dental Clinic", "Dr. Sindhu Dental Clinic", "Walk Well Physiotherapy & Rehabilitation Center"];

const inr = (n) => "₹" + n.toLocaleString("en-IN");

// Brand-tuned surfaces (Aurora violet).
const surface = {
  glow: "radial-gradient(closest-side, rgba(168,85,247,0.45), rgba(124,58,237,0.24) 45%, rgba(99,102,241,0.10) 70%, transparent)",
  proCard: "linear-gradient(160deg, #f5f3ff 0%, #e9e3ff 35%, #d8cdfe 70%, #bfa9fb 100%)",
  proHalo: "0 0 0 1px rgba(255,255,255,0.65) inset, 0 30px 80px -20px rgba(124,58,237,0.65), 0 0 60px -10px rgba(168,85,247,0.55)",
  cta: `linear-gradient(135deg, ${color.violet600} 0%, ${color.violet500} 55%, #A855F7 100%)`,
  toggleActive: `linear-gradient(135deg, ${color.violet600}, #A855F7)`,
};

function CycleToggle({ cycle, onChange }) {
  const handleKeyDown = (event) => {
    const idx = CYCLES.findIndex((c) => c.key === cycle);
    let next = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (idx + 1) % CYCLES.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (idx - 1 + CYCLES.length) % CYCLES.length;
    if (next === null) return;
    event.preventDefault();
    onChange(CYCLES[next].key);
    const buttons = event.currentTarget.querySelectorAll("[role=radio]");
    if (buttons[next]) buttons[next].focus();
  };

  return (
    <Box
      role="radiogroup"
      aria-label="Billing cycle"
      onKeyDown={handleKeyDown}
      sx={{
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 0.5,
        p: 0.5,
        borderRadius: `${radius.lg}px`,
        border: "1px solid rgba(255,255,255,0.12)",
        bgcolor: "rgba(255,255,255,0.05)",
      }}
    >
      {CYCLES.map((c) => {
        const active = c.key === cycle;
        return (
          <Box
            component="button"
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            key={c.key}
            onClick={() => onChange(c.key)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              minHeight: 44,
              px: 2,
              border: 0,
              borderRadius: `${radius.md}px`,
              cursor: "pointer",
              fontFamily: font.display,
              fontSize: "0.875rem",
              fontWeight: 700,
              color: active ? color.white : color.slate300,
              background: active ? surface.toggleActive : "transparent",
              boxShadow: active ? "0 10px 24px -10px rgba(124,58,237,0.8)" : "none",
              transition: `color ${motion.fast} ${motion.ease}, background-color ${motion.fast} ${motion.ease}`,
              "&:hover": active ? {} : { color: color.white, bgcolor: "rgba(255,255,255,0.06)" },
              "&:focus-visible": focusRingOnDark,
            }}
          >
            {c.label}
            {c.discountPercent > 0 && (
              <Box
                component="span"
                sx={{
                  borderRadius: 999,
                  px: 0.75,
                  py: 0.25,
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  bgcolor: active ? "rgba(255,255,255,0.25)" : "rgba(52,211,153,0.15)",
                  color: active ? color.white : "#6EE7B7",
                }}
              >
                Save {c.discountPercent}%
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
}

function PlanCard({ plan, cycle }) {
  const featured = !!plan.featured;
  const price = plan.flatPrice ? plan.monthlyPrice : Math.round(plan.monthlyPrice * (1 - cycle.discountPercent / 100));
  const billed = price * cycle.months;
  const discounted = !plan.flatPrice && cycle.discountPercent > 0;
  const ink = featured ? color.ink2 : color.white;
  const muted = featured ? color.slate700 : color.slate400;
  const body = featured ? color.slate700 : color.slate300;

  return (
    <Box
      component="article"
      aria-label={`${plan.name} plan`}
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: { xs: 3, sm: 3.5 },
        pt: featured ? { xs: 3, sm: 3.5, lg: 6 } : undefined,
        mt: featured ? { lg: -3 } : 0,
        borderRadius: "20px",
        color: ink,
        transition: `transform ${motion.slow} ${motion.ease}, box-shadow ${motion.slow} ${motion.ease}, border-color ${motion.slow} ${motion.ease}`,
        ...(featured
          ? { background: surface.proCard, boxShadow: surface.proHalo }
          : {
              border: "1px solid rgba(255,255,255,0.1)",
              bgcolor: "rgba(255,255,255,0.045)",
              backdropFilter: "blur(12px)",
              "&:hover": { borderColor: "rgba(255,255,255,0.2)", boxShadow: "0 20px 60px -25px rgba(124,58,237,0.55)" },
            }),
        "@media (prefers-reduced-motion: no-preference)": { "&:hover": { transform: "translateY(-4px)" } },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, minHeight: 28 }}>
        <Typography component="h3" sx={{ fontFamily: font.display, fontWeight: 800, fontSize: "1.125rem", color: ink, m: 0 }}>
          {plan.name}
        </Typography>
        {plan.badge && (
          <Box
            component="span"
            sx={{
              borderRadius: 999,
              px: 1.25,
              py: 0.25,
              fontSize: "0.7rem",
              fontWeight: 800,
              ...(featured
                ? { bgcolor: color.violet700, color: color.white }
                : { border: "1px solid rgba(255,255,255,0.2)", bgcolor: "rgba(255,255,255,0.1)", color: color.white }),
            }}
          >
            {plan.badge}
          </Box>
        )}
      </Box>

      <Box sx={{ mt: 2.5 }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", columnGap: 1.25, rowGap: 0.5 }}>
          <Box component="span" sx={{ display: "inline-flex", alignItems: "baseline", gap: 0.75 }}>
            <Box
              component="span"
              sx={{ fontFamily: font.display, fontWeight: 800, fontSize: { xs: "2.25rem", sm: "2.6rem" }, lineHeight: 1.05, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", color: ink }}
            >
              {inr(price)}
            </Box>
            <Box component="span" sx={{ fontSize: "0.875rem", color: muted }}>
              / month
            </Box>
          </Box>
          <Box
            component="span"
            sx={{
              borderRadius: 999,
              px: 1,
              py: 0.25,
              fontSize: "0.7rem",
              fontWeight: 800,
              ...(featured ? { bgcolor: color.violet700, color: color.white } : { bgcolor: color.white, color: color.ink2 }),
            }}
          >
            {discounted ? `Save ${cycle.discountPercent}%` : plan.quota}
          </Box>
        </Box>
        <Typography sx={{ mt: 0.75, fontSize: "0.75rem", color: muted }}>
          {plan.flatPrice
            ? "Same price on every billing cycle · annual offers on request"
            : `Billed ${inr(billed)} every ${cycle.months} months`}
        </Typography>
        <Typography sx={{ mt: 1.5, fontSize: "0.875rem", fontWeight: 600, color: featured ? color.violet900 : color.slate200 }}>
          Best for: {plan.tagline}
        </Typography>
      </Box>

      <Box aria-hidden="true" sx={{ my: 2.5, height: "1px", bgcolor: featured ? "rgba(15,23,42,0.1)" : "rgba(255,255,255,0.1)" }} />

      <Box component="ul" aria-label={`${plan.name} features`} sx={{ listStyle: "none", m: 0, p: 0, flex: 1, display: "grid", alignContent: "start", gap: 1.25 }}>
        {FEATURES.map((row) => {
          const value = row[plan.key];
          const included = value !== false;
          const Icon = included ? CheckRounded : CloseRounded;
          return (
            <Box component="li" key={row.feature} sx={{ display: "flex", alignItems: "flex-start", gap: 1.25, fontSize: "0.875rem", lineHeight: 1.45 }}>
              <Icon
                aria-hidden="true"
                sx={{ mt: "1px", fontSize: 17, flexShrink: 0, color: included ? (featured ? color.violet700 : "#34D399") : featured ? color.slate400 : color.slate500 }}
              />
              <Box
                component="span"
                sx={
                  included
                    ? { color: row.highlight ? ink : body, fontWeight: row.highlight ? 600 : 400 }
                    : { color: featured ? color.slate500 : color.slate400, textDecoration: "line-through", textDecorationThickness: "1px" }
                }
              >
                <Box component="span" sx={visuallyHidden}>
                  {included ? "Included: " : "Not included: "}
                </Box>
                {typeof value === "string" ? (
                  <>
                    {row.feature}: <strong style={{ fontWeight: 600 }}>{value}</strong>
                  </>
                ) : (
                  row.feature
                )}
              </Box>
            </Box>
          );
        })}
      </Box>

      {plan.key === "enterprise" && (
        <Typography sx={{ mt: 2.5, fontSize: "0.7rem", lineHeight: 1.6, color: color.slate400 }}>
          <Box component="span" sx={{ fontWeight: 700, color: color.slate300 }}>
            Trusted by{" "}
          </Box>
          {TRUSTED_BY.join(" · ")}
        </Typography>
      )}

      <Box
        component="a"
        href={`${SIGNUP_URL}?plan=${plan.key}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          mt: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 48,
          borderRadius: `${radius.md}px`,
          fontFamily: font.display,
          fontSize: "0.9rem",
          fontWeight: 700,
          textDecoration: "none",
          transition: `filter ${motion.fast} ${motion.ease}, background-color ${motion.fast} ${motion.ease}, border-color ${motion.fast} ${motion.ease}, box-shadow ${motion.fast} ${motion.ease}`,
          ...(featured
            ? {
                color: color.white,
                background: surface.cta,
                boxShadow: "0 12px 28px -12px rgba(109,40,217,0.8)",
                "&:hover": { filter: "brightness(1.1)", boxShadow: "0 16px 32px -12px rgba(109,40,217,0.9)" },
                "&:active": { filter: "brightness(0.95)" },
                "&:focus-visible": { outline: `3px solid ${color.violet700}`, outlineOffset: "2px" },
              }
            : {
                color: color.white,
                border: "1px solid rgba(255,255,255,0.15)",
                bgcolor: "rgba(255,255,255,0.06)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.3)" },
                "&:active": { bgcolor: "rgba(255,255,255,0.08)" },
                "&:focus-visible": focusRingOnDark,
              }),
        }}
      >
        {plan.cta}
        <Box component="span" sx={visuallyHidden}>
          {" "}
          (opens clinicflow247.com in a new tab)
        </Box>
      </Box>
    </Box>
  );
}

const visuallyHidden = {
  position: "absolute",
  width: 1,
  height: 1,
  p: 0,
  m: -1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
  border: 0,
};

/** Premium pricing block for the dark section: trial note, cycle toggle, three plan cards. */
export default function PricingPlans() {
  const [cycleKey, setCycleKey] = useState("quarterly");
  const cycle = CYCLES.find((c) => c.key === cycleKey);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3.5 }}>
        <Typography
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.15)",
            bgcolor: "rgba(255,255,255,0.06)",
            px: 2,
            py: 1,
            fontSize: "0.875rem",
            color: color.slate100,
            textAlign: "center",
          }}
        >
          <AutoAwesomeOutlined aria-hidden="true" sx={{ fontSize: 16, color: "#FCD34D", flexShrink: 0 }} />
          Try any plan free for {TRIAL_DAYS} days — no credit card required.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CycleToggle cycle={cycleKey} onChange={setCycleKey} />
      </Box>
      <Typography sx={{ mt: 1.5, textAlign: "center", fontSize: "0.75rem", color: color.slate400 }}>
        + 18% GST · per clinic, per month
      </Typography>

      <Box sx={{ position: "relative", pt: { xs: 5, lg: 7 } }}>
        <Box
          aria-hidden="true"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
            width: { xs: 360, lg: 760 },
            height: { xs: 360, lg: 760 },
            maxWidth: "100%",
            opacity: { xs: 0.6, lg: 1 },
            background: surface.glow,
            filter: "blur(8px)",
          }}
        />
        <Box
          component="ul"
          sx={{
            position: "relative",
            listStyle: "none",
            m: 0,
            p: 0,
            display: "grid",
            gap: { xs: 3, lg: 2.5, xl: 3.5 },
            maxWidth: { xs: 460, lg: "none" },
            mx: "auto",
            gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" },
            alignItems: "stretch",
          }}
        >
          {PLANS.map((plan) => (
            // Pro leads on mobile, sits in the middle on desktop.
            <Box component="li" key={plan.key} sx={{ order: plan.featured ? { xs: -1, lg: 0 } : 0 }}>
              <PlanCard plan={plan} cycle={cycle} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
