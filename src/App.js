import React, { Component } from "react";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";
import "./App.css";

const APIKey = "1cdab72c35fc34cc944756e642515940";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    weather: "",
    weatherIcon: "",
    err: "",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error("nie udalo sie");
        })
        .then((response) => response.json())
        .then((data) => {
          const time = new Date().toLocaleString();
          this.setState((prevState) => ({
            err: false,
            date: time,
            city: this.state.value.toUpperCase(),
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            weather: data["weather"]["0"]["description"],
          }));
        })
        .catch((err) => {
          console.log(err);
          this.setState((prevState) => ({
            err: true,
            city: prevState.value,
          }));
        });
    }
  }
  render() {
    return (
      <div className="app">
        <a
          href="https://witoldandreasik.github.io/weather-app-hooks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check hooks version. Click here!
        </a>
        <Form value={this.state.value} change={this.handleInputChange} />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
