import React from 'react'
import Hero from './components/Hero';
import Slogan from './components/Slogan';
import Season from './components/Season';
import Program from './components/Program';
import Notice   from './components/Notice';
import Faq    from './components/Faq';

export default function Home() {
  return (
    <>
      <Hero />
      <Slogan />
      <Season />
      <Program />
      <Notice />
      <Faq />
    </>
  )
}
