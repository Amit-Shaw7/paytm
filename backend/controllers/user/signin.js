const { validateSignIn } = require("./validators")
const User = require('../../models/user');
const jwt = require("jsonwebtoken");

const signin = async (req, res, next) => {
    const validated = validateSignIn.safeParse(req.body);

    if (!validated.success) {
        return res.status(400).json({ msg: validated.error });
    }

    const user = await User.findOne({ email: validated.data.email });
    if (!user) {
        return res.status(404).json({ msg: "User Not Found" });
    }

    if (user.password !== validated.data.password) {
        return res.status(400).json({ msg: "Invalid Password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    return res.status(200).json({
        msg: "User created",
        token,
        user
    });
}

module.exports = signin;