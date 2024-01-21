
import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

//recibiremos el publisher a través de los props
export const HeroList = ({publisher}) => {

    const heroes =  useMemo( ()=> getHeroesByPublisher(publisher),[publisher]);


  return (
    <>
     
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
        
            {
                heroes.map(hero=>(
                    <HeroCard key={hero.id}
                        {...hero}
                    />))
                     
                }
        </div>
    </>
  )
}
