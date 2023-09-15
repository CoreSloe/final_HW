// actions/projects.js
export const loadProjects = (projects) => ({
  type: "LOAD_PROJECTS",
  payload: projects,
});

export const addProject = (project) => ({
  type: "ADD_PROJECT",
  payload: project,
});

export const deleteProject = (projectId) => ({
  type: "DELETE_PROJECT",
  payload: projectId,
});
