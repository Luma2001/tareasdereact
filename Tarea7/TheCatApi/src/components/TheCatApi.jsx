import React, {useEffect,useState} from 'react'

const TheCatApi = () => {
    const[cats,setCats] = useState([]);//siempre que tenga que renderizar necesito useState
    const [count,setCount] =useState(0);
    const[error,setError] = useState(null);//Para saber cuando hay un error
    const[loading,setLoading] = useState(false);//Para saber cuando está cargando

    useEffect(()=>{//1)lo utilizo para gestionar los estados de las fc async

        //creo fetchData
        const fetchData = async ()=>{//coloco async: porque sé que es un proceso asincrónico, armo la petición a una api externa por lo que sé que es asincronica
            //utiliza trycatch para gestionar estados de la promesa(pendiente, resolve, reject)
            setLoading(true);//Sólo para ver como funciona o es imposible que lo veamos
            setError(null);
            try {
                //2)acá hago la petición al endpoint
                const endpoint = "https://api.thecatapi.com/v1/images/search?api_key=live_hwh57FbJzXOLYtn4Z0wqH5gVUHmoh2T4OJWAgtvL3GMHS6E4OgCCZJg353HFjJEF"//url que expone un servidor para que el cliente pueda solicitar o enviar datos
                //3)creo objeto de javascript "response"
                const response = await fetch(endpoint);//fetch siempre devuelve una promesa, cuyo estado al principio es pendiente. coloco "await" porque sé que debo esperar una resolución
                //4)manejo error
                if(!response.ok)throw new Error("Error al resolver petición");            
                //5)Creo una const para hacer legibles los datos de response
                const data = await response.json(); //para ellos parseo respose como json, al ser una promesa debo colocar también await
                //6)para verificar si esta leyendo datos hago un console.log
                console.log(data);//funciona ok
                //7)para mostrar por pantalla los gatos necesito useState para setearlos
                setCats(data);//una vez seteados, procedo a mapearlos
                
            } catch (error) {
                setError("Error promesa reject");
            }finally{//se ejecuta cuando finaliza la promesa
            setLoading(false);
            };

            

        }//fin const fetchData
        fetchData();




    },[count]); //Fin useEffect. en este casa se ejecuta una vez en el montaje




  return (
    <div>
        {loading && <h6>Cargando...</h6>}
        {error && <h1>{error}</h1>}
        <h2>Tarea 7: THE CAT API de LUMA</h2>
        
        {cats.map((cat)=>{
                return(
                    <div key={cat.id}>

                        <p><img className='card' src={cat.url}/></p>
                        <button onClick={() => {
                            setCount(count + 1);
                            }}>REFRESH
                        </button>
                    </div>
                    
                )
            })}
    </div>
  )
}

export default TheCatApi