import { useState, useEffect } from "react";
import axios from "axios";
const Lab6 = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const city = "Hyderabad"; //Replace with any city name
    const apiKey = "61a1d8419f9d307924240958d89e284d"; // Replace withyour actual OpenWeatherMap API key
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
                );
                setWeather(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchWeather();
    }, []);
    if (loading) return <p>Loading weather...</p>;
    if (error) return <p>Error fetching weather: {error.message}</p>;
    return (
        <div>
            <h2>Weather in {weather.name}</h2>
            <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
        </div>
    );
};
export default Lab6;
