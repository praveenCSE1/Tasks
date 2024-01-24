
const express = require('express')
const controllers = require('../controllers/crudControllers');

const router = express.Router();

router.post('/adduser',controllers.adduser);

router.delete('/deleteuser',controllers.deleteuser);
  

router.post('/updateuser',controllers.updateuser);


router.get('/users',controllers.users)

module.exports = router;