import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validUsers from '../data/loginData'; 
import '../assets/Login.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'VTS_Exam_Portal | Login';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = validUsers[email.toLowerCase()];

    if (user && user.password === password) {
      localStorage.setItem('userName', user.name);
      localStorage.setItem('userImage', user.image);
      localStorage.setItem('isLoggedIn', 'true');
      if (onLogin) onLogin();
      navigate('/overview');
    } else {
      setError(
        'Invalid email or password. Valid users: kavya.uiux@vts.in, ramesh.uiux@vts.in, sugan.uiux@vts.in. Password: password'
      );
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <div className="particles-background"></div>
      <div className="login-form">
        <h1>Login</h1>
        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group position-relative">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} password-toggle-icon`}
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                top: '68%',
                right: '15px',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#999'
              }}
            />
          </div>

          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
