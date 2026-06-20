import React from "react";
import { Box, Grid, Typography, Chip } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TuneIcon from "@mui/icons-material/Tune";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Dashboard from "@mui/icons-material/Dashboard";

// Aurora Blossom brand feature highlights for the e-commerce product showcase
const FEATURES = [
  {
    icon: ShoppingCartCheckoutIcon,
    title: "E-Commerce Application",
    desc: "Built with a modern tech stack — performant, SEO-optimised, and mobile-first from the ground up.",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.07)",
  },
  {
    icon: QueryBuilderIcon,
    title: "Saves Time",
    desc: "Customers order groceries and essentials from anywhere — relaxed, seamless, instant.",
    color: "#0891B2",
    bg: "rgba(8,145,178,0.07)",
  },
  {
    icon: LocalShippingIcon,
    title: "Reliable Delivery",
    desc: "On-time delivery with end-to-end order tracking and careful goods handling.",
    color: "#059669",
    bg: "rgba(5,150,105,0.07)",
  },
  {
    icon: AdminPanelSettingsIcon,
    title: "Admin Panel",
    desc: "Comprehensive admin panel to manage all modules — products, users, orders, and more.",
    color: "#BE185D",
    bg: "rgba(190,24,93,0.07)",
  },
  {
    icon: AnalyticsIcon,
    title: "Analytics Integrated",
    desc: "Fully integrated analytics to track sales, conversions, and customer behaviour in real time.",
    color: "#D97706",
    bg: "rgba(217,119,6,0.07)",
  },
  {
    icon: Dashboard,
    title: "Role-Based Dashboards",
    desc: "Intuitive, role-aware dashboards that surface the right data to the right person instantly.",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.07)",
  },
  {
    icon: TuneIcon,
    title: "Fully Configurable",
    desc: "Configure categories, sub-categories, products, pricing, discounts, and tax rules with ease.",
    color: "#0891B2",
    bg: "rgba(8,145,178,0.07)",
  },
];

export default function SectionProducts({ ...rest }) {
  return (
    <section
      id="products"
      className="cd-section"
      aria-labelledby="products-heading"
      {...rest}
    >
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* Section header */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            id="products-heading"
            variant="h2"
            component="h2"
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 800,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              backgroundImage: "linear-gradient(135deg, #4C1D95 0%, #0891B2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              mb: 2,
            }}
          >
            Our Products
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto", fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            We identified the target buyer, understood their pain points, and engineered
            a solution that genuinely works.
          </Typography>
        </Box>

        {/* Product spotlight — full-width banner */}
        <Box
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            mb: 6,
            background: "linear-gradient(135deg, #1E1B4B 0%, #4C1D95 50%, #0891B2 100%)",
            p: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Chip
              label="Featured Product"
              size="small"
              sx={{
                mb: 2,
                bgcolor: "rgba(255,255,255,0.15)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
              }}
            />
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 800,
                color: "#fff",
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 2,
                lineHeight: 1.25,
              }}
            >
              Vishudha E-Commerce Platform
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8, maxWidth: 480 }}
            >
              A full-featured, production-grade e-commerce platform built for modern retail.
              Scalable architecture, real-time analytics, role-based access control, and a
              seamless shopping experience — all in one product.
            </Typography>
          </Box>
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: "100%", md: 320 },
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            <img
              src="/img/lsk_imgs/ecommerce.png"
              alt="Vishudha E-Commerce Platform"
              loading="lazy"
              style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
            />
          </Box>
        </Box>

        {/* Feature grid */}
        <Grid container spacing={3}>
          {FEATURES.map((f) => (
            <Grid key={f.title} item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  background: f.bg,
                  border: `1px solid ${f.color}22`,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: `0 10px 30px ${f.color}22`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    bgcolor: `${f.color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <f.icon sx={{ color: f.color, fontSize: "1.4rem" }} aria-hidden="true" />
                </Box>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: f.color,
                    mb: 1,
                  }}
                >
                  {f.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7, fontSize: "0.85rem" }}>
                  {f.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
}
