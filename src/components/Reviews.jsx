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
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      location: 'Santa Marta',
      rating: 5,
      comment: 'Puedo decir que el cacao de Serrato es de una calidad superior. Perfecto para mis postres gourmet.',
    },
    {
      id: 3,
      name: 'Ana Martínez',
      location: 'Barranquilla',
      rating: 5,
      comment: 'Llevo comprando aquí desde hace años. La consistencia en la calidad y el excelente servicio al cliente me mantienen como clienta fiel.',
    },
    {
      id: 4,
      name: 'Jesus Pérez',
      location: 'Barranquilla',
      rating: 5,
      comment: 'El café honey fue perfecto. Ahora soy un cliente regular. ¡Excelente calidad!',
    },
    {
      id: 5,
      name: 'Lucía Torres',
      location: 'Cartagena',
      rating: 5,
      comment: 'El aroma y sabor del café de Serrato es incomparable. Es mi ritual matutino favorito. No cambiaría por ningún otro.',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 7000);

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
  <section id="reviews" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100" role="region" aria-label="Carrusel de reseñas de clientes">
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
            aria-label="Ver reseña anterior"
            onClick={prevReview}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition duration-300 group"
          >
            <ChevronLeft className="h-6 w-6 text-amber-600 group-hover:text-amber-700" />
          </button>
          
          <button
            aria-label="Ver reseña siguiente"
            onClick={nextReview}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition duration-300 group"
          >
            <ChevronRight className="h-6 w-6 text-amber-600 group-hover:text-amber-700" />
          </button>

           {/* Review Cards */}
           <div className="overflow-hidden" aria-live="polite">
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
                 aria-label={`Ver reseña ${index + 1}`}
                 key={index}
                 onClick={() => setCurrentReview(index)}
                 className={`w-3 h-3 rounded-full transition duration-300 border border-amber-700 focus:outline-amber-700 ${
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
