import { CityInfo } from '../http/CitiesAPI'

export function getCityName(city: CityInfo) {
  return city.local_names && city.local_names['ru']
    ? city.local_names['ru']
    : city.name
}
