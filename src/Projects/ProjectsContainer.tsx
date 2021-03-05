import React, { useEffect, useState } from "react";

import ProjectCard, { Project } from "./ProjectCard";

import Skeleton from "@material-ui/lab/Skeleton";
import getProjects from "../services/getProjects";

const ProjectsContainer: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const updateProject = async () => {
    const blah = await getProjects();
    setProjects(blah);
  };
  useEffect(() => {
    updateProject();
  }, []);

  return (
      <section className="projects-container">
        {projects && projects.length > 0 ? (
          <>
            <section className="projects-header">
              <h1>Projects</h1>
            </section>
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
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
  );
};

export default ProjectsContainer;
