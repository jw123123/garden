import '../styles/Navbar.css';

const LEFT_LINKS = ['식물원소개', '프로그램'];
const RIGHT_LINKS = ['자료실', '커뮤니티'];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__group">
        {LEFT_LINKS.map((l) => (
          <a key={l} href="#" className="navbar__link">{l}</a>
        ))}
      </div>
      <span className="navbar__logo">Seongnam Garden</span>
      <div className="navbar__group">
        {RIGHT_LINKS.map((l) => (
          <a key={l} href="#" className="navbar__link">{l}</a>
        ))}
      </div>
    </nav>
  );
}
