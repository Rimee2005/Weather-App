import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./Weather.css";

export default function Weather() {
  let [weatherInfo, setWeatherInfo] = useState(null);

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <h2 style={{ marginLeft:"600px", color: "#1976d2" }}>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      {weatherInfo && <InfoBox info={weatherInfo} />}
      <div className="footer">
        Git Repo:{" "}
        <a href="" target="_blank">
          Click Here!
        </a>{" "}
        | LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/rimjhim-jha-b1b86b301/"
          target="_blank"
        >
          Click Here!
        </a>
      </div>
    </div>
  );
}
