import { AxiosError } from 'axios'
import { PUBLIC_REGION } from './constants'

export const formatearEntero = (numero: number) =>
  new Intl.NumberFormat(PUBLIC_REGION, { minimumFractionDigits: 0 }).format(numero)

export const getErrorMessage = (error: unknown) => {
  if (error instanceof AxiosError) {
     
    console.error(error)
    if ((error.status ?? 0) >= 500) {
      return 'Ocurrió un error, consulte al administrador del sistema'
    }
    if (error.status === 404) {
      return 'No se encontró el enlace al origen de datos'
    }
    return error.message
  }
  return (error as Error).message
}