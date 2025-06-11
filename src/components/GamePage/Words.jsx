import React, { useState, useEffect, useRef } from "react";
import { spookySentences } from "../../utils/spookySentences";
import "../../styles/GamePage/Words.css";

function Words({ onProgressUpdate, canType, onStatsUpdate }) {
  const [sentence, setSentence] = useState("");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const inputRef = useRef(null); // ✅ create a ref for input

  useEffect(() => {
    const random =
      spookySentences[Math.floor(Math.random() * spookySentences.length)];
    setSentence(random);
  }, []);

  // ✅ Focus the input when typing becomes allowed
  useEffect(() => {
    if (canType && inputRef.current) {
      inputRef.current.focus();
    }
  }, [canType]);

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length > sentence.length) return;

    if (!startTime && value.length === 1) {
      setStartTime(Date.now());
    }

    setInput(value);

    let correctChars = 0;
    for (let i = 0; i < value.length; i++) {
      const normalizedInputChar = normalizeChar(value[i]);
      const normalizedSentenceChar = normalizeChar(sentence[i]);
      if (normalizedInputChar === normalizedSentenceChar) {
        correctChars++;
      } else {
        break;
      }
    }

    const isComplete = value === sentence;
    const progressPercent = isComplete
      ? 87
      : Math.min((correctChars / sentence.length) * 87, 87);

    onProgressUpdate(progressPercent);

    // Calculate elapsed time in minutes (use current time or a passed gameEndTime)
    const now = Date.now();
    const elapsed = startTime ? (now - startTime) / 60000 : 0;

    // Set a minimum elapsed time threshold (e.g., 2 seconds)
    const elapsedAdjusted = elapsed < 0.033 ? 0.033 : elapsed; // 0.033 min = 2 seconds

    // Calculate how many words typed correctly (count words in correct substring)
    const correctSubstring = sentence.slice(0, correctChars);
    const correctWords = correctSubstring.trim().split(/\s+/).length;

    // Calculate WPM based on correct words and adjusted elapsed time
    const wpm = correctWords / elapsedAdjusted;

    onStatsUpdate({
      wpm: Math.round(wpm),
      time: elapsedAdjusted * 60, // seconds
    });
  };
  const normalizeChar = (char) => {
    return char
      .replace(/[’‘]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/[–—]/g, "-");
  };

  // const getHighlightedText = () => {
  //   return sentence.split("").map((char, i) => {
  //     let className = "";
  //     if (i < input.length) {
  //       const normalizedInputChar = normalizeChar(input[i]);
  //       const normalizedSentenceChar = normalizeChar(char);
  //       className =
  //         normalizedInputChar === normalizedSentenceChar ? "correct" : "wrong";
  //     }
  //     return (
  //       <span key={i} className={className}>
  //         {char}
  //       </span>
  //     );
  //   });
  // };

  const getHighlightedText = () => {
    return sentence.split("").map((char, i) => {
      let className = "";
      if (i < input.length) {
        const normalizedInputChar = normalizeChar(input[i]);
        const normalizedSentenceChar = normalizeChar(char);
        if (normalizedInputChar === normalizedSentenceChar) {
          className = "correct";
        } else {
          className = "wrong";
        }
      }
      return (
        <span key={i} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="words-container">
      <div className="sentence">{getHighlightedText()}</div>
      <input
        className="typing-input"
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Start typing..."
        disabled={!canType}
        ref={inputRef} // ✅ bind ref
      />
    </div>
  );
}

export default Words;
