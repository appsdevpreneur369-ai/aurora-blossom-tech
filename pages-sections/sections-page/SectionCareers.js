import React, { useEffect, useState, useMemo } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { careersData } from "../../data/careers-data";
import Router from "next/router";

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
    <section
      id="careers"
      className="cd-section"
      aria-labelledby="careers-heading"
      {...rest}
    >
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 6 }, maxWidth: 1200, mx: "auto" }}>

        {/* ── Section heading ── */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            id="careers-heading"
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
            Careers at Aurora Blossom
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 640, mx: "auto", fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            {careersData.points[0]}
          </Typography>
        </Box>

        {/* ── Company pitch + search panel ── */}
        <Grid container spacing={5} sx={{ mb: 6 }}>
          {/* Left: pitch copy */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                background: "linear-gradient(135deg, rgba(76,29,149,0.05) 0%, rgba(8,145,178,0.05) 100%)",
                border: "1px solid rgba(124,58,237,0.1)",
                height: "100%",
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "text.primary", lineHeight: 1.85, mb: 2.5, fontSize: "0.975rem" }}
              >
                {careersData.points[1]}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.8, fontStyle: "italic" }}
              >
                {careersData.points[2]}
              </Typography>

              {/* Perks */}
              <Box sx={{ mt: 3, display: "flex", gap: 1, flexWrap: "wrap" }}>
                {["Inclusive Culture", "Remote Friendly", "Growth Focused", "Innovation First"].map((p) => (
                  <Chip
                    key={p}
                    label={p}
                    size="small"
                    sx={{
                      bgcolor: "rgba(124,58,237,0.08)",
                      color: "#7C3AED",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      fontFamily: '"Montserrat", sans-serif',
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right: search controls */}
          <Grid item xs={12} md={5}>
            <Box
              component="aside"
              aria-label="Search open positions"
              sx={{
                borderRadius: 3,
                p: 3,
                border: "1px solid rgba(124,58,237,0.15)",
                bgcolor: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 700,
                  color: "#4C1D95",
                  mb: 2.5,
                  fontSize: "1rem",
                }}
              >
                Find Your Role
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Autocomplete
                  id="careers-position"
                  size="small"
                  options={positions}
                  value={selectedPosition}
                  onChange={(_, v) => { setSelectedPosition(v); setSearched(false); }}
                  renderInput={(params) => (
                    <TextField {...params} label="Position" variant="outlined" />
                  )}
                />
                <Autocomplete
                  id="careers-location"
                  size="small"
                  options={locations}
                  value={selectedLocation}
                  onChange={(_, v) => { setSelectedLocation(v); setSearched(false); }}
                  renderInput={(params) => (
                    <TextField {...params} label="Location" variant="outlined" />
                  )}
                />
                <Autocomplete
                  id="careers-employment-type"
                  size="small"
                  options={employmentTypes}
                  value={selectedEmploymentType}
                  onChange={(_, v) => { setSelectedEmploymentType(v); setSearched(false); }}
                  renderInput={(params) => (
                    <TextField {...params} label="Employment Type" variant="outlined" />
                  )}
                />

                <Box sx={{ display: "flex", gap: 1.5 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    disabled={!canSearch}
                    onClick={handleSearch}
                    sx={{
                      textTransform: "none",
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: 600,
                      borderRadius: 2,
                      py: 1.25,
                      background: "linear-gradient(135deg, #7C3AED 0%, #0891B2 100%)",
                      boxShadow: "0 4px 14px rgba(124,58,237,0.3)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #6D28D9 0%, #0E7490 100%)",
                        boxShadow: "0 6px 20px rgba(124,58,237,0.45)",
                      },
                      "&:disabled": { background: "#E2E8F0" },
                    }}
                  >
                    Search
                  </Button>
                  {searched && (
                    <Button
                      variant="outlined"
                      onClick={handleReset}
                      sx={{
                        textTransform: "none",
                        fontFamily: '"Montserrat", sans-serif',
                        borderRadius: 2,
                        py: 1.25,
                        borderColor: "rgba(124,58,237,0.4)",
                        color: "#7C3AED",
                        "&:hover": { borderColor: "#7C3AED", bgcolor: "rgba(124,58,237,0.04)" },
                      }}
                    >
                      Reset
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* ── Search results ── */}
        {searched && (
          <Box>
            {searchResults.length === 0 ? (
              <Paper
                sx={{
                  borderRadius: 3,
                  p: 5,
                  textAlign: "center",
                  border: "1px solid rgba(124,58,237,0.1)",
                }}
              >
                <Typography variant="h6" sx={{ color: "text.secondary", fontFamily: '"Montserrat", sans-serif' }}>
                  No positions found matching your criteria.
                </Typography>
                <Typography variant="body2" sx={{ color: "text.disabled", mt: 1 }}>
                  Try broadening your search or{" "}
                  <Box
                    component="a"
                    href="mailto:hr@aurora-blossom.com"
                    sx={{ color: "#7C3AED", fontWeight: 600 }}
                  >
                    send us your résumé
                  </Box>
                  .
                </Typography>
              </Paper>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {searchResults.length} position{searchResults.length !== 1 ? "s" : ""} found
                </Typography>
                {searchResults.map((job, idx) => (
                  <Paper
                    key={idx}
                    sx={{
                      borderRadius: 3,
                      border: "1px solid rgba(124,58,237,0.1)",
                      overflow: "hidden",
                      transition: "box-shadow 0.2s ease",
                      "&:hover": { boxShadow: "0 8px 30px rgba(124,58,237,0.12)" },
                    }}
                  >
                    {/* Card header */}
                    <Box
                      sx={{
                        px: 3,
                        py: 2.5,
                        background: "linear-gradient(135deg, rgba(76,29,149,0.06) 0%, rgba(8,145,178,0.06) 100%)",
                        borderBottom: "1px solid rgba(124,58,237,0.08)",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.5,
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: "#4C1D95", fontSize: "1rem" }}
                      >
                        {job.position}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        <Chip
                          icon={<LocationOnOutlinedIcon sx={{ fontSize: "0.85rem !important" }} />}
                          label={job.location}
                          size="small"
                          sx={{ bgcolor: "rgba(8,145,178,0.08)", color: "#0891B2", fontWeight: 600 }}
                        />
                        <Chip
                          icon={<WorkOutlineIcon sx={{ fontSize: "0.85rem !important" }} />}
                          label={job.employmentType}
                          size="small"
                          sx={{ bgcolor: "rgba(124,58,237,0.08)", color: "#7C3AED", fontWeight: 600 }}
                        />
                        <Chip
                          icon={<AccessTimeOutlinedIcon sx={{ fontSize: "0.85rem !important" }} />}
                          label={job.experience}
                          size="small"
                          sx={{ bgcolor: "rgba(5,150,105,0.08)", color: "#059669", fontWeight: 600 }}
                        />
                      </Box>
                    </Box>

                    {/* Card body */}
                    <Box sx={{ px: 3, py: 2.5 }}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <Typography
                            variant="subtitle2"
                            sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: "#4C1D95", mb: 1, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.04em" }}
                          >
                            Roles & Responsibilities
                          </Typography>
                          <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                            {job.rolesResponsibilities.filter(Boolean).map((r, i) => (
                              <Box
                                key={i}
                                component="li"
                                sx={{ fontSize: "0.82rem", color: "text.secondary", lineHeight: 1.7, mb: 0.5 }}
                              >
                                {r}
                              </Box>
                            ))}
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Typography
                            variant="subtitle2"
                            sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: "#0891B2", mb: 1, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.04em" }}
                          >
                            Required Skill Set
                          </Typography>
                          <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                            {job.skillSet.filter(Boolean).map((s, i) => (
                              <Box
                                key={i}
                                component="li"
                                sx={{ fontSize: "0.82rem", color: "text.secondary", lineHeight: 1.7, mb: 0.5 }}
                              >
                                {s}
                              </Box>
                            ))}
                          </Box>
                        </Grid>
                      </Grid>

                      <Box sx={{ mt: 2.5, display: "flex", justifyContent: "flex-end" }}>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => Router.push("/career-details")}
                          sx={{
                            textTransform: "none",
                            fontFamily: '"Montserrat", sans-serif',
                            fontWeight: 600,
                            borderRadius: 2,
                            background: "linear-gradient(135deg, #7C3AED 0%, #0891B2 100%)",
                            boxShadow: "0 3px 10px rgba(124,58,237,0.25)",
                            "&:hover": { background: "linear-gradient(135deg, #6D28D9 0%, #0E7490 100%)" },
                          }}
                        >
                          Apply Now →
                        </Button>
                      </Box>
                    </Box>
                  </Paper>
                ))}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </section>
  );
}
