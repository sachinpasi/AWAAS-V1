import { createSlice } from "@reduxjs/toolkit";

const showProjectSlice = createSlice({
  name: "showProject",
  initialState: {
    showProject: {
      ActiveParentTab: null,
      ActiveChildTab: null,
    },
  },
  reducers: {
    SET_ACTIVE_TAB: (state, action) => {
      state.showProject = action.payload;
      // console.log(state.showProject);
    },
  },
});

export const { SET_ACTIVE_TAB } = showProjectSlice.actions;

export const selectShowProject = (state) =>
  state.showProjectReducer.showProject;

export default showProjectSlice.reducer;
