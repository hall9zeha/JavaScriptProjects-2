import React from 'react'
import { JournalEntry } from './JournalEntry'
import { useSelector } from 'react-redux'

export const JournalEntries = () => {
  /*
  La ventaja de usar redux es que en la mayoría de los casos no necesitamos enviar argumentos a través de las properties
  solamente debemos acceder a nuestros estados para obtener la información de allí
  */
  const {notes} =useSelector(state=>state.notes);

  return (
    <div className='journal__entries'>
        {
            notes.map(note=>(
                <JournalEntry key={note.id}
                  //Enviamos cada nota como argumento
                  {...note}
                />
            ))
        }
    </div>
  )
}
