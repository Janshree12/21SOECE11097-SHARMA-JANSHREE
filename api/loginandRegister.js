
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const pool = require('./database');
const router = express.Router()

// Register endpoint
router.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await (password, 10);
      await pool.query('INSERT INTO admin (username, password) VALUES ($1, $2)', [username, hashedPassword]);
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  //Admin Login endpoint
  router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const result = await pool.query('SELECT * FROM admin WHERE username = $1', [username]);
      const user = result.rows[0];
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      const token = jwt.sign({ username: user.username }, 'your_secret_key');
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  module.exports = router;