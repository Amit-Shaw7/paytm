const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique : true,
        minLength : 3,
        maxLength : 30,
        lowercase : true,
        trim : true
    },
    firstName: {
        type: String,
        required: true,
        maxLength : 50,
        trim : true
    },
    lastName: {
        type: String,
        required: true,
        maxLength : 50,
        trim : true
    },
    password: {
        type: String,
        required: true,
        minLength : 6
    },
} , {timestamps:true});

const User = mongoose.model('User', UserSchema);
export default User;