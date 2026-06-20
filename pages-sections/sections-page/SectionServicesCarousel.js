// SectionServicesCarousel is no longer used as the primary services display
// (SectionServices.js now renders a grid directly).
// Kept for backward-compatibility with any import that might still reference it.
import React from "react";
import Carousel from "react-slick";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import featuresStyle from "/styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";
import SectionServicesCarousalCard from "./SectionServicesCarousalCard";
import { services } from "../../data/services-data";

const useStyles = makeStyles(featuresStyle);

const SLIDE_GROUPS = [
  [0, 1, 2],
  [3, 4, 5],
];

const settings = {
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  pauseOnHover: true,
  accessibility: true,
};

export default function SectionServicesCarousel() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Carousel {...settings}>
        {SLIDE_GROUPS.map((group, gi) => (
          <div key={gi} aria-label={`Services slide ${gi + 1}`}>
            <GridContainer>
              {group.map((idx) =>
                idx < services.length ? (
                  <SectionServicesCarousalCard key={idx} index={idx} />
                ) : null
              )}
            </GridContainer>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
