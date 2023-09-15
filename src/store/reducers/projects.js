// reducers/projects.js
const initialState = {
  projects: [],
};

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
