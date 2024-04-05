const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const pool = require('./database');
const router = express.Router()

// Routes
// Get all groups
router.get('/api/group', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM group_info');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error getting groups:', error);
      res.status(500).json({ error: 'Error getting groups' });
    }
  
    
  });
  
  // Create a new group
  router.post('/api/group', async (req, res) => {
    const { name, description } = req.body;
    
    try {
      const result = await pool.query('INSERT INTO group_info (group_name, group_description) VALUES ($1, $2) RETURNING *', [name, description]);
      
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error creating group:', error);
      res.status(500).json({ error: 'Error creating group' });
    }
  
  
  });
  
  router.delete('/api/group/:group_id', async (req, res) => {
    const userId = req.params.group_id;
    try {
        const result = await pool.query('DELETE FROM group_info WHERE group_id = $1 RETURNING *', [userId]);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  router.post('/api/group/addStudent/:group_id', async (req, res) => {
    const { studentId, } = req.body; // Retrieve group_Id from request body
    const groupid=req.params.group_id
    if (!studentId || !group_Id) {
      return res.status(400).json({ error: 'Student ID and group ID are required' });
    }
  
    try {
      // Example query to add the student to the group
      const client = await pool.connect();
      await client.query('UPDATE student SET group_id = $1 WHERE id = $2', [groupid, studentId]);
      client.release();
      res.json({ message: 'Student added to group successfully' });
    } catch (error) {
      console.error('Error adding student to group:', error);
      res.status(500).json({ error: 'Error adding student to group' });
    }
  });
  


module.exports = router; 