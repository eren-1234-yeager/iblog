const express = require('express');
const Users = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

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
        //Check if user already exists
        let find_user = await Users.findOne({
            username: username,
        })
        
        //If user exists
        if (find_user) {

            let n_password = await bcrypt.compare(password, find_user.password)

            if (!n_password) {
                return res.status(401).json({ message_type: "Error", message: "Invalid Crendentials" })
            }

            res.status(200).json({ message_type: "success", message: "Logged in Succcessfully!" })

        } else {
            res.status(401).json({ message_type: "Error", message: "Invalid Crendentials" })
        }
    } catch (e) {
        res.status(500).send("Internal Server Error")
    }
})

//Route 2: To signup a user

router.post('/signup', [
    body('username').isLength({ min: 3 }),//Checking Validation for username
    body('password').isLength({ min: 5 }),//Checking Validation for password
    body('cpassword').isLength({ min: 5 })//Checking Validation for cpassword
], async (req, res) => {
    const errors = validationResult(req);

    //Check for errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let { username, password, cpassword } = req.body
    try {
        if (password != cpassword) {//If passwords didn't match
            return res.status(401).json({ message_type: "Error", message: "Invalid Crendentials" })
        }
        let salt = await bcrypt.genSalt(10)

        let hash_pass = await bcrypt.hash(password, salt);

        let find_user = await Users.findOne({//Cheeck if user exists
            username: username,
        })
        if (find_user) {//If user exists
            return res.status(400).json({ message_type: "Error", message: "Username already exists" })
        }
        //If it is new user 
        let create_user = await Users.create({
            username: username,
            password: hash_pass
        })
        create_user.save()

        res.status(200).json({ message_type: "success", message: "User created successfully" })


    } catch (e) {
        res.status(500).send("Internal Server Error")
    }
})


module.exports = router;