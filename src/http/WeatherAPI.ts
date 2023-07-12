import { $weather } from ".";
import { Cityinfo } from "./CitiesAPI";


class WeatherAPI{
    async getWeatherFromCoords({lon,lat}:Cityinfo){
        const units = 'metric'
        const lang = 'ru'
        const params = {units,lang,lat,lon}
        const {data} =  await $weather.get('',{params})
        return data
    }
}

export default new WeatherAPI()