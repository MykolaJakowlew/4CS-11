import React, { useState } from "react";
import './style.css';
import Card from './card';
import mockData from './mock/data.json';

function Content () {
  const cards = mockData;
  const [tag, setTag] = useState();
  // setTag -- helper function to tell react that something was changed
  console.log('tag:', tag);

  const classNames = ['selected-tag'];
  if (tag) {
    classNames.push('show');
  }
  return (
    <div className="content-container">
      {/* { tag && <div className="selected-tag">{tag}</div>} */}
      {/* <div
        className="selected-tag"
        style={{
          display: tag ? 'block' : 'none'
        }}
      >{tag}</div> */}
      <div className={classNames.join(' ')}>{tag}</div>
      {cards
        .filter(card => tag == null || card.tag === tag)
        .map(card => <Card
          image={card.image}
          title={card.title}
          description={card.description}
          date={card.date}
          tag={card.tag}
          setSelectedTag={setTag}
        />)}
      <div
        className="return-all-posts"
        onClick={() => setTag()}
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