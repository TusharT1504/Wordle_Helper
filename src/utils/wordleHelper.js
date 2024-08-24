import words from '../data/words'

export function findMatchingWords(greenLetters, yellowLetters, blackLetters){

    const matchingWords= words.filter(word => {
      
      const wordUpper = word.toUpperCase();

      for (let i = 0; i < 5; i++) {
        if (greenLetters[i] && wordUpper[i] !== greenLetters[i]) {
          return false;
        }
      }
      
      // Check if the word contains any yellow letters
      for (let letter of yellowLetters) {
        if (letter && !wordUpper.includes(letter)) {
          return false;
        }
      }
  
      // Check if the word contains any black letters
      for (let letter of blackLetters) {
        if (letter && wordUpper.includes(letter)) {
          return false;
        }
      }
  
      // If the word passes all checks, include it in the result
      return true;
    });

    matchingWords.sort((a, b) => a.localeCompare(b));
    return matchingWords;  
  };