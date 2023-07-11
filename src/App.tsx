import axios from 'axios'
import { useEffect, useState } from 'react'

const key = process.env.REACT_APP_WEATHER_API_KEY
const uriCity = (city: string) =>
  `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`
let cityData = { lat: 0, lon: 0 }
const uriWeather = () =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&units=metric&lang=ru&appid=${key}`

interface WeatherInfo {
  id: number
  description: string
  main: string
}

interface FullWeatherInfo {
  name: string
  sys: {
    country: string
  }
  coord: {
    lon: number
    lat: number
  }
  main: {
    temp: number
    feels_like: number
    humidity: number
    pressure: number
  }
  wind: {
    speed: number
  }
  weather: WeatherInfo[]
}

function getWeatherImage(weather: WeatherInfo | undefined) {
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

interface WeatherDisplayProps {
  info: FullWeatherInfo
}

function WeatherDisplay({ info }: WeatherDisplayProps) {
  const weather = info.weather[0]
  const temperature = info.main.temp

  return (
    <div>
      <img
        className='w-[5rem]'
        src={getWeatherImage(weather)}
        alt={weather.description}
      />
      <p>{weather.description}</p>
      <p>{(temperature > 0 ? '+' : '') + temperature.toFixed()}</p>
      <div className='w-[10rem]'>{JSON.stringify(info.main, null, 2)}</div>
    </div>
  )
}

async function getWeather(city: string) {
  if (!city) return null
  const cityRes = await axios.get(uriCity(city))
  cityData = cityRes.data[0]
  if (!cityData) return null
  console.log(cityData)
  const weatherRes = await axios.get(uriWeather())
  console.log(weatherRes.data)
  return weatherRes.data
}

function App() {
  const [weatherInfo, setWeatherInfo] = useState<FullWeatherInfo | null>(null)
  const [city, setCity] = useState('Moscow')

  useEffect(() => {
    async function foo() {
      const weather = await getWeather(city)
      setWeatherInfo(weather)
    }
    foo()
  }, [city])

  return (
    <div className='container'>
      <p className='h1'>Актуальная погода</p>
      <input
        type='text'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {weatherInfo && <WeatherDisplay info={weatherInfo} />}
    </div>
  )
}

export default App
