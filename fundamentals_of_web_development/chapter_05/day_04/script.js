const setBackgroundColor = () => {
  const backgroundBtns = document.querySelectorAll("#backgroundColor button");
  for (let bgBtn of backgroundBtns) {
    bgBtn.addEventListener("click", changeBackground);
  }
};

const changeBackground = (event) => {
  const content = document.querySelector("#main_content");
  content.style.backgroundColor = event.target.className;
};

setBackgroundColor();
