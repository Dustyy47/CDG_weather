import { $cities } from ".";

export interface Cityinfo{
    name: string,
    country:string,
    lon: string,
    lat: string
    local_names: Record<string,string>
}

class CitiesAPI{
    async getCitiesFromName(city:string){
        const limit = 5;
        const params = {q:city,limit}
        const {data} =  await $cities.get<Cityinfo[]>('',{params})
        return data
    }
}

export default new CitiesAPI()