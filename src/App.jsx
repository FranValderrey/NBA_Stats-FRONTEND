import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import SeasonPage from "./pages/SeasonPage";
import PlayerPage from "./pages/PlayerPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:team" element={<TeamPage />} />
        <Route path="/:team/:season" element={<SeasonPage />} />
        <Route path="/:team/:season/:player" element={<PlayerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
