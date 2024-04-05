const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const pool = require('./database');
const router = express.Router()

router.get('/login/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
      const result = await pool.query('SELECT * FROM student WHERE id = $1', [userId]);
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


module.exports = router; 