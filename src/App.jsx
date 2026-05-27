import './styles/App.css';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import SeasonSection from './components/SeasonSection';
import ProgramSection from './components/ProgramSection';
import NewsSection   from './components/NewsSection';
import FaqSection    from './components/FaqSection';
import Footer        from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SeasonSection />
      <ProgramSection />
      <NewsSection />
      <FaqSection />
      <Footer />
    </>
  );
}
