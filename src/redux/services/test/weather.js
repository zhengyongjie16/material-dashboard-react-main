import testApi from ".";

const weatherApi = testApi.injectEndpoints({
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: () => ({
        method: "GET",
        url: "visual-crossing-weather.p.rapidapi.com/forecast",
        params: {
          aggregateHours: "24",
          location: "Washington,DC,USA",
          contentType: "csv",
          unitGroup: "us",
          shortColumnNames: "0",
        },
        headers: {
          "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
          "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
        },
      }),
    }),
  }),
});

export default weatherApi;
