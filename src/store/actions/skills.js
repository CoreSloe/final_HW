// actions/skills.js
export const loadSkills = (skills) => ({
  type: "LOAD_SKILLS",
  payload: skills,
});

export const addSkill = (skill) => ({
  type: "ADD_SKILL",
  payload: skill,
});

export const deleteSkill = (skillId) => ({
  type: "DELETE_SKILL",
  payload: skillId,
});
