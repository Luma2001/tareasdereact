//1)creo el adaptador. Acá recibo lo que viene de la API y lo adapto a mi modelo de datos

export const dataAdapter = (response) =>{
    return (
        {id:response[0].id,}
)}