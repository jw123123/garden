import { useState } from 'react';
import '../styles/SeasonSection.css';

const SEASONS = [
  {
    id: 'spring',
    label: '봄',
    dot: '#F9A8D4',
    leftGradient: 'linear-gradient(160deg, #fce4ec 0%, #f48fb1 50%, #e91e63 100%)',
    rightGradient: 'linear-gradient(135deg, #fffde7 0%, #fff176 40%, #fdd835 80%, #f9a825 100%)',
  },
  {
    id: 'summer',
    label: '여름',
    dot: '#86EFAC',
    leftGradient: 'linear-gradient(160deg, #e8f5e9 0%, #66bb6a 50%, #2e7d32 100%)',
    rightGradient: 'linear-gradient(135deg, #e8eaf6 0%, #9fa8da 40%, #3949ab 100%)',
  },
  {
    id: 'autumn',
    label: '가을',
    dot: '#FCA5A5',
    leftGradient: 'linear-gradient(160deg, #fff8e1 0%, #ffcc80 50%, #e65100 100%)',
    rightGradient: 'linear-gradient(135deg, #fce4ec 0%, #f48fb1 40%, #ad1457 100%)',
  },
  {
    id: 'winter',
    label: '겨울',
    dot: '#BAE6FD',
    leftGradient: 'linear-gradient(160deg, #e3f2fd 0%, #90caf9 50%, #1565c0 100%)',
    rightGradient: 'linear-gradient(135deg, #fce4ec 0%, #ef9a9a 40%, #c62828 100%)',
  },
];

function HeartIcon({ filled }) {
  return filled ? (
    <svg viewBox="0 0 24 24" fill="#FF4D6D" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
               2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
               C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
               c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06
               a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78
               1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export default function SeasonSection() {
  const [active, setActive] = useState('spring');
  const [likes, setLikes] = useState(
    Object.fromEntries(
      SEASONS.map((s) => [s.id, { liked: false, count: 128, popping: false }])
    )
  );

  const season = SEASONS.find((s) => s.id === active);
  const likeState = likes[active];

  const handleHeart = () => {
    setLikes((prev) => {
      const cur = prev[active];
      const nowLiked = !cur.liked;
      return {
        ...prev,
        [active]: {
          liked: nowLiked,
          count: nowLiked ? cur.count + 1 : cur.count - 1,
          popping: nowLiked,
        },
      };
    });
    if (!likeState.liked) {
      setTimeout(() => {
        setLikes((prev) => ({
          ...prev,
          [active]: { ...prev[active], popping: false },
        }));
      }, 420);
    }
  };

  return (
    <section className="season">
      <div className="season__inner">
        <div className="season__layout">
          {/* 계절 탭 */}
          <div className="season__sidebar">
            {SEASONS.map((s) => (
              <button
                key={s.id}
                className={`season__tab${active === s.id ? ' active' : ''}`}
                onMouseEnter={() => setActive(s.id)}
                onClick={() => setActive(s.id)}
              >
                <span className="season__tab-dot" style={{ background: s.dot }} />
                {s.label}
              </button>
            ))}
          </div>

          {/* 2분할 이미지 */}
          <div>
            <div className="season__grid">
              {/* 왼쪽 이미지 + 계절 라벨 */}
              <div className="season__img">
                <div className="season__img-inner" style={{ background: season.leftGradient }} />
                <div className="season__img-label">
                  {SEASONS.map((s) => (
                    <span
                      key={s.id}
                      style={{
                        opacity: s.id === active ? 1 : 0.4,
                        fontWeight: s.id === active ? 700 : 400,
                        fontSize: s.id === active ? '16px' : '13px',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* 오른쪽 이미지 + 하트 */}
              <div className="season__img">
                <div className="season__img-inner" style={{ background: season.rightGradient }} />

                {/* G4 뱃지 */}
                <span className="season__badge">G4</span>

                {/* 하트 좋아요 */}
                <div className="season__heart-wrap" onClick={handleHeart}>
                  <button
                    className={[
                      'season__heart-btn',
                      likeState.liked ? 'liked' : '',
                      likeState.popping ? 'pop' : '',
                    ].join(' ').trim()}
                    aria-label={likeState.liked ? '좋아요 취소' : '좋아요'}
                  >
                    <HeartIcon filled={likeState.liked} />
                  </button>
                  <span className="season__heart-count">
                    {likeState.count.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <p className="season__caption">계절별 가장 사랑받는 식물</p>
          </div>
        </div>
      </div>
    </section>
  );
}
