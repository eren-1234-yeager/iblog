const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator')
const fetchUser = require('../middleware/fetchUser')
const Blogs = require('../models/Blog')

//Route 1:To post a blog...
router.post('/post', [

    body('title').isLength({ min: 3 }),
    body('description').isLength({ min: 5 })

], fetchUser, async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try{
        const { title, description, genre } = req.body
        
        const create_blog = await Blogs.create({
            title: title,
            user: req.user.id,
            description: description,
            genre: genre
        })
        create_blog.save()
        
        return res.status(200).json({message_type:"success",message:"Blog posted successfully!"})

    }catch{
        return res.status(400).json({message_type:"error",message:"Couldn't save blog"})
    }
})

module.exports = router;