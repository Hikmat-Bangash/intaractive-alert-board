"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface IthemeMode {
  reducer: any,
  actions: {
    changeMode: any
  },
  isLightMode?: boolean
}
export const ThemeMode: IthemeMode = createSlice({
  name: "themeMode",
  initialState: {
    isLightMode: true,
  },

  reducers: {
    changeMode: (state, action) => {
      state.isLightMode = action.payload;
      console.log("the themeMode on action/reducer is:", action.payload);
    },
  },
});

export const { changeMode } =  ThemeMode.actions;

export default ThemeMode.reducer;
