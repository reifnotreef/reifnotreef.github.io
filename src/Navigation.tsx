import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

import React from "react";

const useStyles = makeStyles({
  navWrapper: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    height: "2rem",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    paddingTop: "0.25rem",
    "@media only screen and (min-width: 720px)": {
      top: 0,
    },
  },
  innerWrapper: {
    width: "60rem",
    display: "flex",
    justifyContent: "space-evenly",
  },
});

const Navigation: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.navWrapper}>
      <div className={styles.innerWrapper}>
        <a href="#root">
          <HomeIcon htmlColor="white" />
        </a>
        <a
          href="mailto:bridgerrhammond@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon htmlColor="white" />
        </a>
        <a
          href="https://github.com/reifnotreef"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon htmlColor="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/bridgerhammond/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon htmlColor="white" />
        </a>
        <a href="/Resume-BRH.pdf" target="_blank" rel="noopener noreferrer">
          <PictureAsPdfIcon htmlColor="white" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
