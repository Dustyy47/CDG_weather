import { useCallback, useState } from 'react'
import { weatherDetailsFields } from '../data/weatherDetails'
import { useLocalState } from '../hooks/useLocalState'
import { CityInfo } from '../http/CitiesAPI'
import { WeatherDetails } from './WeatherDetails'
import { WeatherHeading } from './WeatherHeading'
import { WeatherMain } from './WeatherMain'
import { WeatherSettingsMemo } from './WeatherSettings'

const LS_SELECTED_WEATHER_DETAILS = 'selectedWeatherDetails'

export interface WeatherInfo {
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
  sys: {
    country: string
    sunset: number
  }
  name: string
  weather: WeatherTypeInfo[]
  timezone: number
}

export interface WeatherTypeInfo {
  id: number
  description: string
  main: string
}

function getAllAllowedDetails() {
  return weatherDetailsFields.map((field) => field.name)
}

export function WeatherDisplay({
  weatherInfo,
  activeCityInfo
}: {
  weatherInfo: WeatherInfo
  activeCityInfo: CityInfo
}) {
  const [selectedFields, setSelectedFields] = useLocalState<string[]>(
    LS_SELECTED_WEATHER_DETAILS,
    getAllAllowedDetails(),
    []
  )
  const [areSettingsOpen, setSettingsOpen] = useState(false)
  const handleCloseSettings = useCallback(() => {
    setSettingsOpen(false)
  }, [])

  return (
    <div className='bg-white w-full h-full  p-4 rounded-2 flex flex-col justify-between'>
      <div>
        <WeatherHeading
          weatherInfo={weatherInfo}
          activeCityInfo={activeCityInfo}
        />
        <div className='flex lg:flex-row sm:flex-col justify-between items-start md:h-[11.6875rem] sm:mb-3 '>
          <WeatherMain weatherInfo={weatherInfo} />
          <WeatherDetails
            weatherInfo={weatherInfo}
            selectedFields={selectedFields}
          />
        </div>
      </div>
      <div
        className='group flex cursor-pointer w-[10rem]'
        onClick={() => setSettingsOpen(true)}
      >
        <svg
          className='mr-2 w-4 fill-black group-hover:fill-blueAccent'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M14.925 9.49504C14.8047 9.35818 14.7384 9.18222 14.7384 9.00004C14.7384 8.81786 14.8047 8.64191 14.925 8.50504L15.885 7.42504C15.9908 7.30704 16.0565 7.15857 16.0726 7.00092C16.0888 6.84328 16.0546 6.68456 15.975 6.54754L14.475 3.95254C14.3962 3.81568 14.2761 3.7072 14.132 3.64256C13.9879 3.57791 13.8271 3.56041 13.6725 3.59254L12.2625 3.87754C12.0831 3.91461 11.8963 3.88474 11.7374 3.79354C11.5785 3.70235 11.4585 3.55616 11.4 3.38254L10.9425 2.01004C10.8922 1.86108 10.7963 1.73169 10.6685 1.64017C10.5406 1.54866 10.3872 1.49964 10.23 1.50004H7.22998C7.06643 1.49151 6.90458 1.53674 6.76916 1.62883C6.63373 1.72092 6.53217 1.85481 6.47998 2.01004L6.05998 3.38254C6.00148 3.55616 5.88146 3.70235 5.72257 3.79354C5.56367 3.88474 5.3769 3.91461 5.19748 3.87754L3.74998 3.59254C3.6034 3.57183 3.45396 3.59496 3.32049 3.65902C3.18703 3.72309 3.07551 3.82521 2.99998 3.95254L1.49998 6.54754C1.41835 6.68303 1.38165 6.84086 1.39512 6.99846C1.40859 7.15606 1.47154 7.30537 1.57498 7.42504L2.52748 8.50504C2.64772 8.64191 2.71403 8.81786 2.71403 9.00004C2.71403 9.18222 2.64772 9.35818 2.52748 9.49504L1.57498 10.575C1.47154 10.6947 1.40859 10.844 1.39512 11.0016C1.38165 11.1592 1.41835 11.3171 1.49998 11.4525L2.99998 14.0475C3.07881 14.1844 3.19882 14.2929 3.34292 14.3575C3.48702 14.4222 3.64785 14.4397 3.80248 14.4075L5.21248 14.1225C5.3919 14.0855 5.57867 14.1154 5.73757 14.2065C5.89646 14.2977 6.01648 14.4439 6.07498 14.6175L6.53248 15.99C6.58467 16.1453 6.68623 16.2792 6.82166 16.3713C6.95709 16.4633 7.11893 16.5086 7.28248 16.5H10.2825C10.4397 16.5004 10.5931 16.4514 10.721 16.3599C10.8488 16.2684 10.9447 16.139 10.995 15.99L11.4525 14.6175C11.511 14.4439 11.631 14.2977 11.7899 14.2065C11.9488 14.1154 12.1356 14.0855 12.315 14.1225L13.725 14.4075C13.8796 14.4397 14.0404 14.4222 14.1845 14.3575C14.3286 14.2929 14.4487 14.1844 14.5275 14.0475L16.0275 11.4525C16.1071 11.3155 16.1413 11.1568 16.1251 10.9992C16.109 10.8415 16.0433 10.693 15.9375 10.575L14.925 9.49504ZM13.8075 10.5L14.4075 11.175L13.4475 12.84L12.5625 12.66C12.0223 12.5496 11.4604 12.6414 10.9834 12.9179C10.5064 13.1944 10.1476 13.6364 9.97498 14.16L9.68998 15H7.76998L7.49998 14.145C7.32737 13.6214 6.96852 13.1794 6.49154 12.9029C6.01455 12.6264 5.45265 12.5346 4.91248 12.645L4.02748 12.825L3.05248 11.1675L3.65248 10.4925C4.02145 10.08 4.22543 9.54599 4.22543 8.99254C4.22543 8.43909 4.02145 7.90506 3.65248 7.49254L3.05248 6.81754L4.01248 5.16754L4.89748 5.34754C5.43765 5.45796 5.99955 5.3662 6.47654 5.08969C6.95352 4.81318 7.31237 4.37116 7.48498 3.84754L7.76998 3.00004H9.68998L9.97498 3.85504C10.1476 4.37866 10.5064 4.82068 10.9834 5.09719C11.4604 5.3737 12.0223 5.46546 12.5625 5.35504L13.4475 5.17504L14.4075 6.84004L13.8075 7.51504C13.4427 7.92661 13.2412 8.45755 13.2412 9.00754C13.2412 9.55753 13.4427 10.0885 13.8075 10.5ZM8.72998 6.00004C8.13664 6.00004 7.55662 6.17599 7.06327 6.50563C6.56992 6.83528 6.18541 7.30381 5.95834 7.85199C5.73128 8.40017 5.67187 9.00337 5.78763 9.58531C5.90338 10.1673 6.18911 10.7018 6.60866 11.1214C7.02822 11.5409 7.56277 11.8266 8.14471 11.9424C8.72666 12.0582 9.32985 11.9987 9.87803 11.7717C10.4262 11.5446 10.8947 11.1601 11.2244 10.6668C11.554 10.1734 11.73 9.59339 11.73 9.00004C11.73 8.20439 11.4139 7.44133 10.8513 6.87872C10.2887 6.31611 9.52563 6.00004 8.72998 6.00004ZM8.72998 10.5C8.43331 10.5 8.1433 10.4121 7.89663 10.2472C7.64995 10.0824 7.4577 9.84816 7.34416 9.57407C7.23063 9.29998 7.20093 8.99838 7.25881 8.70741C7.31668 8.41644 7.45954 8.14916 7.66932 7.93938C7.8791 7.7296 8.14638 7.58674 8.43735 7.52887C8.72832 7.47099 9.02992 7.50069 9.30401 7.61422C9.5781 7.72776 9.81237 7.92001 9.97719 8.16669C10.142 8.41336 10.23 8.70337 10.23 9.00004C10.23 9.39787 10.0719 9.7794 9.79064 10.0607C9.50934 10.342 9.12781 10.5 8.72998 10.5Z' />
        </svg>
        <p className='regular group-hover:text-blueAccent'>Настройки погоды</p>
      </div>

      <WeatherSettingsMemo
        isOpen={areSettingsOpen}
        onClose={handleCloseSettings}
        selectedFields={selectedFields}
        onChangeFields={setSelectedFields}
      />
    </div>
  )
}
