const express = require('express');
const getBalance = require('../controllers/account/getBalance');
const { transferAmountBetter } = require('../controllers/account/transferAmount');

const router = express.Router();

router.get('/balance' , getBalance);
router.get('/transfer' , transferAmountBetter);

module.exports = router;