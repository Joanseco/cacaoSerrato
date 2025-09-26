import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
// ...existing code...

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-amber-900 leading-tight">
              Cacao de
              <span className="block text-orange-600">Serrato</span>
            </h1>
            <p className="text-sm text-amber-800 font-medium mt-0" style={{ marginTop: 0 }}>
              Un producto distribuido por Deek Company S A S
            </p>
            
            <p className="text-xl lg:text-2xl text-amber-800 font-medium">
              Cacao para un amigo como tú
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Descubre el auténtico sabor de Colombia con nuestro café premium y cacao de la más alta calidad. Cada grano cuenta una historia de tradición, pasión y excelencia. Te garantizamos que recibirás el peso exacto en cada paquete (peso es garantizado por nuestras basculas digitales), porque la confianza es tan importante como el sabor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProducts}
                className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition duration-300 shadow-lg"
              >
                Ver Productos
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:3127622880"
                className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 hover:text-white transition duration-300"
              >
                Llamar Ahora
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Logo Images */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex flex-col items-center space-y-8">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-80 h-80 rounded-full overflow-hidden shadow-2xl"
              >
                <img 
                  src={img1} 
                  alt="Cacao de Serrato Logo" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, rotate: -5 }}
                transition={{ duration: 0.3 }}
                className="w-64 h-64 rounded-full overflow-hidden shadow-xl"
              >
                <img 
                  src={img2} 
                  alt="Serrato Café de Colombia" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            aria-label="Desplazar hacia productos"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToProducts}
            className="text-amber-600 hover:text-amber-700 transition duration-300"
          >
            <ArrowDown className="h-8 w-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
