import { createSlice } from "@reduxjs/toolkit";

const PostPropertyStepSlice = createSlice({
  name: "PostPropertyStepSlice",
  initialState: {
    PostPropertyStep: 1,
  },
  reducers: {
    SET_CURRENT_STEP: (state, action) => {
      state.PostPropertyStep = action.payload;
      console.log(state.PostPropertyStep);
    },
    RESET_CURRENT_STEP: (state) => {
      state.PostPropertyStep = 1;
    },
  },
});

export const { SET_CURRENT_STEP, RESET_CURRENT_STEP } =
  PostPropertyStepSlice.actions;

export const selectCurrentStep = (state) =>
  state.PostPropertyStepReducer.PostPropertyStep;

export default PostPropertyStepSlice.reducer;
