import React, { useState } from 'react';
import "../components/Signin.css"
import {auth} from "../firebase"
import background from '../images/netflix-poster.jpg'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const register = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    auth.createUserWithEmailAndPassword(email,password).then((authUser)=>{
        console.log(authUser);
    }).catch((error)=>{
        alert(error.message);
        setError(error.message);
    })
    setLoading(false);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then
    ((authUser)=>{
        console.log(authUser);
    }).catch((error)=>{
        alert(error.message);
        setError(error.message);
    })
  };

  

  return (
    <div className='signin-wrapper'>
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
      <p onClick={register}>
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </div>
    </div>
  );
}

export default SignIn;
