import { ADD_PERSON_DATA } from "../actions";
const INITIAL_STATE = {
  name: "",
  email: "",
  cpf: "",
  address: "",
  city: "",
  state: "SC",
  addressType: "",
};

const personDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PERSON_DATA:
      return { ...state, [action.inputName]: action.value };
    default:
      return state;
  }
};

export default personDataReducer;
