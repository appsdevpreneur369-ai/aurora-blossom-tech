/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import makeStyles from '@mui/styles/makeStyles';
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import presentationStyle from "/styles/jss/novel-logiks/pages/presentationStyle.js";

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  // });
  const classes = useStyles();
  return (
    <div>
      <Header
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
      />
    </div>
  );
}
