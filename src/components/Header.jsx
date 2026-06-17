import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const LEFT_LINKS = [
  {
    name: "식물원소개",
    path: "/about",
    children: [
      { name: "성남시 식물원", path: "/about/garden" },
      { name: "식물원안내", path: "/about/info" },
      { name: "식물원 현항", path: "/about/current" },
      { name: "오시는길", path: "/about/location" },
    ],
  },
  {
    name: "체험안내",
    path: "/program",
    children: [
      { name: "프로그램안내", path: "/program/list" },
      { name: "예약신청", path: "/program/reservation" },
      { name: "예약확인", path: "/program/confirm" },
      { name: "강사소개", path: "/program/instructor" },
    ],
  },
];

const RIGHT_LINKS = [
  {
    name: "자료실",
    path: "/archive",
    children: [
      { name: "생태자료실", path: "/archive/ecology" },
      { name: "보도자료", path: "/archive/news" },
      { name: "교육활동자료", path: "/archive/gallery" },
    ],
  },
  {
    name: "커뮤니티",
    path: "/community",
    children: [
      { name: "공지사항", path: "/archive/notice" },
      { name: "FAQ", path: "/community/faq" },
      { name: "자유게시판", path: "/community/board" },
    ],
  },
];

function NavItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="hdItem"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link to={item.path} className="hdLink">
        {item.name}
      </Link>

      <div className={`hdDropdown${open ? " hdDropdownOpen" : ""}`}>
        <div className="hdDropdownInner">
          {item.children.map((child) => (
            <Link key={child.path} to={child.path} className="hdSubLink">
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <nav className="hd">
      <div className="hdGroup">
        {LEFT_LINKS.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}
      </div>

      <Link to="/" className="hdLogo">
        Seongnam Garden
      </Link>

      <div className="hdGroup">
        {RIGHT_LINKS.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}
      </div>
    </nav>
  );
}