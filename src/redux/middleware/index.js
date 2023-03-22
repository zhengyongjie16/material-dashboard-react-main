import { weatherApi } from "redux/services/weather";
import { booksApi } from "../services/books";
import { moviesApi } from "../services/moviesDatabase";

const queryMiddlewareList = [weatherApi.middleware, moviesApi.middleware, booksApi.middleware];

export { queryMiddlewareList };
