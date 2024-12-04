const db = require("../database");
const bcrypt = require('bcrypt')

async function registerMiddleWare(req, res, next){
    var {username, password, role} = req.body ;

    if(!(username && password && role)) {
        console.log("Entered the if block")
        res.status(400)
        .json({
            error : "Require all credentials"
        });
        return;
    }

    username = username.trim();
    password = password.trim();

    const hashedPassword = await bcrypt.hash(password,10);
    
    req.user = {
        username,
        hashedPassword,
        role
    }

    db.push(req.user);
    next();
}


module.exports = registerMiddleWare;