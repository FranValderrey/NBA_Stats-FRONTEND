import { useEffect, useState } from "react";

const useFetchSeasonStats = (team, selectedSeason) => {
  const [seasonStats, setSeasonStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamStats = async () => {
      if (selectedSeason) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/${team}/${selectedSeason}`
          );
          if (!response.ok) {
            const errorMessage = await response.json(); // Parse JSON error response
            throw new Error(
              errorMessage.message || "Error fetching team statistics"
            );
          }
          const data = await response.json();
          setSeasonStats(data);
          setError(null); // Reset error state if successful response
        } catch (error) {
          console.error("Error fetching team statistics:", error);
          setSeasonStats(null); // Reset seasonStats on error
          setError(error.message);
        }
      }
    };

    fetchTeamStats();
  }, [selectedSeason, team]);

  return { seasonStats, error };
};

export default useFetchSeasonStats;
