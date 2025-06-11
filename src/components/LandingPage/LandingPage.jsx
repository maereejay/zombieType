import BackgroundImages from "./BackgroundImages";
import Heading from "./Heading";
import Menu from "./Menu";
import "../../styles/LandingPage/LandingPage.css";

function LandingPage() {
  return (
    <div className="body">
      <div className="LandingPage">
        <BackgroundImages />
        <Heading />
        <Menu />
      </div>
    </div>
  );
}
export default LandingPage;
