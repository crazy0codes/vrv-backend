const Roles = require("../utils/roles");

function authRole(role) {
    return (req, res, next) => {

        const { users } = req.body;

        if (users) {
            let isValid = users.find(user => (
            Roles.basic.includes(user.role)) 
            && Roles.basic.includes(user.setRole))

            if (!isValid) {
                res.status(400)
                    .json({ error: "Invalid Roles" });
                return;
            }
        }

        if (!role.includes(req.user.role)) {
            res.status(403)
                .send(`<h1>Access Forbiden</h1>`)
            return;
        }
        next();
    }
}


module.exports = authRole