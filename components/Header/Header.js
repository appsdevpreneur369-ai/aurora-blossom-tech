import React from "react";
import Link from "next/link";
import classNames from "classnames";
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import styles from "/styles/jss/novel-logiks/components/headerStyle.js";
import Router from "next/router";
import { headerLinksData } from "../../data/header-links-data.js";

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const { color, links, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });

  return (
    <AppBar className={appBarClasses} style={{ backgroundColor: "white" }}>
      <Toolbar className={classes.container} style={{ marginRight: "auto" }}>
        {/* Desktop nav */}
        <Hidden mdDown implementation="css" className={classes.hidden}>
          <div className={classes.collapse}>{links}</div>
        </Hidden>

        {/* Mobile: logo + brand + hamburger */}
        <Hidden mdUp>
          <img
            src="/img/logo/aurora-blossom-logo.png"
            alt="Aurora Blossom logo"
            style={{ width: "2.25rem", height: "2.25rem", objectFit: "contain", marginRight: "0.5rem" }}
          />
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
            flex: 1,
          }}>
            Aurora Blossom
          </span>
          <IconButton
            color="inherit"
            aria-label="Open navigation menu"
            onClick={handleDrawerToggle}
            size="large"
          >
            <Menu style={{ color: "#4C1D95" }} />
          </IconButton>
        </Hidden>
      </Toolbar>

      {/* Mobile Drawer */}
      <Hidden mdUp implementation="js">
        <Drawer
          anchor="right"
          open={mobileOpen}
          classes={{ paper: classes.drawerPaper }}
          onClose={handleDrawerToggle}
        >
          {/* Drawer header */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1.25rem",
            borderBottom: "1px solid rgba(124,58,237,0.15)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <img
                src="/img/logo/aurora-blossom-logo.png"
                alt="Aurora Blossom"
                style={{ width: "2rem", height: "2rem", objectFit: "contain" }}
              />
              <span style={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 800,
                fontSize: "0.85rem",
                background: "linear-gradient(90deg, #4C1D95 0%, #0891B2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Aurora Blossom
              </span>
            </div>
            <IconButton
              aria-label="Close navigation menu"
              onClick={handleDrawerToggle}
              size="small"
            >
              <Close style={{ color: "#4C1D95" }} />
            </IconButton>
          </div>

          {/* Nav links — vertical list */}
          <nav aria-label="Mobile navigation" style={{ padding: "0.5rem 0" }}>
            {headerLinksData.links.map((link, i) => (
              <Link key={link.title} href={link.href} passHref>
                <a
                  onClick={handleDrawerToggle}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.875rem 1.5rem",
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "#1E293B",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    borderBottom: i < headerLinksData.links.length - 1
                      ? "1px solid rgba(0,0,0,0.06)"
                      : "none",
                    transition: "background 0.15s ease, color 0.15s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(124,58,237,0.06)";
                    e.currentTarget.style.color = "#7C3AED";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#1E293B";
                  }}
                >
                  {link.title}
                </a>
              </Link>
            ))}
          </nav>

          {/* Drawer footer CTA */}
          <div style={{ padding: "1.25rem 1.5rem", marginTop: "auto", borderTop: "1px solid rgba(124,58,237,0.15)" }}>
            <a
              href="mailto:contact@aurora-blossom.com"
              style={{
                display: "block",
                textAlign: "center",
                padding: "0.75rem",
                background: "linear-gradient(135deg, #7C3AED 0%, #0891B2 100%)",
                color: "white",
                borderRadius: "8px",
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              Get in Touch
            </a>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProps = {
  color: "white",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary", "info", "success", "warning", "danger",
    "transparent", "white", "rose", "dark",
  ]),
  links: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary", "info", "success", "warning", "danger",
      "transparent", "white", "rose", "dark",
    ]).isRequired,
  }),
};
