import { useEffect, useState } from "react"
import { fetchGifs } from "../helpers/GetGifs";



export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data:[],
    loading:true
  });

  //Los efectos o pueden ser asíncronos pero perfectamente se puede usar eventos asíncronos dentro de ellos
  useEffect(()=>{
    fetchGifs(category).
        then(imgs=>{
            setState({
                data:imgs,
                loading:false
            })
        });
    },[category]); //Esto hará que la función sea llamada solo la primera vez que se renderice el componente 
                   //y solo cuando cambie la categoría 


  return state;
}
