const Account = require("../../models/account");

const getBalance = async (req, res, next) => {
    const id = req.userId;
    console.log(id);
    const account = await Account.findOne({ userId: id });

    if (!account) {
        return res.status(404).json({
            msg: "Account not found"
        });
    }

    return res.status(200).json({
        msg: "Balance fetched",
        balance: account.balance
    });
}

module.exports = getBalance;