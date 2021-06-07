const INITIAL_STATE = {
  resume: "",
  job: "",
  jobDescription: "",
};

const jobDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CASO1":
      return "algo";
    default:
      return state;
  }
};

export default jobDataReducer;
