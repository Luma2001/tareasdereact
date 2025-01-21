import React, { useState } from 'react'
import Users from './Users';
import Formularios from './Formulario';


const miembros = [
    {
      name: "Luciana - Luma",
      age: 46,
      email: "lumaqui2001@yahoo.com.ar",
      fecha:"",
      rol:"",
      newsletter:"",
      genero:""
    },
    {
      name: "Mariano",
      age: 40,
      email: "marianomercevich@gmail.com",
      fecha:"",
      rol:"",
      newsletter:"",
      genero:""
    },
    {
      name: "Gabriela - Gaby",
      age: 36,
      email: "gabbygag22@gmail.com",
      fecha:"",
      rol:"",
      newsletter:"",
      genero:""
    },
    {
      name: "Diego",
      age: 42,
      email: "dflinares84@gmail.com",
      fecha:"",
      rol:"",
      newsletter:"",
      genero:""
    },
    {
      name: "Isabel - Isa",
      age: 40,
      email: "isabel.bracho@gmail.com",
      fecha:"",
      rol:"",
      newsletter:"",
      genero:""
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
            <Users name= {miembros[value].name}
                       age= {miembros[value].age}
                       email= {miembros[value].email}/>
            <button onClick={()=>handleClickNext()}>Próximo</button>
        </div>    
        <Formularios/>
    </div>
  )
}

export default Integrantes
