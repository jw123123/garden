import { Link } from "react-router-dom";
import "../styles/Header.css";

const LEFT_LINKS = [
  { name: "식물원소개", path: "/about" },
  { name: "프로그램", path: "/program" },
];

const RIGHT_LINKS = [
  { name: "자료실", path: "/archive" },
  { name: "커뮤니티", path: "/community" },
];


export default function Header() {
  return (
    <nav className="hd">
      <div className="hdGroup">
        {LEFT_LINKS.map((l) => (
          <Link key={l.path} to={l.path} className="hdLink">
            {l.name}
          </Link>
        ))}
      </div>

      <Link to="/" className="hdLogo">Seongnam Garden</Link>

      <div className="hdGroup">
        {RIGHT_LINKS.map((l) => (
          <Link key={l.path} to={l.path} className="hdLink">
            {l.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}