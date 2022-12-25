import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const playingSlice = createSlice({
  name: "playing",
  initialState,
  reducers: {
    change: (state) => {
      state.value = !state.value
    },
  },
});

export const { change } = playingSlice.actions;

export default playingSlice.reducer;