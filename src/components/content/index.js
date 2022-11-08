import React, { useState } from "react";
import './style.css';
import Card from './card';
import mockData from './mock/data.json';
// import UUID from 'uuid';
import { v4 as uuid } from 'uuid';

function Content () {
  const cards = mockData.map(el => {
    el.id = uuid();
    // el.id = UUID.v4();
    return el;
  });
  const [tag, setTag] = useState();
  // setTag -- helper function to tell react that something was changed
  console.log('tag:', tag);

  const classNames = ['selected-tag'];
  if (tag) {
    classNames.push('show');
  }

  const [selectedCard, setSelectedCard] = useState();
  console.log('selectedCard:', selectedCard);
  return (
    <div className="content-container">
      <div className={classNames.join(' ')}>{tag}</div>
      {cards
        .filter(card => {
          if (tag) {
            return card.tag === tag;
          }

          if (selectedCard) {
            return card.id === selectedCard.id;
          }

          return true;
        })
        .map(card => <Card
          id={card.id}
          isArticleVisible={selectedCard && card.id === selectedCard.id}
          image={card.image}
          title={card.title}
          description={card.description}
          date={card.date}
          tag={card.tag}
          fullPage={card.fullPage}
          setSelectedTag={setTag}
          setSelectedCard={() => setSelectedCard(card)}
        />)}
      <div
        className="return-all-posts"
        onClick={() => { setTag(); setSelectedCard(); }}
      >All posts</div>
    </div>
  );
}

export default Content;

/**
 * const a = [1,2,3];
 * const b = a.map((elem, index, arr) => {
 *  return {
 *    value: e * 2,
 *    i: index
 * });
 * b => [
 *  { value: 2, i: 0 },
 *  { value: 4, i: 1 },
 *  { value: 6, i: 2 },
 * ]
 */

/**
 * classNames.join(' ')
 * 
 * const a = [1,2,3];
 * a.join(' ') => "1 2 3"
 * a.join(' x ') => "1 x 2 x 3"
 * a.join(',') => "1,2,3"
 * a.join('') => "123"
 * a.join() => "1undefined2undefined3"
 */