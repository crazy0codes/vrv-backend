const jwt = require('jsonwebtoken');

function generateToken({username, password, role}){
    if(!(username && password && role)) throw new Error("Missing value Token Generation");

    const jwtToken = jwt.sign(
        {username, password, role},
        "secretKey",
        {expiresIn: "24h"}
    )

    return jwtToken;
}

module.exports = generateToken;