import React, { useState } from 'react';

const MeaningFinder = () => {
  const [name, setName] = useState('');

  const handleClick = async () => {
    if (name) {
      try {
        const res = await fetch(`https://api.agify.io/?name=${name}`);
        const data = await res.json();
        console.log(data); // Print the API response in the console
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  return (
    <div>
      <h1>Meaning Finder</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
      />
      <button onClick={handleClick}>Find Meaning</button>
    </div>
  );
};

export default MeaningFinder;
