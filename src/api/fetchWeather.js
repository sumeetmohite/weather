import axios from 'axios';

// const URL = 'https://api.openweathermap.org/data/2.5/weather';
const URL = 'http://api.openweathermap.org/data/2.5/forecast';
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API;

export const fetchWeather = async(query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: WEATHER_API_KEY,
        }
    });
    return data;
}