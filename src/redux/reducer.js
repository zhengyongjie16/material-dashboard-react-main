import { combineReducers } from "@reduxjs/toolkit";
import { booksApi } from "./services/books";
import { moviesApi } from "./services/moviesDatabase";
import { weatherApi } from "./services/weather";

export const createRootReducer = () =>
  combineReducers({
    [weatherApi.reducerPath]: weatherApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
  });
