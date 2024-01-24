const express = require('express')
const controllers = require('../controllers/regControllers')
const router = express.Router();

router.post('/signup',controllers.signup)

router.post('/login', controllers.login);

module.exports = router;