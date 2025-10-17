
const {Register} = require('../controller/Registercontroller');
const {Registervalidation} = require('../middleware/Registervalidation');

const upload = require('../middleware/ImageUpload');
const router = require('express').Router();

router.post('/register',Registervalidation,Register );

module.exports = router;