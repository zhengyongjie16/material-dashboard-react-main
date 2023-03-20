import axios from "axios";

const options = {
  method: "GET",
  url: "https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D",
  params: { units: "auto", lang: "en" },
  headers: {
    "X-RapidAPI-Key": "df9b2b7a64msh4330bf62623b01ap18f674jsnf4e7386c953c",
    "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
