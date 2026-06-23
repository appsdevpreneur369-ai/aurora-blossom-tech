import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Footer from "../components/Footer/Footer.js";
import { Box, Typography, Grid } from "@mui/material";

const SITE_URL = "https://www.aurora-blossom.com";
const PAGE_URL = `${SITE_URL}/doctor-appointment-software`;

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ClinicFlow247 — Doctor Appointment Software",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: "https://clinicflow247.com",
  description: "Online doctor appointment booking software for Indian clinics. Real-time slot management, patient self-booking, WhatsApp reminders, and queue management.",
  offers: { "@type": "Offer", price: "599", priceCurrency: "INR" },
  provider: { "@type": "Organization", name: "Aurora Blossom", url: SITE_URL },
};

const FEATURES = [
  { icon: "🗓️", title: "Real-Time Slot Management", desc: "Define working hours, break times, and max appointments per slot. The system blocks overlapping bookings automatically." },
  { icon: "📱", title: "Patient Self-Booking", desc: "Patients book their own appointments online — via your clinic's booking link or WhatsApp. Zero phone calls for your receptionist." },
  { icon: "🔔", title: "Automated Reminders", desc: "WhatsApp and SMS reminders 24 hours and 1 hour before appointments. Patients confirm or reschedule without calling." },
  { icon: "🏥", title: "Today's Queue View", desc: "Doctors see a live queue of today's patients with their status — waiting, in-consultation, or done." },
  { icon: "🔄", title: "Easy Reschedule & Cancel", desc: "Staff or patients can reschedule or cancel with one tap. Freed slots are immediately available for others." },
  { icon: "📊", title: "Appointment Analytics", desc: "See daily, weekly, and monthly appointment trends. Track peak hours and no-show rates." },
];

const FAQS = [
  { q: "Can patients book appointments themselves?", a: "Yes. ClinicFlow247 gives you a shareable booking link. Patients see available slots in real-time and book without calling your clinic." },
  { q: "Does it work for multi-doctor clinics?", a: "Yes. You can set up separate schedules for each doctor. Patients choose the doctor they want when booking." },
  { q: "What happens when a patient cancels?", a: "The slot is immediately freed and becomes available for other patients. You get a notification of the cancellation." },
  { q: "Can I block time for lunch or personal appointments?", a: "Yes. Mark any time slot as unavailable. The booking system respects your block-out periods." },
];

export default function DoctorAppointmentSoftware() {
  return (
    <>
      <Head>
        <title>Doctor Appointment Software India | ClinicFlow247 by Aurora Blossom</title>
        <meta name="description" content="Online doctor appointment booking software for Indian clinics. Real-time slots, patient self-booking, WhatsApp reminders & queue management. Free 14-day trial." />
        <meta name="keywords" content="doctor appointment software, online appointment booking India, clinic appointment system, patient booking software, doctor scheduling software India" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Doctor Appointment Software India | ClinicFlow247" />
        <meta property="og:description" content="Online doctor appointment booking with real-time slots, WhatsApp reminders, and queue management. Free 14-day trial." />
        <meta property="og:url" content={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      </Head>

      <Header brand="" links={<HeaderLinks dropdownHoverColor="info" />} fixed color="white" changeColorOnScroll={{ height: 60, color: "white" }} />

      <main style={{ paddingTop: "80px", fontFamily: '"Inter", sans-serif' }}>

        {/* Hero */}
        <Box sx={{ background: "linear-gradient(135deg, #0891B2 0%, #4C1D95 100%)", color: "#fff", py: { xs: 8, md: 12 }, px: { xs: 3, md: 8 }, textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: "rgba(255,255,255,0.75)", fontWeight: 700, letterSpacing: 3, fontSize: "0.75rem" }}>CLINICFLOW247 FEATURE</Typography>
          <Typography component="h1" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: { xs: "2rem", md: "3rem" }, mt: 1, mb: 2, lineHeight: 1.2 }}>
            Doctor Appointment Software for Indian Clinics
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, maxWidth: 640, mx: "auto", color: "rgba(255,255,255,0.88)", mb: 4, lineHeight: 1.7 }}>
            Stop managing appointments on paper or WhatsApp messages. ClinicFlow247 gives your clinic real-time online booking, automated reminders, and a live patient queue — in minutes.
          </Typography>
          <Link href="/book-demo" passHref>
            <Box component="a" sx={{ display: "inline-block", bgcolor: "#fff", color: "#0891B2", fontFamily: '"Montserrat", sans-serif', fontWeight: 700, fontSize: "0.95rem", px: 5, py: 1.5, borderRadius: "8px", textDecoration: "none", "&:hover": { bgcolor: "#F0FDFF" } }}>
              Book a Free Demo →
            </Box>
          </Link>
          <Typography sx={{ mt: 2.5, color: "rgba(255,255,255,0.65)", fontSize: "0.85rem" }}>Free 14-day trial · No credit card · Starts at ₹599/month</Typography>
        </Box>

        {/* Problem */}
        <Box sx={{ bgcolor: "#FFF7ED", py: { xs: 6, md: 8 }, px: { xs: 3, md: 8 }, textAlign: "center" }}>
          <Typography component="h2" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: { xs: "1.5rem", md: "2rem" }, mb: 2, color: "#1E293B" }}>
            How Much Time Does Your Staff Spend on the Phone?
          </Typography>
          <Typography sx={{ maxWidth: 680, mx: "auto", color: "#64748B", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Clinics that manage appointments via phone calls and paper registers spend 3–4 hours daily on scheduling alone. Missed calls mean missed patients. Double-bookings cause chaos. No-shows go untracked.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 3, mt: 5 }}>
            {["❌ Phone calls for every booking", "❌ Double-bookings from manual entry", "❌ No-shows with zero reminders", "❌ Staff tied up scheduling instead of serving patients"].map((pain) => (
              <Box key={pain} sx={{ bgcolor: "#fff", border: "1px solid #FED7AA", borderRadius: "12px", px: 3, py: 2, maxWidth: 260, fontSize: "0.9rem", color: "#9A3412", fontWeight: 500 }}>{pain}</Box>
            ))}
          </Box>
        </Box>

        {/* Features */}
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 8 }, maxWidth: 1200, mx: "auto" }}>
          <Typography component="h2" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: { xs: "1.5rem", md: "2rem" }, textAlign: "center", mb: 1, color: "#1E293B" }}>
            Appointment Management That Works 24/7
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#64748B", mb: 6, fontSize: "1rem" }}>Patients can book while you sleep. You manage the queue with one tap.</Typography>
          <Grid container spacing={4}>
            {FEATURES.map((f) => (
              <Grid item xs={12} sm={6} md={4} key={f.title}>
                <Box sx={{ bgcolor: "#F8FAFC", borderRadius: "16px", p: 3, height: "100%", border: "1px solid #E2E8F0", "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,0.08)", borderColor: "#0891B2" }, transition: "all 0.2s" }}>
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
        <Box sx={{ background: "linear-gradient(135deg, #0891B2 0%, #4C1D95 100%)", color: "#fff", py: { xs: 8, md: 10 }, px: { xs: 3, md: 8 }, textAlign: "center" }}>
          <Typography component="h2" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: { xs: "1.75rem", md: "2.5rem" }, mb: 2 }}>
            See It Live — Book a Demo Today
          </Typography>
          <Typography sx={{ maxWidth: 520, mx: "auto", mb: 4, color: "rgba(255,255,255,0.88)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Our team will walk you through the complete appointment workflow in 20 minutes. No commitment required.
          </Typography>
          <Link href="/book-demo" passHref>
            <Box component="a" sx={{ display: "inline-block", bgcolor: "#fff", color: "#0891B2", fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: "1rem", px: 6, py: 2, borderRadius: "8px", textDecoration: "none", "&:hover": { bgcolor: "#F0FDFF" } }}>
              Book a Free Demo →
            </Box>
          </Link>
        </Box>

      </main>

      <Footer content={<Box sx={{ py: 2, textAlign: "center" }}><Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.8rem" }}>{`© ${new Date().getFullYear()} Aurora Blossom. ClinicFlow247 is a product of Aurora Blossom, Hyderabad.`}</Typography></Box>} />
    </>
  );
}
