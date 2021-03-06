window.onload = () => {
  start();
};

//Html Elements
const allText = document.querySelectorAll("h2, p");
const content = document.querySelector("#main_content");
const allParagraphs = document.querySelectorAll("p");

//background btn
const setBackgroundColorBtn = () => {
  const backgroundBtns = document.querySelectorAll("#backgroundColor button");
  for (let bgBtn of backgroundBtns) {
    bgBtn.addEventListener("click", changeBackground);
  }
};

const changeBackground = (event) => {
  const bgColor = event.target.className;
  content.style.backgroundColor = bgColor;
  localStorage.setItem("background", bgColor);
};

//font Color btn

const setFontColorBtn = () => {
  const fontColorBtn = document.querySelectorAll("#textColor button");
  for (let btn of fontColorBtn) {
    btn.addEventListener("click", changeFontColor);
  }
};

const changeFontColor = (event) => {
  const fontColor = event.target.className;
  for (let part of allText) {
    part.style.color = fontColor;
  }
  localStorage.setItem("fontColor", fontColor);
};

//font Size btn

const setFontSizeBtn = () => {
  const fontSizeBtn = document.querySelectorAll("#fontSize button");
  for (let btn of fontSizeBtn) {
    btn.addEventListener("click", changeFontSize);
  }
};

const changeFontSize = (event) => {
  const fontSize = event.target.className;
  for (let part of allParagraphs) {
    part.style.fontSize = fontSize;
  }
  localStorage.setItem("fontSize", fontSize);
};

//Line Heigth btn
const setLineHeigthBtn = () => {
  const lineHeigthBtn = document.querySelectorAll("#lineHeigth button");
  for (let btn of lineHeigthBtn) {
    btn.addEventListener("click", changeLineHeigth);
  }
};

const changeLineHeigth = (event) => {
  const lineHeigth = event.target.className;
  for (let part of allParagraphs) {
    part.style.lineHeight = lineHeigth;
  }
  localStorage.setItem("lineHeight", lineHeigth);
};

//Font Family btn

const setFontFamilyBtn = () => {
  const fontFamilyBtn = document.querySelectorAll("#fontFamily button");
  for (let btn of fontFamilyBtn) {
    btn.addEventListener("click", changeFontFamily);
  }
};

const changeFontFamily = (event) => {
  const fontFamily = event.target.innerText;
  for (let part of allText) {
    part.style.fontFamily = fontFamily;
  }
  localStorage.setItem("fontFamily", fontFamily);
};

// getLocalStorage attributes

const getData = () => {
  if (typeof Storage != undefined) {
    getBackgroundColor();
    getFontColor();
    getFontSize();
    getLineHeigth();
    getFontFamily();
  } else {
    alert("Seu Browser não suporta Storage, os dados não serão mantidos");
  }
};

const getBackgroundColor = () => {
  if (localStorage.background) {
    content.style.backgroundColor = localStorage.background;
  }
};

const getFontColor = () => {
  if (localStorage.fontColor) {
    for (let part of allText) {
      part.style.color = localStorage.fontColor;
    }
  }
};

const getFontSize = () => {
  if (localStorage.fontSize) {
    for (let part of allParagraphs) {
      part.style.fontSize = localStorage.fontSize;
    }
  }
};

const getLineHeigth = () => {
  if (localStorage.lineHeight) {
    for (let part of allParagraphs) {
      part.style.lineHeight = localStorage.lineHeight;
    }
  }
};

const getFontFamily = () => {
  if (localStorage.fontFamily) {
    for (let part of allText) {
      part.style.fontFamily = localStorage.fontFamily;
    }
  }
};

const start = () => {
  getData();
  setBackgroundColorBtn();
  setFontColorBtn();
  setFontSizeBtn();
  setLineHeigthBtn();
  setFontFamilyBtn();
};
