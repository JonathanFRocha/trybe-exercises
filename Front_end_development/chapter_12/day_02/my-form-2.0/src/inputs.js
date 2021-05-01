const mainForm = {
  nome: {
    type: "text",
    required: true,
    hoverMsg: false,
    rules: {
      maxLength: 40,
      upperCase: true,
      specialChar: true,
      numbersAtStart: true,
    },
  },
  email: {
    type: "text",
    required: true,
    hoverMsg: false,
    rules: {
      maxLength: 50,
      upperCase: false,
      specialChar: true,
      numbersAtStart: true,
    },
  },
  cpf: {
    type: "text",
    required: true,
    hoverMsg: false,
    rules: {
      maxLength: 11,
      upperCase: false,
      specialChar: true,
      numbersAtStart: true,
    },
  },
  address: {
    type: "text",
    required: true,
    hoverMsg: false,
    rules: {
      maxLength: 200,
      upperCase: false,
      specialChar: false,
      numbersAtStart: true,
    },
  },
  city: {
    type: "text",
    required: true,
    hoverMsg: false,
    rules: {
      maxLength: 28,
      upperCase: false,
      specialChar: true,
      numbersAtStart: false,
    },
  },
  state: {
    type: "select",
    options: [
      "AC",
      "AL",
      "AM",
      "AP",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RO",
      "RS",
      "RR",
      "SC",
      "SE",
      "SP",
      "TO",
    ],
    required: true,
    hoverMsg: false,
    rules: {
      maxLength: false,
      upperCase: false,
      specialChar: true,
      numbersAtStart: false,
    },
  },

  type: {
    type: "radio",
    options: ["Casa", "Apartamento"],
    required: true,
    hoverMsg: false,
    rules: {
      maxLength: false,
      upperCase: false,
      specialChar: true,
      numbersAtStart: false,
    },
  },
};

const secondForm = {
  resume: {
    type: "textArea",
    required: true,
    hoverMsg: false,
    rules: {
      maxLength: 1000,
      upperCase: false,
      specialChar: true,
      numbersAtStart: true,
    },
  },
  job: {
    type: "text",
    required: true,
    hoverMsg: true,
    rules: {
      maxLength: 40,
      upperCase: false,
      specialChar: true,
      numbersAtStart: true,
    },
  },
  jobDescription: {
    type: "textArea",
    required: true,
    hoverMsg: false,
    rules: {
      maxLength: 500,
      upperCase: false,
      specialChar: true,
      numbersAtStart: true,
    },
  },
};

export default { mainForm, secondForm };
