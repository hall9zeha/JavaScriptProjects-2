import React, {useState, useEffect} from 'react'
import { GifListItem } from './GifListItem';

export const GifList = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
        fetchGifs();
    },[]); //Esto hará que la función sea llamada solo la primera vez que se renderice el componente

    const fetchGifs = async() =>{
        const url='https://api.giphy.com/v1/gifs/search?q=one+punch&limit=10&api_key=you-api-key';
        const resp = await fetch(url);
        const {data} = await resp.json();
        
        const gif = data.map(img=>{
            return {
                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url
            }
        });
        
        setImages(gif);
        console.log(images);
    }

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
