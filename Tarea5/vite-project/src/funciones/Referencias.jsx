import React, {useState, useRef} from 'react'

const Referencias = () => {

    
        const [countState, setCountState] = useState(0); //creo un hook de estado y lo inicializo en cero

        let count = 0; //contador

        const countRef = useRef(0);//creo hook de referencia

        const handleIncrement= (e) =>{//creo el manipulador de evento
            count = count + 1; //
            countRef.current = countRef.current + 1;//actualizo valor de useRef, llamando a la propiedad current

            console.log("let:", count);//para ver como se comporta
            console.log("ref:", countRef.current);//para ver como se comporta
            setCountState(countState+1);
        };

        const handleDecrement= (e) =>{//creo el manipulador de evento
            count = count - 1; //
            countRef.current = countRef.current - 1;//actualizo valor de useRef, llamando a la propiedad current
                                                    //
            console.log("let:", count);//para ver como se comporta: esta variable vuelve a su valor inicial cada vez que existe una renderización
            console.log("ref:", countRef.current);//para ver como se comporta: la importancia de este valor por más que exista una renderización el ref guarda su valor
                                                  //en conclusión: useRef me permite mantener una valor de referencia durante el ciclo de vidad del componente  
            setCountState(countState-1);
        };


  return (
    <div>
        <div>
        <h1>Explicando Referencias usando un Contador</h1>
        </div>
        <div className='contador'>
        <button className='card' onClick={handleDecrement}><h2>-</h2></button> 
        <h1>CONTADOR(useState): {countState}</h1>  
        <h1>(useRef): {countRef.current}</h1>
        <h1>(let): {count}</h1>
        <button className='card' onClick={handleIncrement}><h2>+</h2></button>
        </div>
    </div>

  );
}
 
export default Referencias