import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import Card from './Card';
import { Posts } from '../dummyData'; 
import "../blank.css"
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const StackedCards = () => {
  const cardAngles = [-15, -7, -5, -3];

  const [slidingCardIndex, setSlidingCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSlidingCardIndex(index);
    setTimeout(() => {
      setSlidingCardIndex(null);
    }, 1000);
  };

  return (
    <div className="stacked-cards-container" id='stackedCards'>
    <Link className='arrowUp' to="#blank1" > <FaArrowUp /> </Link>  
      <h1 className="largeTxt">A LARGE TEXT BEHIND CARD</h1>
      {cardAngles.map((angle, index) => (
        <Card
          key={index}
          angle={angle}
          post={Posts[index]} 
          sliding={slidingCardIndex === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
  <Link className='arrowDown' to="#blank2"> <FaArrowDown /> </Link> 
    </div>
  );
};

export default StackedCards;
