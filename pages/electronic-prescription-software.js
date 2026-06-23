import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Footer from "../components/Footer/Footer.js";
import { Box, Typography, Grid } from "@mui/material";

const SITE_URL = "https://www.aurora-blossom.com";
const PAGE_URL = `${SITE_URL}/electronic-prescription-software`;

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ClinicFlow247 — e-Prescription Software",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: "https://clinicflow247.com",
  description: "Digital e-prescription software for Indian doctors. Create, share, and store prescriptions digitally. ABDM-ready, WhatsApp sharing, and patient medication history.",
  offers: { "@type": "Offer", price: "599", priceCurrency: "INR" },
  provider: { "@type": "Organization", name: "Aurora Blossom", url: SITE_URL },
};

const FEATURES = [
  { icon: "⚡", title: "Prescriptions in 30 Seconds", desc: "Search drugs by name, select dosage, add instructions — the system generates a professional prescription PDF instantly." },
  { icon: "📲", title: "Share via WhatsApp", desc: "Send prescriptions directly to patients on WhatsApp. No printing, no paper — patients always have their prescription on their phone." },
  { icon: "🏷️", title: "Drug Interaction Alerts", desc: "The system flags common drug interactions as you type, reducing prescribing errors before they happen." },
  { icon: "📁", title: "Complete Medication History", desc: "Every prescription is saved against the patient's profile. Access full medication history in one click during follow-up visits." },
  { icon: "🖨️", title: "Print-Ready Format", desc: "Prescriptions are formatted professionally with your clinic letterhead, doctor registration number, and patient details — printable on any printer." },
  { icon: "🔐", title: "Secure & Compliant", desc: "All prescriptions are stored securely on Google Cloud. Patient data is encrypted and role-restricted — only authorised staff can access." },
];

const FAQS = [
  { q: "Are digital prescriptions legal in India?", a: "Yes. Digital prescriptions are legally valid in India. ClinicFlow247 prescriptions include the doctor's name, registration number, and date — all required details." },
  { q: "Can patients use ClinicFlow247 prescriptions at any pharmacy?", a: "Yes. Prescriptions can be printed or shown on a phone screen at any pharmacy. WhatsApp delivery ensures patients always have a copy." },
  { q: "Can I add my clinic's letterhead and logo?", a: "Yes. You can customise the prescription template with your clinic name, logo, address, and doctor signature." },
  { q: "Is medication history maintained across visits?", a: "Yes. Every prescription is linked to the patient's profile. You can see all past medications, dosages, and instructions from previous visits." },
];

export default function ElectronicPrescriptionSoftware() {
  return (
    <>
      <Head>
        <title>Electronic Prescription Software India | ClinicFlow247 by Aurora Blossom</title>
        <meta name="description" content="Digital e-prescription software for Indian doctors. Create prescriptions in 30 seconds, share on WhatsApp, view medication history. Free 14-day trial." />
        <meta name="keywords" content="electronic prescription software India, e-prescription software, digital prescription India, doctor prescription app, EMR prescription software India" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Electronic Prescription Software India | ClinicFlow247" />
        <meta property="og:description" content="Create digital prescriptions in 30 seconds. Share on WhatsApp. Complete medication history. Free 14-day trial." />
        <meta property="og:url" content={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      </Head>

      <Header brand="" links={<HeaderLinks dropdownHoverColor="info" />} fixed color="white" changeColorOnScroll={{ height: 60, color: "white" }} />

      <main style={{ paddingTop: "80px", fontFamily: '"Inter", sans-serif' }}>

        {/* Hero */}
        <Box sx={{ background: "linear-gradient(135deg, #059669 0%, #0891B2 100%)", color: "#fff", py: { xs: 8, md: 12 }, px: { xs: 3, md: 8 }, textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: "rgba(255,255,255,0.75)", fontWeight: 700, letterSpacing: 3, fontSize: "0.75rem" }}>CLINICFLOW247 FEATURE</Typography>
          <Typography component="h1" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: { xs: "2rem", md: "3rem" }, mt: 1, mb: 2, lineHeight: 1.2 }}>
            Electronic Prescription Software for Doctors
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, maxWidth: 640, mx: "auto", color: "rgba(255,255,255,0.88)", mb: 4, lineHeight: 1.7 }}>
            Replace handwritten prescriptions with digital ones. Create a complete e-prescription in under 30 seconds — and share it on WhatsApp before the patient leaves your clinic.
          </Typography>
          <Link href="/book-demo" passHref>
            <Box component="a" sx={{ display: "inline-block", bgcolor: "#fff", color: "#059669", fontFamily: '"Montserrat", sans-serif', fontWeight: 700, fontSize: "0.95rem", px: 5, py: 1.5, borderRadius: "8px", textDecoration: "none", "&:hover": { bgcolor: "#F0FDF4" } }}>
              Book a Free Demo →
            </Box>
          </Link>
          <Typography sx={{ mt: 2.5, color: "rgba(255,255,255,0.65)", fontSize: "0.85rem" }}>Free 14-day trial · No credit card · Starts at ₹599/month</Typography>
        </Box>

        {/* Problem */}
        <Box sx={{ bgcolor: "#FFF7ED", py: { xs: 6, md: 8 }, px: { xs: 3, md: 8 }, textAlign: "center" }}>
          <Typography component="h2" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: { xs: "1.5rem", md: "2rem" }, mb: 2, color: "#1E293B" }}>
            Can Your Patients Read Your Handwriting?
          </Typography>
          <Typography sx={{ maxWidth: 680, mx: "auto", color: "#64748B", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Illegible handwriting leads to dispensing errors at pharmacies. Paper prescriptions get lost before patients reach the chemist. And there's no way to track what you prescribed six months ago without digging through old files.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 3, mt: 5 }}>
            {["❌ Illegible prescriptions causing errors", "❌ Lost paper prescriptions", "❌ No medication history at follow-up", "❌ Hours spent writing the same drug names daily"].map((pain) => (
              <Box key={pain} sx={{ bgcolor: "#fff", border: "1px solid #FED7AA", borderRadius: "12px", px: 3, py: 2, maxWidth: 260, fontSize: "0.9rem", color: "#9A3412", fontWeight: 500 }}>{pain}</Box>
            ))}
          </Box>
        </Box>

        {/* Features */}
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 8 }, maxWidth: 1200, mx: "auto" }}>
          <Typography component="h2" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: { xs: "1.5rem", md: "2rem" }, textAlign: "center", mb: 1, color: "#1E293B" }}>
            Prescribe Digitally. Share Instantly.
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#64748B", mb: 6, fontSize: "1rem" }}>No more paper, no more guesswork at the pharmacy.</Typography>
          <Grid container spacing={4}>
            {FEATURES.map((f) => (
              <Grid item xs={12} sm={6} md={4} key={f.title}>
                <Box sx={{ bgcolor: "#F8FAFC", borderRadius: "16px", p: 3, height: "100%", border: "1px solid #E2E8F0", "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,0.08)", borderColor: "#059669" }, transition: "all 0.2s" }}>
                  <Typography sx={{ fontSize: "2rem", mb: 1 }}>{f.icon}</Typography>
                  <Typography sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, fontSize: "1rem", mb: 1, color: "#1E293B" }}>{f.title}</Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7 }}>{f.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ */}
        <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 8 }, px: { xs: 3, md: 8 }, maxWidth: 800, mx: "auto" }}>
          <Typography component="h2" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: { xs: "1.5rem", md: "2rem" }, textAlign: "center", mb: 5, color: "#1E293B" }}>
            Frequently Asked Questions
          </Typography>
          {FAQS.map((faq, i) => (
            <Box key={i} sx={{ mb: 3, bgcolor: "#fff", borderRadius: "12px", p: 3, border: "1px solid #E2E8F0" }}>
              <Typography sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#1E293B", mb: 1 }}>{faq.q}</Typography>
              <Typography sx={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7 }}>{faq.a}</Typography>
            </Box>
          ))}
        </Box>

        {/* CTA */}
        <Box sx={{ background: "linear-gradient(135deg, #059669 0%, #0891B2 100%)", color: "#fff", py: { xs: 8, md: 10 }, px: { xs: 3, md: 8 }, textAlign: "center" }}>
          <Typography component="h2" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: { xs: "1.75rem", md: "2.5rem" }, mb: 2 }}>
            Start Writing Digital Prescriptions Today
          </Typography>
          <Typography sx={{ maxWidth: 520, mx: "auto", mb: 4, color: "rgba(255,255,255,0.88)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Takes 20 minutes to set up. Your first digital prescription goes out the same day.
          </Typography>
          <Link href="/book-demo" passHref>
            <Box component="a" sx={{ display: "inline-block", bgcolor: "#fff", color: "#059669", fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: "1rem", px: 6, py: 2, borderRadius: "8px", textDecoration: "none", "&:hover": { bgcolor: "#F0FDF4" } }}>
              Book a Free Demo →
            </Box>
          </Link>
        </Box>

      </main>

      <Footer content={<Box sx={{ py: 2, textAlign: "center" }}><Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.8rem" }}>{`© ${new Date().getFullYear()} Aurora Blossom. ClinicFlow247 is a product of Aurora Blossom, Hyderabad.`}</Typography></Box>} />
    </>
  );
}
