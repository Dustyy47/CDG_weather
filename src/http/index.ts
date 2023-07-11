import axios from "axios";

export const $cities = axios.create({
    method: 'GET',
    baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=""',
    headers: {
        'X-RapidAPI-Key': 'ab17b51627msha68589134c53118p14e74ejsn1bed8fc12470',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
})