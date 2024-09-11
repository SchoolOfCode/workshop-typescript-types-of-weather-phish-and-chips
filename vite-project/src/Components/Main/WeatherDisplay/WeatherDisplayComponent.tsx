import style from "./WeatherDisplayComponent.module.css";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
  }>;
}

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
}

export default function WeatherDisplayComponent({
  weatherData,
}: WeatherDisplayProps) {
  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  return (
    <section className={style.weatherContainer}>
      <article>
        <h2>{weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Weather: {weatherData.weather[0].main}</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
      </article>
    </section>
  );
}
