import React, { useState } from 'react';
import '../css/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or authentication logic here
    if (username === 'admin' && password === 'password') {
      // Login successful, redirect to dashboard or next page
      window.location.href = '/dashboard';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <section className='h-550'>
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Login</h2>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter username"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              className="form-control"
            />
          </div>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <p className="forgot-password">
          Forgot password? <a href="#">Click here</a>
        </p>
        <p className="forgot-password">
          Don't have an account? <a href="#">Register here</a>
        </p>
      </div>
    </div>
    </section>
  );
};

export default Login;