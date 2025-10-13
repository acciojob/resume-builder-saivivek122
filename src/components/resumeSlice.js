import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  profile: { fname: '', lname: '', phone: '', address: '', url: '' },
  education: [],
  skills: [],
  projects: [],
  socialMedia: [],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    addEducation: (state, action) => { state.education.push(action.payload); },
    deleteEducation: (state, action) => { state.education.splice(action.payload, 1); },
    addSkill: (state, action) => { state.skills.push(action.payload); },
    deleteSkill: (state, action) => { state.skills.splice(action.payload, 1); },
    addProject: (state, action) => { state.projects.push(action.payload); },
    deleteProject: (state, action) => { state.projects.splice(action.payload, 1); },
    addSocialMedia: (state, action) => { state.socialMedia.push(action.payload); },
    deleteSocialMedia: (state, action) => { state.socialMedia.splice(action.payload, 1); },
  },
});

export const {
  updateProfile, addEducation, deleteEducation,
  addSkill, deleteSkill, addProject, deleteProject,
  addSocialMedia, deleteSocialMedia
} = resumeSlice.actions;

export const store = configureStore({ reducer: { resume: resumeSlice.reducer } });
