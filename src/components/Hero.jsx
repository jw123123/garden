import React from 'react';
import '../styles/Hero.css';
import video from '../images/garden_video.mp4';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="heroTitle">
          <h1 className="titleL">Botanical</h1>
          <p className="titleS">by Seongnam Garden</p>
        </div>
        {/* 영상 영역 - 추후 <video> 태그로 교체 */}
        <div className="heroVideoWrap">
          <video className="heroVideo" src={video} autoPlay muted loop></video>
        </div>
      </section>

    </>
  );
}
