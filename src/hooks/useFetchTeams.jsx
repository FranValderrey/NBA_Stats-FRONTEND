import { useEffect, useState } from "react";

const useFetchTeams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL);
        if (!response.ok) {
          throw new Error("Error fetching teams");
        }
        const data = await response.json();
        setTeams(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return { teams, loading, error };
};

export default useFetchTeams;
