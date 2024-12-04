const router = require('express').Router();
const authUser = require('../middleware/auth');
const generateToken = require('../utils/token');
const db = require('../database')

router.post('/', authUser, async (req, res) => {
    const token = generateToken(req.user);
    res.status(200)
       .json({
        user : req.user,
        token: token
       })
})


module.exports = router;