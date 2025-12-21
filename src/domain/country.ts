import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

export class Country {
    constructor(
      public nombre: string,
      public bandera: string,
      public moneda: string,
      public codigo: string,
      public poblacion: number,
      public area: number,
      public capital: string,
      public timezone: string,
    ) {}
  
    get superpoblado() {
      return this.poblacion / this.area > 100
    }
  
    get queHoraEs() {
      return format(toZonedTime(new Date(), this.timezone.slice(3)), 'HH:mm:ss')
    }
  }