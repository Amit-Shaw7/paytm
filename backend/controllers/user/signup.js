const { validateSignup } = require("./validators")

const User = require('../../models/user');

const signup = async (req, res, next) => {
    const validated = validateSignup.safeParse(req.body);

    if (!validated.success) {
        return res.status(400).send(validated.error);
    }

    const user = await User.findOne({ username: validated.data.username });
    if (user) {
        return res.status(400).send("User already exists");
    }

    const newUser = new User({
        username: validated.data.username,
        firstName: validated.data.firstName,
        lastName: validated.data.lastName,
        password: validated.data.password
    });

    await newUser.save();
    return res.status(200).send("User created");
}

module.exports = signup;