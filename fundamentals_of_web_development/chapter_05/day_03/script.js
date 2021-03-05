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
//Exercise 2
const divBtnContainer = document.querySelector(".buttons-container");
const btn1 = createEl("button", "", "Feriados", "btn-holiday");
divBtnContainer.appendChild(btn1);
