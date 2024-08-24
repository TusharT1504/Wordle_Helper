import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GreenLetterInput from '../components/GreenLetterInput';
import YellowLetterInput from '../components/YellowLetterInput';
import BlackLetterInput from '../components/BlackLetterInput';
import MatchingWords from '../components/MatchingWords';
import { findMatchingWords } from '../utils/wordleHelper';

function HomePage() {
  const [greenLetters, setGreenLetters] = useState(['', '', '', '', '']);
  const [yellowLetters, setYellowLetters] = useState(['', '', '', '', '']);
  const [blackLetters, setBlackLetters] = useState(['', '', '', '', '', '', '']);
  const [matchingWords, setMatchingWords] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [letterMap, setLetterMap] = useState(new Map());

  const updateLetterMap = (letter, color, index) => {
    if (letterMap.has(letter)) {
      const [existingColor, existingIndex] = letterMap.get(letter);
      toast.warning(`Letter '${letter}' is already used in ${existingColor} at position ${existingIndex + 1}!`);
      return false;
    } else {
      setLetterMap(new Map(letterMap.set(letter, [color, index])));
      return true;
    }
  };

  const removeFromLetterMap = (letter) => {
    setLetterMap(prevMap => {
      const newMap = new Map(prevMap);
      newMap.delete(letter);
      return newMap;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matches = findMatchingWords(greenLetters, yellowLetters, blackLetters);
    setMatchingWords(matches);
    setShowResults(true);
  };

  return (
    <div className="home-page">
      <form onSubmit={handleSubmit}>
        <GreenLetterInput 
          letters={greenLetters} 
          setLetters={setGreenLetters}
          letterMap={letterMap}
          updateLetterMap={updateLetterMap}
          removeFromLetterMap={removeFromLetterMap}
        />
        <YellowLetterInput 
          letters={yellowLetters} 
          setLetters={setYellowLetters}
          letterMap={letterMap}
          updateLetterMap={updateLetterMap}
          removeFromLetterMap={removeFromLetterMap}
        />
        <BlackLetterInput 
          letters={blackLetters} 
          setLetters={setBlackLetters}
          letterMap={letterMap}
          updateLetterMap={updateLetterMap}
          removeFromLetterMap={removeFromLetterMap}
        />
        <button type="submit">Find Matching Words</button>
      </form>
      {showResults && <MatchingWords words={matchingWords} />}
      <ToastContainer />
    </div>
  );
}

export default HomePage;