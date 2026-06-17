import { useState } from 'react';
import '../styles/Notice.css';

const TABS = ['전체', '공지', '교육', '채용'];

const ALL_notice = [
  { tag: '공지', title: '성남시 식물원 시즌 이용안내서 배포', date: '2026-03-15' },
  { tag: '채용', title: '2026년 성남시 식물원 및 도시생태탐방 교간인력 채용 공고', date: '2026-03-01' },
  { tag: '공지', title: '성남시 캐릭터 공모전 개최 안내', date: '2026-02-20' },
  { tag: '교육', title: '봄 학기 식물학교 수강생 모집', date: '2026-02-10' },
  { tag: '채용', title: '2026년 생태해설사 모집 공고', date: '2026-01-25' },
  { tag: '교육', title: '어린이 원예체험 프로그램 참가자 모집', date: '2026-01-15' },
];

export default function Notice() {
  const [activeTab, setActiveTab] = useState('전체');

  const filtered =
    activeTab === '전체'
      ? ALL_notice
      : ALL_notice.filter((n) => n.tag === activeTab);

  return (
    <section className="notice">
      <div className="noticeInner">
        <div className="noticeHeader">
          <div className="titleBtn">
            <h2 className="noticeTitle">소식</h2>
            <div className="noticeTabs">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  className={`noticeTab${activeTab === tab ? ` active noticeTab${tab}` : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <a href="#" className="more">더보기</a>
        </div>

        <div className="noticeList" key={activeTab}>
          {filtered.length === 0 && (
            <div className="noticeEmpty">등록된 소식이 없습니다.</div>
          )}
          {filtered.map((item, i) => (
            <div
              key={i}
              className="noticeItem"
            >
              <div className="noticeContent">
                <span className={`noticeTag noticeTag${item.tag}`}>{item.tag}</span>
                <span className="noticeItemTitle">{item.title}</span>
              </div>
              <span className="noticeItemDate icon">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
