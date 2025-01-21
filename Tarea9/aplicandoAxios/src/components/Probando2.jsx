
import axios from 'axios';
import useMultifech from '../hooks/useMultifech';
/*{
    id:"",
    url:"",
}*/

const adapter = (response)=>{
    return{
        id:response[0].id,
        title:response[0].title,
    }
}



export const getAlbums = ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/albums');/*('http://api.thedogapi.com/v1/images/search');*/
}

export const getPhotos = ()=>{
    return axios.get('http://api.thedogapi.com/v1/images/search');/*('http://api.thecatapi.com/v1/images/search');*/
}

export const adapterCat = (res)=>res(0).url;

const Probando2 = () => {

    const{info, error, isLoading}=useMultifech([
        {
            name:"albums",
            initialState:[],
            request: getAlbums,
        },
        {
            name:"cat",
            initialState:"",
            adapter: adapterCat,
            request: getPhotos, 
        },

    ]);
    

  return (
    <div>
        {isLoading ? (
            <h6>Loading...</h6>):
            (info?.albums?.map((album)=>{
                return(
                    <div key={album.id}>
                        <h1>{album.title}</h1>
                    </div>
                )
            }))
        }
    </div>
  )
}

export default Probando2