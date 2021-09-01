import { createSlice } from "@reduxjs/toolkit";

const UpdatePropertySlice = createSlice({
  name: "UpdatePropertySlice",
  initialState: {
    UpdatePropertySlice: {
      Data: {},
    },
  },
  reducers: {
    SET_UPDATE_PROPERTY_SLICE: (state, action) => {
      state.UpdatePropertySlice = action.payload;
      console.log(state.UpdatePropertySlice);
    },
    REMOVE_UPDATE_PROPERTY_SLICE: (state) => {
      state.UpdatePropertySlice = {
        Data: {},
      };
    },
  },
});

export const { SET_UPDATE_PROPERTY_SLICE, REMOVE_UPDATE_PROPERTY_SLICE } =
  UpdatePropertySlice.actions;

export const selectUpdatePropertySlice = (state) =>
  state.UpdatePropertySliceReducer.UpdatePropertySlice;

export default UpdatePropertySlice.reducer;
