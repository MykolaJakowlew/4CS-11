import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./header";
import Products from "./products";
import './style.css';

function MainPage () {

 const navigate = useNavigate();

 useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
   navigate('/login');
  }
 }, []);

 return (
  <div className="full-screen bg-main">
   <Header />
   This is main page
   <Products />
  </div>
 );
}

export default MainPage;