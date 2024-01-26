import "./App.css";
import { useState } from "react";
import sunny from './images/sunny.png';
import clouds from './images/clouds.png';
import rainImage from './images/rain.png';

const api = {
  key: "433cf549fbf24a1b83663260599fec4a",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");

  const pressed = () => {
    
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="form">
          <h1>Weather App</h1>
          <div className="flex">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Country / City "
            />
            <button onClick={pressed}>search</button>
          </div>

          {typeof weather.main !== "undefined" ? (
            <div>
              <p>{weather.name}</p>
              <p>{weather.main.temp}°C</p>
              <p>{weather.weather[0].main}</p>
              
              {weather.weather[0].main === "Clear" && (
                <img src={sunny} alt="Sunny" />
              )}
              {weather.weather[0].main === "Clouds" && (
                <img src={clouds} alt="Clouds" />
              )}
              {weather.weather[0].main === "Rain" && (
                <img src={rainImage} alt="Rain" />
             )}
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
