const fetch = require("node-fetch");

const token = process.env.REACT_APP_API_KEY;
const query = `query {
    user(login: "reifnotreef") {
      bio
      avatarUrl
      email
      isHireable
      name
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
    .then(res => res.json())
    .then(res => res.data.user)
    .catch(error => console.error(error));
};

export default getUser;
