import { useState } from 'react';
import '../styles/Season.css';
import spring1 from '../images/spring1.jpg';
import spring2 from '../images/spring2.jpg';
import summer1 from '../images/summer1.jpg';
import summer2 from '../images/summer2.jpg';
import fall1 from '../images/fall1.jpg';
import fall2 from '../images/fall2.jpg';
import winter1 from '../images/winter1.jpg';
import winter2 from '../images/winter2.jpg';

const SEASONS = [
  {
    id: 'spring',
    label: '봄',
    dot: '#fff',
    leftimage: spring1,
    rightimage: spring2,
  },
  {
    id: 'summer',
    label: '여름',
    dot: '#fff',
    leftimage: summer1,
    rightimage: summer2,
  },
  {
    id: 'autumn',
    label: '가을',
    dot: '#fff',
    leftimage: fall1,
    rightimage: fall2,
  },
  {
    id: 'winter',
    label: '겨울',
    dot: '#fff',
    leftimage: winter1,
    rightimage: winter2,
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

export default function Season() {
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
      <div className="seasonContainer">
        <h2 className="seasonTitle">계절별 가장 사랑받는 식물</h2>
        <div className="seasonWrap">

          {/* 계절 사이드바 */}
          <div className="seasonLabel">
            {SEASONS.map((s) => (
              <button
                key={s.id}
                className={`seasonTab${active === s.id ? ' active' : ''}`}
                onMouseEnter={() => setActive(s.id)}
                onClick={() => setActive(s.id)}
              >
                <span className="tabDot" style={{ background: s.dot }} />
                {s.label}
              </button>
            ))}
          </div>

          {/* 2분할 이미지 */}
          <div className="seasonGrid">
            
            {/* 왼쪽 이미지 */}
            <div className="seasonImg">
              <img src={season.leftimage} alt={season.id} className="seasonImgInner" />
            </div>

            {/* 오른쪽 이미지 */}
            <div className="seasonImg">
              <img src={season.rightimage} alt={season.id} className="seasonImgInner" />

              {/* 하트 */}
              <div className="heartWrap" onClick={handleHeart}>
                <button
                  className={[
                    'heartBtn',
                    likeState.liked ? 'liked' : '',
                    likeState.popping ? 'pop' : '',
                  ].join(' ').trim()}
                  aria-label={likeState.liked ? '좋아요 취소' : '좋아요'}
                >
                  <HeartIcon filled={likeState.liked} />
                </button>
                <span className="heartCount">
                  {likeState.count.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
