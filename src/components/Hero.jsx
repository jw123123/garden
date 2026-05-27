import '../styles/Hero.css';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <h1 className="hero__title">Botanical</h1>
        <p className="hero__sub">by Seongnam Garden</p>
      </section>

      {/* 영상 영역 - 추후 <video> 태그로 교체 */}
      <div className="hero__video-wrap">
        <div className="hero__video-placeholder">
          <div className="hero__video-icon">
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="hero__video-label">VIDEO COMING SOON</span>
        </div>
      </div>
    </>
  );
}
