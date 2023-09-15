// reducers/skills.js
const initialState = {
  skills: [],
};

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_SKILLS":
      return {
        ...state,
        skills: action.payload,
      };
    case "ADD_SKILL":
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };
    case "DELETE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((skill) => skill.id !== action.payload),
      };
    default:
      return state;
  }
}
