function createDaysOfTheWeek() {
  const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();
const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];
// Write your code below:
const createEl = (elName, className = "", contentText = "", idValue = "") => {
  const elementCreated = document.createElement(elName);
  elementCreated.textContent = contentText;
  if (className.length > 0) elementCreated.setAttribute("class", className);
  if (idValue.length > 0) elementCreated.setAttribute("id", idValue);
  return elementCreated;
};

const daysUl = document.getElementById("days");
for (let day of dezDaysList) {
  switch (day) {
    case 24:
    case 31:
      const newDay = createEl("li", "day holiday", day);
      daysUl.appendChild(newDay);
      break;
    case 4:
    case 11:
    case 18:
      const newDay1 = createEl("li", "day friday", day);
      daysUl.appendChild(newDay1);
      break;
    case 25:
      const newDay2 = createEl("li", "day holiday friday", day);
      daysUl.appendChild(newDay2);
      break;
    default:
      const newDay3 = createEl("li", "day", day);
      daysUl.appendChild(newDay3);
  }
}
// Exercise 2
const divBtnContainer = document.querySelector(".buttons-container");
const btnHoliday = createEl("button", "", "Feriados", "btn-holiday");
divBtnContainer.appendChild(btnHoliday);

// Exercise 3
const showHoliday = (e) => {
  e.preventDefault();
  const holidayClassElements = document.getElementsByClassName("holiday");
  for (let holidayElement of holidayClassElements) {
    holidayElement.style.backgroundColor === "cyan"
      ? (holidayElement.style.backgroundColor = "rgb(238, 238, 238)")
      : (holidayElement.style.backgroundColor = "cyan");
  }
};
btnHoliday.addEventListener("click", showHoliday);

// Exercise 4
const btnFriday = createEl("button", "", "Sexta-Feira", "btn-friday");
divBtnContainer.appendChild(btnFriday);

// Exercise 5

const showFriday = (e) => {
  const fridayDays = [4, 11, 18, 25];
  e.preventDefault();
  const fridayClassElements = document.getElementsByClassName("friday");
  for (let index in fridayClassElements) {
    fridayClassElements[index].innerText === "Relaxar"
      ? (fridayClassElements[index].innerText = fridayDays[index])
      : (fridayClassElements[index].innerText = "Relaxar");
  }
};
btnFriday.addEventListener("click", showFriday);

// Exercise 6

const zoomIn = (event) => {
  event.target.style.transform = "scale(1.5)";
};

const zoomOut = (event) => {
  event.target.style.transform = "scale(1)";
};

const allDays = document.getElementsByClassName("day");
for (let day of allDays) {
  day.addEventListener("mouseenter", zoomIn);
  day.addEventListener("mouseleave", zoomOut);
}

// Exercise 7

const addTask = (string) => {
  const myTasks = document.querySelector(".my-tasks");
  const newTask = createEl("span", "", string);

  myTasks.appendChild(newTask);
};

// Exercise 8

const addColorToTask = (color) => {
  const myTasks = document.querySelector(".my-tasks");
  const newColoredDiv = createEl("div", "task");
  newColoredDiv.style.backgroundColor = color;
  myTasks.appendChild(newColoredDiv);
};
addTask("Projeto");
addColorToTask("green");

// Exercise 9

const newColoredDiv = document.querySelector(".task");
newColoredDiv.addEventListener("click", (event) => {
  if (event.target.className === "task") {
    event.target.setAttribute("class", "task selected");
  } else {
    event.target.setAttribute("class", "task");
  }
});

// Exercise 10

const paint = (event) => {
  if (!document.querySelector(".selected")) return;
  const color = document.querySelector(".selected").style.backgroundColor;
  if (color !== event.target.style.color && color) {
    event.target.style.color = color;
  } else if (color == event.target.style.color) {
    event.target.style.color = "rgb(119,119,119)";
  }
};

for (let day of allDays) {
  day.addEventListener("click", paint);
}

//Bonus
const addBtn = document.querySelector("#btn-add");
const inputTask = document.querySelector("#task-input");

const addNewTask = () => {
  const taskList = document.querySelector(".task-list");
  const text = inputTask.value;
  const taskToAdd = createEl("li", "", text);
  taskList.appendChild(taskToAdd);
};

addBtn.addEventListener("click", addNewTask);
inputTask.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) addNewTask();
});
