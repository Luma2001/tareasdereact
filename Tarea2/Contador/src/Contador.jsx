import React, { useState } from 'react'

const Contador = () => {
  const [count, setCount]= useState(0);
  const handleClickRestar =()=>{
    setCount((count) => count-1);
  }
  const handleClickSumar =() =>{
    setCount((count) => count+1);
  };
   
  return (
<div className='card'>
    <div>
      <h1>Tarea 2: Contador</h1>
    </div>
    <div class="contador">
    <button onClick={()=>handleClickRestar()}><h1>-</h1></button>
    <h1>{count}</h1>
    <button onClick={()=>handleClickSumar()}><h1>+</h1></button>
    </div>
</div>    
  )
};

export default Contador