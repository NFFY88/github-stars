import { combineReducers, configureStore } from "@reduxjs/toolkit";
import repositoriesReducer from "./slices/repositories/repositoriesSlice";
import { NameSpace } from "./namespace";

const rootReducer = combineReducers({
  [NameSpace.Repositories]: repositoriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
