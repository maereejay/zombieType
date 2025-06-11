import React, { useEffect, useState } from "react";
import "../../styles/GamePage/Pathway.css";

function Pathway({
  playerProgress,
  zombieSpeed,
  onGameOver,
  onWin,
  onCountdownEnd,
}) {
  const [zombiePosition, setZombiePosition] = useState(-5);
  const [gameEnded, setGameEnded] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(timer);
          setCountdown(null); // hides countdown
          setGameStarted(true);
          onCountdownEnd();
          return null;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onCountdownEnd]);

  // Zombie movement only starts after countdown ends
  useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(() => {
      setZombiePosition((prev) => {
        const newPos = prev + zombieSpeed / 10;
        if (!gameEnded && newPos >= playerProgress) {
          setGameEnded(true);
          onGameOver();
        }
        return newPos;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [gameStarted, zombieSpeed, playerProgress, onGameOver, gameEnded]);

  // Win condition
  useEffect(() => {
    if (!gameEnded && playerProgress >= 87) {
      setGameEnded(true);
      onWin();
    }
  }, [playerProgress, onWin, gameEnded]);

  return (
    <div className="pathway-container">
      {countdown !== null && (
        <div className="countdown-overlay">
          {countdown === 0 ? "Type!" : countdown}
        </div>
      )}

      <img src="/assets/GamePage/house.jfif" alt="House" className="house" />

      <img
        src="/assets/GamePage/boyrun.png"
        alt="Player"
        className="player"
        style={{ left: `calc(3% + ${playerProgress}%)` }}
      />

      <img
        src="/assets/GamePage/zombierun.png"
        alt="Zombie"
        className="zombie"
        style={{ left: `${zombiePosition}%` }}
      />

      <div className="pathImg"></div>
    </div>
  );
}

export default Pathway;
