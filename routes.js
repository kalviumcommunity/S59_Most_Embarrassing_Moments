const express = require('express')
const router = express.Router()
const { connectToDataBase } = require('./db.js')
const Moment = require('./schema.js')

connectToDataBase()

router.get('/', async (req, res) => {
    try {
        const times = await Moment.find()
        res.json(times)
    }
    catch (error) {
        res.json({error: 'An error has been caught - get'})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const times = await Moment.findById(req.params.id)
        res.json(times)
    }
    catch (error) {
        res.json({error: "An error has been caught - getID"})
    }
})

router.post('/', async (req, res) => {
    try {
        const time = new Moment(req.body)
        const saveMoment = await time.save()
        res.status(201).json(saveMoment)
    }
    catch (error) {
        res.send({error:"An error has been caught - post"})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const times = await Moment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!times) {
            return res.status(400).send("No result found")
        }
        res.json(times)
    }
    catch (error) {
        res.status(400).json({error: "An error has been caught"})
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const times = await Moment.findByIdAndUpdate(req.params.id, req.body, { new : true })    
        if (!times) {
            return res.status(400).json("No result found")
        }
        res.json(times)
    }
    catch (error) {
        res.status(400).json({error: "An error has been caught - patch"})
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const times = await Moment.findByIdAndDelete(req.params.id)
        if (!times) {
            return res.status(400).send("No result found")
        }
        res.send("Item deleted successfully")
    }
    catch (error) {
        res.status(400).json({error: "An error has been caught"})
    }
})

module.exports = router
