import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

// Inline styles (same values as the former JSS) keep the legacy @mui/styles
// runtime out of the _app bundle that every page loads.
const styles = {
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: 9999,
    top: 0,
  },
  iconWrapper: { display: "block" },
  title: {
    color: "#FFF",
    textDecoration: "none",
    fontWeight: 700,
    marginTop: "30px",
    marginBottom: "25px",
    minHeight: "32px",
    fontFamily: "Montserrat",
  },
};

export default function PageChange(props) {
  return (
    <div>
      <div style={styles.wrapperDiv}>
        <div style={styles.iconWrapper}>
          <CircularProgress size="6rem" sx={{ color: "#0D47A1" }} />
        </div>
        <h4 style={styles.title}>Loading page contents for: {props.path}</h4>
      </div>
    </div>
  );
}
