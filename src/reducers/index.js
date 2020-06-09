import { combineReducers } from "redux";
import grillaReducer from "./grillaReducer";
//import barcoReducer from "./barcoReducer";

export default combineReducers({
  grilla: grillaReducer,
  // barco: barcoReducer,
});
