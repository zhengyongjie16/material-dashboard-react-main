import { booksApi } from ".";

const injectedRtkApi = booksApi.injectEndpoints({
  endpoints: (builder) => ({
    // 1
    getNominatedBooks: builder.mutation({
      query: ({ genre, year }) => ({
        method: "GET",
        url: `/nominees/${genre}/${year}`,
        headers: {
          "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
          "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
        },
      }),
    }),

    // 2
    searchBooksByName: builder.mutation({
      query: ({ name }) => {
        const newName = name.replace(/\s+/g, "+");
        return {
          method: "GET",
          url: `/search/${newName}`,
          headers: {
            "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
            "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
          },
        };
      },
    }),

    // 3
    getAwardedBooksOfYear: builder.mutation({
      query: ({ year }) => {
        return {
          method: "GET",
          url: `/top/${year}`,
          headers: {
            "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
            "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
          },
        };
      },
    }),

    // 4
    getPopularBooks: builder.mutation({
      query: ({ year }) => {
        return {
          method: "GET",
          url: `/month/${year}/3`,
          headers: {
            "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
            "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
          },
        };
      },
    }),
  }),
});

export const {
  useGetNominatedBooksMutation,
  useSearchBooksByNameMutation,
  useGetAwardedBooksOfYearMutation,
  useGetPopularBooksMutation,
} = injectedRtkApi;
export default injectedRtkApi;
