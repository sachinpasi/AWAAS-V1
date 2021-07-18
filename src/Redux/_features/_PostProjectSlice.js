import { createSlice } from "@reduxjs/toolkit";

const PostProjectSlice = createSlice({
  name: "PostProjectSlice",
  initialState: {
    PostProject: {},
    TableId: null,
  },
  reducers: {
    SET_POST_PROJECT: (state, action) => {
      state.PostProject = action.payload;
      console.log(state.PostProject);
    },
    SET_POST_PROJECT_ID: (state, action) => {
      state.TableId = action.payload;
      console.log(state.TableId);
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
  SET_POST_PROJECT,
  RESET_POST_PROJECT,
  SET_POST_PROJECT_ID,
  RESET_POST_PROJECT_ID,
} = PostProjectSlice.actions;

export const selectPostProject = (state) =>
  state.PostProjectReducer.PostProject;
export const selectPostProjectId = (state) => state.PostProjectReducer.TableId;
export default PostProjectSlice.reducer;
