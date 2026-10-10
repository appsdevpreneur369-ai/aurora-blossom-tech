import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { color, font, radius, shadow, motion } from "/styles/tokens.js";

/**
 * Job listing card. Labels are passed in by the caller so each page keeps its
 * existing wording (e.g. "Roles & Responsibilities" vs "Role & Responsibilities :").
 */
export default function JobCard({ title, titleLabel, meta, sections, action, headingComponent }) {
  return (
    <Box
      component="article"
      sx={{
        borderRadius: `${radius.lg}px`,
        border: `1px solid ${color.slate200}`,
        bgcolor: color.white,
        boxShadow: shadow.xs,
        overflow: "hidden",
        transition: `box-shadow ${motion.base} ${motion.ease}`,
        "&:hover": { boxShadow: shadow.md },
      }}
    >
      <Box
        sx={{
          px: { xs: 2.5, md: 3.5 },
          py: { xs: 2.5, md: 3 },
          borderBottom: `1px solid ${color.slate200}`,
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
          background: `linear-gradient(90deg, ${color.violet50} 0%, ${color.white} 100%)`,
        }}
      >
        <Typography
          component={headingComponent}
          sx={{ fontFamily: font.display, fontWeight: 800, fontSize: "1.125rem", color: color.ink2, m: 0 }}
        >
          {titleLabel && (
            <Box component="span" sx={{ fontWeight: 600, color: color.slate600, mr: 0.75 }}>
              {titleLabel}
            </Box>
          )}
          {title}
        </Typography>
        <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", gap: 1, flexWrap: "wrap" }}>
          {meta.map((m) => (
            <Box
              component="li"
              key={(m.label || "") + m.value}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                px: 1.25,
                py: 0.5,
                borderRadius: 999,
                bgcolor: color.white,
                border: `1px solid ${color.slate200}`,
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: color.slate700,
              }}
            >
              {m.Icon && <m.Icon aria-hidden="true" sx={{ fontSize: 16, color: color.violet600 }} />}
              {m.label && <span>{m.label}</span>}
              <span>{m.value}</span>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          px: { xs: 2.5, md: 3.5 },
          py: { xs: 2.5, md: 3 },
          display: "grid",
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: { xs: "1fr", md: `repeat(${sections.length}, 1fr)` },
        }}
      >
        {sections.map((section) => (
          <Box key={section.heading}>
            <Typography
              component="h4"
              sx={{
                fontFamily: font.display,
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: color.violet700,
                m: 0,
                mb: 1.5,
              }}
            >
              {section.heading}
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, display: "grid", gap: 1 }}>
              {section.items.filter(Boolean).map((item, i) => (
                <Box
                  key={i}
                  component="li"
                  sx={{ fontSize: "0.9rem", color: color.slate700, lineHeight: 1.7, "&::marker": { color: color.violet500 } }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {action && (
        <Box sx={{ px: { xs: 2.5, md: 3.5 }, pb: 3, display: "flex", justifyContent: "flex-end" }}>{action}</Box>
      )}
    </Box>
  );
}

JobCard.defaultProps = { headingComponent: "h3", meta: [] };

JobCard.propTypes = {
  title: PropTypes.node.isRequired,
  titleLabel: PropTypes.node,
  meta: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.node, value: PropTypes.node, Icon: PropTypes.elementType })
  ),
  sections: PropTypes.arrayOf(PropTypes.shape({ heading: PropTypes.node, items: PropTypes.array })).isRequired,
  action: PropTypes.node,
  headingComponent: PropTypes.elementType,
};
