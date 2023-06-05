const express = require('express');
const Users = require('../models/User')
const { body, validationResult } = require('express-validator');

const router = express.Router();

//Route 1: To Login user...
router.post('/login', [
    body('username').isLength({ min: 3 }),//Checking Validation for username
    body('password').isLength({ min: 5 })//Checking Validation for password
], async (req, res) => {
    const errors = validationResult(req);

    //Check for errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let { username, password } = req.body
    try {
        let find_user = await Users.findOne({
            username: username,
            password: password
        })
        if (find_user) {
            res.status(200).json({ message_type: "success", message: "Logged in Succcessfully!" })
        } else {
            res.status(401).json({ message_type: "Error", message: "Invalid Crendentials" })
        }
    } catch (e) {
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router;