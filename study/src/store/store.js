import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import chatSlice from "./chatSlice";
import counterReducer from "./counterSlice";
import logger from "@reduxjs/logger";

const functionDelay = (store) => (next) => (action) => {
  const delay = action?.payload?.meta?.delay;
  if (!delay) return next(action);
  const dispose = setTimeout(() => next(action), 200);
  return () => clearTimeout(dispose);
};

export default configureStore({
  reducer: {
    counter: counterReducer,
    chat: chatSlice,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
    .concat(functionDelay),
  devTools: true,
});
