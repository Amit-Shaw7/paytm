const { validateSignup } = require("./validators")

const User = require('../../models/user');
const { default: Account } = require("../../models/account");

const signup = async (req, res, next) => {
    const validated = validateSignup.safeParse(req.body);

    if (!validated.success) {
        return res.status(400).json({ masg: validated.error });
    }

    const user = await User.findOne({ username: validated.data.username });
    if (user) {
        return res.status(400).json({ msg: "User already exists" });
    }

    const newUser = new User({
        username: validated.data.username,
        firstName: validated.data.firstName,
        lastName: validated.data.lastName,
        password: validated.data.password
    });

    const userSaved = await newUser.save();
    if (!userSaved) {
        return res.status(500).json({
            msg: "Something went wrong",
        })
    }
    await Account.create({
        balance : 1 + Math.random() * 10000,
        userId : userSaved._id
    });

    return res.status(200).json({ msg: "User created" });
}

module.exports = signup;