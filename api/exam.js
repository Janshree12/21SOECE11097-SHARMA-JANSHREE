const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const pool = require('./database');
const router = express.Router()

// API routes
router.get('/exams', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM exam');
      const exams = result.rows;
      client.release();
      res.json(exams);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  router.get('/exams/:examId', async (req, res) => {
    const examId = req.params.examId;
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM exam WHERE exam_id = $1', [examId]);
      const exam = result.rows[0];
      client.release();
      res.json(exam);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  router.post('/exams', async (req, res) => {
    const { exam_name, description, start_date, start_time, group_id } = req.body;
    try {
      const client = await pool.connect();
      const result = await client.query(
        'INSERT INTO exam (exam_name, description, start_date, start_time, group_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [exam_name, description, start_date, start_time, group_id]
      );
      const createdExam = result.rows[0];
      client.release();
      res.status(201).json(createdExam);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  router.post('/api/results', async (req, res) => {
    const { userId, correct, total } = req.body;
    try {
      // Insert the results into the result table
      // Replace 'result' with your actual table name
      await pool.query('INSERT INTO quix_results (user_id, correct, total) VALUES ($1, $2, $3)', [userId, correct, total]);
      res.status(201).json({ message: 'Results stored successfully' });
    } catch (error) {
      console.error('Error storing results:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  module.exports = router; 