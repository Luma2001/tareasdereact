import React, { useState, useEffect } from 'react'


const Clock = () => {

    //creo const
    const now = new Date();

    //llamo useState
    const [time, setTime]= useState({
      hora: now.getHours(),
      minutos: now.getMinutes(),
      segundos: now.getSeconds()
    });

    //llamo useEffect
    useEffect(() => {
        const tick = setInterval(() => {
          const now = new Date();
          setTime({
            hora: now.getHours(),
            minutos: now.getMinutes(),
            segundos: now.getSeconds()
          });

        },1000);
        return() => clearInterval(tick);


    },[]);
    
  return (
    <div class="clock"><h1>{time.hora < 10 ? ` 0${time.hora}` : time.hora} : {time.minutos < 10 ? ` 0${time.minutos}` : time.minutos} : {time.segundos < 10 ? ` 0${time.segundos}` : time.segundos}</h1></div>
  )
}

export default Clock










