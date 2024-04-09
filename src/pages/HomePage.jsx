import useFetchTeams from "../hooks/useFetchTeams";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { teams, loading, error } = useFetchTeams();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section>
      <h1>HomePage</h1>
      <div className="team-logos">
        {teams.map((team) => (
          <div key={team.nombre}>
            <Link to={`/${team.nombre}`}>
              <img src={team.logo_url} alt={team.nombre} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
