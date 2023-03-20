import { testApi } from ".";

const weatherApi = testApi.injectEndpoints({
  endpoints: (builder) => ({
    getWeather: builder.mutation({
      query: ({ params }) => ({
        method: "GET",
        url: "visual-crossing-weather.p.rapidapi.com/forecast",
        params,
        headers: {
          "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
          "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
        },
      }),
    }),
  }),
});

export const { useGetWeatherMutation } = weatherApi;
export default weatherApi;
