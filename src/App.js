import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import StartPage from "./components/StartPage/StartPage";
import GamePage from "./components/GamePage/GamePage";
import WinPage from "./components/WinPage/WinPage";
import LosePage from "./components/LosePage/LosePage";
import HelpPage from "./components/HelpPage/HelpPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/win" element={<WinPage />} />
        <Route path="/lose" element={<LosePage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
