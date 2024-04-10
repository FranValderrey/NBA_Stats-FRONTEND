import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo-link">
        <img
          src="https://raw.githubusercontent.com/jimniels/teamcolors/main/public/img/leagues/nba.svg"
          alt="NBA Logo"
          className="logo-svg"
        />
        <span className="logo-text">NBA Stats</span>
      </Link>
    </header>
  );
};

export default Header;
