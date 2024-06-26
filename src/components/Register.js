// Register.js
import React from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
      navigate('/Login'); // Navigate to Register page
    };
    return (
        <div className="register-container">
            <h1>Register</h1>
            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>
                <button type="submit">Register</button>
                <button type="button" onClick={handleButtonClick}>
                    Already have an account? Login
                </button>
            </form>
        </div>
    );
};

export default Register;