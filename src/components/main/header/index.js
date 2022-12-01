import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './style.css';

function Header () {
 const navigate = useNavigate();

 const userProfileText = localStorage.getItem('userProfile'); // string
 // String => Object --> JSON.parse
 const userProfile = JSON.parse(userProfileText);

 const menuRef = useRef();

 const mouseEnter = () => {
  menuRef.current.classList.toggle('show');
 };

 const mouseLeave = () => {
  menuRef.current.classList.toggle('show');
 };

 const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userProfile');
  navigate('/login');
 };

 return (
  <header>
   <div
    onMouseEnter={mouseEnter}
    onMouseLeave={mouseLeave}
    className="profile">
    <img src={userProfile.image} alt="" />
    <div>{userProfile.firstName} {userProfile.lastName}</div>
    <div ref={menuRef} className="profile-menu">
     <li onClick={logout}>Logout</li>
    </div>
   </div>
  </header>
 );
}

export default Header;