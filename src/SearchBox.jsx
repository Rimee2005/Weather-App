import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");

  let API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  let API_KEY = "cfc1275edcc39c09e6146be7de24550a";

  let getWeatherData = async (city) => {
    try {
      let res = await fetch(
        `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRes = await res.json();
      let result = {
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        weather:
          jsonRes.weather[0].description.charAt(0).toUpperCase() +
          jsonRes.weather[0].description.slice(1),
        city: city.charAt(0).toUpperCase() + city.slice(1),
      };
      return result;
    } catch (err) {
      console.error("Error fetching weather data:", err);
      throw err;
    }
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    if (city) {
      try {
        let weatherData = await getWeatherData(city);
        updateInfo(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
      setCity(""); // Reset input field
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" type="submit" style={{ marginLeft: "10px", marginTop:"10px"}}>
          Search
        </Button>
      </form>
    </div>
  );
}
