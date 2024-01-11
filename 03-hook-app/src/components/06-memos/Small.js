import React, {memo} from 'react'

export const Small = memo(({value}) => {
    //Al usar memo devolvemos el estado del componente en memoria
    //que solo cambiará cuando el valor(value) del contador lo haga
    //y no cada vez que rendericemos nuestro componente principal
    console.log('el contador cambió ' + value);
    return (
        <small>{value}</small>
    )
})
