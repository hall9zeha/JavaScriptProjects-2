const {validationResult} = require('express-validator');

const fieldValidate = (req, res, next)=>{

     //Errors handled with express-validator
     const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json({
             ok:false,
             errors:errors.mapped()
         })
     }
     //Si no hay error continuar con sus procesos
     next()
}

module.exports = {
    fieldValidate
}