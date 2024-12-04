const express = require('express')
const app = express();
const loginRoute = require('./routes/loginRoute');
const dashboardRoute = require('./routes/dashboardRoute.js');
const registerRoute = require('./routes/registerRoute');
const moderatorRoute = require('./routes/moderatorRoute');
const changeRoleRoute = require('./routes/changeRoleRoute.js');
const adminRoute = require('./routes/adminRoute.js')
const bodyParser = require('body-parser').json(true);

app.use(bodyParser)


app.get('/', (req, res) => {
    console.log(req.body);
    res.status(200);
    res.send(`<h1>Landing Page</h1>`);
})

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/view', dashboardRoute);
app.use('/edit', moderatorRoute);
app.use('/changerole', changeRoleRoute);
app.use('/admin', adminRoute)

app.listen(3000, () => console.log("Server started on Port 3000"));