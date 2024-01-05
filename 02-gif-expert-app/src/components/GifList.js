import React, {useState, useEffect} from 'react'
import { fetchGifs } from '../helpers/GetGifs';
import { GifListItem } from './GifListItem';

export const GifList = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
        fetchGifs(category).then(setImages);
    },[]); //Esto hará que la función sea llamada solo la primera vez que se renderice el componente
    
  

  return (
   <>
    <h3>{category}</h3>
    <div className='card-grid'>
        {
            images.map( image =>
                <GifListItem 
                key = {image.id}
                {...image}/>
             
            )
        }
   
    </div>
    </>
  )
}
