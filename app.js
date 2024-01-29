const express = require('express');
const app = express();
const register = require('./Routers/register.js')
const user = require('./Routers/crud.js')
const mcq1 = require('./Routers/mcq.js')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = 4000;


app.use('/',register);
app.use('/',user)
app.use('/',mcq1)

app.get('/',(req, res)=>{    
    // const fpath = path.join(__dirname,'sign.html');
     res.send('working');
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

