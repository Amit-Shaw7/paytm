const zod = require("zod");

const validateSignup = zod.object({
    username : zod.string().email(),
    firstName : zod.string().minLength(3).max(50),
    lastName : zod.string().minLength(3).max(50),      
    password : zod.string().minLength(6)
});

const validateSignIn = zod.object({
    username : zod.string().email(),
    password : zod.string().minLength(6)
});

module.exports = {
    validateSignup,
    validateSignIn,
}