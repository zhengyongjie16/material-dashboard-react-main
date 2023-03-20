/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router components
import { Routes, Route, Navigate } from "react-router-dom";

// Material Dashboard 2 React routes
import routes from "routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController } from "context";

import LayoutsRtl from "layouts/Layouts/LayoutsRtl";
import LayoutsRtr from "layouts/Layouts/LayoutsRtr";
import { useGetWeatherMutation } from "redux/services/test/weather";
import axios from "axios";
import { useEffect } from "react";

export default function App() {
  const [controller] = useMaterialUIController();
  const { direction } = controller;
  const [getWeather] = useGetWeatherMutation();

  useEffect(() => {
    getWeather({
      params: {
        aggregateHours: "24",
        location: "Washington,DC,USA",
        contentType: "csv",
        unitGroup: "us",
        shortColumnNames: "0",
      },
    })
      .unwrap()
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getWeather]);

  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
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
      })
      .then((response) => {
        console.log("data", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });

  return direction === "rtl" ? (
    <LayoutsRtl>
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </LayoutsRtl>
  ) : (
    <LayoutsRtr>
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </LayoutsRtr>
  );
}
