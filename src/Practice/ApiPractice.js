import { useEffect, useState } from "react";

function ApiPractice() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const API_KEY = '8af80a1b9cf8adc5140d2ba27f5b5aed';
    const city = 'Nairobi';

    useEffect(() => {
        const fetchweather = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                );
                if (!response.ok) throw new Error('Failed to fetch weather data.');
                const data = await response.json();
                setWeather(data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchweather();
    }, []);
    return ( 
        <div>
            {error && <p className="text-red-500">{error}</p>}
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

export default ApiPractice;