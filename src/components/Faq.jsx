import { useState } from 'react';
import '../styles/Faq.css';

const FAQS = [
  {
    q: '성남식물원 입장권 인터넷 사전 발권은 어떻게 하나요?',
    a: '성남시 식물원 공식 홈페이지 또는 네이버 예약원 공식 홈페이지 또는 네이버 예약을원 공식 홈페이지 또는 네이버 예약을을 통해 사전 예약이 가능합니다. 방문 7일 전부터 예약하실 수 있으며, 현장 발권보다 빠르게 입장하실 수 있습니다.',
  },
  {
    q: '입장 시 알아야 할 사항은 무엇인가요?',
    a: '식물원 내에서는 반려동물 동반, 음식물 반입, 식물 채집이 금지되어 있습니다. 유모차·휠체어는 이용 가능하며, 주차는 정원 주차장을 이용해 주세요.',
  },
  {
    q: '노천발코니 지역 교육이 가능한가요?',
    a: '네, 노천 발코니 구역에서 단체 교육 프로그램 운영이 가능합니다. 사전에 단체 예약 신청서를 제출해 주시면 담당자 확인 후 안내 드립니다.',
  },
  {
    q: '보호자 동반 없이 어린이 이용이 가능한가요?',
    a: '만 12세 미만 어린이는 반드시 보호자와 동반 입장하셔야 합니다. 청소년 단체 방문의 경우 인솔 교사 동반이 필요합니다.',
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section className="faq">
      <div className="faqInner">
        <div className="faqHeader">
          <h2 className="faqTitle">자주하는 질문</h2>
          <a href="#" className="more">더보기</a>
        </div>

        {FAQS.map((item, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={i} className="faqItem">
              {/* Q 버튼 */}
              <button className="faqQ" onClick={() => toggle(i)}>
                <span className="faqQmark">Q.</span>
                <span className="faqQtext">{item.q}</span>
                <span className={`faqArrow${isOpen ? ' icon faqOpen' : ' icon'}`}>
                </span>
              </button>

              {/* A 슬라이드다운 */}
              <div className={`faqAnswer${isOpen ? ' faqAnswerOpen' : ''}`}>
                <div className="faqAnswerInner">
                  <div className="faqA">
                    <span className="faqAmark">A.</span>
                    <p className="faqAtext">{item.a}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
