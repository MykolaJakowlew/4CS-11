import React from "react";
import { useInView } from 'react-intersection-observer';
import './style.css';
import './style.scss';

/**
 * 
 * @param {Object} props 
 * @param {number} props.count
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.linkText
 * @param {left | right} props.direction
 * @returns 
 */
function Card (props) {

 const ref = React.useRef();
 const onViewChange = (inView) => {
  console.log(`${props.title}:${inView}`);
  if (inView) {
   ref.current.classList.add(`card-appears-${props.direction}`);

  }
 };
 const { ref: inViewRef, inView, entry } = useInView({
  /* Optional options */
  threshold: 0.5,
  onChange: onViewChange,
  triggerOnce: true,
 });


 // Use `useCallback` so we don't recreate the function on each render
 const setRefs = React.useCallback(
  (node) => {
   // Ref's from useRef needs to have the node assigned to `current`
   ref.current = node;
   // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
   inViewRef(node);
  },
  [inViewRef],
 );

 return (
  <a
   ref={setRefs}
   href="#"
   className="data-card "
  >
   {/* <span>inView: {inView.toString()}</span> */}
   <h3>{props.count}</h3>
   <h4>{props.title}</h4>
   <p>{props.description}</p>
   <span class="link-text">
    {props.linkText}
    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD" />
    </svg>
   </span>
  </a>);
}

export default Card;