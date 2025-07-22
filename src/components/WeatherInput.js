import { useState } from 'react';

function WeatherInput() {
    const [city, setCity] = useState('');

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return ( 
        <div className=" float float-right p-8 bg-pink-300 min-h-screen">
            <input
                type="text"
                value={city}
                onChange={handleCityChange}
                className="border rounded p-2 mr-2"
                placeholder="Enter city name"
            />
            <button className="bg-pink-200 text-gray-500 p-2 rounded">
                Get Weather
            </button>
        </div>
     );
}

export default WeatherInput;