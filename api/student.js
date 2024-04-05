
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const pool = require('./database');
const { route } = require('./loginandRegister');
const router = express.Router()


//STUDENT
// Create operation for studnet registration
router.post('/api/users', async (req, res) => {
  const { name, username, password } = req.body;
  try {
      const result = await pool.query('INSERT INTO student (name, username, password) VALUES ($1, $2, $3) RETURNING *', [name, username, password]);
      res.status(201).json(result.rows[0]);
  } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Read operation for fetching users (not recommended in a real scenario)
router.get('/api/users', async (req, res) => {
  try {
      const result = await pool.query('SELECT * FROM student');
      res.status(200).json(result.rows);
  } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Update operation for modifying user data
router.put('/api/users/:id', async (req, res) => {
  const userId = req.params.id;
  
  const { name, username, password } = req.body;
  try {
      const result = await pool.query('UPDATE student SET name = $1, username = $2, password = $3 WHERE id = $4 RETURNING *', [name, username, password, userId]);
      res.status(200).json(result.rows[0]);
  } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete operation for removing a user
router.delete('/api/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
      const result = await pool.query('DELETE FROM student WHERE id = $1 RETURNING *', [userId]);
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// app.post('/studentlogin', async (req, res) => {
//   try {
//     const { username, password } = req.body;
    
//     // Check if the user exists
//     const userExistence = await pool.query('SELECT * FROM student WHERE username = $1', [username]);
//     const existingUser = userExistence.rows[0];

//     if (!existingUser) {
//       // If the user does not exist, return unauthorized
//       return res.status(401).json({ message: 'Invalid username or password' });
//     }

//     // If the user exists, validate the password
//     const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid username or password' });
//     }
    
//     // Generate JWT token for the existing user
//     const token = jwt.sign({ username: existingUser.username }, 'your_secret_key');
//     res.json({ token });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


router.post('/studentlogin', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await pool.query('SELECT * FROM student WHERE username = $1', [username]);
    const user = result.rows[0];
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const isPasswordValid =await (password, user.password);
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