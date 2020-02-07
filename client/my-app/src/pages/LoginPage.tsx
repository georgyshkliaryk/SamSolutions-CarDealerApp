import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div> 
      <h2>Login/Register</h2>
      <input type="text"/><br/>
      <input type="text"/><br/>
      <Link to="/404">
        <button>Login</button><br/>
      </Link>
      <Link to="/">Sign in as a guest</Link>
    </div>
  );
}

export default LoginPage;