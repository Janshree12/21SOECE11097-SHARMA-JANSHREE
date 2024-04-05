import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css'

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();
  
    const handleRegister = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
  
      try {
        const response = await axios.post('http://localhost:5001/register', { username, password });
        const { token } = response.data;
        localStorage.setItem('token', token);
      navigate('/')
        // Handle registration success, such as redirecting to login page or showing a success message
      } catch (error) {
        setError('Registration failed');
        console.error(error);
      }
    };

  return (
    <>
    <br/>
    <br/>
    <body className='body1'>
    <div className="register-form">
    <h2>Register</h2>
    <form onSubmit={handleRegister}>
        <div className="form-group">
            <label >Username:</label>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        
        <div className="form-group">
            <label >Password:</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
            <label >Confirm Password:</label>
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
       <center> <button type="submit">Register</button></center>
    </form>
    {error && <p style={{ color: 'red' }}>{error}</p>}
</div>
</body>
</>
  );
};

export default RegisterPage;