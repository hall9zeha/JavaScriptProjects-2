
const createUser = (req,res)=>{
    const {name,email,password} = req.body;
    console.log(req.body)
    res.json({
        ok:true,
        msg:'register',
        name,
        email,
        password
    })
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