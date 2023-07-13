import { $weather } from '.'
import { WeatherInfo } from '../components/WeatherDisplay'
import { CityInfo } from './CitiesAPI'

class WeatherAPI {
  async getWeatherFromCoords({ lon, lat }: CityInfo) {
    const units = 'metric'
    const lang = 'ru'
    const params = { units, lang, lat, lon }
    const { data } = await $weather.get<WeatherInfo>('', { params })
    return data
  }
}

export default new WeatherAPI()
