import { combineReducers } from "redux";
import jobDataReducer from "./jobDataReducer";
import personDataReducer from "./personDataReducer";

const rootReducers = combineReducers({
  jobDataReducer,
  personDataReducer,
});

export default rootReducers;
