import { useState } from 'react'
import './App.css'
import Contador from './Contador'

const App =() =>{
return (
<>
  <Contador/>
  <Contador/>
  <Contador/>

</>

)

}

//podemos llamar varias veces al contador, notar que sus estados no son compartidos, son independientes
//para que sean compartidos debemos usar context
export default App
