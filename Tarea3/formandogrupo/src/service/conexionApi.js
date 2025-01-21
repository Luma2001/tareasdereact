//CRUD PARA MIEMBROS
const URL="http://localhost:3000/miembros";


async function listaMiembros(){
    try {
        const conexion =await fetch(URL,{
            method:"GET",
            headers:{
                "Content-type":"application/json",
            }            
        })
        const respuesta = await conexion.json();
        return respuesta;
    } catch (error) {
        console.error(error)
    }
};

async function registrarMiembro(datos){
    try {
        const conexion = await fetch(URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)            
        })
        const response = await conexion.json();
        return response;
    } catch (error) {
        console.error(error)
    }
}

const  conexionApi ={listaMiembros,registrarMiembro};
export default conexionApi;