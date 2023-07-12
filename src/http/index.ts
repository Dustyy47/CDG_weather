import axios from "axios";

const openweatherToken = process.env.REACT_APP_WEATHER_API_KEY 

export const $cities = axios.create({
    baseURL: `https://api.openweathermap.org/geo/1.0/direct?appid=${openweatherToken}`,
})

export const $weather = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?appid=${openweatherToken}`,
})
