const router = require('express').Router();
const registerMiddleWare = require('../middleware/register');
const generateToken = require('../utils/token');

router.post('/', registerMiddleWare, async (req, res) => {
    try {
        const token = generateToken(req.user);
        res.status(201)
            .json({
                message: "Registeration successful",
                user: req.user.username,
                token,
            })
    }
    catch(error){
        console.log(error);
        res.status(500)
           .json({
            error : "Internal Server Error"
           })
    }
})


module.exports = router;