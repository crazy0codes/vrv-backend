const roles = {
    admin: 3,
    moderator: 2,
    basic: 1
}

function transfromRole(role, toNumeric=true){
    if(!toNumeric){
        return Object
        .keys(roles)
        .find(key => roles[key] === role)
    }
    return roles[role] || 1;
}


async function changeRole({ users, mainUser }) {
    mainUser.role = transfromRole(mainUser.role);

    users.forEach(user => {
        user.role = transfromRole(user.role);

        if (user.role > mainUser.role && user.setRole < mainUser.role) throw Error("Authority Error");

        user.role = user.setRole;

        user.role = transfromRole(user, false);
    })

    mainUser.role = transfromRole(mainUser.role, false);
}


module.exports = {changeRole};