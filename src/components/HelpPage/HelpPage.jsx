import "../../styles/HelpPage/HelpPage.css";
import { useNavigate } from "react-router-dom";
function HelpPage() {
  const navigate = useNavigate();
  return (
    <div className="HelpPage">
      <div className="help-container">
        <div className="help-content">
          <section id="how-to-play" className="help-section">
            <h3>How to Play</h3>
            <div className="step-list">
              <div className="step">
                <span className="step-number">1</span>
                <p>Pick a difficulty level (Easy, Medium or Hard)</p>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <p>Click "Start Game" to begin</p>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <p>Once the timer ends, begin typing the sentences displayed</p>
              </div>
              <div className="step">
                <span className="step-number">4</span>
                <p>Reach the safe house before the zombie catches you!</p>
              </div>
            </div>
          </section>
          <section id="gameplay" className="help-section">
            <h3>Gameplay</h3>
            <div className="gameplay-info">
              <div className="info-card">
                <h4>🏃‍♂️</h4>
                <p>
                  You move forward by typing correctly. Each correct character
                  moves you closer to safety.
                </p>
              </div>
              <div className="info-card">
                <h4>🧟‍♂️</h4>
                <p>
                  The zombie is always chasing you. If it catches up, you lose
                  the game!
                </p>
              </div>
              <div className="info-card">
                <h4>🏠</h4>
                <p>
                  Your goal is to reach the safe house by completing all
                  sentences before the zombie catches you.
                </p>
              </div>
              <div className="info-card">
                <h4>⏰</h4>
                <p>
                  The longer you take, the closer the zombie gets. Speed and
                  accuracy are key!
                </p>
              </div>
            </div>
          </section>
          <section id="controls" className="help-section">
            <h3>Controls</h3>
            <div className="controls-list">
              <div className="control-item">
                <span className="control-key">Keyboard</span>
                <span className="control-desc">
                  Type the displayed sentences exactly as shown
                </span>
              </div>
              <div className="control-item">
                <span className="control-key">Backspace</span>
                <span className="control-desc">
                  Correct mistakes (but this slows you down!)
                </span>
              </div>
            </div>
          </section>
          <section className="help-section">
            <h3>Contact Us</h3>
            <div className="details">
              <p>
                If you have any questions or feedback, please don't hesitate to
                contact us.
              </p>
              <p>
                Email:
                <span className="email">maryjaneonwuasor@gmail.com</span>
              </p>
            </div>
          </section>
        </div>
        <div className="backbtn">
          <button onClick={() => navigate("/")}>Main Menu</button>
        </div>
      </div>
    </div>
  );
}
export default HelpPage;
