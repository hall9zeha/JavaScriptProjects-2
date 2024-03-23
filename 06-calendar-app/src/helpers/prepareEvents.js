import moment from "moment"



export const prepareEvents = (uid,events=[]) => {
    //Transformamos las fechas de tipo string de los campos 'start' y 'end' de cada uno de nuestros registros
    //al formato Date()
    
    return events
        //Con este filter(), solo mostramos los eventos del usuario en sesión actual, puede comentarse
        //si se quiere ver eventos de otros usuarios, queda a discresión
        //.filter(event=> event.user._id === uid)

        .map(
        (event)=>({
            //Todo lo demás sin modificar
            ...event,
            //y solo modificamos lo siguiente:
            start:moment(event.start).toDate(),
            end:moment(event.end).toDate()
        })
    )
}
