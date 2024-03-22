const jwt = require('jsonwebtoken');

//Generamos nuestro Json Web Token que será devuelto en el proceso de registro de un usuario
const generateJWT = (uid,name)=>{
    return new Promise((resolve, reject)=>{

        const payload = {uid,name};
        //Firmamos nuestro token con una palabra o frase clave
        jwt.sign(payload,process.env.SECRET_JWT_SEED,{
            //El token creado expirará en 2 horas, podemos aumentar el tiempo a días eg: '1d', '2 days', etc
            //ver documentación de jsonwebtoken
            expiresIn:'2h'
        },(err, token)=>{
            if(err){
                reject("Can't tokn resolve")
            }
            resolve(token);
        })

    })
}
module.exports = {generateJWT}