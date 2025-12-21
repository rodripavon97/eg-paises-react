export interface CountryAPIResponse {
    flags: { svg: string } 
    name: { common: string } 
    translations: { [key: string]: { common: string } } 
    currencies: { [key: string]: { name: string ; symbol: string } } 
    cioc?: string 
    ccn3?: string 
    population: number 
    area: number 
    capital?: string[] 
    timezones: string[] 
  }