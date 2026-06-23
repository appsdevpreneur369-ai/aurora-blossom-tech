import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Footer from "../components/Footer/Footer.js";
import { Box, Typography, Grid, TextField } from "@mui/material";

const SITE_URL = "https://www.aurora-blossom.com";
const PAGE_URL = `${SITE_URL}/book-demo`;

const WHATSAPP_NUMBER = "919000000000"; // replace with real number

const WHAT_YOULL_SEE = [
  { icon: "📅", text: "Live appointment booking and patient queue management" },
  { icon: "📋", text: "Creating a digital patient record and prescription in under 1 minute" },
  { icon: "💬", text: "WhatsApp reminder setup and automated notifications" },
  { icon: "🧾", text: "GST invoice generation and payment tracking" },
  { icon: "📊", text: "Revenue and appointment analytics dashboard" },
];

const TESTIMONIALS = [
  { name: "Dr. Ramesh K.", location: "Hyderabad", specialty: "General Physician", quote: "ClinicFlow247 cut our no-shows by half in the first month. Setup was surprisingly easy." },
  { name: "Dr. Priya M.", location: "Bengaluru", specialty: "Paediatrician", quote: "I can write prescriptions and send them on WhatsApp before the patient leaves my room. Patients love it." },
  { name: "Dr. Arjun S.", location: "Chennai", specialty: "Dermatologist", quote: "The analytics helped me understand peak hours and plan my schedule better. Revenue is up 20%." },
];

export default function BookDemo() {
  const [form, setForm] = useState({ name: "", clinicName: "", phone: "", city: "", doctors: "1", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi! I'd like to book a demo for ClinicFlow247.\n\nName: ${form.name}\nClinic: ${form.clinicName}\nCity: ${form.city}\nDoctors: ${form.doctors}\nPhone: ${form.phone}${form.message ? `\nMessage: ${form.message}` : ""}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const isValid = form.name && form.clinicName && form.phone && form.city;

  return (
    <>
      <Head>
        <title>Book a Free Demo | ClinicFlow247 Clinic Management Software</title>
        <meta name="description" content="Book a free 20-minute demo of ClinicFlow247 — clinic management software for Indian doctors. See appointments, prescriptions, and billing live. No credit card." />
        <meta name="keywords" content="book demo clinic software, ClinicFlow247 demo, free clinic management demo India, clinic software demo booking" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Book a Free Demo | ClinicFlow247" />
        <meta property="og:description" content="Book a free 20-minute live demo of ClinicFlow247. See appointments, e-prescriptions, billing and WhatsApp reminders in action." />
        <meta property="og:url" content={PAGE_URL} />
      </Head>

      <Header brand="" links={<HeaderLinks dropdownHoverColor="info" />} fixed color="white" changeColorOnScroll={{ height: 60, color: "white" }} />

      <main style={{ paddingTop: "80px", fontFamily: '"Inter", sans-serif' }}>

        {/* Hero */}
        <Box sx={{ background: "linear-gradient(135deg, #4C1D95 0%, #0891B2 100%)", color: "#fff", py: { xs: 7, md: 10 }, px: { xs: 3, md: 8 }, textAlign: "center" }}>
          <Typography component="h1" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: { xs: "2rem", md: "2.75rem" }, mb: 2, lineHeight: 1.2 }}>
            Book Your Free Demo
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, maxWidth: 580, mx: "auto", color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
            20 minutes. Live walkthrough. We'll show you how ClinicFlow247 can transform your clinic's operations — for free, no commitment.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 1100, mx: "auto", py: { xs: 6, md: 10 }, px: { xs: 3, md: 4 } }}>
          <Grid container spacing={6}>

            {/* Form */}
            <Grid item xs={12} md={6}>
              {!submitted ? (
                <Box sx={{ bgcolor: "#fff", borderRadius: "20px", border: "1px solid #E2E8F0", p: { xs: 3, md: 4 }, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <Typography sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: "1.3rem", mb: 0.5, color: "#1E293B" }}>
                    Request a Demo
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.9rem", mb: 3 }}>Fill in your details and we'll reach out on WhatsApp within 2 hours.</Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField fullWidth label="Your Name *" name="name" value={form.name} onChange={handleChange} size="small" />
                    <TextField fullWidth label="Clinic / Hospital Name *" name="clinicName" value={form.clinicName} onChange={handleChange} size="small" />
                    <TextField fullWidth label="WhatsApp Number *" name="phone" value={form.phone} onChange={handleChange} size="small" placeholder="+91 98765 43210" />
                    <TextField fullWidth label="City *" name="city" value={form.city} onChange={handleChange} size="small" />
                    <TextField
                      fullWidth select label="Number of Doctors" name="doctors" value={form.doctors} onChange={handleChange} size="small"
                      SelectProps={{ native: true }}
                    >
                      {["1", "2–5", "6–15", "15+"].map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </TextField>
                    <TextField fullWidth label="Anything specific you'd like to see?" name="message" value={form.message} onChange={handleChange} size="small" multiline rows={3} />
                    <Box
                      component="button"
                      onClick={handleWhatsApp}
                      disabled={!isValid}
                      sx={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5,
                        bgcolor: isValid ? "#25D366" : "#94A3B8", color: "#fff",
                        fontFamily: '"Montserrat", sans-serif', fontWeight: 700, fontSize: "1rem",
                        border: "none", borderRadius: "10px", py: 1.75, cursor: isValid ? "pointer" : "not-allowed",
                        transition: "background 0.2s", "&:hover": { bgcolor: isValid ? "#22BB5D" : "#94A3B8" },
                      }}
                    >
                      <span>💬</span> Send via WhatsApp
                    </Box>
                    <Typography sx={{ textAlign: "center", color: "#94A3B8", fontSize: "0.78rem" }}>
                      We'll reply within 2 hours during business hours (9 AM – 7 PM IST)
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box sx={{ bgcolor: "#F0FDF4", borderRadius: "20px", border: "1px solid #86EFAC", p: 5, textAlign: "center" }}>
                  <Typography sx={{ fontSize: "3rem", mb: 2 }}>🎉</Typography>
                  <Typography sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: "1.3rem", color: "#166534", mb: 1 }}>Demo Request Sent!</Typography>
                  <Typography sx={{ color: "#166534", fontSize: "0.95rem", lineHeight: 1.7, mb: 3 }}>
                    Your WhatsApp message is ready. Our team will confirm your demo time within 2 hours.
                  </Typography>
                  <Link href="/" passHref>
                    <Box component="a" sx={{ display: "inline-block", bgcolor: "#4C1D95", color: "#fff", fontFamily: '"Montserrat", sans-serif', fontWeight: 700, fontSize: "0.9rem", px: 4, py: 1.5, borderRadius: "8px", textDecoration: "none" }}>
                      ← Back to Home
                    </Box>
                  </Link>
                </Box>
              )}
            </Grid>

            {/* What you'll see + testimonials */}
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: "1.2rem", color: "#1E293B", mb: 2 }}>
                What You'll See in 20 Minutes
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 5 }}>
                {WHAT_YOULL_SEE.map((item) => (
                  <Box key={item.text} sx={{ display: "flex", alignItems: "flex-start", gap: 2, bgcolor: "#F8FAFC", borderRadius: "12px", p: 2, border: "1px solid #E2E8F0" }}>
                    <Typography sx={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</Typography>
                    <Typography sx={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.text}</Typography>
                  </Box>
                ))}
              </Box>

              <Typography sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: "1.2rem", color: "#1E293B", mb: 2 }}>
                What Doctors Say
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {TESTIMONIALS.map((t) => (
                  <Box key={t.name} sx={{ bgcolor: "#F5F3FF", borderRadius: "12px", p: 3, border: "1px solid #DDD6FE" }}>
                    <Typography sx={{ color: "#4C1D95", fontSize: "0.9rem", lineHeight: 1.7, fontStyle: "italic", mb: 1.5 }}>"{t.quote}"</Typography>
                    <Typography sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, fontSize: "0.85rem", color: "#1E293B" }}>{t.name}</Typography>
                    <Typography sx={{ color: "#7C3AED", fontSize: "0.78rem" }}>{t.specialty} · {t.location}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

          </Grid>
        </Box>

        {/* Related pages */}
        <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 8 }, px: { xs: 3, md: 8 }, textAlign: "center" }}>
          <Typography sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#1E293B", mb: 3 }}>
            Learn more about ClinicFlow247
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { href: "/clinic-management-software-india", label: "Clinic Management Software" },
              { href: "/doctor-appointment-software", label: "Appointment Software" },
              { href: "/electronic-prescription-software", label: "e-Prescription Software" },
            ].map((link) => (
              <Link key={link.href} href={link.href} passHref>
                <Box component="a" sx={{ bgcolor: "#fff", border: "1px solid #E2E8F0", borderRadius: "8px", px: 3, py: 1.25, fontSize: "0.875rem", color: "#4C1D95", fontWeight: 600, textDecoration: "none", "&:hover": { borderColor: "#7C3AED", bgcolor: "#F5F3FF" }, transition: "all 0.2s" }}>
                  {link.label}
                </Box>
              </Link>
            ))}
          </Box>
        </Box>

      </main>

      <Footer content={<Box sx={{ py: 2, textAlign: "center" }}><Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.8rem" }}>{`© ${new Date().getFullYear()} Aurora Blossom. ClinicFlow247 is a product of Aurora Blossom, Hyderabad.`}</Typography></Box>} />
    </>
  );
}
