import style from "./CitySearchComponent.module.css";
import { useState } from "react";
// import WeatherDisplayComponent from "../WeatherDisplay/WeatherDisplayComponent";

interface CitySearchProps {
  updateWeatherData: (data: any) => void;
}

export default function CitySearchComponent({
  updateWeatherData,
}: CitySearchProps) {
  const [city, setCity] = useState("London");

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  function handleClick() {
    console.log("Current city:", city);
    fetchWeatherData(city);
  }
  // const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast?";
  // const API_KEY = "939330dbf7ee7dcea73fc37f518cd7d0";

  async function fetchWeatherData(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=939330dbf7ee7dcea73fc37f518cd7d0&units=metric`;

    // const url = `${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      updateWeatherData(data);
      console.log("Weather data:", data);
      console.log(data.main.temp);

      // Here you can update your state or pass the data to a parent component
    } catch (error) {
      console.error("Error fetching weather data:", error);
      updateWeatherData(null);
    }
  }

  return (
    <form onSubmit={submitForm}>
      <div className={style.searchContainer}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          className={style.inputDesign}
        />

        <button className={style.btnDesign} onClick={handleClick}>
          Search
        </button>
      </div>
    </form>
  );
}
