import "../../styles/StartPage/Typing.css";
import { useState, useEffect } from "react";

function Typing() {
  const startText = "Are you ready to die";
  const endText = "Are you ready to type?";

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 80;
    const pauseBeforeDelete = 350;

    let timeout;

    if (!isDeleting && index < startText.length) {
      timeout = setTimeout(() => {
        setText(startText.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (!isDeleting && index === startText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && index > "Are you ready to ".length) {
      timeout = setTimeout(() => {
        setText(startText.slice(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    } else if (isDeleting && index === "Are you ready to ".length) {
      // Start typing new text
      const restText = endText.slice(index);
      let i = 0;

      const typeRest = () => {
        if (i <= restText.length) {
          setText(endText.slice(0, index + i));
          i++;
          timeout = setTimeout(typeRest, typingSpeed);
        }
      };

      typeRest();
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return <h1 className="typing-line">{text}</h1>;
}

export default Typing;
