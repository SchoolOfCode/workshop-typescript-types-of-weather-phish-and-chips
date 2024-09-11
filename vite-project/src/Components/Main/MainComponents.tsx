import { useState } from "react";
import CitySearchComponent from "./CitySearch/CitySearchComponent";
import WeatherDisplayComponent from "./WeatherDisplay/WeatherDisplayComponent";
import style from "./MainComponents.module.css";

export default function MainComponents() {
  const [weatherData, setWeatherData] = useState(null);

  const updateWeatherData = (data: any) => {
    setWeatherData(data);
  };
  return (
    <main className={style.mainContainer}>
      <CitySearchComponent updateWeatherData={updateWeatherData} />
      <WeatherDisplayComponent weatherData={weatherData} />
    </main>
  );
}
