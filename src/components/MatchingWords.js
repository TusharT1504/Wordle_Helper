import React from 'react';

const MatchingWords = ({ words }) => {
    return (
      <div>
        <h2>Matching Words:</h2>
        {words.length === 0 ? (
          <p>No words found</p>
        ) : (
          <ul>
            {words.map((word) => (
              <li key={word}>{word.toUpperCase()}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default MatchingWords;