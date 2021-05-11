import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";

import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

const useStyles = makeStyles({
  projectWrapper: {
    borderTop: "1px solid black",
    paddingTop: "1rem",
    "&:last-of-type": {
      borderBottom: "1px solid black",
    },
  },
  projectNameAndLinks: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 0,
    marginBottom: "0.5rem",
  },
  projectName: {
    display: "inline-block",
    margin: 0,
    fontSize: 20,
  },
  projectLinks: {
    display: "inline-grid",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "1fr",
    gap: 12,
    marginLeft: 12,
    alignItems: "center",
  },
  projectLink: {
    height: 24,
  },
  projectDescription: {
    maxWidth: 420,
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  projectLanguage: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  projectLanguages: {
    marginTop: 0,
  },
});

export type Project = {
  id: string;
  name: string;
  url: string;
  homepageUrl: string;
  description: string;
  languages: { edges: { node: { name: string } }[] };
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const styles = useStyles();
  return (
    <section className={styles.projectWrapper} key={project.id}>
      <div className={styles.projectNameAndLinks}>
        <h3 className={styles.projectName}>{project.name}</h3>
        <div className={styles.projectLinks}>
          <a
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            href={project.url}
          >
            <GitHubIcon htmlColor="black" />
          </a>
          {project.homepageUrl && (
            <a
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              href={project.homepageUrl}
            >
              <WebIcon htmlColor="black" />
            </a>
          )}
        </div>
      </div>
      <p className={styles.projectDescription}>{project.description}</p>
      <p className={styles.projectLanguage}>Languages: </p>
      <ul className={styles.projectLanguages}>
        {project?.languages?.edges?.map((i, key) => (
          <li key={key}>{i?.node?.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectCard;
