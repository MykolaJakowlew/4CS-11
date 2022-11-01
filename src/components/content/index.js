import React from "react";
import './style.css';
import Card from './card';
import image1 from './imgs/5e4b1a8c95e491b7e5265a8a_3f4eb74a.jpg';

function Content () {
 const cards = [
  {
   image: image1,
   title: 'Coffee variety macchiato, as organic ut variety caffeine americano',
   description: 'Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk',
   date: 'June 25, 2020',
   tag: 'Travel',
  },
  {
   image: image1,
   title: 'Coffee variety macchiato, as organic ut variety caffeine americano',
   description: 'Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk',
   date: 'June 25, 2020',
   tag: 'Travel',
  }
 ];

 return (
  <div className="content-container">
   {cards.map(card => <Card
    image={card.image}
    title={card.title}
    description={card.description}
    date={card.date}
    tag={card.tag}
   />)}
  </div>
 );
}

export default Content;