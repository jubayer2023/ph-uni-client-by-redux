import { createSlice } from "@reduxjs/toolkit";

type TUserState = {
  user: null | object;
  token: null | string;
};

const initialState: TUserState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
