import type React from 'react'
import { Flag } from '../../components/flag/flag'
import { useCountry } from '../../hooks/useCountry'
import { useError } from '../../hooks/useError'
import { useDebounce } from '../../hooks/useDebounce'
import { useCountrySearch } from '../../hooks/useSearch'

export const CountryPage = () => {
    const { paisBusqueda, setPaisBusqueda, busquedaAutomatica, setBusquedaAutomatica, paises, buscar} = useCountry()
    const { errorMessage} = useError()
    const debouncedSearch = useDebounce(buscar, 1000)
        
    const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && paisBusqueda.trim() !== '') {
        buscar()
      }
    } 
    useCountrySearch(paisBusqueda, busquedaAutomatica, debouncedSearch)
  
    const buscarHabilitado = paisBusqueda.trim() !== '' 
    
    
    return (
      <div className= 'min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 '>
        <div className= 'max-w-6xl mx-auto '>
          <div className= 'mb-8 '>
            <h2 className= 'text-4xl font-bold text-gray-800 '>Países</h2>
          </div>
          
          <div className= 'flex gap-4 mb-4 '>
            <input
              data-testid= 'paisBusqueda '
              onKeyDown={handleKeyDown}
              value={paisBusqueda}
              onChange={(e) => setPaisBusqueda(e.target.value)}
              placeholder= 'Ingrese un valor para buscar países '
              className= 'flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 '
            />
            {!busquedaAutomatica && (
              <button
                data-testid= 'buscar '
                onClick={buscar}
                disabled={!buscarHabilitado}
                className= 'px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition '
              >
                Buscar
              </button>
            )}
          </div>
          
          <div className= 'flex items-center gap-2 mb-6 '>
            <input
              className= 'w-4 h-4 cursor-pointer '
              type= 'checkbox '
              name= 'busquedaAutomatica '
              data-testid= 'busquedaAutomatica '
              checked={busquedaAutomatica}
              onChange={(e) => setBusquedaAutomatica(e.target.checked)}
            />
            <label htmlFor= 'busquedaAutomatica ' className= 'text-gray-700 cursor-pointer '>
              Buscar automáticamente
            </label>
          </div>
          
          <div className= 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
            {paises.map((pais) => (
              <button
                key={pais.codigo}
                className= 'bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center '
                data-testid={`pais-${pais.codigo}`}
              >
                <Flag bandera={pais.bandera} />
                <div className= 'font-medium text-gray-800 '>{pais.nombre}</div>
              </button>
            ))}
          </div>
          
          {errorMessage && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    )

}
