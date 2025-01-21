import { useState } from "react";


const Formularios = () => {

    const [form, setForm] = useState({
        nombre:"",
        edad:"",
        email:"",
        fecha:"",
        rol:"",
        newsletter:"",
        genero:""

    }) //para tomar el valor de cada input debo crear un objeto. El nombre de cada valor lo hacemos coincidir con el value del input

    const handleChange = (e)=>{
        //Primero desestructuro valores que necesito guardar de e.target
        const{ name, value} = e.target;
        console.log("info:",name, value);
        //seteo los valores en setForm
        setForm({
            ...form, //me trae todo lo que está guardado en form y permite mantener la estructura del estado
            [name] : value, //está linea me permite actualizar el valor de sólo lo que he modificado
        });

        console.log(e);
    };

    const handleSubmit =(e) =>{
        e.preventDefault();
    }

    const mostrarMensaje = ()=>{
        console.log(form);
        console.log(form.rol);
        
    }


  return (
    <div> 
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="nombre" value={form.nombre} placeholder="nombre"></input>
            <input type="text" onChange={handleChange} name="edad" value={form.edad} placeholder="edad"></input>
            <input type="email" onChange={handleChange} name="email"  value={form.email} placeholder="email"></input>
            <input type="date" onChange={handleChange} name="fecha" value={form.fecha}></input>
            <select   name="rol" onChange={handleChange} id=""  value={form.rol}>
                <option value="Seleccionar" hidden defaultValue>Seleccionar</option>
                <option value="estudiante">estudiante</option>
                <option value="profesor">profesor</option>
                <option value="visitante">visitante</option> 
            </select>
            <h4>Deseo recibir noticias por email</h4>
            <input type="radio" name="newsletter"  value="si"  onChange={handleChange}/><label>Si</label>
            <input type="radio" name="newsletter"  value="no" onChange={handleChange}/><label>No</label>
            <h4>Seleccionar Género</h4>
            <div>
                <label>
                    <input
                    type="radio"
                    name="genero"
                    value="masculino"
                    onChange={handleChange}
                    checked={form.genero === "masculino"}
                    />
                    Masculino
                </label>
                <label>
                    <input
                    type="radio"
                    name="genero"
                    value="femenino"
                    onChange={handleChange}
                    checked={form.genero === "femenino"}
                    />
                    Femenino
                </label>
                <label>
                    <input
                    type="radio"
                    name="genero"
                    value="otro"
                    onChange={handleChange}
                    checked={form.genero === "otro"}
                    />
                    Otro
                </label>
            </div>

            <button type="button" onClick={mostrarMensaje}>Ingresar</button>
        </form>
    </div>
  )

 
}

export default Formularios