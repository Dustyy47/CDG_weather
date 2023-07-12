import { WeatherTypeInfo } from "../components/WeatherDisplay"

export function getWeatherImage(weather: WeatherTypeInfo | undefined) {
    if (!weather) return ''
    const { id } = weather
    function getWeatherTypeImg(name: string) {
      return './images/weatherTypes/' + name
    }
    if (id === 800) {
      return getWeatherTypeImg('clear.png')
    } else if (/80./g.test('' + id)) {
      return getWeatherTypeImg('cloudy.png')
    } else if (/5../g.test('' + id)) {
      return getWeatherTypeImg('rainy.png')
    } else if (/7../g.test('' + id)) {
      return getWeatherTypeImg('atmosphere.png')
    } else if (/6../g.test('' + id)) {
      return getWeatherTypeImg('snowy.png')
    } else if (/2../g.test('' + id)) {
      return getWeatherTypeImg('thunderstorm.png')
    }
    return ''
  }