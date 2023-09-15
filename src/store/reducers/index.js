// reducers/index.js
import { combineReducers } from "redux";
import projectsReducer from "./projects";
import skillsReducer from "./skills";
import jobsReducer from "./jobs";

const rootReducer = combineReducers({
  projects: projectsReducer,
  skills: skillsReducer,
  jobs: jobsReducer,
});

export default rootReducer;
