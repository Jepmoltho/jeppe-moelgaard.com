/*
import { useState, useEffect } from "react";

const Typer = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default Typer;
*/
import { useState, useEffect } from "react";

const Typer = ({ text, delay, start }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldStart(true);
    }, start * 1000);

    return () => clearTimeout(timeout);
  }, [start]);

  useEffect(() => {
    if (shouldStart && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, shouldStart]);

  return <span>{currentText}</span>;
};

export default Typer;
