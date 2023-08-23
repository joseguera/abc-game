import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 'eng',
};

export const languageSlice = createSlice({
  name: "playing",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { change } = languageSlice.actions;

export default languageSlice.reducer;