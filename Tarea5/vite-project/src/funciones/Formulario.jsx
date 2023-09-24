import React, {useState} from 'react'

const Formulario = () => {
    
    /*una opción para manejar varios campos es crear un objeto
    const login = {//creo un objeto con todos los campos que necesito en el formulario
        email:"",//al principio no valen nada. Los campos están vacío
        password:"",
    }
    Pero en vez de hacer eso puede colocar los campos dentro del useState
    */


//"" para inicializar el estado del form
    const [form, setForm] = useState({
        nombre:"",
        lastname:"",
        year:"",
        group:"",
        email:"",//al principio no valen nada. Los campos están vacío
        password:"",
        check:"",//hay que usar checked en vez value, falta hacer
    });

    const handleChange =(e)=>{
        //setForm(e.target.value); uso este cuando tengo una sola variable
        
        const {name, value} = e.target;//desestructuro e.target y me quedo solo con name y value
        setForm({//uso este cuando tengo un objeto con varios campos
            ...form,//DEBO RECORDAR DE USARLO O SE ROMPE EL FORMULARIO. 
            [name]: value, //esto es igual a [e.target.name]: e.tarjet.value
        })
        console.log(name, value);
    };
/*Formulario Controlado: debo asegurarme que lo que ingrese 
el usuario sea lo mismo que tengo guardado en memoria.
Para ello igualo el value al estado actual y así creo un feedback
instantáneo. Lo que muestre value va a ser igual al estado actual*/

  return (
    <div className='card'>
        <h1>TAREA 5:</h1>
        <h1>Formulario Controlado</h1>
        <div>
        <input 
                name="nombre" 
                type="text" 
                placeholder='NOMBRE'
                onChange={handleChange} 
                value={form.nombre}
        /> 
        <input 
                name="lastname" 
                type="text" 
                placeholder='APELLIDO'
                onChange={handleChange} 
                value={form.lastname}
        />
        </div>
        <div>
        <input 
                name="year" 
                type="text" 
                placeholder='EDAD'
                onChange={handleChange} 
                value={form.year}
        /> 
        <input 
                name="group" 
                type="text" 
                placeholder='NOMBRE GRUPO'
                onChange={handleChange} 
                value={form.group}
        />
        </div>
        <div>
        <input 
                name="email" 
                type="email" 
                placeholder='EMAIL'
                onChange={handleChange} 
                value={form.email}
        /> 
        <input 
                name="password" 
                type="password" 
                placeholder='PASSWORD'
                onChange={handleChange} 
                value={form.password}
        />
        </div> 
        <div>
        <input 
                name="check"
                type='checkbox'
                onChange={handleChange} 
                value={form.check}
        />  
        <p>Sigue asistiendo a clases de REACT.
        </p> 
        </div>

        <div>
        <button 
                onClick={
                    ()=>{console.log(form);}}
                >
                 ENVIAR
        </button>
        </div>
        
    </div>
  )
}

export default Formulario