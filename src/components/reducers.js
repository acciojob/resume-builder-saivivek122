import {
  NEXT_PAGE, PREV_PAGE, SET_PROFILE, ADD_EDUCATION, DELETE_EDUCATION,
  ADD_SKILL, DELETE_SKILL, ADD_PROJECT, DELETE_PROJECT, ADD_SOCIAL
} from "./actions";

const initialState = {
  currentPage: 1,
  profile: {},
  education: [],
  skills: [],
  projects: [],
  social: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case PREV_PAGE:
      return { ...state, currentPage: state.currentPage - 1 };
    case SET_PROFILE:
      return { ...state, profile: action.payload };
    case ADD_EDUCATION:
      return { ...state, education: [...state.education, action.payload] };
    case DELETE_EDUCATION:
      return { ...state, education: state.education.filter((_, i) => i !== action.payload) };
    case ADD_SKILL:
      return { ...state, skills: [...state.skills, action.payload] };
    case DELETE_SKILL:
      return { ...state, skills: state.skills.filter((_, i) => i !== action.payload) };
    case ADD_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    case DELETE_PROJECT:
      return { ...state, projects: state.projects.filter((_, i) => i !== action.payload) };
    case ADD_SOCIAL:
      return { ...state, social: [...state.social, action.payload] };
    default:
      return state;
  }
};
