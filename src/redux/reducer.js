import { combineReducers } from "@reduxjs/toolkit";
import { financeApi } from "./services/finance";
import { moviesApi } from "./services/moviesDatabase";
import { weatherApi } from "./services/weather";

export const createRootReducer = () =>
  combineReducers({
    [weatherApi.reducerPath]: weatherApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [financeApi.reducerPath]: financeApi.reducer,
  });
