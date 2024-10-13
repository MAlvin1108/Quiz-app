import React, { useState }from 'react'
import './Loginform.css'
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        if (username === 'user' && password === 'pass') {
            console.log('Navigating to /quiz');
            navigate('/quiz');
            console.log('Navigate function called')
        }
        else {
            setError('Username atau password salah');
            console.log('Invalid credentials')
        }
    }

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {error && <p className="error">{error}</p>}
                <div className="input-box">
                    <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an anccount? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    )
}
export default Loginform