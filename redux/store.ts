import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const middleware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
