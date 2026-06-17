import '../styles/Footer.css';
import logo from '../images/logo.png'

const NAV_COLS = [
  { title: '식물원소개', items: ['성남시 식물원', '식물원안내', '식물원 현항', '오시는길'] },
  { title: '체험안내', items: ['프로그램안내', '예약신청', '예약확인', '강사소개'] },
  { title: '자료실', items: ['생태자료실', '보도자료', '교육활동자료'] },
  { title: '커뮤니티', items: ['공지사항', 'FAQ', '자유게시판'] },
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
      <div className="ftInner">
        {/* 관람시간 */}
        <div className="ftGardenInfo">
          <div className="ftHours">
            <h2 className="ftHoursTitle">관람시간</h2>
            <div>
              <div className="ftHoursGrid">
                {HOURS.map((h) => (
                  <div key={h.label} className="ftHourItem">
                    <p className="ftHourLabel">{h.label}</p>
                    <p className="ftHourTime">{h.time}</p>
                  </div>
                ))}
              </div>
              <span className="ftHourNote">
                설날 (1/1), 구정 (음력 1/1), 추석 (음력 8/15) 휴관
              </span>
            </div>
          </div>

          {/* 링크 */}
          <div className="ftNav">
            {NAV_COLS.map((col) => (
              <div key={col.title}>
                <p className="ftNavColTitle">{col.title}</p>
                {col.items.map((item) => (
                  <a key={item} href="#" className="ftNavLink">{item}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 하단 */}
        <div className="ftBottom">
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
            <div className="ftLegal">
              <span>개인정보처리방침</span>
              <span>이메일무단수집거부</span>
            </div>
            <span className="ftBrand">
              COPYRIGHT &copy; 2026. Seongnam City. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
