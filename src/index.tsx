import React from "react";
import ReactDOM from "react-dom";

import ProjectsContainer from "./Projects/ProjectsContainer";
import Header from "./Header";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from "./Navigation";

const useStyles = makeStyles({
  main: {
    margin: 0,
    boxSizing: "border-box",
    fontFamily: "JetBrains Mono",
    fontSize: 18,
  },
});
const App: React.FC = () => {
  const styles = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={styles.main}>
        <Header />
        <ProjectsContainer />
        <Navigation />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
