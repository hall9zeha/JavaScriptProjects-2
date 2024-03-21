const jwt = require('jsonwebtoken');

const validateJWT=(req, res,next)=>{
    // x-token header  (x-token) por convencion se usa para encabezados personalizados
    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'There is no token, token is required'
        })
    }

    try {
        //Pasaremos los valores uid, name de la respuesta obtenida al verificar el token a cualquier función que siga después de haber ejecutado
        //next(), a través del parámetro req
        
        const {uid,name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );
        req.uid = uid,
        req.name=name

    } catch (error) {
        return res.status(401).json({
            ok:false,
            msg:'Token is not valid'
        })
    }
    next();
}

module.exports = {validateJWT}