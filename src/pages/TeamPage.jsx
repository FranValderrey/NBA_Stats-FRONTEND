import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeamPage = () => {
  const { team } = useParams();
  const [teamInfo, setTeamInfo] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

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
        console.error("Error:", error);
      }
    };

    fetchTeamInfo();
  }, [team]);

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  return (
    <div>
      {teamInfo ? (
        <div className="team-info">
          <div>
            <img
              src={teamInfo.logo_url}
              alt={teamInfo.nombre}
              style={{ width: "250px", height: "250px" }}
            />
            <p>{teamInfo.descripcion}</p>
          </div>
          <div>
            <label htmlFor="season">Selecciona una temporada:</label>
            <select id="season" onChange={handleSeasonChange}>
              <option value="temporada1">Temporada 1</option>
              <option value="temporada2">Temporada 2</option>
              <option value="temporada3">Temporada 3</option>
              {/* Agrega más opciones según las temporadas disponibles */}
            </select>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TeamPage;
