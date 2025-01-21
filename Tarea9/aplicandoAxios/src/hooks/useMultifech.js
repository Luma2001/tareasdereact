import  { useEffect, useState } from 'react'
//import { getAlbums, getPhotos } from '../components/Probando2'; Ahora los recibe desde afuera

const getAdapter =(adpater)=> adapter || ((data)=>data);

const useMultifech = (services=[

    {
        name:"",
        request: async ()=>{},
        adapter: (info)=> info,
        initialState: null,
    }



]) => {
    

    const [info, setInfo]= useState();
    const [error, setError]= useState(null);
    const [isLoading, setIsLoading]= useState(false);

    const getInfo=async()=>{
        
        setIsLoading(true);
        setError(null);
        try {
           
            const promises = await Promise.all(
                services.map(
                    async (service)=>
                        getAdapter(service.adapter)(await service.request()).data)
                    
            
            );
            /*([getAlbums(),getPhotos()])vamos a tratar de que el servicio sea generico*/
            
            const state = promises.reduce(
                (acc,el,i)=>({
                    ...acc,
                    [services[i].name]: el,
                }),{}
            );

            console.log(promises);
            
        } catch (error) {
            setError ("Error promesa reject");
        }finally{//se ejecuta cuando finaliza la promesa
        setIsLoading(false);
        };
    };


    useEffect (()=>{
        getInfo();
    },[])

    return{
        info,
        error,
        isLoading,
        getInfo,
    }

}

export default useMultifech