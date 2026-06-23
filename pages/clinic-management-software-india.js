import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Footer from "../components/Footer/Footer.js";
import { Box, Typography, Grid, Divider } from "@mui/material";

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
  { icon: "📅", title: "Smart Appointment Booking", desc: "Online and in-clinic appointment scheduling with real-time availability. Patients can book via WhatsApp or your clinic's link." },
  { icon: "📋", title: "Digital Patient Records (EMR)", desc: "Store and retrieve complete patient history, vitals, diagnoses, and visit notes instantly. No more paper files." },
  { icon: "💊", title: "e-Prescription Generator", desc: "Create professional digital prescriptions in seconds. Share via WhatsApp or print — fully compliant with Indian standards." },
  { icon: "💬", title: "WhatsApp & SMS Reminders", desc: "Automated appointment reminders reduce no-shows by up to 40%. Patients receive reminders 24 hrs and 1 hr before their slot." },
  { icon: "🧾", title: "Billing & Invoicing", desc: "Generate GST-compliant invoices, track payments, and accept UPI. Full revenue dashboard included." },
  { icon: "📊", title: "Analytics Dashboard", desc: "Track appointments, revenue, patient growth, and doctor performance. Make data-driven decisions for your clinic." },
];

const PLANS = [
  { name: "Free", price: "₹0", period: "/month", highlight: false, features: ["1 doctor", "50 appointments/month", "Digital prescriptions", "Patient records"] },
  { name: "Starter", price: "₹599", period: "/month + GST", highlight: false, features: ["2 doctors", "Unlimited appointments", "WhatsApp reminders (200 msg)", "Email notifications", "Billing & invoicing"] },
  { name: "Growth", price: "₹1,199", period: "/month + GST", highlight: true, features: ["5 doctors", "WhatsApp + SMS (500 msg/month)", "Analytics dashboard", "Priority support", "All Starter features"] },
  { name: "Pro", price: "₹1,999", period: "/month + GST", highlight: false, features: ["15 doctors", "2,000 messages/month", "Advanced analytics", "Custom branding", "All Growth features"] },
];

const FAQS = [
  { q: "What is clinic management software?", a: "A digital platform that helps clinic owners manage appointments, patient records, billing, and patient communication — all in one place instead of multiple registers and spreadsheets." },
  { q: "Is ClinicFlow247 suitable for small clinics in India?", a: "Yes. ClinicFlow247 is designed for single-doctor clinics, group practices, and multi-specialty clinics across India. Pricing starts at ₹599/month with a free 14-day trial." },
  { q: "Does ClinicFlow247 support WhatsApp appointment reminders?", a: "Yes. Automated WhatsApp and SMS reminders go out 24 hours and 1 hour before appointments, reducing no-shows by up to 40%." },
  { q: "Is there a free trial?", a: "Yes — 14-day free trial, no credit card required. You can also start on the Free plan indefinitely for small practices." },
  { q: "Is patient data secure?", a: "All data is hosted on Google Cloud with HTTPS encryption, role-based access (only your staff can access records), and daily automated backups." },
];

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

      <main style={{ paddingTop: "80px", fontFamily: '"Inter", sans-serif' }}>

        {/* ── Hero ── */}
        <Box sx={{ background: "linear-gradient(135deg, #4C1D95 0%, #0891B2 100%)", color: "#fff", py: { xs: 8, md: 12 }, px: { xs: 3, md: 8 }, textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: "rgba(255,255,255,0.75)", fontWeight: 700, letterSpacing: 3, fontSize: "0.75rem" }}>
            PRODUCT BY AURORA BLOSSOM
          </Typography>
          <Typography component="h1" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: { xs: "2rem", md: "3rem" }, mt: 1, mb: 2, lineHeight: 1.2 }}>
            Clinic Management Software India
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, maxWidth: 680, mx: "auto", color: "rgba(255,255,255,0.88)", mb: 4, lineHeight: 1.7 }}>
            Run your clinic smarter. ClinicFlow247 handles appointments, patient records, e-prescriptions, WhatsApp reminders, and billing — so you focus on patients, not paperwork.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book-demo" passHref>
              <Box component="a" sx={{ display: "inline-block", bgcolor: "#fff", color: "#4C1D95", fontFamily: '"Montserrat", sans-serif', fontWeight: 700, fontSize: "0.95rem", px: 4, py: 1.5, borderRadius: "8px", textDecoration: "none", "&:hover": { bgcolor: "#F3F0FF" }, transition: "background 0.2s" }}>
                Book a Free Demo →
              </Box>
            </Link>
            <Link href="/#products" passHref>
              <Box component="a" sx={{ display: "inline-block", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", fontFamily: '"Montserrat", sans-serif', fontWeight: 600, fontSize: "0.95rem", px: 4, py: 1.5, borderRadius: "8px", textDecoration: "none", "&:hover": { borderColor: "#fff" }, transition: "border-color 0.2s" }}>
                See All Products
              </Box>
            </Link>
          </Box>
          <Typography sx={{ mt: 3, color: "rgba(255,255,255,0.65)", fontSize: "0.85rem" }}>
            14-day free trial · No credit card required · Starts at ₹599/month
          </Typography>
        </Box>

        {/* ── Problem Statement ── */}
        <Box sx={{ bgcolor: "#FFF7ED", py: { xs: 6, md: 8 }, px: { xs: 3, md: 8 }, textAlign: "center" }}>
          <Typography component="h2" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: { xs: "1.5rem", md: "2rem" }, mb: 2, color: "#1E293B" }}>
            Is Your Clinic Still Running on Paper Registers?
          </Typography>
          <Typography sx={{ maxWidth: 700, mx: "auto", color: "#64748B", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Most clinics in India lose 2–3 hours every day managing appointment registers, handwritten prescriptions, and chasing patients for payment. Patient records get lost. No-shows pile up. Revenue leaks go unnoticed.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 3, mt: 5 }}>
            {["❌ Missed appointments with no reminders", "❌ Paper records that get lost or damaged", "❌ Manual billing prone to errors", "❌ No visibility into clinic performance"].map((pain) => (
              <Box key={pain} sx={{ bgcolor: "#fff", border: "1px solid #FED7AA", borderRadius: "12px", px: 3, py: 2, maxWidth: 260, fontSize: "0.9rem", color: "#9A3412", fontWeight: 500 }}>
                {pain}
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Features ── */}
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 8 }, maxWidth: 1200, mx: "auto" }}>
          <Typography component="h2" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: { xs: "1.5rem", md: "2rem" }, textAlign: "center", mb: 1, color: "#1E293B" }}>
            Everything Your Clinic Needs
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#64748B", mb: 6, fontSize: "1rem" }}>
            One software. No juggling between tools.
          </Typography>
          <Grid container spacing={4}>
            {FEATURES.map((f) => (
              <Grid item xs={12} sm={6} md={4} key={f.title}>
                <Box sx={{ bgcolor: "#F8FAFC", borderRadius: "16px", p: 3, height: "100%", border: "1px solid #E2E8F0", "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,0.08)", borderColor: "#7C3AED" }, transition: "all 0.2s" }}>
                  <Typography sx={{ fontSize: "2rem", mb: 1 }}>{f.icon}</Typography>
                  <Typography sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, fontSize: "1rem", mb: 1, color: "#1E293B" }}>{f.title}</Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7 }}>{f.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ── Why Choose ClinicFlow247 ── */}
        <Box sx={{ bgcolor: "#F0F9FF", py: { xs: 6, md: 8 }, px: { xs: 3, md: 8 }, textAlign: "center" }}>
          <Typography component="h2" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: { xs: "1.5rem", md: "2rem" }, mb: 5, color: "#1E293B" }}>
            Why 500+ Indian Doctors Choose ClinicFlow247
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 900, mx: "auto" }}>
            {[
              { stat: "40%", label: "Reduction in no-shows with automated reminders" },
              { stat: "2 hrs", label: "Saved daily on manual paperwork and registers" },
              { stat: "₹599", label: "Starting price — less than a single patient visit" },
              { stat: "14 days", label: "Free trial — no credit card needed" },
            ].map((item) => (
              <Grid item xs={6} md={3} key={item.label}>
                <Typography sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: "2.25rem", color: "#4C1D95" }}>{item.stat}</Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.85rem", mt: 0.5, lineHeight: 1.5 }}>{item.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ── Pricing ── */}
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 8 }, maxWidth: 1100, mx: "auto" }}>
          <Typography component="h2" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: { xs: "1.5rem", md: "2rem" }, textAlign: "center", mb: 1, color: "#1E293B" }}>
            Simple, Transparent Pricing
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#64748B", mb: 6, fontSize: "1rem" }}>
            No hidden fees. Cancel anytime.
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {PLANS.map((plan) => (
              <Grid item xs={12} sm={6} md={3} key={plan.name}>
                <Box sx={{
                  border: plan.highlight ? "2px solid #7C3AED" : "1px solid #E2E8F0",
                  borderRadius: "16px", p: 3, height: "100%", position: "relative",
                  bgcolor: plan.highlight ? "#F5F3FF" : "#fff",
                  "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }, transition: "box-shadow 0.2s"
                }}>
                  {plan.highlight && (
                    <Box sx={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", bgcolor: "#7C3AED", color: "#fff", fontSize: "0.7rem", fontWeight: 700, px: 2, py: 0.5, borderRadius: "20px", letterSpacing: 1, whiteSpace: "nowrap" }}>
                      MOST POPULAR
                    </Box>
                  )}
                  <Typography sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: "1.1rem", color: "#1E293B" }}>{plan.name}</Typography>
                  <Box sx={{ mt: 1, mb: 2 }}>
                    <Typography component="span" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: "2rem", color: "#4C1D95" }}>{plan.price}</Typography>
                    <Typography component="span" sx={{ color: "#94A3B8", fontSize: "0.85rem" }}>{plan.period}</Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  {plan.features.map((feat) => (
                    <Typography key={feat} sx={{ fontSize: "0.85rem", color: "#475569", mb: 0.75, display: "flex", alignItems: "flex-start", gap: 1 }}>
                      <span style={{ color: "#22C55E", flexShrink: 0 }}>✓</span> {feat}
                    </Typography>
                  ))}
                  <Link href="/book-demo" passHref>
                    <Box component="a" sx={{ display: "block", mt: 3, textAlign: "center", bgcolor: plan.highlight ? "#7C3AED" : "#F1F5F9", color: plan.highlight ? "#fff" : "#1E293B", fontFamily: '"Montserrat", sans-serif', fontWeight: 700, fontSize: "0.875rem", py: 1.25, borderRadius: "8px", textDecoration: "none", "&:hover": { opacity: 0.9 } }}>
                      {plan.name === "Free" ? "Get Started Free" : "Start Free Trial"}
                    </Box>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography sx={{ textAlign: "center", color: "#94A3B8", fontSize: "0.8rem", mt: 3 }}>All paid plans include 18% GST. Annual billing available at 20% discount.</Typography>
        </Box>

        {/* ── FAQ ── */}
        <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 8 }, px: { xs: 3, md: 8 }, maxWidth: 800, mx: "auto" }}>
          <Typography component="h2" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: { xs: "1.5rem", md: "2rem" }, textAlign: "center", mb: 5, color: "#1E293B" }}>
            Frequently Asked Questions
          </Typography>
          {FAQS.map((faq, i) => (
            <Box key={i} sx={{ mb: 3, bgcolor: "#fff", borderRadius: "12px", p: 3, border: "1px solid #E2E8F0" }}>
              <Typography sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#1E293B", mb: 1 }}>
                {faq.q}
              </Typography>
              <Typography sx={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7 }}>{faq.a}</Typography>
            </Box>
          ))}
        </Box>

        {/* ── CTA ── */}
        <Box sx={{ background: "linear-gradient(135deg, #4C1D95 0%, #0891B2 100%)", color: "#fff", py: { xs: 8, md: 10 }, px: { xs: 3, md: 8 }, textAlign: "center" }}>
          <Typography component="h2" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: { xs: "1.75rem", md: "2.5rem" }, mb: 2 }}>
            Ready to Digitise Your Clinic?
          </Typography>
          <Typography sx={{ maxWidth: 560, mx: "auto", mb: 4, color: "rgba(255,255,255,0.88)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Join 500+ doctors across India who run their clinics on ClinicFlow247. Setup takes under 30 minutes.
          </Typography>
          <Link href="/book-demo" passHref>
            <Box component="a" sx={{ display: "inline-block", bgcolor: "#fff", color: "#4C1D95", fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: "1rem", px: 6, py: 2, borderRadius: "8px", textDecoration: "none", "&:hover": { bgcolor: "#F3F0FF" } }}>
              Book a Free Demo →
            </Box>
          </Link>
          <Typography sx={{ mt: 3, color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>
            Or WhatsApp us at{" "}
            <Box component="a" href="https://wa.me/919000000000" sx={{ color: "#fff", textDecoration: "underline" }}>+91 90000 00000</Box>
          </Typography>
        </Box>

      </main>

      <Footer
        content={
          <Box sx={{ py: 2, textAlign: "center" }}>
            <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.8rem", fontFamily: '"Inter", sans-serif' }}>
              {`© ${new Date().getFullYear()} Aurora Blossom. ClinicFlow247 is a product of Aurora Blossom, Hyderabad.`}
            </Typography>
          </Box>
        }
      />
    </>
  );
}
