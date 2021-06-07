export const ADD_PERSON_DATA = "ADD_PERSON_DATA";

const handlePersonData = (inputName, value) => ({
  type: ADD_PERSON_DATA,
  inputName,
  value,
});

export default handlePersonData;
