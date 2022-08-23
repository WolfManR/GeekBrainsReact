import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {},
  reducers: {},
});

export const {} = chatSlice.actions;

export const selectChat = (state) => state;

export default chatSlice.reducer;
