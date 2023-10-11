import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TheCatApi from './components/TheCatApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TheCatApi />
      
    </>
  )
}

export default App
