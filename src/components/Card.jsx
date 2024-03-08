import React, { useState } from 'react';
import {FaHeart} from "react-icons/fa"

const Card = ({ angle, post }) => {
  const [sliding, setSliding] = useState(false);
  const [removed, setRemoved] = useState(false);

  const handleCardClick = () => {
    setSliding(true);
    setTimeout(() => {
      setRemoved(true);
    }, 1000); 
  };

  const tiltTransform = sliding ? `rotate(${angle - 15}deg)` : `rotate(${angle}deg)`;

  const cardStyle = {
    transform: `${tiltTransform} translateY(${sliding ? '-150%' : '0'})`,
    opacity: removed ? 0 : 1,
    transition: 'transform 2s ease, opacity 5s ease', 
  };

  return (
    <>
      {!removed && (
            <div key={post.id} className={`card ${sliding ? 'slide-out' : ''}`} style={cardStyle} onClick={handleCardClick}>
                <div className='image'> 
                    <img src={post.photo} />
                </div>
                <div className='txt'> <p> {post.desc} </p> <span> <FaHeart/> </span> </div>
        </div>
      )}
    </>
  );
};

export default Card;
