import React, {useState, useEffect}from "react";
import "../Assets/Css/Card.css";
import Spinner from "./Spinner.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDroplet,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import nube from "../Assets/Img/nube.png"


function Card({ loadingData, showData, weather, forecast }) {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = day + "/" + month + "/" + year;

  let url,
    iconUrl,
    iconUrl3,
    iconUrl6,
    iconUrl9,
    forecastDate3,
    forecastDate6,
    forecastDate9 = "";

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 = forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(11, 13);
  }

  return (
    <div className="card-container" data-aos="zoom-in">
      {showData === true ? (
        <div>
          <div className="card">
            <div className="weather-container">
              <p className="city">
                {weather.name}, {weather.sys.country}
              </p>

              <p className="temperature">
                {(weather.main.temp - 273.15).toFixed(1)}°C
              </p>
              <img src={iconUrl} alt="" className="weather-img" />
              <p className="weather-icon">{weather.weather[0].description}</p>
            </div>
            <div className="weather-aditional">
              <p>
                <span className="icon">
                  <FontAwesomeIcon icon={faTemperatureArrowUp} />
                </span>
                Max: {(weather.main.temp_max - 273.15).toFixed(1)}°C
              </p>
              <p>
                <span className="icon">
                  <FontAwesomeIcon icon={faTemperatureArrowDown} />
                </span>
                Min: {(weather.main.temp_min - 273.15).toFixed(1)}°C
              </p>
              <p>
                <span className="icon">
                  <FontAwesomeIcon icon={faDroplet} />
                </span>
                Humidity: {weather.main.humidity}%
              </p>
              <p>
                <span className="icon">
                  <FontAwesomeIcon icon={faWind} />
                </span>
                Wind: {weather.wind.speed}m/s
              </p>
            </div>
          </div>
          <div className="forecast">
            <p className="forecast-title">Forecast:</p>
            <div className="forecast-container">

              <div className="forecast-info">
                <p className="forecast-date">{forecastDate3}h</p>
                <p className="forecast-description">
                  {forecast.list[1].weather[0].description}
                </p>
                <p className="forecast-temperature">
                  {(forecast.list[1].main.temp - 273.15).toFixed(1)}°C
                </p>
                <img src={iconUrl3} alt="" />
              </div>

              <div className="forecast-info">
                <p className="forecast-date">{forecastDate6}h</p>
                <p className="forecast-description">
                  {forecast.list[2].weather[0].description}
                </p>
                <p className="forecast-temperature">
                  {(forecast.list[2].main.temp - 273.15).toFixed(1)}°C
                </p>
                <img src={iconUrl6} alt="" />
              </div>

              <div className="forecast-info">
                <p className="forecast-date">{forecastDate9}h</p>
                <p className="forecast-description">
                  {forecast.list[3].weather[0].description}
                </p>
                <p className="forecast-temperature">
                  {(forecast.list[3].main.temp - 273.15).toFixed(1)}°C
                </p>
                <img src={iconUrl9} alt="" />
              </div>

            </div>
          </div>
        </div>
      ) : (
        <div className="homepage" data-aos="zoom-in">
          <img src={nube} alt="" className="homepage-img"/>
          <p className="insert-location" data-aos="zoom-in">Hello! Please insert your location</p>
        </div>
          
    
      )}
    </div>
  );
}

export default Card;
