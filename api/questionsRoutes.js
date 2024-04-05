const express = require('express');
const router = express.Router();
const pool = require('./db');


//QUESTION AND ANSWERS
router.get('/questions', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM questions');
      res.json(result.rows);
    } catch (error) {
      console.error('Error getting questions:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Get a single question by ID
  router.get('/questions/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('SELECT * FROM questions WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Question not found' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error getting question by ID:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Create a new question
  router.post('/questions', async (req, res) => {
    const { examname, question_text, options, correct_answer } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO questions (examname, question_text, options, correct_answer) VALUES ($1, $2, $3, $4) RETURNING *',
        [examname, question_text, options, correct_answer]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error creating question:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  
  // Update a question
  router.put('/questions/:id', async (req, res) => {
    const { id } = req.params;
    const { question_text, options, correct_answer } = req.body;
    try {
      const result = await pool.query(
        'UPDATE questions SET question_text = $1, options = $2, correct_answer = $3 WHERE id = $4 RETURNING *',
        [question_text, options, correct_answer, id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Question not found' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error updating question:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Delete a question
  router.delete('/questions/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('DELETE FROM questions WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Question not found' });
      }
      res.json({ message: 'Question deleted successfully' });
    } catch (error) {
      console.error('Error deleting question:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Get a random question
router.get('/random', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM questions ORDER BY RANDOM() LIMIT 1');
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error getting question:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });



  // Get all groups with associated users
router.get('/', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT groups.id, groups.name, groups.description, array_agg(users.username) AS users
            FROM groups
            LEFT JOIN users ON users.group_id = groups.id
            GROUP BY groups.id;
        `);
        res.json(result.rows);
    } catch (error) {
        console.error('Error getting groups:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


//GROUP
// Create a new group with users
router.post('/', async (req, res) => {
    const { name, description, users } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO groups (name, description, users) VALUES ($1, $2, $3) RETURNING *',
            [name, description, users]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating group:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update a group with users
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, users } = req.body;
    try {
        const result = await pool.query(
            'UPDATE groups SET name = $1, description = $2, users = $3 WHERE id = $4 RETURNING *',
            [name, description, users, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Group not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating group:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

  
  module.exports = router;