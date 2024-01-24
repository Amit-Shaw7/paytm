const { validateSignup, validateGetUser } = require("./validators")

const User = require('../../models/user');

const getUser = async (req, res, next) => {
    const id = req.userId;
    const validated = validateGetUser.safeParse(req.params);

    if (!validated.success) {
        return res.status(400).json({ msg: "Invalid request" });
    }

    const user = await User.findById(validated.data.id);
    if (!user) {
        return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json({
        msg: "User fetched",
        user
    });
}

module.exports = getUser;