import React from "react";
import { Box, Grid, Typography, Chip } from "@mui/material";
import ShoppingCartCheckoutIcon       from "@mui/icons-material/ShoppingCartCheckout";
import AdminPanelSettingsIcon         from "@mui/icons-material/AdminPanelSettings";
import AnalyticsIcon                  from "@mui/icons-material/Analytics";
import LocalShippingIcon              from "@mui/icons-material/LocalShipping";
import TuneIcon                       from "@mui/icons-material/Tune";
import QueryBuilderIcon               from "@mui/icons-material/QueryBuilder";
import Dashboard                      from "@mui/icons-material/Dashboard";
import LocalHospitalIcon              from "@mui/icons-material/LocalHospital";
import CalendarMonthIcon              from "@mui/icons-material/CalendarMonth";
import PeopleAltIcon                  from "@mui/icons-material/PeopleAlt";
import ReceiptLongIcon                from "@mui/icons-material/ReceiptLong";
import NotificationsActiveIcon        from "@mui/icons-material/NotificationsActive";
import LockPersonIcon                 from "@mui/icons-material/LockPerson";
import MonitorHeartIcon               from "@mui/icons-material/MonitorHeart";

// ── Data ─────────────────────────────────────────────────────────────────────

const ECOMMERCE_FEATURES = [
  { icon: ShoppingCartCheckoutIcon, title: "E-Commerce Application",  desc: "Performant, SEO-optimised, and mobile-first from the ground up.",                                              color: "#7C3AED", bg: "rgba(124,58,237,0.07)" },
  { icon: QueryBuilderIcon,         title: "Saves Time",               desc: "Customers order groceries and essentials from anywhere — seamless and instant.",                                color: "#0891B2", bg: "rgba(8,145,178,0.07)"  },
  { icon: LocalShippingIcon,        title: "Reliable Delivery",        desc: "On-time delivery with end-to-end order tracking and careful goods handling.",                                   color: "#059669", bg: "rgba(5,150,105,0.07)"  },
  { icon: AdminPanelSettingsIcon,   title: "Admin Panel",              desc: "Manage all modules — products, users, orders, and more — from one place.",                                     color: "#BE185D", bg: "rgba(190,24,93,0.07)"  },
  { icon: AnalyticsIcon,            title: "Analytics Integrated",     desc: "Track sales, conversions, and customer behaviour in real time.",                                                color: "#D97706", bg: "rgba(217,119,6,0.07)"  },
  { icon: Dashboard,                title: "Role-Based Dashboards",    desc: "Intuitive dashboards that surface the right data to the right person instantly.",                               color: "#7C3AED", bg: "rgba(124,58,237,0.07)" },
  { icon: TuneIcon,                 title: "Fully Configurable",       desc: "Configure categories, products, pricing, discounts, and tax rules with ease.",                                  color: "#0891B2", bg: "rgba(8,145,178,0.07)"  },
];

const CLINICFLOW_FEATURES = [
  { icon: CalendarMonthIcon,       title: "Smart Appointment Booking", desc: "Patients book, reschedule, or cancel 24/7 with real-time slot availability.",                                  color: "#7C3AED", bg: "rgba(124,58,237,0.07)" },
  { icon: PeopleAltIcon,           title: "Multi-Role Access",         desc: "Separate dashboards for Super Admin, Clinic Admin, Doctors, and Patients.",                                    color: "#0891B2", bg: "rgba(8,145,178,0.07)"  },
  { icon: ReceiptLongIcon,         title: "Prescriptions & Records",   desc: "Digital prescriptions and full medical history — including family member records.",                            color: "#059669", bg: "rgba(5,150,105,0.07)"  },
  { icon: NotificationsActiveIcon, title: "SMS & Email Alerts",        desc: "Automated reminders, booking confirmations, and cancellation alerts via MSG91 & email.",                       color: "#BE185D", bg: "rgba(190,24,93,0.07)"  },
  { icon: MonitorHeartIcon,        title: "Analytics Dashboard",       desc: "Real-time clinic analytics — appointments, revenue trends, doctor performance, and patient growth.",            color: "#D97706", bg: "rgba(217,119,6,0.07)"  },
  { icon: LockPersonIcon,          title: "Subscription & Billing",    desc: "Razorpay-powered plan tiers (Free → Enterprise) with automated invoicing.",                                   color: "#7C3AED", bg: "rgba(124,58,237,0.07)" },
  { icon: LocalHospitalIcon,       title: "Queue Management",          desc: "Live walk-in queue with wait-time estimates and real-time doctor availability.",                               color: "#0891B2", bg: "rgba(8,145,178,0.07)"  },
];

// ── Shared feature grid ───────────────────────────────────────────────────────
function FeatureGrid({ features }) {
  return (
    <Grid container spacing={3} sx={{ mt: 0 }}>
      {features.map((f) => (
        <Grid key={f.title} item xs={12} sm={6} md={4}>
          <Box
            sx={{
              p: 3, borderRadius: 3, height: "100%",
              background: f.bg, border: `1px solid ${f.color}22`,
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": { transform: "translateY(-3px)", boxShadow: `0 10px 30px ${f.color}22` },
            }}
          >
            <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: `${f.color}18`, display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
              <f.icon sx={{ color: f.color, fontSize: "1.4rem" }} aria-hidden="true" />
            </Box>
            <Typography variant="h6" component="h4" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: f.color, mb: 1 }}>
              {f.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7, fontSize: "0.85rem" }}>
              {f.desc}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

// ── Single product block ──────────────────────────────────────────────────────
function ProductBlock({ number, chip, title, description, gradient, accentColor, icon: Icon, features, imageContent }) {
  return (
    <Box sx={{ mb: { xs: 10, md: 14 }, "&:last-child": { mb: 0 } }}>
      {/* Number label */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        <Box
          sx={{
            width: 48, height: 48, borderRadius: "50%",
            background: gradient,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Typography sx={{ color: "#fff", fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: "1rem" }}>
            {number}
          </Typography>
        </Box>
        <Box sx={{ height: 1, flex: 1, background: `linear-gradient(90deg, ${accentColor}40 0%, transparent 100%)` }} />
      </Box>

      {/* Banner */}
      <Box
        sx={{
          borderRadius: 4, overflow: "hidden", mb: 5,
          background: gradient,
          p: { xs: 4, md: 6 },
          display: "flex", flexDirection: { xs: "column", md: "row" },
          alignItems: "center", gap: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Chip
            label={chip}
            size="small"
            sx={{ mb: 2, bgcolor: "rgba(255,255,255,0.18)", color: "#fff", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.08em" }}
          />
          <Typography
            variant="h3" component="h3"
            sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: "#fff", fontSize: { xs: "1.5rem", md: "2rem" }, mb: 2, lineHeight: 1.25 }}
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.8, maxWidth: 480 }}>
            {description}
          </Typography>
        </Box>
        <Box
          sx={{
            flexShrink: 0, width: { xs: "100%", md: 280 },
            borderRadius: 3, overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            bgcolor: "rgba(255,255,255,0.10)",
            display: "flex", alignItems: "center", justifyContent: "center",
            minHeight: 180,
          }}
        >
          {imageContent}
        </Box>
      </Box>

      {/* Features */}
      <FeatureGrid features={features} />
    </Box>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function SectionProducts({ ...rest }) {
  return (
    <section id="products" className="cd-section" aria-labelledby="products-heading" {...rest}>
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 6 }, maxWidth: 1200, mx: "auto" }}>

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <Typography
            id="products-heading" variant="h2" component="h2"
            sx={{
              fontFamily: '"Montserrat", sans-serif', fontWeight: 800,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              backgroundImage: "linear-gradient(135deg, #4C1D95 0%, #0891B2 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              mb: 2,
            }}
          >
            Our Products
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 600, mx: "auto", fontSize: "1.05rem", lineHeight: 1.8 }}>
            We identified the target buyer, understood their pain points, and engineered a solution that genuinely works.
          </Typography>
        </Box>

        {/* ── Product 01 — E-Commerce Platform ── */}
        <ProductBlock
          number="01"
          chip="E-Commerce"
          title="E-Commerce Platform"
          description="A full-featured, production-grade e-commerce platform built for modern retail. Scalable architecture, real-time analytics, role-based access control, and a seamless shopping experience — all in one product."
          gradient="linear-gradient(135deg, #1E1B4B 0%, #4C1D95 50%, #0891B2 100%)"
          accentColor="#7C3AED"
          features={ECOMMERCE_FEATURES}
          imageContent={
            <img
              src="/img/lsk_imgs/ecommerce.png"
              alt="E-Commerce Platform"
              loading="lazy"
              style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }}
            />
          }
        />

        {/* Divider */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, my: { xs: 6, md: 8 } }}>
          <Box sx={{ flex: 1, height: 1, bgcolor: "rgba(0,0,0,0.08)" }} />
          <Typography sx={{ color: "text.disabled", fontSize: "0.75rem", fontFamily: '"Montserrat", sans-serif', fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Also from Aurora Blossom
          </Typography>
          <Box sx={{ flex: 1, height: 1, bgcolor: "rgba(0,0,0,0.08)" }} />
        </Box>

        {/* ── Product 02 — ClinicFlow247 ── */}
        <ProductBlock
          number="02"
          chip="Healthcare Tech"
          title="ClinicFlow247"
          description="A modern clinic management platform that connects clinics, doctors, and patients — 24/7. Online appointment booking, digital prescriptions, SMS reminders, live queue management, and built-in billing — all in one place."
          gradient="linear-gradient(135deg, #064E3B 0%, #065F46 50%, #0891B2 100%)"
          accentColor="#059669"
          features={CLINICFLOW_FEATURES}
          imageContent={
            <Box sx={{ textAlign: "center", p: 3 }}>
              <LocalHospitalIcon sx={{ fontSize: 56, color: "rgba(255,255,255,0.9)", mb: 1 }} />
              <Typography sx={{ color: "#fff", fontFamily: '"Montserrat", sans-serif', fontWeight: 800, fontSize: "1rem" }}>
                ClinicFlow247
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", mt: 0.5 }}>
                Modern Clinic Management
              </Typography>
            </Box>
          }
        />

      </Box>
    </section>
  );
}
