import { financeApi } from ".";

const injectedRtkApi = financeApi.injectEndpoints({
  // 1
  endpoints: (builder) => ({
    getQuotes: builder.mutation({
      query: ({ params }) => ({
        url: "/v2/get-quotes",
        headers: {
          "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
          "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
        },
        params,
      }),
    }),

    // 2
    getMovers: builder.mutation({
      query: ({ params }) => ({
        url: "/v2/get-movers",
        headers: {
          "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
          "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
        },
        params,
      }),
    }),

    // 3
    getSummary: builder.query({
      query: ({ params }) => ({
        url: "/v2/get-summary",
        headers: {
          "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
          "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
        },
        params,
      }),
    }),
  }),
});

export const { useGetQuotesMutation, useGetMoversMutation, useGetSummaryQuery } = injectedRtkApi;
export default injectedRtkApi;
