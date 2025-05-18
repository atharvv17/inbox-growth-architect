
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const AnimatedText = ({
  text,
  className,
  delay = 0,
  speed = 50,
  highlightWords = [],
  highlightClassName = "text-logo-blue relative"
}: AnimatedTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Reset if text changes
    setDisplayedText('');
    setIsComplete(false);
    
    const startAnimation = () => {
      let currentIndex = 0;
      
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(prev => prev + text[currentIndex]);
          currentIndex++;
          timeout = setTimeout(typeNextChar, speed);
        } else {
          setIsComplete(true);
        }
      };
      
      timeout = setTimeout(typeNextChar, delay);
    };
    
    startAnimation();
    
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);
  
  // Function to highlight specific words
  const renderText = () => {
    if (!isComplete && highlightWords.length > 0) {
      return displayedText;
    }
    
    if (highlightWords.length === 0) {
      return displayedText;
    }
    
    let result = [];
    let lastIndex = 0;
    
    // Process each word to highlight
    highlightWords.forEach((word, idx) => {
      const wordIndex = text.indexOf(word, lastIndex);
      
      if (wordIndex !== -1) {
        // Add text before the highlighted word
        if (wordIndex > lastIndex) {
          result.push(
            <span key={`pre-${idx}`}>
              {text.substring(lastIndex, wordIndex)}
            </span>
          );
        }
        
        // Add the highlighted word
        result.push(
          <span key={`highlight-${idx}`} className={highlightClassName}>
            {word}
            <span className="absolute bottom-1 left-0 w-full h-[3px] bg-logo-blue"></span>
          </span>
        );
        
        lastIndex = wordIndex + word.length;
      }
    });
    
    // Add any remaining text
    if (lastIndex < text.length) {
      result.push(
        <span key="remaining">
          {text.substring(lastIndex)}
        </span>
      );
    }
    
    return result;
  };
  
  return (
    <div className={cn("inline-block", className)}>
      {renderText()}
      {!isComplete && (
        <span className="animate-pulse ml-1 inline-block h-full">|</span>
      )}
    </div>
  );
};
