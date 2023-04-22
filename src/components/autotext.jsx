import React, { useState, useEffect } from 'react';
import './MultiTextType.css'; // Import the CSS file

const MultiTextType = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(false);

  const texts = [    'Hello :)',    "paste your article link and i'll summarize for you",    'Each text appears one after the other.',  ];

  useEffect(() => {
    setTyping(true);
  }, []);

  useEffect(() => {
    if (typing) {
      const text = texts[textIndex];
      if (displayText.length < text.length) {
        setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1));
        }, 75);
      } else {
        setTyping(false);
        setTimeout(() => {
          if (textIndex === texts.length - 1) {
            setTextIndex(0);
          } else {
            setTextIndex(textIndex + 1);
          }
          setTyping(true);
        }, 1000);
      }
    }
  }, [displayText, textIndex, texts, typing]);

  return (
    <div className="typewriter">
      {displayText}
      <span className="typing-cursor"></span>
    </div>
  );
};

export default MultiTextType;


