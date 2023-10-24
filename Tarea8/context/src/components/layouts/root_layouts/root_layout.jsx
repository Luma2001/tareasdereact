import React from 'react'
import Nav from '../../nav/nav'

const Root_layout = ({children}) => {
//nav y footer es contenido común que no se modifica
//children es el contenido dinámico que renderiza la vista y se actualiza desde afuera

  return (
    <div>
        <Nav />
        {children}
        <footer></footer>
    </div>
  )
}

export default Root_layout