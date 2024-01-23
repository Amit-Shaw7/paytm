const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World");
});

router.get("/signup", (req, res) => {
    res.send("Signup route");
});

router.get("/signin", (req, res) => {
    res.send("Signin route");
});


module.exports = router;