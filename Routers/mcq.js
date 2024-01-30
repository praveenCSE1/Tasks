const express = require('express')
const controller = require('../Controllers/mcqControllers')
const router = express.Router();


//To display the mcq present in the database
router.get('/mcq',controller.display_mcq);

//To add the mcq to the database
router.post('/add_mcq',controller.add_mcq);



router.get('/getresult',controller.display_result);

router.post('/add_result',controller.result_store)

module.exports = router;