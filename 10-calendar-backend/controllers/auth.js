const User = require("../models/User");
const bcrypt = require('bcryptjs')

const createUser = async(req,res)=>{

   
    const {name,email,password} = req.body;
    

    try {
        //Validamos la existencia de un email con mongosse, desde nuestra instancia de user
        let user = await User.findOne({email:email});

        if(user){
            return res.status(400).json({
                ok:false,
                msg:'This email is already registered'
            })
        }
        
        user = new User(req.body)

        //Password encrypt
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password,salt);

        //Creamos un registro con un usuario usando mongoose
        await user.save();
        //Respuesta en formato json correctamente 201 -> usuario creado
        res.status(201).json({
            ok:true,
            uid:user.id,
            name:user.name
           
        })
        
    } catch (error) {
        console.log(error)
        //Respuesta en formato json error 500
        res.status(500).json({
            ok:false,
            msg:'Error at create user'
        })
    }
}

const login = (req,res)=>{
    

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