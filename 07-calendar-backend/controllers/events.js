const Event = require("../models/Event")

//Get events
const getEvents = async (req, res)=>{

    const events = await Event.find()
    //Rellenamos los datos de usuario correspondiente a la referencia por id que está en nuestra propiedad 'user'
    //esto lo hará mongoose por nosotros, podemos especificar los campos que queremos, en este caso ('name') ex: 'name password', sin comas y dentro de la misma cadena
    //si solo ponemos el nombre de la referencia (user) traerá todos los campos
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
const updateEvent =async (req,res)=>{
    //Obtenemos el id del registro enviado a través de la url
    const eventId = req.params.id;

    try {
        //Si el evento existe
        const event = await Event.findById(eventId)
        if(!event){
            return res.status(404).json({
                ok:false,
                msg:'Event not exist'
            })
        }
        //Si el usuario es el mismo que creó el evento permitir caso contrario no
        //Donde event.user ('user') es la referencia que es un 'id'
        if(event.user.toString() !== req.uid){
            return res.status(401).json({
                ok:false,
                msg:"You don't have privileges to modify this event"
            })
        }
        const eventForUpdate = {
            ...req.body,
            user:req.uid
        };
        
        //Por defecto findByIdAndUpdate retorna el último registro sin actualizar por si se requiere
        //Entonces debemos poner {new:true} como tercer argumento para que nos devuelva el registro actualizado
        const eventUpdated = await Event.findByIdAndUpdate(eventId,eventForUpdate,{new:true});

        res.json({
            ok:true,
            eventUpdated
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error updating event'
        })
    }
   
}

//Delete event
const deleteEvent = async(req,res)=>{
     //Obtenemos el id del registro enviado a través de la url
     const eventId = req.params.id;

     try {
         //Si el evento existe
         const event = await Event.findById(eventId)
         if(!event){
             return res.status(404).json({
                 ok:false,
                 msg:'Event not exist'
             })
         }
         //Si el usuario es el mismo que creó el evento permitir caso contrario no
         //Donde event.user ('user') es la referencia que es un 'id'
         if(event.user.toString() !== req.uid){
             return res.status(401).json({
                 ok:false,
                 msg:"You don't have privileges to delete this event"
             })
         }
        
         //Por defecto findByIdAndUpdate retorna el último registro sin actualizar por si se requiere
         //Entonces debemos poner {new:true} como tercer argumento para que nos devuelva el registro actualizado
         const eventDeleted= await Event.findByIdAndDelete(eventId);
 
         res.json({
             ok:true,
             eventDeleted
         })
 
     } catch (error) {
         console.log(error);
         res.status(500).json({
             ok:false,
             msg:'Error delete event'
         })
     }
    
}

module.exports = {
    getEvents, createEvent, updateEvent, deleteEvent
}