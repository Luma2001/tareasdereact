import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarea1 from './Tarea/Tarea1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div  className="card">
      <Tarea1
               nombre="Luciana Marcela"
               apellido="Quilcate"
               edad="46 años"
               email="lumaqui2001@yahoo.com.ar"
               expectativas="Crear sitios webs espectaculares"
      />
    </div>
      
      

    </>
  )
}

export default App
