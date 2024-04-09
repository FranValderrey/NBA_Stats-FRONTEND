import { useEffect, useState } from "react";

const useFetchTeamInfo = (team) => {
  const [teamInfo, setTeamInfo] = useState(null);

  useEffect(() => {
    const fetchTeamInfo = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/${team}`
        );
        if (!response.ok) {
          throw new Error("Error fetching team information");
        }
        const data = await response.json();
        setTeamInfo(data.data);
      } catch (error) {
        console.error("Error fetching team information:", error);
      }
    };

    fetchTeamInfo();
  }, [team]);

  return teamInfo;
};

export default useFetchTeamInfo;
