import '../styles/Footer.css';

const NAV_COLS = [
  { title: '식물원소개', items: ['식물원안내', '시설안내', '오시는길', '조직도'] },
  { title: '방문안내',   items: ['입장 프로그램', '체험 예약', '단체 예약', '어린이'] },
  { title: '체험 / 교육', items: ['초등학교', '중학교', '고등학교', '교육프로그램'] },
  { title: '카페나비',   items: ['음료/디저트', '주요메뉴', '공간안내'] },
];

const HOURS = [
  { label: '하절기 (3월~9월)',  time: '09:00 ~ 18:00' },
  { label: '동절기 (10월~2월)', time: '09:00 ~ 17:00' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* 관람시간 */}
        <div className="footer__hours">
          <p className="footer__hours-title">관람시간</p>
          <div>
            <div className="footer__hours-grid">
              {HOURS.map((h) => (
                <div key={h.label} className="footer__hour-item">
                  <p className="footer__hour-label">{h.label}</p>
                  <p className="footer__hour-time">{h.time}</p>
                </div>
              ))}
            </div>
            <p className="footer__hour-note">
              월요일 정기 휴원<br />
              명절 당일 (설날 / 추석) 휴원
            </p>
          </div>
        </div>

        {/* 링크 */}
        <div className="footer__nav">
          {NAV_COLS.map((col) => (
            <div key={col.title}>
              <p className="footer__nav-col-title">{col.title}</p>
              {col.items.map((item) => (
                <a key={item} href="#" className="footer__nav-link">{item}</a>
              ))}
            </div>
          ))}
        </div>

        {/* 하단 */}
        <div className="footer__bottom">
          <p className="footer__address">
            주소 : 경기도 성남시 수정구 복정동 일원 (성남식물원)<br />
            대표번호 : 031-234-1234 · 팩스 : 031-234-1235
          </p>
          <div className="footer__legal">
            <span>이용약관</span>
            <span>개인정보처리방침</span>
          </div>
        </div>

        <p className="footer__brand">
          <em>Botanical</em> by Seongnam Garden © 2024
        </p>
      </div>
    </footer>
  );
}
