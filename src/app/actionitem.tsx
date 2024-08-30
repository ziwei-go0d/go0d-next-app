'use client'

import React, { useState } from 'react';

const predefinedStrings = [
  'Pick up trash from a public area',
  'Smile to Suyi today',
  'Appreciate TTQ',
  'Talk to Kevin nicely',
  'Pat Bingbing for 10 times',
  // Add more strings to the list
];

function ActionItem() {
  const [randomString, setRandomString] = useState('');
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
      const randomIndex = Math.floor(Math.random() * predefinedStrings.length);
      setRandomString(predefinedStrings[randomIndex]);
      setShowButton(false);
    };

  return (
    <div>
      {showButton && <button onClick={handleClick}>GO0D</button>}
      <p>{randomString}</p>
    </div>
  );
}

export default ActionItem;