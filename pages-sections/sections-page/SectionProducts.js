import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon       from "@mui/icons-material/ShoppingCartCheckout";
import AdminPanelSettingsIcon         from "@mui/icons-material/AdminPanelSettings";
import AnalyticsIcon                  from "@mui/icons-material/Analytics";
import LocalShippingIcon              from "@mui/icons-material/LocalShipping";
import QueryBuilderIcon               from "@mui/icons-material/QueryBuilder";
import Dashboard                      from "@mui/icons-material/Dashboard";
import LocalHospitalIcon              from "@mui/icons-material/LocalHospital";
import CalendarMonthIcon              from "@mui/icons-material/CalendarMonth";
import PeopleAltIcon                  from "@mui/icons-material/PeopleAlt";
import ReceiptLongIcon                from "@mui/icons-material/ReceiptLong";
import NotificationsActiveIcon        from "@mui/icons-material/NotificationsActive";
import LockPersonIcon                 from "@mui/icons-material/LockPerson";
import MonitorHeartIcon               from "@mui/icons-material/MonitorHeart";
import Section from "/components/ui/Section.js";
import SectionHeader from "/components/ui/SectionHeader.js";
import FeatureCard from "/components/ui/FeatureCard.js";
import { gridPattern } from "/components/ui/PageHero.js";
import { color, font, gradient, radius } from "/styles/tokens.js";

// ── Data ─────────────────────────────────────────────────────────────────────

const ECOMMERCE_FEATURES = [
  { icon: ShoppingCartCheckoutIcon, title: "E-Commerce Application",  desc: "Performant, SEO-optimised, and mobile-first from the ground up." },
  { icon: QueryBuilderIcon,         title: "Saves Time",               desc: "Customers order groceries and essentials from anywhere — seamless and instant." },
  { icon: LocalShippingIcon,        title: "Reliable Delivery",        desc: "On-time delivery with end-to-end order tracking and careful goods handling." },
  { icon: AdminPanelSettingsIcon,   title: "Admin Panel",              desc: "Manage all modules — products, users, orders, and more — from one place." },
  { icon: AnalyticsIcon,            title: "Analytics Integrated",     desc: "Track sales, conversions, and customer behaviour in real time." },
  { icon: Dashboard,                title: "Role-Based Dashboards",    desc: "Intuitive dashboards that surface the right data to the right person instantly." },
];

const CLINICFLOW_FEATURES = [
  { icon: CalendarMonthIcon,       title: "Smart Appointment Booking", desc: "Patients book, reschedule, or cancel 24/7 with real-time slot availability." },
  { icon: PeopleAltIcon,           title: "Multi-Role Access",         desc: "Separate dashboards for Super Admin, Clinic Admin, Doctors, and Patients." },
  { icon: ReceiptLongIcon,         title: "Prescriptions & Records",   desc: "Digital prescriptions and full medical history — including family member records." },
  { icon: NotificationsActiveIcon, title: "SMS & Email Alerts",        desc: "Automated reminders, booking confirmations, and cancellation alerts via MSG91 & email." },
  { icon: MonitorHeartIcon,        title: "Analytics Dashboard",       desc: "Real-time clinic analytics — appointments, revenue trends, doctor performance, and patient growth." },
  { icon: LockPersonIcon,          title: "Subscription & Billing",    desc: "Razorpay-powered plan tiers (Free → Enterprise) with automated invoicing." },
  { icon: LocalHospitalIcon,       title: "Queue Management",          desc: "Live walk-in queue with wait-time estimates and real-time doctor availability." },
];

// ── Shared feature grid ───────────────────────────────────────────────────────
function FeatureGrid({ features, iconVariant, columns }) {
  return (
    <Box
      component="ul"
      sx={{
        listStyle: "none",
        m: 0,
        p: 0,
        display: "grid",
        gap: { xs: 2, md: 2.5 },
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: `repeat(${columns}, 1fr)` },
      }}
    >
      {features.map((f) => (
        <li key={f.title}>
          <FeatureCard icon={f.icon} title={f.title} description={f.desc} headingComponent="h4" iconVariant={iconVariant} />
        </li>
      ))}
    </Box>
  );
}

// ── Single product block ──────────────────────────────────────────────────────
function ProductBlock({ number, chip, title, description, accent, features, imageContent, iconVariant, columns = 4 }) {
  return (
    <Box component="article" aria-label={title}>
      {/* Banner */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: `${radius.xl}px`,
          background: gradient.night,
          color: color.white,
          p: { xs: 3.5, sm: 5, md: 7 },
          mb: { xs: 3, md: 4 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
        }}
      >
        <Box aria-hidden="true" sx={gridPattern} />
        <Box sx={{ position: "relative" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
            <Typography
              sx={{ fontFamily: font.display, fontWeight: 800, fontSize: "0.85rem", color: accent, letterSpacing: "0.08em" }}
            >
              {number}
            </Typography>
            <Box aria-hidden="true" sx={{ width: 28, height: 1, bgcolor: "rgba(255,255,255,0.3)" }} />
            <Typography
              component="span"
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.2)",
                bgcolor: "rgba(255,255,255,0.08)",
                fontFamily: font.display,
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {chip}
            </Typography>
          </Box>
          <Typography
            variant="h3"
            component="h3"
            sx={{ fontFamily: font.display, fontWeight: 800, color: color.white, fontSize: { xs: "1.75rem", md: "2.25rem" }, lineHeight: 1.15, m: 0, mb: 2 }}
          >
            {title}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8, fontSize: "1.0625rem", maxWidth: 520 }}>
            {description}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            borderRadius: `${radius.lg}px`,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 30px 60px -24px rgba(0,0,0,0.6)",
            bgcolor: "rgba(255,255,255,0.06)",
          }}
        >
          {imageContent}
        </Box>
      </Box>

      {/* Features */}
      <FeatureGrid features={features} iconVariant={iconVariant} columns={columns} />
    </Box>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function SectionProducts({ ...rest }) {
  return (
    <Section id="products" className="cd-section" aria-labelledby="products-heading" {...rest}>
      <SectionHeader
        id="products-heading"
        title="Our Products"
        lead="We identified the target buyer, understood their pain points, and engineered a solution that genuinely works."
      />

      {/* ── Product 01 — E-Commerce Platform ── */}
      <ProductBlock
        number="01"
        chip="E-Commerce"
        title="E-Commerce Platform"
        description="A full-featured, production-grade e-commerce platform built for modern retail. Scalable architecture, real-time analytics, role-based access control, and a seamless shopping experience — all in one product."
        accent={color.violet300}
        iconVariant="violet"
        columns={3}
        features={ECOMMERCE_FEATURES}
        imageContent={
          <Box sx={{ position: "relative", aspectRatio: "16 / 10" }}>
            <Image
              src="/img/lsk_imgs/ecommerce.png"
              alt="E-Commerce Platform"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 900px) 100vw, 480px"
            />
          </Box>
        }
      />

      {/* Divider */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 3, my: { xs: 7, md: 10 } }}>
        <Box sx={{ flex: 1, height: "1px", bgcolor: color.slate200 }} />
        <Typography sx={{ color: color.slate500, fontSize: "0.75rem", fontFamily: font.display, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", textAlign: "center" }}>
          Also from Aurora Blossom
        </Typography>
        <Box sx={{ flex: 1, height: "1px", bgcolor: color.slate200 }} />
      </Box>

      {/* ── Product 02 — ClinicFlow247 ── */}
      <ProductBlock
        number="02"
        chip="Healthcare Tech"
        title="ClinicFlow247"
        description="A modern clinic management platform that connects clinics, doctors, and patients — 24/7. Online appointment booking, digital prescriptions, SMS reminders, live queue management, and built-in billing — all in one place."
        accent={color.teal400}
        iconVariant="teal"
        features={CLINICFLOW_FEATURES}
        imageContent={
          <Box
            sx={{
              aspectRatio: "16 / 10",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              p: 3,
              background: `radial-gradient(circle at 50% 35%, rgba(34,211,238,0.28) 0%, rgba(34,211,238,0) 60%), linear-gradient(160deg, ${color.teal700} 0%, #0B3B4A 100%)`,
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                width: 76,
                height: 76,
                borderRadius: "22px",
                bgcolor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <LocalHospitalIcon sx={{ fontSize: 40, color: color.white }} />
            </Box>
            <Typography sx={{ color: "#fff", fontFamily: font.display, fontWeight: 800, fontSize: "1.25rem" }}>
              ClinicFlow247
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", mt: 0.5 }}>
              Modern Clinic Management
            </Typography>
          </Box>
        }
      />
    </Section>
  );
}
