const { default: Account } = require('../../models/account');

const getBalance = async (req, res, next) => {
    const id = req.userId;
    const account = await Account.findOne({ userId: id });

    return res.status(200).json({
        msg: "Balance fetched",
        balance : account.balance
    });
}

module.exports = getBalance;