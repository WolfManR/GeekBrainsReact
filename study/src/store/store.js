import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import chatSlice from "./chatSlice";
import counterReducer from "./counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    chat: chatSlice,
    auth: authSlice
  },
  devTools: true,
});
