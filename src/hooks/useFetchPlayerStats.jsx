// useFetchPlayerStats.jsx

import { useEffect, useState } from "react";

const useFetchPlayerStats = (team, season, player) => {
  const [playerStats, setPlayerStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayerStats = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/${team}/${season}/${player}`
        );
        if (!response.ok) {
          throw new Error("Error fetching player statistics");
        }
        const data = await response.json();
        setPlayerStats(data.estadisticas);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPlayerStats();
  }, [team, season, player]);

  return { playerStats, error };
};

export default useFetchPlayerStats;
