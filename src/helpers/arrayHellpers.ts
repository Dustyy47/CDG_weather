import { CityInfo } from '../http/CitiesAPI'

function isObjectInArray<T extends object>(
  array: T[],
  obj: T,
  check?: (arrayItem: T, obj: T) => boolean
) {
  for (let item of array) {
    if (
      check ? check(item, obj) : JSON.stringify(item) === JSON.stringify(obj)
    ) {
      return true
    }
  }
  return false
}

export function isFavourite(
  favourites: CityInfo[] | undefined,
  city: CityInfo
) {
  if (!favourites) return false
  return isObjectInArray(favourites, city, (city1, city2) => {
    return city1.lat === city2.lat && city1.lon === city2.lon
  })
}
