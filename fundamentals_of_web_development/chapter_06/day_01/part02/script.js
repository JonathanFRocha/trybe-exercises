// Brazilian State Array
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

const checkEmptyInputs = () => {
  const allInputs = document.querySelectorAll("input");
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
  document.querySelectorAll("input").forEach((input) => {
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
    checkMaxLength();
    checkEmptyInputs();
    successMessage.innerText = "Sendind Data";
  });
};

const loadButtons = () => {
  setSendBtn();
};

window.onload = () => {
  loadStates();
  loadButtons();
};
