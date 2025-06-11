import "../../styles/StartPage/StartPage.css";
import Typing from "./Typing";
import Buttons from "./Buttons";

function StartPage() {
  return (
    <div className="StartPage">
      <div className="start-container">
        <Typing />
        <Buttons />
      </div>
    </div>
  );
}
export default StartPage;
