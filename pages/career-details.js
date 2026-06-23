/*eslint-disable*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import makeStyles from "@mui/styles/makeStyles";
// @mui/icons-material
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Autocomplete, Divider,  Paper, TextField, Typography } from "@mui/material";
import { careersData } from "../data/careers-data.js";
import Footer from "/components/Footer/Footer.js";
import Button from "/components/CustomButtons/Button.js";
const useStyles = makeStyles(headersStyle);

export default function CareerDetails() {
  const classes = useStyles();
  const {careers} = careersData;
  const [positions, setPositions] =
    useState(() => []);

  const [locations, setLocations] =
    useState(() => []);

  const [employmentTypes, setEmploymentTypes] =
    useState(() => []);

  const [searchResults, setSearchResults] =
    useState(() => []);

  const [selectedPosition, setSelectedPosition] =
    useState(() => null);
  const [selectedEmploymentType, setSelectedEmploymentType] =
    useState(() => null);
  const [selectedLocation, setSelectedLocation] =
    useState(() => null);
  const [enableSearch, setEnableSearch] =
    useState(() => true);
  let filteredCareers = [];
  useEffect(() => {
    if (careers && careers.length > 0) {
      setPositions(() => careers.map(each => each.position));
      const tempLocs = careers.map(each => each.location);
      const tempEmploymentTypes = careers.map(each => each.employmentType);
      setLocations(() => tempLocs.filter((value, index, array) => array.indexOf(value) === index));
      setEmploymentTypes(() => tempEmploymentTypes.filter((value, index, array) => array.indexOf(value) === index));
    }
  }, []);

  const searchHandler = () => {
    if (selectedPosition && selectedPosition.length > 0) {
      filteredCareers = careers.filter((value, index, array) => value['position'] === selectedPosition);
      setSearchResults(() => filteredCareers);
    } else if (selectedLocation && selectedLocation.length > 0) {
      if (filteredCareers && filteredCareers.length > 0) {
        filteredCareers = filteredCareers.filter((value, index, array) => value.location === selectedLocation);
      } else {
        filteredCareers = careers.filter((value, index, array) => value.location === selectedLocation);
      }
      setSearchResults(() => filteredCareers);
    } else if (selectedEmploymentType && selectedEmploymentType.length > 0) {
      if (filteredCareers && filteredCareers.length > 0) {
        filteredCareers = filteredCareers.filter((value, index, array) => value.employmentType === selectedEmploymentType);
      } else {
        filteredCareers = careers.filter((value, index, array) => value.employmentType === selectedEmploymentType);
      }
      setSearchResults(() => filteredCareers);
    }
  }

  const renderCareerResults = () => {
    return (<div style = {{
      overflowY: 'scroll',
      height: '600px', minHeight: '600px'}}>
      <Paper sx={{ borderRadius: '10px', width: '90%', textAlign: "left", marginLeft: "auto", marginRight: "auto" }} >
        {searchResults && searchResults.length > 0 ? searchResults.map(ser => {
          return <div>
            {/* <div xs={12} > */}
            <GridContainer style={{ marginTop: "2rem" }}>
              <GridItem xs={12} sm={12} md={12}>
                <Typography style={{ color: "black", fontSize: "1rem", fontWeight: "550", fontFamily: 'Montserrat', marginLeft: "2em", marginTop: "3em" }}>
                  Job Title : {ser && ser.position}
                </Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Typography component="div" style={{ color: "black", fontSize: "1rem", fontWeight: "550", fontFamily: 'Montserrat', marginLeft: "2em" }}>
                  Experience : {ser && ser.experience}
                </Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Typography component="div" style={{ color: "black", fontSize: "1rem", fontWeight: "550", fontFamily: 'Montserrat', marginLeft: "2em" }}>
                  Employment Type : {ser && ser.employmentType}
                </Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Typography component="div" style={{ color: "black", fontSize: "1rem", fontWeight: "550", fontFamily: 'Montserrat', marginLeft: "2em" }}>
                  Location: {ser && ser.location}
                </Typography>
              </GridItem>

            </GridContainer>
            <Typography component="div" style={{ color: "black", fontSize: "1rem", fontWeight: "550", fontFamily: 'Montserrat', marginLeft: "2em" }}>
              Role & Responsibilities :
            </Typography><br /> {ser.rolesResponsibilities.map((r, indx) => { 
              return (
                <ul key={indx}>
                  <li><Typography component="div" style={{ color: "black", fontSize: "0.85rem", fontFamily: 'Montserrat', marginLeft: "3em" }}>{r}</Typography></li>
                </ul>)
            }
            )
            }
            <br />
            <GridItem xs={12} sm={12} md={12}>
              <Typography component="div" style={{ color: "black", fontSize: "1rem", fontWeight: "550", fontFamily: 'Montserrat', marginLeft: "2em" }}>
                Skillset :</Typography>  <br />  {ser.skillSet.map((r, indx) => {
                  return (
                    <ul key={indx}>
                      <li><Typography component="div" style={{ color: "black", fontSize: "0.85rem", fontFamily: 'Montserrat', marginLeft: "3em" }}>{r}</Typography></li>
                    </ul>)
                }
                )
              }
              {/* <Divider /> */}
            </GridItem>
          </div>
        }) : null}
      </Paper>
      </div>
    )
  }

  const renderNoDataFound = () => {
    return (
      <Paper sx={{ borderRadius: '10px', width: '90%', textAlign: "center", marginLeft: "auto", marginRight: "auto", marginTop: "2em", height: "5em" }} >
        <Typography variant="h6" component="div" style={{ color: "black", fontSize: "1.25rem", lineHeight: '1em', fontFamily: '"Montserrat"' }}>
          No Positions Found.
        </Typography>
      </Paper>
    )
  }
  return (
    <React.Fragment style= {{ backgroundColor:"#FFFFFF"}}>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <div style={{ marginTop: "5em" ,backgroundColor:"#FFFFFF"}}>
        <Paper sx={{ borderRadius: '10px', width: '90%', marginLeft: "auto", textAlign: 'center', justifyContent: 'center', alignItems: 'center', marginRight: "auto" }} >
          <GridItem item xs={12} style={{ marginTop: "5em" , marginBottom: "3em", textAlign: 'center', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
            <Typography style={{ color: "black", fontSize: "2.25rem", fontFamily: 'Montserrat', marginTop: "5em"  }}>
              Want to work with us?
            </Typography>
          </GridItem>
          <GridContainer spacing={2} >
            <GridItem item xs={12} sm={4} md={4} style={{ marginLeft: "auto", marginRight: "auto", gap: "0.5em" }} sx={{
              marginLeft: {
                lg: 'auto',
                md: 'auto',
                sm: 'auto',
                xs: '3em'
              }
            }}>
              <Autocomplete
                disablePortal
                size="small"
                id="combo-box-position"
                style={{ textAlign: "left" }}
                options={positions}
                value={selectedPosition}
                onChange={(event, value) => {
                  setSelectedPosition(value);
                  setEnableSearch(() => false);
                }}
                renderInput={(params) => <TextField {...params} label="Positions" />}
              />
            </GridItem>
            <GridItem item xs={12} sm={4} md={4} style={{ marginLeft: "auto", marginRight: "auto", gap: "0.5em" }}>
              <Autocomplete
                disablePortal
                size="small"
                id="combo-box-location"
                options={locations}
                style={{ textAlign: "left" }}
                value={selectedLocation}
                onChange={(event, value) => {
                  setSelectedLocation(value);
                  setEnableSearch(() => false);
                  return;
                }}
                renderInput={(params) => <TextField {...params} label="Location" />}
              />
            </GridItem>
            <GridItem item xs={12} sm={4} md={4} style={{ marginLeft: "auto", marginRight: "auto", gap: "0.5em" }}>
              <Autocomplete
                disablePortal
                size="small"
                id="combo-box-employment-type"
                options={employmentTypes}
                style={{ textAlign: "left" }}
                sx={{ margintop: "0.25em" }}
                value={selectedEmploymentType}
                onChange={(event, value) => {
                  setSelectedEmploymentType(value);
                  setEnableSearch(() => false);
                  return;
                }}
                renderInput={(params) => <TextField {...params} label="Employment Type" />}
              />
            </GridItem>
            <GridItem item xs={12} style={{ marginTop: "2em", marginBottom: "2em", marginLeft: "auto", marginRight: "auto", alignItems: "center", justifyContent: "center" }}>
              <Button 
                variant="contained"
                type="submit"
                sx={{
                  textTransform: "none",
                  borderRadius: "5px",
                  fontSize: "1.25rem",
                  height: "2.5rem",
                  fontWeight: 600,
                  width: { lg: "10rem", xs: "12.5rem" },
                  background: "linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  // '&:hover': {
                  //   background: "linear-gradient(135deg, #F4D03F 10%, #16A085 90%)",
                  //   boxShadow: "0 6px 15px rgba(0, 0, 0, 0.25)",
                  // }
                  
                }}
                disabled={enableSearch ? true : false}
                onClick={searchHandler}
              >
                Search
              </Button>
            </GridItem>
          </GridContainer>
        </Paper>
        {searchResults && searchResults.length !== 0 && (renderCareerResults())}
        {!searchResults && (selectedPosition !== null || selectedLocation !== null || selectedEmploymentType !== null) && (renderNoDataFound())}
        <Footer
        className={classes.footer}
        content={
          <div>
            <div className={classes.left}>
              <Button
                href=""
                target="_blank"
                color="twitter"
                justIcon
                simple
              >
                <i className="fab fa-twitter" />
              </Button>
              <Button
                href="https://instagram.com/aurorablossomtech"
                target="_blank"
                color="instagram"
                justIcon
                simple
              >
                <i className="fab fa-instagram" />
              </Button>
              <Button href="https://www.facebook.com/aurorablossomtech"
                justIcon simple color="facebook">
                <i className="fab fa-facebook-square" />
              </Button>
            </div>
            <div className={classes.right}>
              <a
                href="  "
                target="_blank"
                style={{ color: "gray" }}
              >
                All rights reserved by Aurora Blossom © 2025
              </a>{" "}
            </div>
          </div>
        }
      />
      </div>
    </React.Fragment>
  );
}
