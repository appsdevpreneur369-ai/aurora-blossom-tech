import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Footer from "../components/Footer/SiteFooter.js";
import { Box, Button, Typography, TextField } from "@mui/material";
import WhatsApp from "@mui/icons-material/WhatsApp";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import EventAvailableOutlined from "@mui/icons-material/EventAvailableOutlined";
import AssignmentOutlined from "@mui/icons-material/AssignmentOutlined";
import ForumOutlined from "@mui/icons-material/ForumOutlined";
import ReceiptLongOutlined from "@mui/icons-material/ReceiptLongOutlined";
import InsightsOutlined from "@mui/icons-material/InsightsOutlined";
import PageHero from "../components/ui/PageHero.js";
import IconTile from "../components/ui/IconTile.js";
import { CtaLink } from "../components/ClinicFlow/LandingBlocks.js";
import { color, font, layout, radius, shadow, focusRing } from "../styles/tokens.js";

const SITE_URL = "https://www.aurora-blossom.com";
const PAGE_URL = `${SITE_URL}/book-demo`;

const WHATSAPP_NUMBER = "917032405627";

const WHAT_YOULL_SEE = [
  { icon: EventAvailableOutlined, text: "Live appointment booking and patient queue management" },
  { icon: AssignmentOutlined, text: "Creating a digital patient record and prescription in under 1 minute" },
  { icon: ForumOutlined, text: "WhatsApp reminder setup and automated notifications" },
  { icon: ReceiptLongOutlined, text: "GST invoice generation and payment tracking" },
  { icon: InsightsOutlined, text: "Revenue and appointment analytics dashboard" },
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
        <link key="canonical" rel="canonical" href={PAGE_URL} />
        <meta key="og:title" property="og:title" content="Book a Free Demo | ClinicFlow247" />
        <meta key="og:description" property="og:description" content="Book a free 20-minute live demo of ClinicFlow247. See appointments, e-prescriptions, billing and WhatsApp reminders in action." />
        <meta key="og:url" property="og:url" content={PAGE_URL} />
      </Head>

      <Header brand="" links={<HeaderLinks dropdownHoverColor="info" />} fixed color="white" changeColorOnScroll={{ height: 60, color: "white" }} />

      <main id="main-content">

        {/* Hero */}
        <PageHero
          title="Book Your Free Demo"
          lead="20 minutes. Live walkthrough. We'll show you how ClinicFlow247 can transform your clinic's operations — for free, no commitment."
          titleSx={{ pb: { xs: 6, md: 8 } }}
        />

        <Box sx={{ bgcolor: color.slate50, pb: { xs: 9, md: 12 } }}>
          <Box
            sx={{
              maxWidth: layout.maxWidth,
              mx: "auto",
              px: layout.gutter,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 6, md: 8 },
              alignItems: "start",
            }}
          >
            {/* Form */}
            <Box sx={{ mt: { xs: -6, md: -8 }, position: "relative" }}>
              {!submitted ? (
                <Box
                  component="form"
                  noValidate
                  aria-labelledby="demo-form-heading"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (isValid) handleWhatsApp();
                  }}
                  sx={{ bgcolor: color.white, borderRadius: `${radius.xl}px`, border: `1px solid ${color.slate200}`, p: { xs: 3, md: 4.5 }, boxShadow: shadow.lg }}
                >
                  <Typography id="demo-form-heading" component="h2" sx={{ fontFamily: font.display, fontWeight: 800, fontSize: "1.375rem", mb: 0.75, color: color.ink2 }}>
                    Request a Demo
                  </Typography>
                  <Typography sx={{ color: color.slate600, fontSize: "0.95rem", mb: 3.5 }}>Fill in your details and we'll reach out on WhatsApp within 2 hours.</Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2.25 }}>
                    <TextField fullWidth label="Your Name *" name="name" value={form.name} onChange={handleChange} size="medium" autoComplete="name" inputProps={{ "aria-required": true }} />
                    <TextField fullWidth label="Clinic / Hospital Name *" name="clinicName" value={form.clinicName} onChange={handleChange} size="medium" autoComplete="organization" inputProps={{ "aria-required": true }} />
                    <TextField fullWidth label="WhatsApp Number *" name="phone" value={form.phone} onChange={handleChange} size="medium" placeholder="+91 98765 43210" type="tel" autoComplete="tel" inputProps={{ "aria-required": true }} />
                    <TextField fullWidth label="City *" name="city" value={form.city} onChange={handleChange} size="medium" autoComplete="address-level2" inputProps={{ "aria-required": true }} />
                    <TextField
                      fullWidth select label="Number of Doctors" name="doctors" value={form.doctors} onChange={handleChange} size="medium"
                      SelectProps={{ native: true }}
                    >
                      {["1", "2–5", "6–15", "15+"].map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </TextField>
                    <TextField fullWidth label="Anything specific you'd like to see?" name="message" value={form.message} onChange={handleChange} size="medium" multiline rows={3} />
                    <Button
                      type="submit"
                      size="large"
                      disabled={!isValid}
                      startIcon={<WhatsApp />}
                      sx={{
                        mt: 0.5,
                        minHeight: 54,
                        bgcolor: color.whatsapp,
                        color: "#06371B",
                        fontSize: "1rem",
                        "&:hover": { bgcolor: color.whatsappHover },
                        "&.Mui-disabled": { bgcolor: color.slate200, color: color.slate500 },
                      }}
                    >
                      Send via WhatsApp
                    </Button>
                    <Typography sx={{ textAlign: "center", color: color.slate500, fontSize: "0.8rem" }}>
                      We'll reply within 2 hours during business hours (9 AM – 7 PM IST)
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box
                  role="status"
                  sx={{ bgcolor: color.successBg, borderRadius: `${radius.xl}px`, border: `1px solid ${color.successBorder}`, p: { xs: 4, md: 5 }, textAlign: "center", boxShadow: shadow.lg }}
                >
                  <CheckCircleRounded aria-hidden="true" sx={{ fontSize: 56, color: color.success, mb: 2 }} />
                  <Typography component="h2" sx={{ fontFamily: font.display, fontWeight: 800, fontSize: "1.375rem", color: "#14532D", mb: 1 }}>Demo Request Sent!</Typography>
                  <Typography sx={{ color: "#166534", fontSize: "0.975rem", lineHeight: 1.7, mb: 3.5 }}>
                    Your WhatsApp message is ready. Our team will confirm your demo time within 2 hours.
                  </Typography>
                  <CtaLink href="/" tone="primary">← Back to Home</CtaLink>
                </Box>
              )}
            </Box>

            {/* What you'll see */}
            <Box sx={{ pt: { md: 6 } }}>
              <Typography component="h2" sx={{ fontFamily: font.display, fontWeight: 800, fontSize: "1.375rem", color: color.ink2, mb: 2.5 }}>
                What You'll See in 20 Minutes
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexDirection: "column", gap: 1.5 }}>
                {WHAT_YOULL_SEE.map((item) => (
                  <Box component="li" key={item.text} sx={{ display: "flex", alignItems: "center", gap: 2, bgcolor: color.white, borderRadius: `${radius.md}px`, p: 2, border: `1px solid ${color.slate200}` }}>
                    <IconTile icon={item.icon} variant="violet" size={40} />
                    <Typography sx={{ color: color.slate700, fontSize: "0.95rem", lineHeight: 1.6 }}>{item.text}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Related pages */}
        <Box component="section" aria-labelledby="related-heading" sx={{ bgcolor: color.white, py: { xs: 7, md: 9 }, px: layout.gutter, textAlign: "center", borderTop: `1px solid ${color.slate200}` }}>
          <Typography id="related-heading" component="h2" sx={{ fontFamily: font.display, fontWeight: 800, fontSize: "1.25rem", color: color.ink2, mb: 3 }}>
            Learn more about ClinicFlow247
          </Typography>
          <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { href: "/clinic-management-software-india", label: "Clinic Management Software" },
              { href: "/doctor-appointment-software", label: "Appointment Software" },
              { href: "/electronic-prescription-software", label: "e-Prescription Software" },
            ].map((link) => (
              <li key={link.href}>
                <Link prefetch={false} href={link.href} passHref>
                  <Box
                    component="a"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: 44,
                      bgcolor: color.white,
                      border: `1px solid ${color.slate300}`,
                      borderRadius: 999,
                      px: 2.75,
                      fontFamily: font.display,
                      fontSize: "0.9rem",
                      color: color.violet800,
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "all 0.2s",
                      "&:hover": { borderColor: color.violet600, bgcolor: color.violet50 },
                      "&:focus-visible": focusRing,
                    }}
                  >
                    {link.label}
                  </Box>
                </Link>
              </li>
            ))}
          </Box>
        </Box>

      </main>

      <Footer legal={`© ${new Date().getFullYear()} Aurora Blossom. ClinicFlow247 is a product of Aurora Blossom, Hyderabad.`} />
    </>
  );
}
