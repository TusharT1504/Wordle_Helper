import React from 'react';
import wordsList from './words';

function WordList() {
  return (
    <div>
      <h1>Word List</h1>
      <ul>
        {wordsList.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default WordList;