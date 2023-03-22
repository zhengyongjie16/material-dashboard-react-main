import { weatherApi } from "redux/services/weather";
import { booksApi } from "../services/books";
import { moviesApi } from "../services/moviesDatabase";
import { queryIntercept } from "./queryIntercept";

const queryMiddlewareList = [
  weatherApi.middleware,
  moviesApi.middleware,
  booksApi.middleware,
  queryIntercept,
];

export { queryMiddlewareList };
