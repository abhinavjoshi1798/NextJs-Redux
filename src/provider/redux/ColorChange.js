// ReduxSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    value: "#000", 
  },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload; 
    },
  },
});

export const { changeColor } = colorSlice.actions;