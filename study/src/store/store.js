import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import chatSlice from "./chatSlice";
import counterReducer from "./counterSlice";
import { createLogger } from "redux-logger";

const functionDelay = (store) => (next) => (action) => {
  const delay = action?.payload?.meta?.delay;
  if (!delay) return next(action);
  const dispose = setTimeout(() => next(action), 200);
  return () => clearTimeout(dispose);
};

const logger = createLogger({
  duration: true
});

export default configureStore({
  reducer: {
    counter: counterReducer,
    chat: chatSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(functionDelay),
  devTools: true,
});
