import React, {useRef} from 'react'


export const getFormValues =
    (e) => Object.fromEntries(new window.FormData(e.target));


const FormNoControl2 =  () => {

    
    const handleSubmit = (e)=>{//manejador de evento

        e.preventDefault();
        console.log(getFormValues(e));

        /*const {email, password} = getFormValues(e.target);
        console.log(email, password);*/
        
    };


  return (

    <div className='card'>
        
        <h1>Formulario No Controlado sin useRef</h1>
        <form 
            name="form" 
            onSubmit={handleSubmit}
        >
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

export default FormNoControl2