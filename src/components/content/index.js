import React from "react";
import Card from "./card";
import './style.css';

function Content () {
 const cards = [
  {
   count: 250,
   description: 'Ipsum non ipsum Lorem qui aliquip eu veniam qui non.',
   title: 'Cupidatat aute aliqua',
   linkText: 'View all Proident'
  },
  {
   count: 300,
   description: 'Veniam do velit quis excepteur in nulla ex nisi proident ea.',
   title: 'Ex esse reprehenderit commodo commodo culpa labore.',
   linkText: 'View all Officia .'
  },
  {
   count: 15000,
   description: 'Veniam id aute enim qui incididunt consequat et incididunt deserunt consequat mollit consequat aliquip.',
   title: 'In incididunt ea laborum elit.',
   linkText: 'View all Officia .'
  }, {
   count: 250,
   description: 'Ipsum non ipsum Lorem qui aliquip eu veniam qui non.',
   title: 'Cupidatat aute aliqua',
   linkText: 'View all Proident'
  },
  {
   count: 300,
   description: 'Veniam do velit quis excepteur in nulla ex nisi proident ea.',
   title: 'Ex esse reprehenderit commodo commodo culpa labore.',
   linkText: 'View all Officia .'
  },
  {
   count: 15000,
   description: 'Veniam id aute enim qui incididunt consequat et incididunt deserunt consequat mollit consequat aliquip.',
   title: 'In incididunt ea laborum elit.',
   linkText: 'View all Officia .'
  }, {
   count: 250,
   description: 'Ipsum non ipsum Lorem qui aliquip eu veniam qui non.',
   title: 'Cupidatat aute aliqua',
   linkText: 'View all Proident'
  },
  {
   count: 300,
   description: 'Veniam do velit quis excepteur in nulla ex nisi proident ea.',
   title: 'Ex esse reprehenderit commodo commodo culpa labore.',
   linkText: 'View all Officia .'
  },
  {
   count: 15000,
   description: 'Veniam id aute enim qui incididunt consequat et incididunt deserunt consequat mollit consequat aliquip.',
   title: 'In incididunt ea laborum elit.',
   linkText: 'View all Officia .'
  }
 ];
 return (
  <div className="wrapper">
   <div>
    {
     cards
      .filter((e, i) => i % 2 == 0)
      .map(card => <Card
       direction={'left'}
       count={card.count}
       description={card.description}
       linkText={card.linkText}
       title={card.title}
      />)
    }
   </div>
   <div>
    {
     cards
      .filter((e, i) => i % 2 != 0)
      .map(card => <Card
       direction={'right'}
       count={card.count}
       description={card.description}
       linkText={card.linkText}
       title={card.title}
      />)
    }
   </div>
  </div>
 );
}

export default Content;