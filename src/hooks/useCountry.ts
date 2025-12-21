import { useRef, useState } from 'react'
import type { Country } from '../domain/country'
import { countryService } from '../services/countryService'
import { useError } from './useError'

export const useCountry = () => {
    const [paisBusqueda, setPaisBusqueda] = useState('') 
    const {errorsMessages} = useError()
    const [busquedaAutomatica, setBusquedaAutomatica] = useState(false) 
    const [paises, setPaises] = useState<Country[]>([])     
    const timeoutRef = useRef<number | null>(null) 

    const buscar = async () => {
        try {
          const resultado = await countryService.buscarPais(paisBusqueda) 
          setPaises(resultado) 
        } catch (error: unknown) {
          errorsMessages(error)
        }
      } 

    return {
        paisBusqueda,
        setPaisBusqueda,
        busquedaAutomatica,
        setBusquedaAutomatica,
        paises,
        setPaises,
        timeoutRef,
        buscar,
    }
}