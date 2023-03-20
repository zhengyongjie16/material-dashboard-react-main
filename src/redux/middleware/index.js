import { weatherApi } from "redux/services/weather";
import { moviesApi } from "../services/moviesDatabase";

const queryMiddlewareList = [weatherApi.middleware, moviesApi.middleware];

export { queryMiddlewareList };
