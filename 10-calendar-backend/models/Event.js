const {Schema, model} = require('mongoose');

const EventSchema = Schema({

    title:{
        type:String,
        require:true
    },

    notes:{
        type:String
    },
    start: {
        type:Date,
        require:true
    },
    end:{
        type:Date,
        require:true
    },
    user:{
        //Hacemos una referencia al esquema de User para registrar el usuario que creó el evento
        type:Schema.Types.ObjectId,
        ref:'User' // User es el nombre de nuestro esquema
    }
    


});

module.exports = model('Event',EventSchema);