import axios from 'axios' 
import { Country } from '../domain/country'
import { PUBLIC_API_BASE_URL, PUBLIC_API_VERSION } from '../utils/constants'
import type { CountryAPIResponse } from '../domain/countryApiResponse'

class CountryService {
    async buscarPais(paisBusqueda: string): Promise<Country[]> {
      const response = await axios.get(`${PUBLIC_API_BASE_URL}/${PUBLIC_API_VERSION}/name/${paisBusqueda}`) 
      const data: CountryAPIResponse[] = await response.data
      return data.map(toPais)
    
    }
  
    async datosDePais(codigoDePais: string): Promise<Country> {
      const response = await axios.get(`${PUBLIC_API_BASE_URL}/${PUBLIC_API_VERSION}/alpha/${codigoDePais}`) 
      const data: CountryAPIResponse[] = await response.data
      return toPais(data[0]) 
    }
  } 

  const toPais = (data: CountryAPIResponse): Country => {
    const { flags, name, translations, currencies, cioc, ccn3, population, area, capital, timezones } = data 
    const keysCurrencies = Object.keys(currencies ?? {}) 
    const countryName = translations?.['spa']?.common ?? name?.common 
    const currency = keysCurrencies?.length ? currencies[keysCurrencies[0]].name : '' 
    
    return new Country(
      countryName,
      flags.svg,
      currency,
      cioc ?? ccn3 ?? '',
      population,
      area,
      capital?.[0] ?? '',
      timezones[0]
    ) 
  }

  export const countryService = new CountryService()