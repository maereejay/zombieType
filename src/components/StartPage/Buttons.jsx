import "../../styles/StartPage/Buttons.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Buttons() {
  const navigate = useNavigate();
  const [showYes, setShowYes] = useState(false);
  const [showNo, setShowNo] = useState(false);

  useEffect(() => {
    // Wait 5 seconds, then show Yes
    const yesTimeout = setTimeout(() => {
      setShowYes(true);

      // After Yes shows, show No half a second later
      const noTimeout = setTimeout(() => {
        setShowNo(true);
      }, 600);

      return () => clearTimeout(noTimeout);
    }, 3000);

    return () => clearTimeout(yesTimeout);
  }, []);

  return (
    <div className="start-buttons">
      {showYes && (
        <button className="yes" onClick={() => navigate("/game")}>
          Yes
        </button>
      )}
      {showNo && (
        <button className="no" onClick={() => navigate("/")}>
          No
        </button>
      )}
    </div>
  );
}
export default Buttons;
