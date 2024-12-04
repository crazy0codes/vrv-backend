const express = require('express');
const authUser = require('../middleware/auth');

const router = express.Router();

router.get('/', authUser, (req, res) => {
    res.status(200)
       .send(`<h1>Hello ${req.user?.username ?? "Hero"} <br/>Your logged In</h1>`)
})

module.exports = router