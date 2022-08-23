import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import counterReducer from "./counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    chat: chatSlice
  },
  devTools: true,
});
