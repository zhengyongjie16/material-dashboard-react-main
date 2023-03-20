import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://",
  }),
  endpoints: () => ({}),
});

export default testApi;
