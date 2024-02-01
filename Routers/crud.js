
const express = require('express')
const controllers = require('../Controllers/crudControllers');

const router = express.Router();

//routes
router.post('/adduser',controllers.adduser);

router.delete('/deleteuser',controllers.deleteuser);  

router.post('/updateuser',controllers.updateuser);


router.get('/',controllers.users)

module.exports = router;
