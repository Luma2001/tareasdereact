import axios from 'axios';
import React, { useEffect, useState } from 'react'


const adapter = (response)=>{
    return{
        id:response[0].id,
        url:response[0].url,
    }
}



const Probando = () => {

    const [info, setInfo]= useState(
        {
            id:"",
            url:"",
        }
    );
    const[error, setError]= useState(null);
    const[isLoading, setIsLoading]= useState(false);


    const getInfo= async ()=>{
        
        const response = await axios.get('http://api.thedogapi.com/v1/images/search');

         const adaptador= adapter(response.data);

        setInfo(adaptador);

    };


    useEffect(()=>{
        getInfo();
    },[])



  return (
    <div>
        <div>
            <h1>Dogs</h1> 
            <img className='card' key={info.id} src={info.url} alt="Imagen de un hermoso perro" />
            <p></p ><button onClick={getInfo}>REFRESH</button>
        </div>
    </div>
  )
}

export default Probando