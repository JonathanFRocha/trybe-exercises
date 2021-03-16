// Brazilian States Array
const stateArray = [
  { label: "Acre", value: "AC" },
  { label: "Alagoas", value: "AL" },
  { label: "Amapá", value: "AP" },
  { label: "Amazonas", value: "AM" },
  { label: "Bahia", value: "BA" },
  { label: "Ceará", value: "CE" },
  { label: "Distrito Federal", value: "DF" },
  { label: "Espírito Santo", value: "ES" },
  { label: "Goiás", value: "GO" },
  { label: "Maranhão", value: "MA" },
  { label: "Mato Grosso", value: "MT" },
  { label: "Mato Grosso do Sul", value: "MS" },
  { label: "Minas Gerais", value: "MG" },
  { label: "Paraná", value: "PR" },
  { label: "Paraíba", value: "PB" },
  { label: "Pará", value: "PA" },
  { label: "Pernambuco", value: "PE" },
  { label: "Piauí", value: "PI" },
  { label: "Rio Grande do Norte", value: "RN" },
  { label: "Rio Grande do Sul", value: "RS" },
  { label: "Rio de Janeiro", value: "RJ" },
  { label: "Rondônia", value: "RO" },
  { label: "Roraima", value: "RR" },
  { label: "Santa Catarina", value: "SC" },
  { label: "Sergipe", value: "SE" },
  { label: "São Paulo", value: "SP" },
  { label: "Tocantins", value: "TO" },
];

// Elements
const myForm = document.querySelector("#myForm");
const selectState = document.querySelector("#states");
const dateInput = document.querySelector("#start_date");
const sendBtn = document.querySelector("#submitBtn");
const successMessage = document.querySelector("#sentMessage");
const allInputs = Array.from(document.querySelectorAll("input"));
allInputs.push(document.querySelector("textarea"));
// Functions

const insertError = (text) => {
  const errorP = document.createElement("p");
  errorP.classList.add("error");
  errorP.innerText = text;
  return errorP;
};

const loadStates = () => {
  for (let state of stateArray) {
    const selectElement = document.createElement("option");
    selectElement.innerText = state.label;
    selectElement.value = state.value;
    selectState.appendChild(selectElement);
  }
};

const validateDate = (date) => {
  if (date.indexOf("/") === 2 || date.indexOf("/") === 5) {
    const splitDate = date.split("/");
    const day = splitDate[0];
    const month = splitDate[1];
    const year = splitDate[2];
    if (day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0 && year.length === 4) {
      return true;
    }
    return false;
  }
};

const removeElements = (elements) => {
  elements.forEach((element) => {
    element.parentNode.removeChild(element);
  });
};

//  Checks

const checkDate = () => {
  const inputDate = document.querySelector("#start_date");
  const date = inputDate.value;
  if (!date) return;
  let hasError = false;
  const validDate = validateDate(date);
  if (!validDate) {
    const errorMessage = "Invalid Format Date";
    inputDate.parentNode.parentNode.insertBefore(insertError(errorMessage), inputDate.parentNode);
    hasError = true;
  }
  return hasError;
};

const checkEmail = () => {
  const email = document.querySelector("#email");
  if (!email.value) {
    return;
  }
  const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/;
  if (!re.test(email.value) && email.value) {
    const errorMessage = "Invalid Email";
    email.parentNode.parentNode.insertBefore(insertError(errorMessage), email.parentNode);
  } else {
    return true;
  }
};

const checkEmptyInputs = () => {
  let hasError = false;
  allInputs.forEach((input) => {
    if (input.value === "" && input.type != "radio") {
      const error = `${input.parentNode.innerText.match(/[^:]+/)} must be filled out`;
      hasError = true;
      input.parentNode.parentNode.insertBefore(insertError(error), input.parentNode);
    }
  });
  return hasError;
};

const checkMaxLength = () => {
  let hasError = false;
  allInputs.forEach((input) => {
    if (input.value > input.maxLength && input.maxLength != -1) {
      const error = `${input.parentNode.innerText.match(/[^:]+/)} has more than ${
        input.maxLength
      } characters`;
      hasError = true;
      input.parentNode.parentNode.insertBefore(insertError(error), input.parentNode);
    }
  });
  return hasError;
};

//             Listeners

const setSendBtn = () => {
  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const elementErrors = document.querySelectorAll(".error");
    if (elementErrors) {
      removeElements(elementErrors);
    }
    const invalidLength = checkMaxLength();
    const hasEmptyInputs = checkEmptyInputs();
    const invalidEmail = checkEmail();
    const invalidDate = checkDate();
    if (invalidLength || invalidEmail || invalidDate || hasEmptyInputs) {
      successMessage.innerText = "Something went Wrong, check the form";
    } else {
      successMessage.innerText = "Sendind Data";
    }
  });
};

const loadButtons = () => {
  setSendBtn();
};

window.onload = () => {
  loadStates();
  loadButtons();
};
