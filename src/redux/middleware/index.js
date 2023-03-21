import { weatherApi } from "redux/services/weather";
import { booksApi } from "../services/books";
import { financeApi } from "../services/finance";
import { moviesApi } from "../services/moviesDatabase";

const queryMiddlewareList = [
  weatherApi.middleware,
  moviesApi.middleware,
  financeApi.middleware,
  booksApi.middleware,
];

export { queryMiddlewareList };
