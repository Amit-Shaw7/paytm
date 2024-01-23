const express = require('express');
const signup = require('../controllers/user/signup');
const signin = require('../controllers/user/signin');
const getUsers = require('../controllers/user/getUsers');
const updateDetails = require('../controllers/user/updateDetails');
const { authMiddleware } = require('../middleware');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World");
});

router.post("/signup", signup);

router.post("/signin", signin);

router.get("/search" , getUsers);

router.put("/update" , authMiddleware, updateDetails);


module.exports = router;