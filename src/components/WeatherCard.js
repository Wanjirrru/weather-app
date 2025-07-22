import { useEffect, useState } from 'react';
import { getWeatherByCity } from '../utils/api';

function WeatherCard({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherByCity(city);
        setWeather(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div className='bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto'>
      {error && <p className='text-red-500 text-center'>{error}</p>}
      {weather ? (
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-gray-800'>{weather.name}</h2>
          <p className='text-lg text-gray-600 capitalize'>
            {weather.weather[0].description}
          </p>
          <p className='text-3xl font-semibold text-blue-600'>
            {Math.round(weather.main.temp)}°C
          </p>
          <p className='text-sm text-gray-500'>
            Humidity: {weather.main.humidity}%
          </p>
        </div>
      ) : (
        <p className='text-center text-gray-500'>Loading...</p>
      )}
    </div>
  );
}

export default WeatherCard;
