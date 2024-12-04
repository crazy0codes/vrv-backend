const router = require('express').Router();
const authRole = require('../middleware/roleMiddleware');
const roles = require('../utils/roles');
const auth = require('../middleware/auth');

router.post('/', auth, authRole(roles.moderator), (req, res) => {
    res
    .status(200)
    .send(`<h1>Moderator Page</h1>`);
})

module.exports = router;