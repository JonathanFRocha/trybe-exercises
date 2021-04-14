// apiScript.js
const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = () => {
  const header = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  fetch(API_URL, header)
    .then((resp) => resp.json())
    .then((json) => {
      const element = document.querySelector("#jokeContainer");
      element.innerHTML = json.joke;
    });
};

const getArray = (arr) => {
  const eArr = [];
  for (let i = 0; i < arr; i += 1) {
    const rNumber = Math.ceil(Math.random() * 50);
    eArr.push(rNumber * rNumber);
  }
  return eArr;
};

const promise = new Promise((res, rej) => {
  const tenArray = getArray(10);
  const totalOfTenArray = tenArray.reduce((acc, item) => acc + item);
  totalOfTenArray < 8000 ? res(totalOfTenArray) : rej();
})
  .then((res) => {
    const divisors = [2, 3, 5, 10];
    return divisors.map((item, index) => {
      switch (index) {
        case 0:
          return res / divisors[index];

        case 1:
          return res / divisors[index];

        case 2:
          return res / divisors[index];

        case 3:
          return res / divisors[index];
      }
    });
  })
  .then((arr) => console.log(arr.reduce((acc, item) => acc + item)))
  .catch((err) => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));

console.log(promise);

window.onload = () => fetchJoke();
