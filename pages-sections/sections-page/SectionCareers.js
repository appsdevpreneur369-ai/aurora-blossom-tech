import React, { useState, useMemo } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CheckCircleOutlineRounded from "@mui/icons-material/CheckCircleOutlineRounded";
import { careersData } from "../../data/careers-data";
import Router from "next/router";
import Section from "/components/ui/Section.js";
import SectionHeader from "/components/ui/SectionHeader.js";
import JobCard from "/components/Careers/JobCard.js";
import { color, font, radius, shadow } from "/styles/tokens.js";

export default function SectionCareers({ ...rest }) {
  const { careers } = careersData;

  // ── Filter state ────────────────────────────────────────────────────────────
  const [selectedPosition, setSelectedPosition]           = useState(null);
  const [selectedLocation, setSelectedLocation]           = useState(null);
  const [selectedEmploymentType, setSelectedEmploymentType] = useState(null);
  const [searched, setSearched]                           = useState(false);

  // ── Derived filter options ──────────────────────────────────────────────────
  const positions      = useMemo(() => careers.map((c) => c.position), [careers]);
  const locations      = useMemo(() => [...new Set(careers.map((c) => c.location))], [careers]);
  const employmentTypes = useMemo(() => [...new Set(careers.map((c) => c.employmentType))], [careers]);

  // ── Search logic ────────────────────────────────────────────────────────────
  const searchResults = useMemo(() => {
    if (!searched) return [];
    return careers.filter((c) => {
      const matchPos  = !selectedPosition      || c.position       === selectedPosition;
      const matchLoc  = !selectedLocation      || c.location        === selectedLocation;
      const matchType = !selectedEmploymentType || c.employmentType === selectedEmploymentType;
      return matchPos && matchLoc && matchType;
    });
  }, [searched, selectedPosition, selectedLocation, selectedEmploymentType, careers]);

  const canSearch = selectedPosition || selectedLocation || selectedEmploymentType;

  const handleSearch = () => setSearched(true);
  const handleReset  = () => {
    setSelectedPosition(null);
    setSelectedLocation(null);
    setSelectedEmploymentType(null);
    setSearched(false);
  };

  return (
    <Section tone="tint" id="careers" className="cd-section" aria-labelledby="careers-heading" {...rest}>
      <SectionHeader id="careers-heading" title="Careers at Aurora Blossom" lead={careersData.points[0]} />

      {/* ── Company pitch + search panel ── */}
      <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 6 }}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              height: "100%",
              borderRadius: `${radius.lg}px`,
              p: { xs: 3, md: 4.5 },
              bgcolor: color.white,
              border: `1px solid ${color.slate200}`,
              boxShadow: shadow.xs,
            }}
          >
            <Typography sx={{ color: color.slate800, lineHeight: 1.85, mb: 2.5, fontSize: "1.0625rem" }}>
              {careersData.points[1]}
            </Typography>
            <Typography
              sx={{
                color: color.slate600,
                lineHeight: 1.8,
                fontStyle: "italic",
                pl: 2,
                borderLeft: `3px solid ${color.violet300}`,
              }}
            >
              {careersData.points[2]}
            </Typography>

            {/* Perks */}
            <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, mt: 3.5, display: "flex", gap: 1, flexWrap: "wrap" }}>
              {["Inclusive Culture", "Remote Friendly", "Growth Focused", "Innovation First"].map((p) => (
                <li key={p}>
                  <Chip
                    icon={<CheckCircleOutlineRounded aria-hidden="true" />}
                    label={p}
                    sx={{
                      bgcolor: color.violet50,
                      color: color.violet800,
                      border: `1px solid ${color.violet100}`,
                      fontSize: "0.8rem",
                      "& .MuiChip-icon": { color: color.violet600, fontSize: 18 },
                    }}
                  />
                </li>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box
            component="aside"
            aria-labelledby="careers-search-heading"
            sx={{
              height: "100%",
              borderRadius: `${radius.lg}px`,
              p: { xs: 3, md: 4 },
              bgcolor: color.white,
              border: `1px solid ${color.slate200}`,
              boxShadow: shadow.md,
            }}
          >
            <Typography
              id="careers-search-heading"
              component="h3"
              sx={{ fontFamily: font.display, fontWeight: 800, color: color.ink2, m: 0, mb: 3, fontSize: "1.125rem" }}
            >
              Find Your Role
            </Typography>

            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                if (canSearch) handleSearch();
              }}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Autocomplete
                id="careers-position"
                options={positions}
                value={selectedPosition}
                onChange={(_, v) => { setSelectedPosition(v); setSearched(false); }}
                renderInput={(params) => <TextField {...params} label="Position" size="medium" />}
              />
              <Autocomplete
                id="careers-location"
                options={locations}
                value={selectedLocation}
                onChange={(_, v) => { setSelectedLocation(v); setSearched(false); }}
                renderInput={(params) => <TextField {...params} label="Location" size="medium" />}
              />
              <Autocomplete
                id="careers-employment-type"
                options={employmentTypes}
                value={selectedEmploymentType}
                onChange={(_, v) => { setSelectedEmploymentType(v); setSearched(false); }}
                renderInput={(params) => <TextField {...params} label="Employment Type" size="medium" />}
              />

              <Box sx={{ display: "flex", gap: 1.5, mt: 0.5 }}>
                <Button type="submit" variant="contained" color="primary" size="large" fullWidth disabled={!canSearch}>
                  Search
                </Button>
                {searched && (
                  <Button type="button" variant="outlined" color="primary" size="large" onClick={handleReset}>
                    Reset
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* ── Search results ── */}
      <Box aria-live="polite">
        {searched && (
          searchResults.length === 0 ? (
            <Box
              sx={{
                borderRadius: `${radius.lg}px`,
                p: { xs: 4, md: 5 },
                textAlign: "center",
                bgcolor: color.white,
                border: `1px dashed ${color.slate300}`,
              }}
            >
              <Typography sx={{ color: color.ink2, fontFamily: font.display, fontWeight: 700, fontSize: "1.125rem" }}>
                No positions found matching your criteria.
              </Typography>
              <Typography sx={{ color: color.slate600, mt: 1 }}>
                Try broadening your search or{" "}
                <Box component="a" href="mailto:hr@aurora-blossom.com" sx={{ color: color.violet700, fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                  send us your résumé
                </Box>
                .
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography sx={{ color: color.slate600, fontWeight: 600 }}>
                {searchResults.length} position{searchResults.length !== 1 ? "s" : ""} found
              </Typography>
              {searchResults.map((job) => (
                <JobCard
                  key={job.position + job.location}
                  title={job.position}
                  meta={[
                    { value: job.location, Icon: LocationOnOutlinedIcon },
                    { value: job.employmentType, Icon: WorkOutlineIcon },
                    { value: job.experience, Icon: AccessTimeOutlinedIcon },
                  ]}
                  sections={[
                    { heading: "Roles & Responsibilities", items: job.rolesResponsibilities },
                    { heading: "Required Skill Set", items: job.skillSet },
                  ]}
                  action={
                    <Button variant="contained" color="primary" onClick={() => Router.push("/career-details")}>
                      Apply Now →
                    </Button>
                  }
                />
              ))}
            </Box>
          )
        )}
      </Box>
    </Section>
  );
}
