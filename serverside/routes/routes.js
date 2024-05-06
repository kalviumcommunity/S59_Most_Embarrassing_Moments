const express = require('express')
const router = express.Router()
const { connectToDataBase } = require('../db.js')
const Moment = require('../schemas/schema.js')

connectToDataBase()
  
router.get('/', async (req, res) => {
    try {
        const times = await Moment.find()
        res.json(times)
    }
    catch (error) {
        res.json({error: 'An error has been caught - get'})
<<<<<<< HEAD:routes.js
=======
    }
})

router.get('/:location', async (req, res) => {
    try {
        //when searching, use %20 for space between the works for location search
        const location = req.params.location
        if (!location) {
            return res.status(400).json({ error: 'Location parameter is required' });
        }
        const moments = await Moment.find({ location });
        res.json(moments);
    } 
    catch (error) {
        res.status(500).json({ error: 'An error has been caught - getLocation' });
>>>>>>> 81e189c8ed68b1d594075fd151bea12dddf782f0:serverside/routes/routes.js
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

<<<<<<< HEAD:routes.js
module.exports = router
=======
module.exports = router
>>>>>>> 81e189c8ed68b1d594075fd151bea12dddf782f0:serverside/routes/routes.js
