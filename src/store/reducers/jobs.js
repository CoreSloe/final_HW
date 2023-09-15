// reducers/jobs.js
const initialState = {
  jobs: [],
};

export default function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    case "ADD_JOB":
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case "DELETE_JOB":
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };
    default:
      return state;
  }
}
