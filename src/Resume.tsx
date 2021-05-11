import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import resume from "./Resume-BRH.md";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

const useStyles = makeStyles({
  resumeWrapper: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
    marginBottom: "3rem",
    "@media only screen and (min-width: 720px)": {
      marginBottom: 0,
    },
  },
});

const Resume = () => {
  const [md, setMd] = useState("");
  useEffect(() => {
    fetch(resume)
      .then((res) => res.text())
      .then((md) => {
        setMd(md);
      });
  }, []);
  const styles = useStyles();
  return (
    <div className={styles.resumeWrapper}>
      <h1>Resume</h1>
      <Markdown children={md} />
    </div>
  );
};

export default Resume;
