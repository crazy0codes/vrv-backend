const authUser = require('../middleware/auth');
const { changeRole } = require('../controllers/roleChangeController');
const authRole = require('../middleware/roleMiddleware');
const Roles = require('../utils/roles');

const router = require('express').Router();

router.post('/', authUser, authRole(Roles.moderator), async (req, res) => {
    const { users } = req.body;
    const mainUser = req.user.role;
    
    if (!users) {
        res.status(406)
            .json({
                error: "Provide Users"
            })
        return;
    }

    try {
        await changeRole({ users, mainUser })
        res.status(200)
            .json({
                status: "successfully changed Roles!!"
            })
        return;
    }
    catch (error) {
        console.log(error)
        res.status(500)
            .json({
                error: "Internal Server Error"
            })
        return;
    }
})

module.exports = router;