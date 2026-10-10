import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Footer from "../components/Footer/SiteFooter.js";
import { Box, Typography } from "@mui/material";
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
import PricingPlans, { PLANS } from "../components/ClinicFlow/PricingPlans.js";
import { color, font, radius, shadow, focusRingOnDark } from "../styles/tokens.js";

const SITE_URL = "https://www.aurora-blossom.com";
const PAGE_URL = `${SITE_URL}/clinic-management-software-india`;

const FAQS = [
  { q: "What is clinic management software?", a: "A digital platform that replaces paper registers — managing appointments, patient records, billing, and communication in one place." },
  { q: "Is ClinicFlow247 suitable for small clinics in India?", a: "Yes. It works for single-doctor clinics, group practices, and multi-specialty setups. Plans start at ₹1,199/month, and every plan can be tried free for 14 days." },
  { q: "Does it support WhatsApp appointment reminders?", a: "Yes. Automated WhatsApp and SMS reminders go out before each appointment — you choose how far in advance — so patients don’t need a manual follow-up call." },
  { q: "Is patient data secure?", a: "All data lives on Google Cloud with HTTPS encryption, role-based access, and daily automated backups." },
  { q: "Is there a free trial?", a: "Yes — 14 days free with everything in the Pro plan, no credit card needed. When the trial ends, choose Starter, Pro or Enterprise and all your data is kept." },
];

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
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "1199",
    highPrice: "4999",
    offerCount: PLANS.length,
    offers: PLANS.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: String(plan.monthlyPrice),
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(plan.monthlyPrice),
        priceCurrency: "INR",
        unitCode: "MON",
        valueAddedTaxIncluded: false,
      },
    })),
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
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const FEATURES = [
  { icon: CalendarMonthOutlined, title: "Smart Appointment Booking", desc: "Online and in-clinic booking with real-time slot availability. Patients book via WhatsApp or your clinic link." },
  { icon: AssignmentIndOutlined, title: "Digital Patient Records (EMR)", desc: "Store and retrieve complete patient history, vitals, diagnoses and visit notes instantly." },
  { icon: MedicationOutlined, title: "e-Prescription Generator", desc: "Create professional digital prescriptions in seconds. Share via WhatsApp or print." },
  { icon: ForumOutlined, title: "WhatsApp & SMS Reminders", desc: "Automated reminders before appointments, with a configurable reminder time, so fewer patients simply forget." },
  { icon: ReceiptLongOutlined, title: "GST Billing & Invoicing", desc: "Generate GST-compliant invoices, track payments, and accept UPI — all from one dashboard." },
  { icon: InsightsOutlined, title: "Analytics Dashboard", desc: "Track appointments, revenue, and doctor performance. Make data-driven decisions." },
];

const STATS = [
  { stat: "WhatsApp", label: "+ SMS reminders built-in" },
  { stat: "GST", label: "Compliant billing & invoicing" },
  { stat: "₹1,199", label: "Starting price/month" },
  { stat: "14 days", label: "Free trial, no card needed" },
];

export default function ClinicManagementSoftwareIndia() {
  return (
    <>
      <Head>
        <title>Clinic Management Software India | ClinicFlow247 by Aurora Blossom</title>
        <meta
          name="description"
          content="Best clinic management software for Indian clinics. ClinicFlow247 — appointments, EMR, e-prescriptions, WhatsApp reminders & billing. Plans from ₹1,199/month. Free trial."
        />
        <meta name="keywords" content="clinic management software India, clinic management system, hospital management software, EMR software India, doctor appointment software, clinic software" />
        <link key="canonical" rel="canonical" href={PAGE_URL} />
        <meta key="og:title" property="og:title" content="Clinic Management Software India | ClinicFlow247" />
        <meta key="og:description" property="og:description" content="Appointments, patient records, e-prescriptions, WhatsApp reminders and billing — all in one. Plans from ₹1,199/month." />
        <meta key="og:url" property="og:url" content={PAGE_URL} />
        <meta key="og:type" property="og:type" content="website" />
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
          lead="Stop Losing Patients to Missed Appointments & Manual Registers. ClinicFlow247 helps clinics automate appointments, reminders, billing and patient records — built for clinic owners, doctors and receptionists across India."
          actions={
            <>
              <CtaLink href="/book-demo">Book a Free Demo →</CtaLink>
              <CtaLink href="/#products" tone="ghost">See All Products</CtaLink>
            </>
          }
          footnote="14-day free trial · No credit card · Plans from ₹1,199/month"
        />

        {/* ── Problem Statement ── */}
        <ProblemBand
          title="Still Running on Paper Registers?"
          body="Most clinics in India lose 2–3 hours daily on appointment registers, handwritten prescriptions, and payment follow-ups. Patient records get lost. No-shows pile up."
          pains={["❌ Missed appointments with no reminders", "❌ Paper records that get lost or damaged", "❌ Manual billing prone to errors", "❌ No visibility into clinic performance"]}
        />

        {/* ── Features ── */}
        <FeatureSection
          title="Everything Your Clinic Needs"
          subtitle="One software. No juggling between tools."
          features={FEATURES}
        />

        {/* ── Why Choose ClinicFlow247 ── */}
        <Section tone="tint" aria-labelledby="why-heading" isStatic>
          <SectionHeader id="why-heading" title="Built for How Indian Clinics Actually Run" />
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
              gap: "1px",
              bgcolor: color.slate200,
              borderRadius: `${radius.lg}px`,
              border: `1px solid ${color.slate200}`,
              boxShadow: shadow.sm,
              overflow: "hidden",
            }}
          >
            {STATS.map((item) => (
              <Box component="li" key={item.label} sx={{ p: { xs: 3, md: 4 }, textAlign: "center", bgcolor: color.white }}>
                <Typography sx={{ fontFamily: font.display, fontWeight: 800, fontSize: { xs: "1.875rem", md: "2.5rem" }, lineHeight: 1.1, color: color.violet700 }}>
                  {item.stat}
                </Typography>
                <Typography sx={{ color: color.slate600, fontSize: "0.875rem", mt: 1, lineHeight: 1.5 }}>{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </Section>

        {/* ── Pricing ── */}
        <Section tone="dark" aria-labelledby="pricing-heading" sx={{ overflowX: "clip" }}>
          <SectionHeader id="pricing-heading" title="Simple, Transparent Pricing" lead="No hidden fees. Cancel anytime." onDark sx={{ mb: { xs: 4, md: 5 } }} />
          <PricingPlans />
        </Section>

        {/* ── FAQ ── */}
        <FaqSection faqs={FAQS} />

        {/* ── CTA ── */}
        <CtaBand
          title="Ready to Digitise Your Clinic?"
          body="Set up your clinic on ClinicFlow247 in under 30 minutes."
        >
          <CtaLink href="/book-demo">Book a Free Demo →</CtaLink>
          <Typography sx={{ mt: 3, color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
            Or WhatsApp us at{" "}
            <Box component="a" href="https://wa.me/917032405627" sx={{ color: color.white, fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px", borderRadius: "4px", "&:focus-visible": focusRingOnDark }}>
              (+91) 7032405627
            </Box>
          </Typography>
        </CtaBand>
      </main>

      <Footer legal={`© ${new Date().getFullYear()} Aurora Blossom. ClinicFlow247 is a product of Aurora Blossom, Hyderabad.`} />
    </>
  );
}
