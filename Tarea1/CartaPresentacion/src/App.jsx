import { useState } from 'react'
import './App.css'
import Tarea1 from './Tarea/Tarea1'

function App() {
  

  return (
    <>
    <div  className="card">
      <Tarea1
               nombre="Luciana Marcela"
               apellido="Quilcate"
               edad="46 años"
               email="lumaqui2001@gmail.com"
               expectativas="Crear sitios webs espectaculares"
      />
    </div>
      
      

    </>
  )
}

export default App
