import { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosPractice() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = '8af80a1b9cf8adc5140d2ba27f5b5aed'; // Replace with your key
  const city = 'Paris'; // Test city

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div>
      {error && <p className='text-red-500'>{error}</p>}
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AxiosPractice;
