import { v4 as uuidv4 } from 'uuid';
import { $cities, $citiesReverse } from '.';


export interface CityInfo {
  id:string
  name: string
  country: string
  lon: string
  lat: string
  local_names: Record<string, string>
  state: string
}

class CitiesAPI {
  private getCityWithId(city: CityInfo){
    return {...city,id:uuidv4()}
  }

  async getCitiesFromName(city: string) {
    const limit = 10
    const params = { q: city, limit }
    const { data } = await $cities.get<CityInfo[]>('', { params })
    return data.map(this.getCityWithId)
  }

  async getCityFromCoords(coords: { lon: number; lat: number }) {
    const limit = 10
    const params = { lon: coords.lon, lat: coords.lat, limit }
    const { data } = await $citiesReverse.get<CityInfo[]>('', { params })
    return data.map(this.getCityWithId)
  }
}

export default new CitiesAPI()
