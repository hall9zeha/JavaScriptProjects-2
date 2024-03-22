const {Schema, model} = require('mongoose');

const EventSchema = Schema({

    title:{
        type:String,
        required:true
    },

    notes:{
        type:String
    },
    start: {
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    },
    user:{
        //Hacemos una referencia al esquema de User para registrar el usuario que creó el evento
        type:Schema.Types.ObjectId,
        ref:'User', // User es el nombre de nuestro esquema
        required:true
    }
    


});
//Para cambiar la manera en que mongoose serializa el nombre de nuestras propiedades lo hacemos 
//de la siguiente forma:

EventSchema.method('toJSON', function(){
    //Extraemos las propiedades creadas automáticamente por el serializador json por defecto
    //solo usaremos dos el resto de propiedades irán sin modificación por eso usamos ...object
    const {__v,_id,...object} = this.toObject();
    object.id=_id;
    return object;
})


module.exports = model('Event',EventSchema);