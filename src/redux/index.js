import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { queryMiddlewareList } from "./middleware";
import createRootReducer from "./reducer";

export const store = configureStore({
  reducer: createRootReducer(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(queryMiddlewareList),
});

setupListeners(store.dispatch);
