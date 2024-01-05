import React, {useState, useEffect} from 'react'
import { fetchGifs } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifListItem } from './GifListItem';

export const GifList = ({category}) => {

    const {data, loading} = useFetchGifs(category);
   

   return (
   <>
    <h3>{category}</h3>
    {/* El símbolo && permite evaluar si loading es verdador hacer algo caso contrario nada */}
    {loading && <p>Cargando...</p>} 
    <div className='card-grid'>
        {
            data.map( image =>
                <GifListItem 
                key = {image.id}
                {...image}/>
             
            )
        }
   
    </div>
    </>
  )
}
