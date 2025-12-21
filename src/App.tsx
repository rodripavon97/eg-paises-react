import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Flag } from './components/flag/flag'
import { CountryPage } from './pages/country/country'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountryPage/>
    </>
  )
}

export default App
