import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface AuthUser {
  name: string;
  email: string;
  token?: string;
}
export interface AuthState {
  user: null | AuthUser;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const { setAuthUser, logout } = authSlice.actions;

export default authSlice.reducer;
