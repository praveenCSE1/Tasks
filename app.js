const express = require('express');
const app = express();
const register = require('./Routers/register.js')
const user = require('./Routers/crud.js')
const mcq = require('./Routers/mcq.js')
const { verifyAdminToken,verifyToken} = require('./controllers/jwtControllers.js')


app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = 4000;

app.use('/',register);

//Include verifyAdminToken which will access the endpoint only after verfying the token
app.use('/users',verifyAdminToken,user)

app.use('/mcq',verifyToken,mcq)

app.get('/',(req, res)=>{   
      
     res.send('working');
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

