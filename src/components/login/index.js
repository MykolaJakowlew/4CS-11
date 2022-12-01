import React, { useEffect } from "react";
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// https://dummyjson.com/docs/auth

function LoginPage () {
 const navigate = useNavigate();
 const loginRef = React.useRef();
 const passwordRef = React.useRef();

 useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
   navigate('/');
  }
 }, []);

 const login = async () => {
  const userLogin = loginRef.current.value;
  const password = passwordRef.current.value;

  if (!userLogin || !password) {
   return;
  }
  console.log({ userLogin, password });

  const response = await axios.post(
   'https://dummyjson.com/auth/login',
   { username: userLogin, password }
  );

  const token = response.data.token;
  localStorage.setItem('token', token);
  const userProfile = {
   firstName: response.data.firstName,
   lastName: response.data.lastName,
   image: response.data.image,
  };
  // Object => String --> JSON.stringify
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
  navigate('/');
 };

 return (
  <div className="full-screen center bg-main">
   <div className="login-wrapper">
    <div>Login: <input type="text" ref={loginRef} /></div>
    <div>Password: <input type="password" ref={passwordRef} /></div>
    <div>
     <button onClick={login}>Login</button>
    </div>
   </div>
  </div>
 );
}

export default LoginPage;