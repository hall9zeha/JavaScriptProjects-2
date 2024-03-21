const Event = require("../models/Event")

//Get events
const getEvents = async (req, res)=>{

    const events = await Event.find()
    //Rellenamos los datos de usuario correspondiente a la referencia por id que está en nuestra propiedad 'user'
    //esto lo hará mongoose por nosotros, podemos especificar los campos que queremos en este caso ('name')
                            .populate('user','name');
    res.status(200).json({
        ok:true,
        msg:"Eventos cargados",
        events
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