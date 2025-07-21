import { useState } from 'react';

function WeatherInput() {
    const [city, setCity] = useState('');

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return ( 
        <div className="p-4">
            <input
                type="text"
                value={city}
                onChange={handleCityChange}
                className="border rounded p-2 mr-2"
                placeholder="Enter city name"
            />
            <button className="bg-blue-500 text-white p-2 rounded">
                Get Weather
            </button>
        </div>
     );
}

export default WeatherInput;