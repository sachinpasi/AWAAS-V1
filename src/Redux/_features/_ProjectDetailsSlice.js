import { createSlice } from "@reduxjs/toolkit";

const ProjectDetailsSlice = createSlice({
  name: "ProjectDetails",
  initialState: {
    ProjectDetails: {
      Data: {},
    },
  },
  reducers: {
    SET_PROJECT_DETAILS: (state, action) => {
      state.ProjectDetails = action.payload;
      console.log(state.ProjectDetails);
    },
    REMOVE_PROJECT_DETAILS: (state) => {
      state.ProjectDetails = {
        Data: {},
      };
    },
  },
});

export const { SET_PROJECT_DETAILS, REMOVE_PROJECT_DETAILS } =
  ProjectDetailsSlice.actions;

export const selectProjectDetails = (state) =>
  state.ProjectDetailsReducer.ProjectDetails;

export default ProjectDetailsSlice.reducer;
