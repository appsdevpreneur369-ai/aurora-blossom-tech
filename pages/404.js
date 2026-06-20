/*eslint-disable*/
import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import errorPageStyle from "/styles/jss/novel-logiks/pages/errorPageStyles.js";

const useStyles = makeStyles(errorPageStyle);

export default function ErrorPage({ ...rest }) {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  // });
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          // backgroundImage: "url('/img/clint-mckoy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <div className={classes.contentCenter}>
            <GridContainer>
              <GridItem md={12}>
                <h1 className={classes.title}>404</h1>
                <h4 className={classes.description}>
                  Ooooups! Looks like you got lost.
                  Om Sai Ram
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
