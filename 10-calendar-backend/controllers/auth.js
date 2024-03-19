
const createUser = (req,res)=>{
    res.json({
        ok:true,
        msg:'register'
    })
}

const login = (req,res)=>{
    res.json({
        ok:true,
        msg:'login'
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