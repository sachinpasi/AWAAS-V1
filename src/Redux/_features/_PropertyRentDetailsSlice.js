import { createSlice } from "@reduxjs/toolkit";

const PropertyRentDetailsSlice = createSlice({
  name: "PropertyRentDetails",
  initialState: {
    PropertyRentDetails: {
      Data: {},
    },
  },
  reducers: {
    SET_PROPERTY_RENT_DETAILS: (state, action) => {
      state.PropertyRentDetails = action.payload;
      console.log(state.PropertyRentDetails);
    },
    REMOVE_PROPERTY_RENT_DETAILS: (state) => {
      state.PropertyRentDetails = {
        Data: {},
      };
    },
  },
});

export const { REMOVE_PROPERTY_RENT_DETAILS, SET_PROPERTY_RENT_DETAILS } =
  PropertyRentDetailsSlice.actions;

export const selectPropertyRentDetails = (state) =>
  state.PropertyRentDetailsReducer.PropertyRentDetails;

export default PropertyRentDetailsSlice.reducer;
