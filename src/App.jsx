import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Reviews from './components/Reviews';
import SwiperPhotos from './components/SwiperPhotos';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Products />
      <Reviews />
      <SwiperPhotos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
