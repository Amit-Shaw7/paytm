const express = require('express');
const getBalance = require('../controllers/account/getBalance');
const { transferAmountBetter } = require('../controllers/account/transferAmount');
const { authMiddleware } = require('../middleware');

const router = express.Router();

router.get('/balance' , authMiddleware , getBalance);
router.put('/transfer' , authMiddleware , transferAmountBetter);

module.exports = router;