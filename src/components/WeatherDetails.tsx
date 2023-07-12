import { ReactElement, useMemo } from 'react'
import { weatherDetailsFields } from '../data/weatherDetails'
import { WeatherInfo } from './WeatherDisplay'

export interface WeatherDetailsField {
  icon: ReactElement
  name: string
  label: string
  formatValue: (weatherInfo: WeatherInfo) => string
}

export function WeatherDetails({
  selectedFields,
  weatherInfo
}: {
  selectedFields: string[]
  weatherInfo: WeatherInfo
}) {
  const weatherDetails = useMemo(() => {
    return weatherDetailsFields.filter((field) =>
      selectedFields.includes(field.name)
    )
  }, [selectedFields])
  return (
    <div className='p-4 w-[24.0625rem] min-h-[11.6875rem] bg-blueLight3 rounded-1'>
      {weatherDetails.map((field) => (
        <div
          key={field.name}
          className='flex justify-between border-b-[.0625rem] border-grey3 last:border-b-0 py-1'
        >
          <div className='flex items-center'>
            <div className='[&>svg]:fill-black [&>svg]:w-[.875rem] mr-2 '>
              {field.icon}
            </div>
            <p className='regular'>{field.label}</p>
          </div>
          <p className='regular'>{field.formatValue(weatherInfo)}</p>
        </div>
      ))}
    </div>
  )
}
