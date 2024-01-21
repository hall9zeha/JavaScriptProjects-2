
import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'

//recibiremos el publisher a través de los props
export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);


  return (
    <>
     
        <ul>
            {
                heroes.map(hero=>(
                    <li key={hero.id}>
                        {hero.superhero}
                    </li>
                ))
            }
        </ul>
    </>
  )
}
