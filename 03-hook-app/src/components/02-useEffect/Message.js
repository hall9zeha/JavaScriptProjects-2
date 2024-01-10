
import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({x:0,y:0});
    const {x,y}=coords;
    useEffect(()=>{
        //Lo hacemos de esta manera para poder remover el evento o la tarea posteriormente
        //ya que si usamos el callback directamente se duplicará muchas veces cuando haya un cambio en el componente
        const mouseMove=(e)=>{
            const coors = {x:e.x, y:e.y}
            setCoords(coors);
            console.log(coors);
        }
        //console.log('componente montado')
        window.addEventListener('mousemove', mouseMove);//Agregamos el evento

        
        return ()=>{
            //Removemos el evento
            window.removeEventListener('mousemove',mouseMove);
            //console.log('Componente desmontado')
        }
    },[])

    return (
        <div>
        <h3>Hello developer</h3>
        <p>x:{x} y:{y}</p>
        </div>
    )
}
