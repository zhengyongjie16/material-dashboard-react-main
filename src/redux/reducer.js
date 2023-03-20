import { combineReducers } from "@reduxjs/toolkit";
import { testApi } from "./services/test";

export const createRootReducer = () =>
  combineReducers({
    [testApi.reducerPath]: testApi.reducer,
  });
