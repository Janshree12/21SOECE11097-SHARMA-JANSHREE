//import React from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signin.css';




const AdminSignIn=()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5001/login', { username, password });
        const { token } = response.data;
        // Assuming you want to store the token in localStorage
        localStorage.setItem('token', token);
        navigate('/admin')
        // Redirect to another page or handle login success
      } catch (error) {
        setError('Invalid username or password');
        console.error(error);
      }
    };
  

   return(
    <>
    <body className='body1'>  
    <div className="register-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div className="input-container">
                <label >Username</label>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-container">
                <label >Password</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <center><button type="submit" ><a href=''></a>Login</button></center>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </body>
    </>
   ) 

}
export default AdminSignIn;