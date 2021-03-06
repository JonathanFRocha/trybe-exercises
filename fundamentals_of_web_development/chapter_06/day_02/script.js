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
const selectState = document.querySelector("#states");
const picker = new Pikaday({ field: document.getElementById("startDate") });
// Functions

const loadStates = () => {
  for (let state of stateArray) {
    const selectElement = document.createElement("option");
    selectElement.innerText = state.label;
    selectElement.value = state.value;
    selectState.appendChild(selectElement);
  }
};

//             Listeners

window.onload = () => {
  loadStates();
  validation.init("#myForm");
};
