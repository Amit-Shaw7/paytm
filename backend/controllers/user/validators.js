const zod = require("zod");

const validateSignup = zod.object({
    username : zod.string().email(),
    firstName : zod.string(),
    lastName : zod.string(),      
    password : zod.string()
});

const validateSignIn = zod.object({
    username : zod.string().email(),
    password : zod.string()
});

module.exports = {
    validateSignup,
    validateSignIn,
}