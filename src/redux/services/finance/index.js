import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const financeApi = createApi({
  reducerPath: "financeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://yh-finance.p.rapidapi.com/market",
  }),
  endpoints: () => ({}),
});
