//import React from 'react';
import './signin.css';
import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const StudentSignIn=()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5001/studentlogin', { username, password });
        const { token } = response.data;
        // Assuming you want to store the token in localStorage
        localStorage.setItem('token', token);
        navigate('/student')
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
        <h2>Login Student</h2>
        <form onSubmit={handleLogin}>
            <div className="input-container">
                <label >Username</label>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-container">
                <label >Password</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <center><button type="submit">Login</button></center>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </body>
    </>
   ) 

}
export default StudentSignIn;