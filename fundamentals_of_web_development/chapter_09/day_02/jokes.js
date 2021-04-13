// apiScript.js
const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = () => {
  const header = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  fetch(API_URL, header)
    .then((resp) => resp.json())
    .then((json) => console.log(json.joke));
};

window.onload = () => fetchJoke();
