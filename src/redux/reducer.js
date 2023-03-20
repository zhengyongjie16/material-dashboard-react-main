import { combineReducers } from "@reduxjs/toolkit";
import testApi from "./services/test";

const createRootReducer = () =>
  combineReducers({
    [testApi.reducerPath]: testApi.reducer,
  });

export default createRootReducer;
