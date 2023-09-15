// actions/jobs.js
export const loadJobs = (jobs) => ({
  type: "LOAD_JOBS",
  payload: jobs,
});

export const addJob = (job) => ({
  type: "ADD_JOB",
  payload: job,
});

export const deleteJob = (jobId) => ({
  type: "DELETE_JOB",
  payload: jobId,
});
