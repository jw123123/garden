import React from 'react';
import '../styles/Header.css';

const LEFT_LINKS = ['식물원소개', '프로그램'];
const RIGHT_LINKS = ['자료실', '커뮤니티'];

export default function Header() {
  return (
    <nav className="hd">
      <div className="hdGroup">
        {LEFT_LINKS.map((l) => (
          <a key={l} href="#" className="hdLink">{l}</a>
        ))}
      </div>
      
      <span className="hdLogo">Seongnam Garden</span>
      <div className="hdGroup">
        {RIGHT_LINKS.map((l) => (
          <a key={l} href="#" className="hdLink">{l}</a>
        ))}
      </div>
    </nav>
  );
}
