// SeasonPage.jsx

import React, { useEffect, useState } from "react";

const SeasonPage = ({ team, season, seasonStats }) => {
  return (
    <div>
      <h1>Estadísticas de la temporada {season}</h1>
      {seasonStats ? (
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
          <h2>Jugadores</h2>
          <ul>
            {seasonStats.jugadores.map((jugador) => (
              <li key={jugador.codigo}>{jugador.nombre_jugador}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SeasonPage;
