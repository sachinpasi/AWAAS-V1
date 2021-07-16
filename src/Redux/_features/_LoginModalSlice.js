import { createSlice } from "@reduxjs/toolkit";

const LoginModalSlice = createSlice({
  name: "LoginModal",
  initialState: {
    LoginModal: {
      isLoginModalOpen: false,
    },
  },
  reducers: {
    SET_LOGIN_MODAL_OPEN: (state, action) => {
      state.LoginModal = action.payload;
    },
    REMOVE_LOGIN_MODAL_OPEN: (state) => {
      state.LoginModal = {
        isLoginModalOpen: false,
      };
    },
  },
});

export const { SET_LOGIN_MODAL_OPEN } = LoginModalSlice.actions;

export const selectLoginModal = (state) => state.LoginModalReducer.user;

export default LoginModalSlice.reducer;
