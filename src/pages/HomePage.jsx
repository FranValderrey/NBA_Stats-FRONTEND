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
          <img key={team.nombre} src={team.logo_url} alt={team.nombre} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
