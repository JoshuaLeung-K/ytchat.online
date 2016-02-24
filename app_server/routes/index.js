var express = require('express');
var router = express.Router();
var homepageCtrl = require('../controllers/main');

/* GET home page. */
router.get('/', homepageCtrl.index);

module.exports = router;
