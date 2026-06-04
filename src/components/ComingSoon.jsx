import { Link } from "react-router-dom";
import "../styles/ComingSoon.css";

function ComingSoon() {
  return (
    <section className="coming-hero" aria-labelledby="coming-title">
      <div className="coming-bg-text" aria-hidden="true">
        Botanical
      </div>

      <p className="coming-eyebrow">Seongnam Garden</p>
      <h1 id="coming-title" className="coming-title">
        페이지를
        <br />
        준비하고 있습니다
      </h1>
      <p className="coming-desc">
        성남시 식물원의 새로운 공간을 더 알기 쉽고 편안하게
        <br />
        이용하실 수 있도록 콘텐츠를 정리하고 있습니다.
      </p>

      <div className="coming-actions">
        <Link to="/" className="btn btn-line">
          메인으로 돌아가기
        </Link>
      </div>
    </section>
  );
}

export default ComingSoon;
