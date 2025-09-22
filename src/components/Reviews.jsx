import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'María González',
      location: 'Bogotá',
      rating: 5,
      comment: 'El mejor café que he probado en mi vida. La calidad es excepcional y el sabor es simplemente increíble. ¡Totalmente recomendado!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      location: 'Medellín',
      rating: 5,
      comment: 'Como chef, puedo decir que el cacao de Serrato es de una calidad superior. Perfecto para mis postres gourmet.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      location: 'Cali',
      rating: 5,
      comment: 'Llevo comprando aquí desde hace años. La consistencia en la calidad y el excelente servicio al cliente me mantienen como clienta fiel.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    },
    {
      id: 4,
      name: 'Diego Pérez',
      location: 'Barranquilla',
      rating: 5,
      comment: 'El pack degustación fue perfecto para conocer todos los productos. Ahora soy un cliente regular. ¡Excelente calidad!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    {
      id: 5,
      name: 'Lucía Torres',
      location: 'Cartagena',
      rating: 5,
      comment: 'El aroma y sabor del café de Serrato es incomparable. Es mi ritual matutino favorito. No cambiaría por ningún otro.',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Descubre por qué eligen Cacao de Serrato.
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition duration-300 group"
          >
            <ChevronLeft className="h-6 w-6 text-amber-600 group-hover:text-amber-700" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition duration-300 group"
          >
            <ChevronRight className="h-6 w-6 text-amber-600 group-hover:text-amber-700" />
          </button>

          {/* Review Cards */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mx-8"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Quote Icon */}
                  <Quote className="h-12 w-12 text-amber-200 mb-6" />
                  
                  {/* Review Text */}
                  <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed italic">
                    "{reviews[currentReview].comment}"
                  </p>
                  
                  {/* Stars */}
                  <div className="flex space-x-1 mb-6">
                    {renderStars(reviews[currentReview].rating)}
                  </div>
                  
                  {/* Reviewer Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={reviews[currentReview].avatar}
                      alt={reviews[currentReview].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-amber-200"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-amber-900">
                        {reviews[currentReview].name}
                      </h4>
                      <p className="text-gray-600">
                        {reviews[currentReview].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  index === currentReview ? 'bg-amber-600' : 'bg-amber-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-gray-600">Clientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">5★</div>
            <div className="text-gray-600">Calificación Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">3+</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">100%</div>
            <div className="text-gray-600">Calidad Garantizada</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
