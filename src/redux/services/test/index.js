import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({
    //baseUrl: "http://",
  }),
  endpoints: () => ({}),
});
