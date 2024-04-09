import useFetchTeams from "../hooks/useFetchTeams";

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
            <a href={`http://localhost:8080/${team.nombre}`}>
              <img src={team.logo_url} alt={team.nombre} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
