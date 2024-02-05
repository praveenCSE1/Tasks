
const express = require('express')
const controllers = require('../Controllers/crudControllers');
const {isAdmin}=require('../controllers/jwtControllers')

const router = express.Router();

//routes
router.post('/addProfile',controllers.adduser);

router.delete('/deleteuser',isAdmin,controllers.deleteuser);  

router.post('/updateuser',controllers.updateuser);

router.get('/myProfile',controllers.myprofile)

router.get('/',controllers.users)

module.exports = router;
