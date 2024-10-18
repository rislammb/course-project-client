import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  mode: string;
}

const initialState: ThemeState = {
  mode: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<string>) => {
      const newTheme = action.payload;
      document.documentElement.setAttribute("data-bs-theme", newTheme);
      state.mode = newTheme;
      window.localStorage.setItem("color-theme", newTheme);
    },
    toggleThemeMode: (state) => {
      themeSlice.caseReducers.setThemeMode(state, {
        type: "theme/setThemeMode",
        payload: state.mode === "light" ? "dark" : "light",
      });
    },
  },
});

export const { setThemeMode, toggleThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
