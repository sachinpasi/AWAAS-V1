import { createSlice } from "@reduxjs/toolkit";

const PostPropertySlice = createSlice({
  name: "PostPropertySlice",
  initialState: {
    PostProperty: {
      Property_For: null,
      Parent_Property: null,
      Property_Type: null,
    },
    TableId: null,
  },
  reducers: {
    SET_POST_PROPERTY: (state, action) => {
      state.PostProperty = action.payload;
      console.log(state.PostProperty);
    },
    SET_POST_PROPERTY_ID: (state, action) => {
      state.TableId = action.payload;
      console.log(state.TableId);
    },
    RESET_POST_PROPERTY: (state) => {
      state.PostProperty = 1;
    },
  },
});

export const { SET_POST_PROPERTY, RESET_POST_PROPERTY, SET_POST_PROPERTY_ID } =
  PostPropertySlice.actions;

export const selectPostProperty = (state) =>
  state.PostPropertyReducer.PostProperty;
export const selectPostPropertyId = (state) =>
  state.PostPropertyReducer.TableId;
export default PostPropertySlice.reducer;
