import React from 'react'


const Tarea1 = (props) => {
    console.log(props);
    const {nombre,apellido,edad, email, expectativas} = props;//desestructuramos objetos
  return (
    <div class="card">
        <h1>Tarea 1 - Card de Presentación</h1>
        <h2>Nombre: {nombre}</h2>
        <h2>Apellido: {apellido}</h2>
        <h2>Edad: {edad}</h2>
        <h2>Email: {email}</h2>
        <h2>Expectativas: {expectativas}</h2>
    </div>
  );
};

export default Tarea1