import '../styles/Program.css';
import gardening from '../images/gardening.jpg'
import season from '../images/season.jpg'
import wood from '../images/wood.jpg'
import gardener from '../images/gardener.jpg'
import greenhouse from '../images/greenhouse.jpg'

const PROGRAMS = [
  {
    id: 'gardening',
    name: '나만의 정원 가꾸기',
    people: '5명',
    time: '13:00 ~ 16:00',
    date: '매주 목요일(3월~11월)',
    img: `url(${gardening})`,
  },
  {
    id: 'season',
    name: '식물원 사계절 탐방',
    people: '15명 ~ 60명',
    time: '10:00~12:00 /13:00~15:00',
    date: '월 ~ 금요일(3월~12월)',
    img: `url(${season})`,
  },
  {
    id: 'wood',
    name: '목공 체험장',
    people: '23명',
    time: '13:00 ~ 16:00',
    date: '월 ~ 금요일(2월~12월)',
    img: `url(${wood})`,
  },
  {
    id: 'text',
    type: 'text'
  },
  {
    id: 'gardener',
    name: '도심 정원관리사',
    people: '15명',
    time: '13:00 ~ 16:00',
    date: '금, 토요일(4월~11월)',
    img: `url(${gardener})`,
  },
  {
    id: 'greenhouse',
    name: '온실 스토리텔링',
    people: '15명',
    time: '10:30~11:30 / 13:30~14:30',
    date: '화요일~목요일(3월~12월)',
    img: `url(${greenhouse})`,
  },
];

export default function Program() {
  return (
    <section className="program">
      <div className="programContainer">
        {/* 텍스트 */}
          <h2 className="programTitle">프로그램</h2>

        {/* 카드 그리드 */}
        <div className="cardGrid">
          {PROGRAMS.map((prog) =>
            prog.type === 'text' ? (
              <div className="programDesc" key={prog.id}>
                유치원부터 초, 중, 고등학생 및 지도자를 위한 학습의<br/> 
                장으로 각기 교육생들의 눈높이에 맞춰 체계적으로<br/> 
                프로그램을 운영하고 있습니다.
              </div>
            ) : (
              <div key={prog.id} className='card'>
                {/* 배경 */}
                <div
                  className="cardBg"
                  style={{ backgroundImage: prog.img }}
                />

                {/* 기본 라벨 */}
                <span className="cardLabel">{prog.name}</span>

                {/* 호버 오버레이 */}
                <div className="cardOverlay">
                  <div>
                  <span className="cardName">{prog.name}</span>
                  <span className="cardPeople icon">{prog.people}</span>
                  </div>
                  <div className='dateTime'>
                    <span className="cardTime icon">{prog.time}</span>
                    <span className="cardDate icon">{prog.date}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
