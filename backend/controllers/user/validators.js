const zod = require("zod");

const validateSignup = zod.object({
    email : zod.string().email(),
    firstName : zod.string(),
    lastName : zod.string(),      
    password : zod.string()
});

const validateSignIn = zod.object({
    email : zod.string().email(),
    password : zod.string()
});

const validateGetUser = zod.object({
    id : zod.string(),
});

module.exports = {
    validateSignup,
    validateSignIn,
    validateGetUser
}