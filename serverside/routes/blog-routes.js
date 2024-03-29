const express = require('express')
const router = express.Router()
const { connectToDataBase } = require('../db.js')
const Post = require('../schemas/blog-schema.js')

connectToDataBase()

const postSchema = require('../schemas/joi-schema.js')

router.get('/', async (req, res) => {
    try {
        const blog = await Post.find()
        res.json(blog)
    }
    catch (error) {
        res.json({error: 'An error has been caught - get'})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const blog = await Post.findById(req.params.id)
        res.json(blog)
    }
    catch (error) {
        res.json({error: "An error has been caught - getID"})
    }
})

router.post('/', async (req, res) => {
    try {
        const {error} = postSchema.validate(req.body)
        if (error) {
            res.json({error: "Please return proper data"})
        }
        const post = new Post(req.body)
        const savePost = await post.save()
        res.status(201).json(savePost)
    }
    catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const {error} = postSchema.validate(req.body)
        if (error) {
            res.json({error: "Please return proper data"})
        }
        const blog = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!blog) {
            return res.status(400).send("No result found")
        }
        res.json(blog)
    }
    catch (error) {
        res.status(400).json({error: "An error has been caught"})
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const blog = await Post.findByIdAndUpdate(req.params.id, req.body, { new : true })    
        if (!blog) {
            return res.status(400).json("No result found")
        }
        res.json(blog)
    }
    catch (error) {
        res.status(400).json({error: "An error has been caught"})
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const blog = await Post.findByIdAndDelete(req.params.id)
        if (!blog) {
            return res.status(400).send("No result found")
        }
        res.send("Item deleted successfully")
    }
    catch (error) {
        res.status(400).json({error: "An error has been caught"})
    }
})

module.exports = router