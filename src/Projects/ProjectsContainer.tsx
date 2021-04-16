import React, { useEffect, useState } from "react";

import ProjectCard, { Project } from "./ProjectCard";
import getProjects from "../services/getProjects";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

const useStyles = makeStyles({
  projectsWrapper: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
    marginBottom: "3rem",
    "@media only screen and (min-width: 720px)": {
      marginBottom: 0,
    },
  },
});

const ProjectsContainer: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const updateProject = async () => {
    const blah = await getProjects();
    setProjects(blah);
  };
  useEffect(() => {
    updateProject();
  }, []);

  const styles = useStyles();

  return (
    <section className={styles.projectsWrapper}>
      <h1>Projects</h1>
      {projects?.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </section>
  );
};

export default ProjectsContainer;
