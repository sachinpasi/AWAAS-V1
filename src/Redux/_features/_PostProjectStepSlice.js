import { createSlice } from "@reduxjs/toolkit";

const PostProjectStepSlice = createSlice({
  name: "PostProjectStepSlice",
  initialState: {
    PostProjectStep: 1,
  },
  reducers: {
    SET_CURRENT_STEP: (state, action) => {
      state.PostProjectStep = action.payload;
      console.log(state.PostProjectStep);
    },
    RESET_CURRENT_STEP: (state) => {
      state.PostProjectStep = 1;
    },
  },
});

export const { SET_CURRENT_STEP, RESET_CURRENT_STEP } =
  PostProjectStepSlice.actions;

export const selectCurrentStep = (state) =>
  state.PostProjectStepReducer.PostProjectStep;

export default PostProjectStepSlice.reducer;
