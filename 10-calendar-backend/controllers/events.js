const Event = require("../models/Event")

//Get events
const getEvents = (req, res)=>{
    res.status(200).json({
        ok:true,
        msg:"Eventos cargados"
    })
}

//Create event
const createEvent = async(req,res)=>{
    
    const event = new Event(req.body);
    event.user = req.uid;
    try {
        const savedEvent = await event.save();
        res.json({
            ok:true,
            savedEvent
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            of:false,
            msg:'Error creating event'
        })
    }
   
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