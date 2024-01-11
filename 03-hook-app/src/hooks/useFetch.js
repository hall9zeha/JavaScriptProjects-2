import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

  const isMounted = useRef(true)//Para tomar como referencia al componente cuando esta montado o desmontado


  const[state, setState] = useState({data:null, loading:true, error:null});

  useEffect(()=>{
    return ()=>{
      isMounted.current = false;//Cuando el componente esté desmontado retornará  ese estado
    }
  },[])

  useEffect(()=>{
    setState({data:null,loading:true,error:null});
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>{
      if(isMounted.current){//Si el componente todavía está montado retornar la data 
        setState({
            loading:false,
            error:null,
            data
        })
      }
    })


  },[url])
  return state;
}
