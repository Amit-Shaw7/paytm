const { default: mongoose } = require('mongoose');
const Account = require('../../models/account');
const { validateTransferAmount } = require('./validators');

const transferAmount = async (req, res, next) => {
    const userId = req.userId;

    const validated = validateTransferAmount.safeParse(req.body);
    if (!validated.success) {
        return res.status(400).json({ masg: validated.error });
    }

    const toAccount = await Account.findById(validated.data.toAccount);
    if (!toAccount) {
        return res.status(400).json({ msg: "Account not found" });
    }
    const fromAccount = await Account.findById(userId);

    // Detecting money from users account
    if (fromAccount.balance < validated.data.amount) {
        return res.status(400).json({ msg: "Insufficient balance" });
    }

    fromAccount.balance = fromAccount.balance - validated.data.amount;
    const deducted = await toAccount.save();

    if (!deducted) {
        return res.status(500).json({
            msg: "Internal server error"
        });
    }

    // crediting money to another account
    toAccount.balance = toAccount.balance + validated.data.amount;
    const credited = await toAccount.save();

    if (!credited) {
        fromAccount.balance = fromAccount.balance + validated.data.amount;
        await toAccount.save();
    }

    return res.status(200).json({
        msg: "Transfer successfull",
        balance: validated.data.amount
    });
};


const transferAmountBetter = async (req, res, next) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Insufficient funds"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    console.log("done")
    return res.status(200).json({
        msg: "Transfer successfull",
    });
}

module.exports = { transferAmount, transferAmountBetter };