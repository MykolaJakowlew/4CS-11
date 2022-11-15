import React from "react";
import './style.css';
import MenuItem from "./menu-item";

function Navigation () {
 const menu = [
  { text: 'homepage' },
  {
   text: 'pages',
   items: [
    { text: 'page 1' },
    { text: 'page 2' },
    { text: 'page 3' },
   ]
  },
  {
   text: 'menu item 3',
   items: [
    { text: 'page a' },
    { text: 'page b' },
    { text: 'page c' },
    { text: 'page d' },
   ]
  }
 ];
 return (
  <header>
   {
    menu.map(elem => <MenuItem elem={elem} />)
   }
  </header>
 );
}

export default Navigation;