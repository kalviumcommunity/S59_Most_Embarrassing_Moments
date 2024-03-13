const express = require('express');
const router = express.Router();
const { connectToDataBase } = require('../db.js');
const User = require('../schemas/user-schema.js');
const jwt = require('jsonwebtoken')

// connectToDataBase();

router.get('/', async (req, res) => {
  try {
      const user = await User.find()
      res.json(user)
  }
  catch (error) {
      res.json({error: 'An error has been caught - get'})
  }
  // res.send("ok working")
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username && password) {
      const user = await User.findOne({ username, password });
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      const token = jwt.sign({userId: user._id}, process.env.SECRET_CODE, {expiresIn: '3h'})
      res.status(200).json({ message: 'Login successful', user, token });
    } 
    
    else {
      res.status(200).json({ message: 'Logout successful' });
    }
  } 
  
  catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/signup', async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ username, email });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const newUser = new User({ name, username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
