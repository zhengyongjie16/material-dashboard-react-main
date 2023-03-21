import { weatherApi } from "redux/services/weather";
import { financeApi } from "../services/finance";
import { moviesApi } from "../services/moviesDatabase";

const queryMiddlewareList = [weatherApi.middleware, moviesApi.middleware, financeApi.middleware];

export { queryMiddlewareList };
