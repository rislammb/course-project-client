import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import { removeToken, setToken } from "../utils/storage";

export interface AuthUser {
  id: number;
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
      if (action.payload.token) setToken(action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      removeToken();
    },
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const { setAuthUser, logout } = authSlice.actions;

export default authSlice.reducer;
