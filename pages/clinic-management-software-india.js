import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Footer from "../components/Footer/SiteFooter.js";
import { Box, Typography } from "@mui/material";
import CheckRounded from "@mui/icons-material/CheckRounded";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import AssignmentIndOutlined from "@mui/icons-material/AssignmentIndOutlined";
import MedicationOutlined from "@mui/icons-material/MedicationOutlined";
import ForumOutlined from "@mui/icons-material/ForumOutlined";
import ReceiptLongOutlined from "@mui/icons-material/ReceiptLongOutlined";
import InsightsOutlined from "@mui/icons-material/InsightsOutlined";
import PageHero from "../components/ui/PageHero.js";
import Section from "../components/ui/Section.js";
import SectionHeader from "../components/ui/SectionHeader.js";
import { ProblemBand, FeatureSection, FaqSection, CtaBand, CtaLink } from "../components/ClinicFlow/LandingBlocks.js";
import { color, font, radius, shadow, focusRingOnDark } from "../styles/tokens.js";

const SITE_URL = "https://www.aurora-blossom.com";
const PAGE_URL = `${SITE_URL}/clinic-management-software-india`;

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ClinicFlow247",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web, Android, iOS",
  url: "https://clinicflow247.com",
  description:
    "ClinicFlow247 is a comprehensive clinic management software for Indian clinics and doctors. Includes appointment booking, patient records, e-prescriptions, billing, and WhatsApp notifications.",
  offers: {
    "@type": "Offer",
    price: "599",
    priceCurrency: "INR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "599",
      priceCurrency: "INR",
      unitCode: "MON",
    },
  },
  provider: {
    "@type": "Organization",
    name: "Aurora Blossom",
    url: SITE_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is clinic management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clinic management software is a digital platform that helps doctors and clinic owners manage appointments, patient records, billing, and communications — all in one place.",
      },
    },
    {
      "@type": "Question",
      name: "Is ClinicFlow247 suitable for small clinics in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ClinicFlow247 is designed for single-doctor clinics, group practices, and multi-specialty clinics across India. Pricing starts at ₹599/month.",
      },
    },
    {
      "@type": "Question",
      name: "Does ClinicFlow247 support WhatsApp appointment reminders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ClinicFlow247 sends automated WhatsApp and SMS reminders to patients before appointments, reducing no-shows by up to 40%.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ClinicFlow247 offers a 14-day free trial with no credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "Is patient data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ClinicFlow247 is hosted on Google Cloud with HTTPS encryption, role-based access control, and regular automated backups.",
      },
    },
  ],
};

const FEATURES = [
  { icon: CalendarMonthOutlined, title: "Smart Appointment Booking", desc: "Online and in-clinic appointment scheduling with real-time availability. Patients can book via WhatsApp or your clinic's link." },
  { icon: AssignmentIndOutlined, title: "Digital Patient Records (EMR)", desc: "Store and retrieve complete patient history, vitals, diagnoses, and visit notes instantly. No more paper files." },
  { icon: MedicationOutlined, title: "e-Prescription Generator", desc: "Create professional digital prescriptions in seconds. Share via WhatsApp or print — fully compliant with Indian standards." },
  { icon: ForumOutlined, title: "WhatsApp & SMS Reminders", desc: "Automated appointment reminders reduce no-shows by up to 40%. Patients receive reminders 24 hrs and 1 hr before their slot." },
  { icon: ReceiptLongOutlined, title: "Billing & Invoicing", desc: "Generate GST-compliant invoices, track payments, and accept UPI. Full revenue dashboard included." },
  { icon: InsightsOutlined, title: "Analytics Dashboard", desc: "Track appointments, revenue, patient growth, and doctor performance. Make data-driven decisions for your clinic." },
];

const PLANS = [
  { name: "Free", price: "₹0", period: "/month", highlight: false, features: ["1 doctor", "50 appointments/month", "Digital prescriptions", "Patient records"] },
  { name: "Starter", price: "₹599", period: "/month + GST", highlight: false, features: ["2 doctors", "Unlimited appointments", "WhatsApp reminders (200 msg)", "Email notifications", "Billing & invoicing"] },
  { name: "Growth", price: "₹1,199", period: "/month + GST", highlight: true, features: ["5 doctors", "WhatsApp + SMS (500 msg/month)", "Analytics dashboard", "Priority support", "All Starter features"] },
  { name: "Pro", price: "₹1,999", period: "/month + GST", highlight: false, features: ["15 doctors", "2,000 messages/month", "Advanced analytics", "Custom branding", "All Growth features"] },
];

const STATS = [
  { stat: "40%", label: "Reduction in no-shows with automated reminders" },
  { stat: "2 hrs", label: "Saved daily on manual paperwork and registers" },
  { stat: "₹599", label: "Starting price — less than a single patient visit" },
  { stat: "14 days", label: "Free trial — no credit card needed" },
];

const FAQS = [
  { q: "What is clinic management software?", a: "A digital platform that helps clinic owners manage appointments, patient records, billing, and patient communication — all in one place instead of multiple registers and spreadsheets." },
  { q: "Is ClinicFlow247 suitable for small clinics in India?", a: "Yes. ClinicFlow247 is designed for single-doctor clinics, group practices, and multi-specialty clinics across India. Pricing starts at ₹599/month with a free 14-day trial." },
  { q: "Does ClinicFlow247 support WhatsApp appointment reminders?", a: "Yes. Automated WhatsApp and SMS reminders go out 24 hours and 1 hour before appointments, reducing no-shows by up to 40%." },
  { q: "Is there a free trial?", a: "Yes — 14-day free trial, no credit card required. You can also start on the Free plan indefinitely for small practices." },
  { q: "Is patient data secure?", a: "All data is hosted on Google Cloud with HTTPS encryption, role-based access (only your staff can access records), and daily automated backups." },
];

function PricingCard({ plan }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: { xs: 3, md: 3.5 },
        borderRadius: `${radius.lg}px`,
        bgcolor: plan.highlight ? color.violet50 : color.white,
        border: plan.highlight ? `2px solid ${color.violet600}` : `1px solid ${color.slate200}`,
        boxShadow: plan.highlight ? shadow.lg : shadow.xs,
      }}
    >
      {plan.highlight && (
        <Box
          sx={{
            position: "absolute",
            top: -13,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: color.violet600,
            color: color.white,
            fontFamily: font.display,
            fontSize: "0.7rem",
            fontWeight: 800,
            px: 2,
            py: 0.6,
            borderRadius: 999,
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
          }}
        >
          MOST POPULAR
        </Box>
      )}
      <Typography component="h3" sx={{ fontFamily: font.display, fontWeight: 800, fontSize: "1.125rem", color: color.ink2, m: 0 }}>
        {plan.name}
      </Typography>
      <Box sx={{ mt: 1.5, mb: 2.5, display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: 0.5 }}>
        <Typography component="span" sx={{ fontFamily: font.display, fontWeight: 800, fontSize: "2.25rem", lineHeight: 1, color: color.violet800 }}>
          {plan.price}
        </Typography>
        <Typography component="span" sx={{ color: color.slate500, fontSize: "0.875rem" }}>
          {plan.period}
        </Typography>
      </Box>
      <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, pt: 2.5, borderTop: `1px solid ${color.slate200}`, display: "grid", gap: 1.25, mb: 3.5 }}>
        {plan.features.map((feat) => (
          <Box component="li" key={feat} sx={{ fontSize: "0.9rem", color: color.slate700, display: "flex", alignItems: "flex-start", gap: 1.25, lineHeight: 1.5 }}>
            <CheckRounded aria-hidden="true" sx={{ fontSize: 18, color: color.success, mt: "1px", flexShrink: 0 }} />
            {feat}
          </Box>
        ))}
      </Box>
      <Box sx={{ mt: "auto", "& > a": { width: "100%" } }}>
        <CtaLink href="/book-demo" tone={plan.highlight ? "primary" : "secondary"}>
          {plan.name === "Free" ? "Get Started Free" : "Start Free Trial"}
        </CtaLink>
      </Box>
    </Box>
  );
}

export default function ClinicManagementSoftwareIndia() {
  return (
    <>
      <Head>
        <title>Clinic Management Software India | ClinicFlow247 by Aurora Blossom</title>
        <meta
          name="description"
          content="Best clinic management software for Indian clinics. ClinicFlow247 — appointments, EMR, e-prescriptions, WhatsApp reminders & billing. Starts at ₹599/month. Free trial."
        />
        <meta name="keywords" content="clinic management software India, clinic management system, hospital management software, EMR software India, doctor appointment software, clinic software" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Clinic Management Software India | ClinicFlow247" />
        <meta property="og:description" content="Appointments, patient records, e-prescriptions, WhatsApp reminders and billing — all in one. Starts at ₹599/month." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="white"
        changeColorOnScroll={{ height: 60, color: "white" }}
      />

      <main id="main-content">
        {/* ── Hero ── */}
        <PageHero
          overline="PRODUCT BY AURORA BLOSSOM"
          title="Clinic Management Software India"
          lead="Run your clinic smarter. ClinicFlow247 handles appointments, patient records, e-prescriptions, WhatsApp reminders, and billing — so you focus on patients, not paperwork."
          actions={
            <>
              <CtaLink href="/book-demo">Book a Free Demo →</CtaLink>
              <CtaLink href="/#products" tone="ghost">See All Products</CtaLink>
            </>
          }
          footnote="14-day free trial · No credit card required · Starts at ₹599/month"
        />

        {/* ── Problem Statement ── */}
        <ProblemBand
          title="Is Your Clinic Still Running on Paper Registers?"
          body="Most clinics in India lose 2–3 hours every day managing appointment registers, handwritten prescriptions, and chasing patients for payment. Patient records get lost. No-shows pile up. Revenue leaks go unnoticed."
          pains={["❌ Missed appointments with no reminders", "❌ Paper records that get lost or damaged", "❌ Manual billing prone to errors", "❌ No visibility into clinic performance"]}
        />

        {/* ── Features ── */}
        <FeatureSection
          title="Everything Your Clinic Needs"
          subtitle="One software. No juggling between tools."
          features={FEATURES}
        />

        {/* ── Why Choose ClinicFlow247 ── */}
        <Section tone="dark" aria-labelledby="why-heading">
          <SectionHeader id="why-heading" title="Why 500+ Indian Doctors Choose ClinicFlow247" onDark />
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
              gap: "1px",
              bgcolor: "rgba(255,255,255,0.12)",
              borderRadius: `${radius.lg}px`,
              border: "1px solid rgba(255,255,255,0.12)",
              overflow: "hidden",
            }}
          >
            {STATS.map((item) => (
              <Box component="li" key={item.label} sx={{ p: { xs: 3, md: 4 }, textAlign: "center", bgcolor: "#16123A" }}>
                <Typography sx={{ fontFamily: font.display, fontWeight: 800, fontSize: { xs: "1.875rem", md: "2.5rem" }, lineHeight: 1.1, color: color.white }}>
                  {item.stat}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", mt: 1, lineHeight: 1.5 }}>{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </Section>

        {/* ── Pricing ── */}
        <Section aria-labelledby="pricing-heading">
          <SectionHeader id="pricing-heading" title="Simple, Transparent Pricing" lead="No hidden fees. Cancel anytime." />
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
              pt: 1.5,
              display: "grid",
              gap: { xs: 3, md: 2.5 },
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
            }}
          >
            {PLANS.map((plan) => (
              <li key={plan.name}>
                <PricingCard plan={plan} />
              </li>
            ))}
          </Box>
          <Typography sx={{ textAlign: "center", color: color.slate500, fontSize: "0.85rem", mt: 4 }}>
            All paid plans include 18% GST. Annual billing available at 20% discount.
          </Typography>
        </Section>

        {/* ── FAQ ── */}
        <FaqSection faqs={FAQS} />

        {/* ── CTA ── */}
        <CtaBand
          title="Ready to Digitise Your Clinic?"
          body="Join 500+ doctors across India who run their clinics on ClinicFlow247. Setup takes under 30 minutes."
        >
          <CtaLink href="/book-demo">Book a Free Demo →</CtaLink>
          <Typography sx={{ mt: 3, color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
            Or WhatsApp us at{" "}
            <Box component="a" href="https://wa.me/919000000000" sx={{ color: color.white, fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px", borderRadius: "4px", "&:focus-visible": focusRingOnDark }}>
              +91 90000 00000
            </Box>
          </Typography>
        </CtaBand>
      </main>

      <Footer legal={`© ${new Date().getFullYear()} Aurora Blossom. ClinicFlow247 is a product of Aurora Blossom, Hyderabad.`} />
    </>
  );
}
