import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";

export type Project = {
  id: string;
  name: string;
  url: string;
  homepageUrl: string;
  description: string;
  languages: {edges: {node: { name: string}}[]};
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <section
      className="project-card"
      key={project.id}
      style={{ borderTop: "1px solid black" }}
    >
      <div>
        <h3
          className="project-name"
          style={{ display: "inline-block", margin: 0 }}
        >
          {project.name}
        </h3>
        <a
          className="project-links"
          target="_blank"
          rel="noopener noreferrer"
          href={project.url}
          style={{ display: "inline-block", paddingLeft: "1rem" }}
        >
          <GitHubIcon htmlColor="black" />
        </a>
        {project.homepageUrl !== "" ? (
          <a
            className="project-links"
            target="_blank"
            rel="noopener noreferrer"
            href={project.homepageUrl}
          >
            <WebIcon htmlColor="black" />
          </a>
        ) : (
          <></>
        )}
      </div>
      <p className="project-description" style={{ maxWidth: "60rem" }}>
        {project.description}
      </p>
      <p className="project-languages">Languages: </p>
      <ul>
        {project?.languages?.edges?.map((i, key) => (
          <li key={key}>{i?.node?.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectCard;
