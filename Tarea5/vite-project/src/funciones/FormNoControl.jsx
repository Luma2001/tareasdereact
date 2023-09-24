import React, {useRef} from 'react'

const FormNoControl =  () => {

//creo las const de useRef

const formRef = useRef(null); //siempre debe inicializar los ref


    const handleSubmit = (e)=>{//manejador de evento

        e.preventDefault();
        console.log(formRef.current);

        const formData = new FormData (formRef.current);//FormData es una clase de Javascript
        const email = formData.get("email");
        const password = formData.get("password");

        console.log(formData.get("email"));
        console.log(formData.get("password"));
    };


  return (

    <div className='card'>
        
        <h1>Formulario No Controlado</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
            <div>
            <input name="email" type="email"/>
            <input name="password" type="password"/>
            </div>
            <div>
                <button type="submit">ENVIAR</button>
            </div>
        </form>
       
    </div>
  );
};

export default FormNoControl