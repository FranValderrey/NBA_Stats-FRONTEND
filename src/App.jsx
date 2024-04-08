import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import SeasonPage from "./pages/SeasonPage";
import PlayerPage from "./pages/PlayerPage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:team" element={<TeamPage />}></Route>
        <Route path="/:team/:season" element={<SeasonPage />}></Route>
        <Route path="/:team/:season/:player" element={<PlayerPage />}></Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
