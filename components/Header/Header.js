import React , {useState} from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
// @mui/icons-material
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
// core components
import styles from "/styles/jss/novel-logiks/components/headerStyle.js";
import { Button, Typography } from "@mui/material";
// import Button from "/components/CustomButtons/Button.js";
import Router from "next/router";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const routeToContactUs = () => {
    Router.push("/sections#contactUs");
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;

    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, links, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  return (
    <AppBar className={appBarClasses} style={{ backgroundColor: "white" }}>
      <Toolbar className={classes.container} style={{ marginRight: 'auto' }}>
        <Hidden mdDown implementation="css" className={classes.hidden}>
          <div className={classes.collapse}>{links} 
          </div>
        </Hidden>
        <Hidden mdUp>
          <img src="/img/logo/aurora-blossom-logo.png" alt="Aurora Blossom Tech logo" style={{ width: "2.25rem", height: "2.25rem", objectFit: "contain", marginRight: "0.5rem" }} />
        </Hidden>
        <Hidden mdUp>
          <span style={{
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 800,
            fontSize: "0.9rem",
            letterSpacing: "0.02em",
            background: "linear-gradient(90deg, #4C1D95 0%, #0891B2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            whiteSpace: "nowrap",
          }}>
            Aurora Blossom Tech
          </span>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="Open navigation menu"
            onClick={handleDrawerToggle}
            size="large"
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          anchor={"top"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="Close navigation menu"
            onClick={handleDrawerToggle}
            className={classes.closeButtonDrawer}
            size="large">
            <Close />
          </IconButton>
          <div className={classes.appResponsive}>{links}</div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  links: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};
