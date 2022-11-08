import React, { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import './style.css';

// AOS.init();

const getComponentHeader = (text) => {
  return (
    <div className="card-header">{text}</div>
  );
};

function Card (props) {
  // useEffect(() => AOS.refresh(), []);
  return (
    <div className="card">
      <div className="card-id">{props.id}</div>
      <div
        className="card-image"
        onClick={props.setSelectedCard}
        style={{
          backgroundImage: `url(${props.image})`
        }}></div>
      <div className="card-text">
        <div
          className="card-title"
          onClick={props.setSelectedCard}>
          {props.title}</div>
        <div className="card-description">{props.description}</div>
        <div className="card-meta">
          {props.date} |
          <span
            className="card-tag"
            onClick={() => props.setSelectedTag(props.tag)}
          >{props.tag}</span>
        </div>
      </div>
      <article
        // data-aos="fade-down"
        className={props.isArticleVisible ? '' : 'hide'}
      >
        {
          props.fullPage.map(el => {
            switch (el.type) {
              case 'header': {
                return getComponentHeader(el.text);
              }

              default: { }
            }
          })
        }
      </article>
    </div>
  );
}

export default Card;