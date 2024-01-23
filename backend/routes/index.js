const express = require('express');
const { default: userRouter } = require('./user');
const router = express.Router();


router.route('/user' , userRouter);    


module.exports = router;