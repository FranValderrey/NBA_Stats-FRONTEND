// TeamPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchTeamInfo from "../hooks/useFetchTeamInfo";
import useFetchSeasonStats from "../hooks/useFetchSeasonStats";
import SeasonPage from "./SeasonPage";

const TeamPage = () => {
  const { team } = useParams();
  const teamInfo = useFetchTeamInfo(team);
  const [selectedSeason, setSelectedSeason] = useState("");
  const seasonStats = useFetchSeasonStats(team, selectedSeason);

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  // Generar las opciones del selector de temporada
  const seasons = [];
  for (let year = 1993; year <= 2008; year++) {
    const nextYear = (year + 1).toString().slice(-2);
    const currentYear = (year % 100).toString().padStart(2, "0");
    seasons.push(`${currentYear}/${nextYear}`);
  }

  return (
    <div>
      {teamInfo ? (
        <div className="team-info">
          <div>
            <img
              className="team-info-logo"
              src={teamInfo.logo_url}
              alt={teamInfo.nombre}
            />
            <p>{teamInfo.descripcion}</p>
          </div>
          <div>
            <label htmlFor="season">Selecciona una temporada:</label>
            <select
              id="season"
              onChange={handleSeasonChange}
              value={selectedSeason}
            >
              <option value="">Selecciona una temporada</option>
              {seasons.map((season) => (
                <option key={season} value={season.replace("/", "%2F")}>
                  {season}
                </option>
              ))}
            </select>
          </div>
          {selectedSeason && seasonStats && (
            <SeasonPage
              team={team}
              season={selectedSeason}
              seasonStats={seasonStats}
            />
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TeamPage;
