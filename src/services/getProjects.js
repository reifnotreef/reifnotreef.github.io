const fetch = require("node-fetch");

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

const getProjects = async () => {
  const Projects = [];

  await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(res =>
      res.data.user.pinnedItems.edges.forEach(i => Projects.push(i.node))
    )
    .catch(error => console.error(error));
  return Projects;
};

export default getProjects;
