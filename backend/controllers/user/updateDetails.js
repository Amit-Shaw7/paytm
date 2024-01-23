const { validateSignup } = require("./validators")

const User = require('../../models/user');

const updateDetails = async (req, res, next) => {
    const id = req.userId;
    const { password, firstName, lastName } = req.body;

    if (password && password.length > 0) {
        return res.status(411).json({ msg: "Password is too short" });
    }

    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({ msg: "User not found" });
    }

    password && (user.password = password);
    firstName && (user.firstName = firstName);
    lastName && (user.lastName = lastName);

    await user.save();

    return res.status(200).json({ msg: "User updated" });
}

module.exports = updateDetails;