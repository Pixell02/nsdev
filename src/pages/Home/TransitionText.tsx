import  { useEffect, useState } from 'react';
import "./transitionText.css";

interface TransitionProps {
  words: string[];
  color?: string;
}

const TransitionText = ({ words, color }: TransitionProps) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex];

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 200;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prevCharIndex) => prevCharIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prevCharIndex) => prevCharIndex + 1);

        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentWord, words, wordIndex]);

  return (
    <div className='transition-text-container'>
      <h1 style={{color: color ? color : "white"}}>{displayText}</h1>
    </div>
  );
};

export default TransitionText;
