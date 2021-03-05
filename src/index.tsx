import React from "react";
import ReactDOM from "react-dom";

import ProjectsContainer from "./Projects/ProjectsContainer";
import Header from "./Header";

import "./index.css";
import { Navigation } from "./Navigation";

const App: React.FC = () => (
  <>
    <Header />
    <ProjectsContainer />
    <Navigation />
  </>
);

ReactDOM.render(<App />, document.querySelector("#root"));
