import { useEffect } from 'react'

export const useCountrySearch = (
  query: string, 
  auto: boolean, 
  searchFn: () => void
) => {
  useEffect(() => {
    if (auto && query.trim() !== '') {
      searchFn()
    }
  }, [query, auto, searchFn])
}