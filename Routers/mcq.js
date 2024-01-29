const express = require('express')
const controller = require('../controllers/mcqControllers')
const router = express.Router();

//To display the mcq present in the database
router.get('/mcq',controller.display_mcq);

//To add the mcq to the database
router.post('/add_mcq',controller.add_mcq);

module.exports = router;