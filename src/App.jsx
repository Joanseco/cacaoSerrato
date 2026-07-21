import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Reviews from './components/Reviews';
import SwiperPhotos from './components/SwiperPhotos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './translations';

function App() {
  const [language, setLanguage] = useState('es');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <Hero t={t} />
      <Products language={language} t={t} />
      <Reviews t={t} />
      <SwiperPhotos />
      <Contact language={language} t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
