// Navigation
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const SAVE_PAGE = "SAVE_PAGE";

// Profile
export const SET_PROFILE = "SET_PROFILE";

// Education
export const ADD_EDUCATION = "ADD_EDUCATION";
export const DELETE_EDUCATION = "DELETE_EDUCATION";

// Skills
export const ADD_SKILL = "ADD_SKILL";
export const DELETE_SKILL = "DELETE_SKILL";

// Projects
export const ADD_PROJECT = "ADD_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";

// Social Media
export const ADD_SOCIAL = "ADD_SOCIAL";

// Action Creators
export const nextPage = () => ({ type: NEXT_PAGE });
export const prevPage = () => ({ type: PREV_PAGE });
export const saveProfile = (data) => ({ type: SET_PROFILE, payload: data });
export const addEducation = (data) => ({ type: ADD_EDUCATION, payload: data });
export const deleteEducation = (index) => ({ type: DELETE_EDUCATION, payload: index });
export const addSkill = (data) => ({ type: ADD_SKILL, payload: data });
export const deleteSkill = (index) => ({ type: DELETE_SKILL, payload: index });
export const addProject = (data) => ({ type: ADD_PROJECT, payload: data });
export const deleteProject = (index) => ({ type: DELETE_PROJECT, payload: index });
export const addSocial = (data) => ({ type: ADD_SOCIAL, payload: data });
