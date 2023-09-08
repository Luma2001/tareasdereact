import React, { useState } from 'react'


const miembros = [
    {
      name: "Luciana - Luma",
      age: 46,
      email: "lumaqui2001@yahoo.com.ar"
    },
    {
      name: "Mariano",
      age: 40,
      email: "marianomercevich@gmail.com"
    },
    {
      name: "Gabriela - Gaby",
      age: 36,
      email: "gabbygag22@gmail.com"
    },
    {
      name: "Diego",
      age: 42,
      email: "dflinares84@gmail.com"
    },
    {
      name: "Isabel - Isa",
      age: 40,
      email: "isabel.bracho@gmail.com"
    },
  ];
  
  


const Integrantes = () => {
    const[value,setValue] =useState(0);

    const handleClickPrevious = () => {
        setValue(value-1<0 ? value : value - 1);
    };

    const handleClickNext = () => {
        setValue(value+1>miembros.length-1 ? value : value + 1);
    };
    
    const [name, age, email] = miembros;
    
  return (
    <div className='card'>
        <div>
            <h1>Tarea 3: Formación de Grupos</h1>
        </div>
        <div>
            <h2>Nombre Grupo: REACTIVOS</h2>
            <h2>---------- INTEGRANTES ----------</h2>
        </div>
        <div className='miembros'> 
            <button onClick={()=>handleClickPrevious()}>Anterior</button>
            <div>
                <h3>Nombre: {miembros[value].name}</h3>
                <h3>Edad: {miembros[value].age} años</h3>
                <h3>E-mail: {miembros[value].email}</h3>    
            </div>
            <button onClick={()=>handleClickNext()}>Próximo</button>
        </div>    
    </div>
  )
}

export default Integrantes
