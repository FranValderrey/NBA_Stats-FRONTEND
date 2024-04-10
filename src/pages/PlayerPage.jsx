import React from "react";
import useFetchPlayerStats from "../hooks/useFetchPlayerStats";

const PlayerPage = ({ team, season, player }) => {
  const { playerStats, error } = useFetchPlayerStats(team, season, player);

  return (
    <div>
      {playerStats ? (
        <div>
          <h1>Estadísticas de {playerStats[0].nombre_jugador}</h1>
          <ul className="option-list">
            <li>
              Puntos por partido: {playerStats[0].puntos_por_partido.toFixed(2)}
            </li>
            <li>
              Asistencias por partido:{" "}
              {playerStats[0].asistencias_por_partido.toFixed(2)}
            </li>
            <li>
              Tapones por partido:{" "}
              {playerStats[0].tapones_por_partido.toFixed(2)}
            </li>
            <li>
              Rebotes por partido:{" "}
              {playerStats[0].rebotes_por_partido.toFixed(2)}
            </li>
          </ul>
        </div>
      ) : (
        <div>{error || "Loading..."}</div>
      )}
    </div>
  );
};

export default PlayerPage;
