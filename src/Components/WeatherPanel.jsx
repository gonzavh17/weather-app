import React, { useState } from "react";
import Form from "./Form.jsx";
import Card from "./Card.jsx";
import "../Assets/Css/WeatherPanel.css";

function WeatherPanel() {
  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?appid=852d43c96c1c12615cfe00fc0f0e1115&lang=es";
  let cityUrl = "&q=";

  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=852d43c96c1c12615cfe00fc0f0e1115&lang=es";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");

  // const errorAlert = () => {
  //   swal({
  //     icon: "error",
  //     title: "Oops...",
  //     text: "Something went wrong! Please insert a valid Location.",
  //     customClass: {
  //       container: 'my-swal-alert'
  //     }
  //   });
  // };

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    urlWeather = urlWeather + cityUrl + loc;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
        // errorAlert();
      });

    urlForecast = urlForecast + cityUrl + loc;

    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((forecastData) => {
        console.log(forecastData);
        setForecast(forecastData);

        setLoading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });
  };

  return (
    <div className="weather-panel-container">
      <Form newLocation={getLocation} />

      <Card
        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
      />
    </div>
  );
}

export default WeatherPanel;
