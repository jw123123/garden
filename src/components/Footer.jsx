import '../styles/Footer.css';
import logo from '../images/logo.png'

const NAV_COLS = [
  { title: '식물원소개', items: ['식물원안내', '시설안내', '오시는길', '조직도'] },
  { title: '방문안내', items: ['입장 프로그램', '체험 예약', '단체 예약', '어린이'] },
  { title: '체험 / 교육', items: ['초등학교', '중학교', '고등학교', '교육프로그램'] },
  { title: '카페나비', items: ['음료/디저트', '주요메뉴', '공간안내'] },
];

const HOURS = [
  { label: '하절기 (3월~9월)', time: '09:00 ~ 18:00' },
  { label: '동절기 (10월~2월)', time: '09:00 ~ 17:00' },
];

const INFO = [
  {label: '주소', value: '경기도 성남시 중원구 성남대로997'},
  {label: 'TEL', value: '729-4311-5'},
  {label: '대표', value: '정상철'},
  {label: '사업자등록번호', value: '129-83-04839'}
]

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft__inner">
        {/* 관람시간 */}
        <div className="ftGardenInfo">
          <div className="ft__hours">
            <h2 className="ft__hours-title">관람시간</h2>
            <div>
              <div className="ft__hours-grid">
                {HOURS.map((h) => (
                  <div key={h.label} className="ft__hour-item">
                    <p className="ft__hour-label">{h.label}</p>
                    <p className="ft__hour-time">{h.time}</p>
                  </div>
                ))}
              </div>
              <span className="ft__hour-note">
                설날 (1/1), 구정 (음력 1/1), 추석 (음력 8/15) 휴관
              </span>
            </div>
          </div>

          {/* 링크 */}
          <div className="ft__nav">
            {NAV_COLS.map((col) => (
              <div key={col.title}>
                <p className="ft__nav-col-title">{col.title}</p>
                {col.items.map((item) => (
                  <a key={item} href="#" className="ft__nav-link">{item}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 하단 */}
        <div className="ft__bottom">
          <div className="ftRight">
            <img src={logo} alt="식물원로고" />
            <dl className="ftInfo">
                {INFO.map((i) => (
                  <div key={i.label}>
                    <dt className="infoLabel">{i.label}</dt>
                    <dd className="infoValue">{i.value}</dd>
                  </div>
                ))}
            </dl>
          </div>
          <div className="ftLeft">
            <div className="ft__legal">
              <span>개인정보처리방침</span>
              <span>이메일무단수집거부</span>
            </div>
            <span className="ft__brand">
              COPYRIGHT &copy; 2026. Seongnam City. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
