const jwt = require('jsonwebtoken');

function authUser(req,res,next){
    const jwtToken = req.headers?.authorization?.split(' ')[1];
    if(!jwtToken){
        res.status(403)
           .json({error : "No token found!!"})
        return;
    }

    jwt.verify(jwtToken, "secretKey", (err, decoded) => {
        if(err){
            res.status(403)
               .json({error: "Invalid Token"})
            return;
        }

        req.user = {...decoded};
        next();
    })
}


module.exports = authUser;