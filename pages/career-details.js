import React, { useMemo, useState } from "react";
import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material";
import SearchRounded from "@mui/icons-material/SearchRounded";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import SiteFooter from "/components/Footer/SiteFooter.js";
import PageHero from "/components/ui/PageHero.js";
import JobCard from "/components/Careers/JobCard.js";
import { careersData } from "../data/careers-data.js";
import { color, font, layout, radius, shadow } from "/styles/tokens.js";

const unique = (arr) => arr.filter((value, index, array) => array.indexOf(value) === index);

export default function CareerDetails() {
  const { careers } = careersData;

  const positions = useMemo(() => careers.map((each) => each.position), [careers]);
  const locations = useMemo(() => unique(careers.map((each) => each.location)), [careers]);
  const employmentTypes = useMemo(() => unique(careers.map((each) => each.employmentType)), [careers]);

  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedEmploymentType, setSelectedEmploymentType] = useState(null);
  const [searchResults, setSearchResults] = useState(null); // null = not searched yet

  const canSearch = Boolean(selectedPosition || selectedLocation || selectedEmploymentType);

  // Applies every selected filter (previously only the first non-empty one was used).
  const searchHandler = () => {
    setSearchResults(
      careers.filter(
        (c) =>
          (!selectedPosition || c.position === selectedPosition) &&
          (!selectedLocation || c.location === selectedLocation) &&
          (!selectedEmploymentType || c.employmentType === selectedEmploymentType)
      )
    );
  };

  return (
    <>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <main id="main-content">
        <PageHero title="Want to work with us?" titleSx={{ pb: { xs: 6, md: 8 } }} />

        <Box sx={{ bgcolor: color.slate50, pb: { xs: 9, md: 14 } }}>
          <Box sx={{ maxWidth: layout.maxWidth, mx: "auto", px: layout.gutter }}>
            {/* Search panel overlaps the hero */}
            <Box
              component="form"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                if (canSearch) searchHandler();
              }}
              sx={{
                position: "relative",
                mt: { xs: -6, md: -8 },
                p: { xs: 2.5, md: 3.5 },
                borderRadius: `${radius.xl}px`,
                bgcolor: color.white,
                border: `1px solid ${color.slate200}`,
                boxShadow: shadow.lg,
                display: "grid",
                gap: 2,
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr auto" },
                alignItems: "center",
              }}
            >
              <Autocomplete
                id="combo-box-position"
                options={positions}
                value={selectedPosition}
                onChange={(event, value) => setSelectedPosition(value)}
                renderInput={(params) => <TextField {...params} label="Positions" size="medium" />}
              />
              <Autocomplete
                id="combo-box-location"
                options={locations}
                value={selectedLocation}
                onChange={(event, value) => setSelectedLocation(value)}
                renderInput={(params) => <TextField {...params} label="Location" size="medium" />}
              />
              <Autocomplete
                id="combo-box-employment-type"
                options={employmentTypes}
                value={selectedEmploymentType}
                onChange={(event, value) => setSelectedEmploymentType(value)}
                renderInput={(params) => <TextField {...params} label="Employment Type" size="medium" />}
              />
              <Button type="submit" variant="contained" color="primary" size="large" disabled={!canSearch} startIcon={<SearchRounded />} sx={{ height: 56 }}>
                Search
              </Button>
            </Box>

            <Box aria-live="polite" sx={{ mt: { xs: 5, md: 7 } }}>
              {searchResults && searchResults.length > 0 && (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {searchResults.map((ser) => (
                    <JobCard
                      key={ser.position + ser.location}
                      headingComponent="h2"
                      titleLabel="Job Title :"
                      title={ser.position}
                      meta={[
                        { label: "Experience :", value: ser.experience },
                        { label: "Employment Type :", value: ser.employmentType },
                        { label: "Location:", value: ser.location },
                      ]}
                      sections={[
                        { heading: "Role & Responsibilities :", items: ser.rolesResponsibilities },
                        { heading: "Skillset :", items: ser.skillSet },
                      ]}
                    />
                  ))}
                </Box>
              )}
              {searchResults && searchResults.length === 0 && (
                <Box
                  sx={{
                    p: { xs: 4, md: 5 },
                    textAlign: "center",
                    borderRadius: `${radius.lg}px`,
                    bgcolor: color.white,
                    border: `1px dashed ${color.slate300}`,
                  }}
                >
                  <Typography sx={{ fontFamily: font.display, fontWeight: 700, fontSize: "1.25rem", color: color.ink2 }}>
                    No Positions Found.
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </main>
      <SiteFooter legal="All rights reserved by Aurora Blossom © 2025" />
    </>
  );
}
