import { useState } from 'react';
import '../styles/Notice.css';

const TABS = ['전체', '공지', '교육', '채용'];

const ALL_notice = [
  { tag: '공지', title: '성남시 식물원 시즌 이용안내서 배포', date: '2024-03-15' },
  { tag: '채용', title: '2024년 성남시 식물원 및 도시생태탐방 교간인력 채용 공고', date: '2024-03-01' },
  { tag: '공지', title: '성남시 캐릭터 공모전 개최 안내', date: '2024-02-20' },
  { tag: '교육', title: '봄 학기 식물학교 수강생 모집', date: '2024-02-10' },
  { tag: '채용', title: '2024년 생태해설사 모집 공고', date: '2024-01-25' },
  { tag: '교육', title: '어린이 원예체험 프로그램 참가자 모집', date: '2024-01-15' },
];

export default function Notice() {
  const [activeTab, setActiveTab] = useState('전체');

  const filtered =
    activeTab === '전체'
      ? ALL_notice
      : ALL_notice.filter((n) => n.tag === activeTab);

  return (
    <section className="notice">
      <div className="notice__inner">
        <div className="notice__header">
          <div className="titleBtn">
            <h2 className="noticeTitle">소식</h2>
            <div className="notice__tabs">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  className={`notice__tab${activeTab === tab ? ` active notice__tab--${tab}` : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <a href="#" className="more">더보기</a>
        </div>

        <div className="notice__list" key={activeTab}>
          {filtered.length === 0 && (
            <div className="notice__empty">등록된 소식이 없습니다.</div>
          )}
          {filtered.map((item, i) => (
            <div
              key={i}
              className="notice__item"
            >
              <div className="noticeContent">
                <span className={`notice__tag notice__tag--${item.tag}`}>{item.tag}</span>
                <span className="notice__item-title">{item.title}</span>
              </div>
              <span className="notice__item-date icon">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
