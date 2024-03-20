const { generateJWT } = require("../helpers/jwt");
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

        //Generate token
        const token = await generateJWT(user.id,user.name);


        //Password encrypt
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password,salt);

        //Creamos un registro con un usuario usando mongoose
        await user.save();
        //Respuesta en formato json correctamente 201 -> usuario creado
        res.status(201).json({
            ok:true,
            uid:user.id,
            name:user.name,
            token
           
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

const login = async(req,res)=>{

    const {email,password} = req.body;
    
    try {
          //Validamos la existencia de un email con mongosse, desde nuestra instancia de user
          let user = await User.findOne({email:email});

          if(!user){
              return res.status(400).json({
                  ok:false,
                  msg:'The user with this email not exists'
              })
          }
          //Comparar contraseñas
          const validPassword = bcrypt.compareSync(password, user.password);
          if(!validPassword){
            return res.status(400).json({
                of:false,
                msg:'Password invalid'
            })
          }

          //Generate token
        const token = await generateJWT(user.id,user.name);


          res.status(200).json({
            ok:true,
            uid:user.id,
            name:user.name,
            token
          })

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Error not login'
        })
    }

 
}

const renewToken = async(req,res)=>{

    const {uid, name} = req;

    //Generar nuevo token
    const token = await generateJWT(uid,name);


    res.json({
        ok:true,
        token
    })
    
}

module.exports = {
    createUser,login,renewToken
}