import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: { fname: "", lname: "", phone: "", address: "", url: "" },
  education: [],
  skills: [],
  projects: [],
  socialMedia: [],
  currentPage: 1
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    deleteEducation: (state, action) => {
      state.education = state.education.filter((_, i) => i !== action.payload);
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    deleteSkill: (state, action) => {
      state.skills = state.skills.filter((_, i) => i !== action.payload);
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter((_, i) => i !== action.payload);
    },
    addSocialMedia: (state, action) => {
      state.socialMedia.push(action.payload);
    },
    deleteSocialMedia: (state, action) => {
      state.socialMedia = state.socialMedia.filter((_, i) => i !== action.payload);
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
    prevPage: (state) => {
      if (state.currentPage > 1) state.currentPage -= 1;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
});

export const {
  updateProfile,
  addEducation,
  deleteEducation,
  addSkill,
  deleteSkill,
  addProject,
  deleteProject,
  addSocialMedia,
  deleteSocialMedia,
  nextPage,
  prevPage,
  setPage
} = resumeSlice.actions;

export default resumeSlice.reducer;
