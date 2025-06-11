import "../../styles/LandingPage/Menu.css";
import { useNavigate } from "react-router-dom";
import { useLevel } from "../../context/LevelContext";

function Menu() {
  const { selectedLevel, setSelectedLevel } = useLevel(); // FIXED HERE
  const navigate = useNavigate();

  const handleStart = () => {
    if (!selectedLevel) {
      alert("Please select a level before starting game");
    } else {
      navigate("/start");
    }
  };

  return (
    <div className="menu">
      <img src="/assets/LandingPage/scaredboy.png" alt="" />
      <div className="menu-btns">
        <button
          className={`menu-btn ${selectedLevel === "easy" ? "selected" : ""}`}
          onClick={() => setSelectedLevel("easy")}
        >
          Easy
        </button>
        <button
          className={`menu-btn ${selectedLevel === "medium" ? "selected" : ""}`}
          onClick={() => setSelectedLevel("medium")}
        >
          Medium
        </button>
        <button
          className={`menu-btn ${selectedLevel === "hard" ? "selected" : ""}`}
          onClick={() => setSelectedLevel("hard")}
        >
          Hard
        </button>
        <button className="help" onClick={() => navigate("/help")}>
          Help
        </button>
      </div>
      <button
        className={`start ${selectedLevel !== null ? "ready" : ""}`}
        onClick={handleStart}
      >
        Start Game
      </button>
    </div>
  );
}

export default Menu;
