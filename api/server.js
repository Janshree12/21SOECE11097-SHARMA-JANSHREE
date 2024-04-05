// server.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const { Pool } = require('pg');
const login=require('./loginandRegister')
const student=require('./student')
const teacher=require('./teacher')
const group=require('./group')
const exam=require('./exam')
const profile=require('./profile')
const questionsRoutes = require('./questionsRoutes');



const app = express();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db',
  password: 'J@nshree1227',
  port: 5432,
});

pool.connect((err) => {
    if (err) {
        console.error('Error connecting to PostgreSQL database: ', err.stack);
        return;
    }
    console.log('Connected to PostgreSQL database');
});

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );



app.use('/',profile)
app.use('/',exam)
app.use('/',group)
app.use('/',teacher)
app.use('/',student);
app.use('/api', questionsRoutes);
app.use('/',login);
  
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));