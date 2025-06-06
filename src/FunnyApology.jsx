import React, { useState, useEffect } from 'react';
import './Apology.css';

const FunnyApology = () => {
 const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState(0);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const message = `😅 Okay okay... I admit it. I messed up. Possibly even broke the world record for "Oops." But hey, I'm human. Please forgive me pleasee...Mr.Rabi Ahmed khan!!! 🙏`;

  useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + message.charAt(index));
        setIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const moveNoButton = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    setNoButtonStyle({
      position: 'absolute',
      top: `${y}px`,
      left: `${x}px`,
      transition: 'top 0.3s, left 0.3s'
    });
  };

  return (
    <div className="funny-apology-container">
      <div className="emoji">😄</div>

      <div className="funny-apology-text">{typedText}</div>

      {stage === 0 && (
        <button className="forgive-button" onClick={() => setStage(1)}>
          Forgive Me?
        </button>
      )}

      {stage === 1 && (
        <>
          <div className="choice-buttons">
            <button className="yes-button" onClick={() => setStage(2)}>
              Yes 😊
            </button>
            <button
              className="no-button"
              style={noButtonStyle}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
            >
              No 😐
            </button>
          </div>
        </>
      )}

      {stage === 2 && (
        <div className="funny-response">
          🥳 WOOHOO! You forgave me! You're basically a superhero in disguise. Thank youuu sirr!!
        </div>
      )}
    </div>
  );
};


export default FunnyApology;
