import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      isLoggedIn: false,
      name: null,
      email: null,
      contactNo: null,
      token: null,
    },
  },
  reducers: {
    LOGIN: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
    SIGNOUT: (state) => {
      state.user = {
        isLoggedIn: false,
        name: null,
        email: null,
        contactNo: null,
        token: null,
      };
    },
  },
});

export const { LOGIN, SIGNOUT } = userSlice.actions;

export const selectUser = (state) => state.userReducer.user;

export default userSlice.reducer;
