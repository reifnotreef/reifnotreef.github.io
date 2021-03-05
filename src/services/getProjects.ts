import { Project } from "../Projects/ProjectCard";
import fetch from "node-fetch";

// this is a read only token
const token = process.env.REACT_APP_API_KEY;
const query = `query {
  user(login: "reifnotreef") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
        node {
          ... on Repository {
            homepageUrl
            name
            description
            id
            url
            languages(first: 6) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}`;

const getProjects = async (): Promise<Project[]> => {
  // const Projects: Project[] = [];
  const Projects: Project[] = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res: any) => res.json())
    .then((res: any) =>
      res?.data?.user?.pinnedItems?.edges?.map((i: {node: Project}) => i?.node)
    );
  return Projects;
};

export default getProjects;
