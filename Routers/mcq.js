const express = require('express')
const controller = require('../Controllers/mcqControllers')
const router = express.Router();

router.get('/result',controller.display_result);

//To display the mcq present in the database
router.get('/',controller.display_mcq);

//To add the mcq to the database
router.post('/',controller.add_mcq);

router.post('/result',controller.result_store)

module.exports = router;    