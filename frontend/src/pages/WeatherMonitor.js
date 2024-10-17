import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherMonitor = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_API_KEY');
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Weather Monitoring</h1>
            {weatherData && (
                <div>
                    <p>Temperature: {weatherData.main.temp - 273.15}°C</p>
                    <p>Condition: {weatherData.weather[0].main}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherMonitor;
