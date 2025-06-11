import "../../styles/GamePage/GamePage.css";
import Pathway from "./Pathway";
import Words from "./Words";
import Keyboard from "./Keyboard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLevel } from "../../context/LevelContext";
function GamePage() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ time: 0, wpm: 0 });
  const [playerProgress, setPlayerProgress] = useState(0);
  const { selectedLevel } = useLevel();
  const levelSpeeds = {
    easy: 1.5,
    medium: 2.0,
    hard: 2.6,
  };
  const [canType, setCanType] = useState(false);

  // Default to 'easy' if level is missing
  const zombieSpeed = levelSpeeds[selectedLevel];
  console.log(zombieSpeed);
  return (
    <div className="GamePage">
      <div className="game-container">
        <Pathway
          playerProgress={playerProgress}
          zombieSpeed={zombieSpeed}
          onGameOver={() => navigate("/lose", { state: { stats } })}
          onWin={() => navigate("/win", { state: { stats } })}
          onCountdownEnd={() => setCanType(true)}
        />
        <Words
          canType={canType}
          onProgressUpdate={(progress) => setPlayerProgress(progress)}
          onStatsUpdate={(data) => setStats(data)}
        />

        <Keyboard />
      </div>
    </div>
  );
}
export default GamePage;
