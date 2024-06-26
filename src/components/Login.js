// Login.js
import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/Register'); // Navigate to Register page
  };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit">Login</button>
                <button type="button" onClick={handleButtonClick}>
                    Don't have an account? Sign Up
                </button>
            </form>
        </div>
    );
};

export default Login;
