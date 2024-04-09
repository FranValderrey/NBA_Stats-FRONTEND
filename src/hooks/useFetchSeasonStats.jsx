// useFetchSeasonStats.jsx

import { useEffect, useState } from "react";

const useFetchSeasonStats = (team, selectedSeason) => {
  const [seasonStats, setSeasonStats] = useState(null);

  useEffect(() => {
    const fetchTeamStats = async () => {
      if (selectedSeason) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/${team}/${selectedSeason}`
          );
          if (!response.ok) {
            throw new Error("Error fetching team statistics");
          }
          const data = await response.json();
          setSeasonStats(data);
        } catch (error) {
          console.error("Error fetching team statistics:", error);
        }
      }
    };

    fetchTeamStats();
  }, [selectedSeason, team]);

  return seasonStats;
};

export default useFetchSeasonStats;
