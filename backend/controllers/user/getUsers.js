const User = require('../../models/user');
const { validateGetUsers } = require('./validators');

const getUsers = async (req, res, next) => {
    // const id = req.userId;
    const filter = (req.query.filter || "").toLowerCase().trim();

    console.log(filter);

    const users = await User.find({
        $or: [{
                firstName: {
                    $regex: filter
                }
            },{
                lastName: {
                    $regex: filter
                }
            }
        ]
    });

    if (!users || users.length === 0) {
        return res.status(200).json({
            msg: "Users found",
            users: []
        });
    }

    return res.status(200).json({
        msg: "Users found",
        users: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    });
}

module.exports = getUsers;