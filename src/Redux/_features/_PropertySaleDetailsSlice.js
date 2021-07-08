import { createSlice } from "@reduxjs/toolkit";

const PropertySaleDetailsSlice = createSlice({
  name: "PropertySaleDetails",
  initialState: {
    PropertySaleDetails: {
      Data: {},
    },
  },
  reducers: {
    SET_PROPERTY_SALE_DETAILS: (state, action) => {
      state.PropertySaleDetails = action.payload;
      console.log(state.PropertySaleDetails);
    },
    REMOVE_PROPERTY_SALE_DETAILS: (state) => {
      state.PropertySaleDetails = {
        Data: {},
      };
    },
  },
});

export const { SET_PROPERTY_SALE_DETAILS, REMOVE_PROPERTY_SALE_DETAILS } =
  PropertySaleDetailsSlice.actions;

export const selectPropertySaleDetails = (state) =>
  state.PropertySaleDetailsReducer.PropertySaleDetails;

export default PropertySaleDetailsSlice.reducer;
