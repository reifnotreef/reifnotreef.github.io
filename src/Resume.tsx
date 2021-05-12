import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import resume from "./Resume-BRH.md";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

const useStyles = makeStyles({
  resumeWrapper: {
    width: "100%",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    marginBottom: "3rem",
    "@media only screen and (min-width: 720px)": {
      marginBottom: 0,
    },
  },
  details: {
    width: "100%",
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
      <Markdown children={md} style={{ width: "100%" }} />
      <div>
        <h1 id="bridger-reif-hammond">BRIDGER REIF HAMMOND</h1>
        <h5 id="bridgerrhammondgmailcom--512-384-1972--reifnotreefdev">
          BridgerRHammond@gmail.com | (512) 384-1972 | reifnotreef.dev
        </h5>
        <h2 id="about">ABOUT</h2>
        <p>
          Fullstack Engineer at Dottid, 5 years of engineeringexperience, 4
          years of remote experience, living in Dallas, Texas, United States.
        </p>
        <h2 id="experience">EXPERIENCE</h2>
        <h3 id="dottidhttpsdottidcom-dallasremote--fullstack-engineer">
          <a href="https://dottid.com">Dottid</a>, Dallas/Remote — Fullstack
          Engineer
        </h3>
        <h4 id="april-2020---present">APRIL 2020 - PRESENT</h4>

        <div style={{ width: "100%" }}>
          <p>
            ● Dottid is a SaaS platform that expedites Commercial Real Estate
            (CRE) lease transactions through better collaboration,
            visibility,and quick-and-easy actions.
          </p>
          <p>
            ● Develop clean, maintainable code quickly using anagile process and
            tools. Techstack included: Node.js (Express, TypeScript),Apollo
            GraphQL, Docker (containerization), GitLab (repository, issues,CI),
            functional React utilizing Hooks and Context APIs.
          </p>
        </div>

        <h3 id="thinkful-remote--fullstack-engineer">
          Thinkful, Remote — Fullstack Engineer
        </h3>
        <h4 id="september-2019---feb-2020">SEPTEMBER 2019 - FEB 2020</h4>
        <div style={{ width: "100%" }}>
          <p>
            ● Released wtfshouldicook.com, focused UI/UX on simplicity using
            React.
          </p>
          <p>
            ● Released a production ready project management appmanageLazily.com
            using React and Firebase.
          </p>
        </div>
        <h3 id="independent-contractor-remote--fullstack-engineer">
          Independent Contractor, Remote — Fullstack Engineer
        </h3>
        <h4 id="june-2016---august-2019">JUNE 2016 - AUGUST 2019</h4>

        <div className={styles.details}>
          <p>
            ● Working as an independent contractor developing production ready
            Full Stack applications.
          </p>
          <p>
            ● Primarily using Functional React, with Hooks and Context APIs, for
            the front end. Backends have been built on Node.js usinga variety of
            frameworks from Gatsby to Express and Next.js.
          </p>
          <p>
            ● Unable to disclose client names or applications due to signed
            NDAs.
          </p>
        </div>

        <h2 id="links">LINKS</h2>
        <h3 id="reifnotreefdevhttpsreifnotreefdev--personal-portfolio-site-a-constant-wip">
          <a href="https://reifnotreef.dev">reifnotreef.dev</a> — Personal
          portfolio site, a constant WIP.
        </h3>
        <h3 id="managelazilycomhttpsmanagelazilycom--project-management-app-for-commercial-use">
          <a href="https://manageLazily.com">manageLazily.com</a> — Project
          Management app for commercial use.
        </h3>
        <h3 id="wtfshouldicookcomhttpswtfshouldicookcom--answer-some-questions-get-a-random-recipe">
          <a href="https://wtfshouldicook.com">wtfshouldicook.com</a> — Answer
          some questions, get a random recipe.
        </h3>
      </div>
    </div>
  );
};

export default Resume;
