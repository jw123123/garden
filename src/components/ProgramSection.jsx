import '../styles/ProgramSection.css';

const PROGRAMS = [
  {
    id: 'gardening',
    name: '원예체험',
    sub: '씨앗부터 수확까지, 직접 흙을 만져보는 시간',
    gradient: 'linear-gradient(135deg, #d1fae5 0%, #6ee7b7 60%, #059669 100%)',
    badge: null,
    wide: false,
  },
  {
    id: 'urban',
    name: '도심 정원 연서',
    sub: '도시 속 녹색 감성을 찾아가는 탐방 프로그램',
    gradient: 'linear-gradient(135deg, #1A2E1A 0%, #2D5A2D 60%, #4A7A38 100%)',
    badge: '4건',
    wide: true,
  },
  {
    id: 'school',
    name: '식물학교',
    sub: '초·중·고 교과 연계 생태교육 프로그램',
    gradient: 'linear-gradient(135deg, #fef9c3 0%, #fde047 60%, #ca8a04 100%)',
    badge: null,
    wide: false,
  },
  {
    id: 'ecology',
    name: '생태탐방',
    sub: '생물 다양성을 직접 관찰하는 현장 교육',
    gradient: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 60%, #2563eb 100%)',
    badge: null,
    wide: false,
  },
  {
    id: 'greenhouse',
    name: '온실투어',
    sub: '열대·아열대 식물이 가득한 유리 온실 탐방',
    gradient: 'linear-gradient(135deg, #f3e8ff 0%, #d8b4fe 60%, #7c3aed 100%)',
    badge: null,
    wide: false,
  },
];

export default function ProgramSection() {
  return (
    <section className="program">
      <div className="program__inner">
        {/* 텍스트 설명 */}
        <div className="program__desc">
          <strong>유치원부터 고등학생까지<br />모두를 위한 프로그램</strong>
          유치원부터 초, 중, 고등학생 및 지도자를 위한
          탐방의 장으로 자기 교육생들의 능력에 맞춰
          체계적으로 프로그램을 운영하고 있습니다.
        </div>

        {/* 카드 그리드 */}
        <div className="program__grid">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className={`program__card${prog.wide ? ' program__card--wide' : ''}`}
            >
              {/* 배경 */}
              <div
                className="program__card-bg"
                style={{ background: prog.gradient }}
              />

              {/* 뱃지 */}
              {prog.badge && (
                <div className="program__badge">{prog.badge}</div>
              )}

              {/* 기본 라벨 */}
              <span className="program__card-label">{prog.name}</span>

              {/* 호버 오버레이 */}
              <div className="program__card-overlay">
                <p className="program__card-name">{prog.name}</p>
                <p className="program__card-sub">{prog.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
