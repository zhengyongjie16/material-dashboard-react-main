import { moviesApi } from ".";

const injectedRtkApi = moviesApi.injectEndpoints({
  endpoints: (builder) => ({
    getMoviesById: builder.mutation({
      query: ({ params }) => ({
        method: "GET",
        url: "/x/titles-by-ids",
        headers: {
          "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
        params,
      }),
    }),

    getMoviesTitles: builder.mutation({
      query: () => ({
        method: "GET",
        url: "/",
        headers: {
          "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      }),
    }),
  }),
});

export const { useGetMoviesByIdMutation, useGetMoviesTitlesMutation } = injectedRtkApi;
export default injectedRtkApi;
