import React, { useState } from "react";
import PlayerPage from "./PlayerPage";

const SeasonPage = ({ team, season, seasonStats }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedPlayer(null);
  };

  const handlePlayerSelect = (playerCode) => {
    setSelectedPlayer(playerCode);
  };

  // Función para formatear la temporada correctamente
  const formatSeason = (season) => {
    return season.replace("%2F", "/");
  };

  return (
    <div>
      <h1>Estadísticas de la temporada {formatSeason(season)}</h1>
      {seasonStats ? (
        <div>
          <div>
            <label htmlFor="option">Selecciona una opción:</label>
            <select
              id="option"
              onChange={handleOptionChange}
              value={selectedOption || ""}
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="partidos">Partidos</option>
              <option value="jugadores">Jugadores</option>
            </select>
          </div>
          {selectedOption === "partidos" && (
            <div>
              <h2>Partidos</h2>
              <ul>
                {seasonStats.partidos.map((partido) => (
                  <li key={partido.codigo}>
                    {partido.equipo_local} {partido.puntos_local} -{" "}
                    {partido.equipo_visitante} {partido.puntos_visitante}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedOption === "jugadores" && (
            <div>
              <h2>Jugadores</h2>
              <ul>
                {seasonStats.jugadores.map((jugador) => (
                  <li
                    key={jugador.codigo}
                    onClick={() => handlePlayerSelect(jugador.codigo)}
                  >
                    {jugador.nombre_jugador}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedPlayer && (
            <PlayerPage team={team} season={season} player={selectedPlayer} />
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SeasonPage;
