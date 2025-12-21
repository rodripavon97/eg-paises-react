import { useCallback, useRef } from 'react'
import { useOnInit } from './useOnInit'

export const useDebounce = (callback: (...args: unknown[]) => void, wait: number) => {
    // Guardamos la referencia del timeout para que persista entre renders
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  
    // Limpiamos el timeout si el componente se desmonta para evitar fugas de memoria
    useOnInit(() => { return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }})
  
  
    return useCallback((...args: unknown[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
  
      timeoutRef.current = setTimeout(() => {
        callback(...args)
      }, wait)
    }, [callback, wait])
  }