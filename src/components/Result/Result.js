import React from "react";
import "./Result.css";
const Result = (props) => {
  const {
    err,
    city,
    temp,
    pressure,
    wind,
    sunrise,
    sunset,
    weather,
    date,
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <>
        <p>
          <span>Results for:</span> {city}
        </p>{" "}
        <hr />
        <p>
          <span>Date and data time:</span> {date}
        </p>
        <p>
          <span>Weather:</span> {weather}
        </p>
        <p>
          <span>Temperature:</span> {temp} &#176;C
        </p>
        <p>
          <span>Sunrise: </span>
          {sunriseTime}
        </p>
        <p>
          <span>Sunset:</span> {sunsetTime}
        </p>
        <p>
          <span>Wind:</span> {wind} m/s
        </p>
        <p>
          <span>Pressure:</span> {pressure} hPa
        </p>
      </>
    );
  }

  return (
    <div className="result">
      {err ? `We can't find data of ${city}` : content}
    </div>
  );
};

export default Result;
