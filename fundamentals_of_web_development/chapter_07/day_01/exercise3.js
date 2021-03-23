const startWindow = () => {
  let count = 0;
  document.querySelector("button").addEventListener("click", () => {
    count++;
    console.log(count);
  });
};

window.onload = () => {
  startWindow();
};
