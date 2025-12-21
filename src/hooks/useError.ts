import { useState } from 'react'
import { getErrorMessage } from '../utils/utils'

export const useError = () => {
    const [errorMessage, setErrorMessage] = useState('')

    const errorsMessages = (error : unknown) => {
        const mensaje = getErrorMessage(error) 
          setErrorMessage(mensaje) 
          setTimeout(() => setErrorMessage(''), 5000) 
    }
    return {
        errorMessage,
        errorsMessages,
    }
}