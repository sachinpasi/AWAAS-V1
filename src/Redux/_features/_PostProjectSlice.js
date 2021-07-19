import { createSlice } from "@reduxjs/toolkit";

const PostProjectSlice = createSlice({
  name: "PostProjectSlice",
  initialState: {
    PostProject: {
      addFlat: false,
      addVilla: false,
      addSco: false,
      addPlot: false,
      addCommercial: false,
      addOffice: false,
    },
    TableId: null,
  },
  reducers: {
    SET_POST_PROJECT_ID: (state, action) => {
      state.TableId = action.payload;
      console.log(state.TableId);
    },
    SET_POST_PROJECT_PROPERTY: (state, action) => {
      state.PostProject = action.payload;
      console.log(state.PostProject);
    },
    RESET_POST_PROJECT_PROPERTY: (state) => {
      state.PostProject = {
        addFlat: false,
        addVilla: false,
        addSco: false,
        addPlot: false,
        addCommercial: false,
        addOffice: false,
      };
      console.log(state.PostProject);
    },
    RESET_POST_PROJECT: (state) => {
      state.PostProject = 1;
    },
    RESET_POST_PROJECT_ID: (state) => {
      state.TableId = null;
    },
  },
});

export const {
  RESET_POST_PROJECT,
  SET_POST_PROJECT_ID,
  RESET_POST_PROJECT_ID,
  RESET_POST_PROJECT_PROPERTY,
  SET_POST_PROJECT_PROPERTY,
} = PostProjectSlice.actions;

export const selectPostProject = (state) =>
  state.PostProjectReducer.PostProject;
export const selectPostProjectId = (state) => state.PostProjectReducer.TableId;
export default PostProjectSlice.reducer;
