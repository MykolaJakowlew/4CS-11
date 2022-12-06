import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./header";
import Products from "./products";
import './style.css';
import UserContext from "./userContext";

function MainPage () {

 const [userProfile, setUserProfile] = React.useState({
  products: []
 });

 const navigate = useNavigate();

 useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
   navigate('/login');
  }
 }, []);

 const profile = { userProfile, setUserProfile };

 return (
  <div className="full-screen bg-main">
   <UserContext.Provider value={profile}>
    <Header />
    This is main page
    <Products />
   </UserContext.Provider>
  </div>
 );
}

export default MainPage;