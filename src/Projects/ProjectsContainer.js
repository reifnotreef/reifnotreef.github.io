import React, { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";
import getProjects from "../services/getProjects";

import Skeleton from "@material-ui/lab/Skeleton";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(projs => setProjects(projs));
  }, []);

  return (
    <>
      <section className="projects-container">
        {projects && projects.length > 0 ? (
          <>
            <section className="projects-header">
              <h1>Projects</h1>
            </section>
            {projects.map(i => (
              <ProjectCard project={i} key={i.id} />
            ))}
          </>
        ) : (
          <Skeleton
            variant="rect"
            animation="pulse"
            height={"100%"}
            width={"100%"}
          />
        )}
      </section>
    </>
  );
};

export default ProjectsContainer;
