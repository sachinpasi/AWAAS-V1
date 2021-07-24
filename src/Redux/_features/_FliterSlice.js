import { createSlice } from "@reduxjs/toolkit";

const FliterSlice = createSlice({
  name: "Filter",
  initialState: {
    Filter: {
      BudgetMin: null,
      BudgetMax: null,
      NoOfBedroom: null,
      PropertyType: null,
      AreaMin: null,
      AreaMax: null,
      isVerified: false,
      iswithPhoto: false,
      FurnishedStatus: null,
    },
  },
  reducers: {
    SET_FILTER: (state, action) => {
      state.Filter = action.payload;
      console.log(state.Filter);
    },
    RESET_FILTER: (state) => {
      state.Filter = {
        BudgetMin: null,
        BudgetMax: null,
        NoOfBedroom: null,
        PropertyType: null,
        AreaMin: null,
        AreaMax: null,
        isVerified: false,
        iswithPhoto: false,
        FurnishedStatus: null,
      };
    },
  },
});

export const { RESET_FILTER, SET_FILTER } = FliterSlice.actions;

export const selectFilter = (state) => state.FilterReducer.Filter;

export default FliterSlice.reducer;
