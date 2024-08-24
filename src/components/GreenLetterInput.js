import React from 'react';

function GreenLetterInput({ letters, setLetters, letterMap, updateLetterMap, removeFromLetterMap }) {
  const handleKeyDown = (event, index) => {
    if (event.key.length === 1) {
      const letter = event.key.toUpperCase();
      if (updateLetterMap(letter, 'green', index)) {
        const newLetters = [...letters];
        newLetters[index] = letter;
        setLetters(newLetters);
        if (index < 4) {
          const nextInput = document.querySelector(`#green-input-${index + 1}`);
          if (nextInput) {
            setTimeout(() => {
              nextInput.focus();
            }, 0);
          }
        }
      } else {
        event.preventDefault();
      }
    } else if (event.key === 'Backspace' && event.target.value === '') {
      const prevLetter = letters[index];
      if (prevLetter) {
        removeFromLetterMap(prevLetter);
        const newLetters = [...letters];
        newLetters[index] = '';
        setLetters(newLetters);
      }
      if (index > 0) {
        const prevInput = document.querySelector(`#green-input-${index - 1}`);
        if (prevInput) {
          setTimeout(() => {
            prevInput.focus();
          }, 0);
        }
      }
    } else if (event.key === 'ArrowRight' && index < 4) {
      const nextInput = document.querySelector(`#green-input-${index + 1}`);
      if (nextInput) {
        setTimeout(() => {
          nextInput.focus();
        }, 0);
      }
    } else if (event.key === 'ArrowLeft' && index > 0) {
      const prevInput = document.querySelector(`#green-input-${index - 1}`);
      if (prevInput) {
        setTimeout(() => {
          prevInput.focus();
        }, 0);
      }
    }
  };

  return (
    <div>
      <h2>Green Letters</h2>
      {letters.map((letter, index) => (
        <input
          key={index}
          id={`green-input-${index}`}
          type="text"
          maxLength="1"
          value={letter}
          onChange={(e) => {
            const newLetters = [...letters];
            newLetters[index] = e.target.value.toUpperCase();
            setLetters(newLetters);
          }}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
}

export default GreenLetterInput;