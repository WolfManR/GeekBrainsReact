import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import chatSlice from "./chatSlice";
import counterReducer from "./counterSlice";
import { createLogger } from "redux-logger";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const functionDelay = (store) => (next) => (action) => {
  const delay = action?.payload?.meta?.delay;
  if (!delay) return next(action);
  const dispose = setTimeout(() => next(action), 200);
  return () => clearTimeout(dispose);
};

const logger = createLogger({
  duration: true,
});

const reducers = combineReducers({
  counter: counterReducer,
  chat: chatSlice,
  auth: authSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(logger)
      .concat(functionDelay),
  devTools: true,
});
export const persistor = persistStore(store);
