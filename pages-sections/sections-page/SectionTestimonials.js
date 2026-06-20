import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import FormatQuote from "@mui/icons-material/FormatQuote";
import Star from "@mui/icons-material/Star";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import CardAvatar from "/components/Card/CardAvatar.js";
import Muted from "/components/Typography/Muted.js";
import Warning from "/components/Typography/Warning.js";

import testimonialsStyle from "/styles/jss/novel-logiks/pages/sectionsSections/testimonialsStyle.js";
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
const useStyles = makeStyles(testimonialsStyle);
// const useStyles = makeStyles(headersStyle);

export default function SectionTestimonials({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.sectionBlank} id="blanksection" />
      {/* HEADER 1 START */}
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: "url('/img/customer-testimonials.jpeg')" }}
        >
          <div
            className={
              classes.testimonials +
              " " +
              classes.sectionDark +
              " " +
              classes.testimonial2
            }
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={12}
                  md={12}
                  className={
                    classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                  }
                >
                  <h1 className={classes.title} style={{ color: "white" }}>What Clients Say</h1>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Carousel {...settings}>
                    <div>
                      <Card testimonial plain className={classes.card2}>
                        <CardAvatar testimonial plain>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img src="/img/faces/card-profile1-square.jpg" alt="..." />
                          </a>
                        </CardAvatar>
                        <CardBody plain>
                          <h5 className={classes.cardDescription}>
                            {'"'}I speak yell scream directly at the old guard on
                            behalf of the future. I gotta say at that time I’d like
                            to meet Vinod I speak yell scream directly at the old
                            guard on behalf of the future. My brother Chance!!!
                            <br />
                            Thank you for letting me work on this masterpiece. One
                            of my favorite people.{'"'}
                          </h5>
                          <h4 className={classes.cardTitle}>Rajesh Reddy</h4>
                          <Muted>
                            <h6>CEO @ Vishudha Tagline Traders Pvt Ltd.</h6>
                          </Muted>
                        </CardBody>
                        <div>
                          <Warning>
                            <Star className={classes.starIcons} />
                          </Warning>
                          <Warning>
                            <Star className={classes.starIcons} />
                          </Warning>
                          <Warning>
                            <Star className={classes.starIcons} />
                          </Warning>
                          <Warning>
                            <Star className={classes.starIcons} />
                          </Warning>
                          <Warning>
                            <Star className={classes.starIcons} />
                          </Warning>
                        </div>
                      </Card>
                    </div>
                    <div>
                      <Card testimonial plain className={classes.card2}>
                        <CardAvatar testimonial plain>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img src="/img/faces/card-profile1-square.jpg" alt="..." />
                          </a>
                        </CardAvatar>
                        <CardBody plain>
                          <h5 className={classes.cardDescription}>
                            {'"'}Thank you Vinod for the invite thank you to the
                            whole Vogue team Called I Miss the Old Vinod At the God
                            {"'"}s last game Chop up the soul Vinod. I promise I
                            will never let the people down. I want a better life for
                            all!!!! Thank you Vinod for the
                            invite thank you to the whole Aurora Blossom Tech team.{'"'}
                          </h5>
                          <h4 className={classes.cardTitle}>P V Rao</h4>
                          <Muted>
                            <h6>Finance Manager @ Vishudha Tagline Traders Pvt Ltd</h6>
                          </Muted>
                        </CardBody>
                        <div>
                          <Warning>
                            <Star className={classes.starIcons} />
                          </Warning>
                          <Warning>
                            <Star className={classes.starIcons} />
                          </Warning>
                          <Warning>
                            <Star className={classes.starIcons} />
                          </Warning>
                          <Warning>
                            <Star className={classes.starIcons} />
                          </Warning>
                        </div>
                      </Card>
                    </div>
                  </Carousel>
                </GridItem>
              </GridContainer>
            </div>
          </div>
      </div>
    </div>
  );
}
