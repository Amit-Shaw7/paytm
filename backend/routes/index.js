const express = require('express');
const { default: userRouter } = require('./users');
const { default: accountRouter, route } = require('./accounts');
const router = express.Router();


router.route('/user' , userRouter); 
router.route('/account' , accountRouter);


module.exports = router;