const fetch = require("node-fetch");

const token = process.env.REACT_APP_API_KEY;
const query = `query {
    user(login: "reifnotreef") {
      bio
      avatarUrl
      email
      isHireable
      name
      company
    }
  }`;

const getUser = async () => {
  return await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((res: any) => res.json())
    .then((res: any) => res.data.user)
    .catch((error: any) => console.error(error));
};

export default getUser;
