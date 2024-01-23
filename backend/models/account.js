const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    balance: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Account = mongoose.model("Account" , AccountSchema);
export default Account;