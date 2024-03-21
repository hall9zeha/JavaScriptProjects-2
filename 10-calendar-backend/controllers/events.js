
//Get events
const getEvents = (req, res)=>{
    res.status(200).json({
        ok:true,
        msg:"Eventos cargados"
    })
}

//Create event
const createEvent = (req,res)=>{
    res.status(201).json({
        ok:true,
        msg:"Evento creado"
    })
}

//Update event
const updateEvent = (req,res)=>{
    res.status(200).json({
        ok:true,
        msg:"Evento actualizado"
    })
}

//Delete event
const deleteEvent = (req,res)=>{
    res.status(200).json({
        ok:true,
        msg:"Evento eliminado"
    })
}

module.exports = {
    getEvents, createEvent, updateEvent, deleteEvent
}