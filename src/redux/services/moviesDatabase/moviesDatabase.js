import { moviesApi } from ".";

const injectedRtkApi = moviesApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.mutation({
      query: ({ params }) => ({
        method: "GET",
        url: "moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids",
        headers: {
          "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
        params,
      }),
    }),
  }),
});

export const { useGetMoviesMutation } = injectedRtkApi;
export default injectedRtkApi;
