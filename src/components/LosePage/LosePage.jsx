import "../../styles/LosePage/LosePage.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function LosePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const stats = location.state?.stats;

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return [hrs, mins, secs]
      .map((v) => v.toString().padStart(2, "0"))
      .join(":");
  };
  return (
    <div className="losePage">
      <div className="lose-container">
        <h1>YOU LOSE</h1>
        <div className="stats">
          <p>Time: {formatTime(stats.time)}</p>
          <p>WPM: {stats.wpm}</p>
        </div>
        <div className="redo">
          <button onClick={() => navigate("/game")}>Restart</button>
          <button onClick={() => navigate("/")}>Main Menu</button>
        </div>
      </div>
    </div>
  );
}

export default LosePage;
