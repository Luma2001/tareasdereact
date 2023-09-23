import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './funcion/Clock'
import Crono from './funcion/Crono'
import Reloj from './funcion/Reloj'



function App() {

    
  return (
    <>
      <Clock />

      <Reloj />
       
      <Crono />
      
    </>
    
  );

  
}

export default App
