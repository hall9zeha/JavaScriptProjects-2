const {validationResult} = require('express-validator');

const createUser = (req,res)=>{

    //Errors handled with express-validator
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        })
    }

    const {name,email,password} = req.body;
   
    res.status(201).json({
        ok:true,
        msg:'register',
        name,
        email,
        password
    })
}

const login = (req,res)=>{
    //Errors handled with express-validator
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        })
    }
    
    const {email, password} = req.body
    res.json({
        ok:true,
        msg:'login',
        email,
        password
        
    })
}

const renewToken = (req,res)=>{
    res.json({
        ok:true,
        msg:'renew token'
    })
    
}

module.exports = {
    createUser,login,renewToken
}