import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Home from "./Home";
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<ComingSoon />} /> 
      </Routes>
      <Footer />
    </>
  );
}
