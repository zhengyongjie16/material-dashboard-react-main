import { testApi } from ".";

const injectedRtkApi = testApi.injectEndpoints({
  endpoints: (builder) => ({
    getWeather: builder.mutation({
      query: ({ params }) => ({
        method: "GET",
        url: "http://visual-crossing-weather.p.rapidapi.com/forecast",
        headers: {
          "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
          "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
        },
        params,
      }),
    }),
  }),
});

export const { useGetWeatherMutation } = injectedRtkApi;
export default injectedRtkApi;
