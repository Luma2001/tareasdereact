import React, { useEffect, useState } from "react";

const Reloj = () => {
  const [time, setTime] = useState(new Date());

  useEffect(
            () => {
                    const interval = setInterval(() => { setTime(new Date());}, 1000);//paTIme se renueve cada 1 segundo
                    return () => {clearInterval(interval);};//para evitar que renderice cada 1 segundo
                   }, []); //useEffect recibe una función y un array

  return <div>Hora Actual: {time.toLocaleTimeString()}</div>;
};

export default Reloj;
