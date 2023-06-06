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
    try {
        const { title, description,slug, genre } = req.body

        const create_blog = await Blogs.create({
            title,
            user: req.user.id,
            description,
            genre,
            slug
        })
        create_blog.save()

        return res.status(200).json({ message_type: "success", message: "Blog posted successfully!" })

    } catch {
        return res.status(400).json({ message_type: "error", message: "Couldn't save blog" })
    }
})


//Route 2: To Delete Note

router.delete('/delete/:id', fetchUser, async (req, res) => {
    const { id } = req.params
    try {
        const find_blog = await Blogs.findOne({
            _id: id,
        })
        if (!find_blog) {
            return res.status(400).send("Invalid id")
        }
        if (find_blog.user == req.user.id) {
            await Blogs.findByIdAndDelete(id)
            return res.status(200).json({ message_type: "success", message: "Blog deleted successfully!" })
        }
        return res.status(401).send("Not Matching")
    } catch {
        return res.status(500).send("Internal Server Error")
    }
})

//Route 3: To find blog of specific genre
router.get('/find/:genre', async (req, res) => {
    const { genre } = req.params
    try {
        let find_blogs = await Blogs.find({
            genre
        })
        res.status(200).json({ message_type: "success", blogs: find_blogs })
    } catch {
        res.status(500).json({ message_type: "error", message: "Internal Server Error" })
    }
})


module.exports = router;