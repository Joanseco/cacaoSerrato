import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews = ({ t }) => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = t.reviews.items.map((item) => ({
    ...item,
    rating: 5,
  }));

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
    <section
      id="reviews"
      className="py-20 bg-gradient-to-br from-amber-50 to-orange-100"
      role="region"
      aria-label={t.reviews.regionLabel}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            {t.reviews.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.reviews.subtitle}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <button
            aria-label={t.reviews.prevAria}
            onClick={prevReview}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition duration-300 group"
          >
            <ChevronLeft className="h-6 w-6 text-amber-600 group-hover:text-amber-700" />
          </button>

          <button
            aria-label={t.reviews.nextAria}
            onClick={nextReview}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition duration-300 group"
          >
            <ChevronRight className="h-6 w-6 text-amber-600 group-hover:text-amber-700" />
          </button>

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
                  <Quote className="h-12 w-12 text-amber-200 mb-6" />

                  <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed italic">
                    "{reviews[currentReview].comment}"
                  </p>

                  <div className="flex space-x-1 mb-6">
                    {renderStars(reviews[currentReview].rating)}
                  </div>

                  <div className="flex items-center space-x-4">
                    <div>
                      <h4 className="text-xl font-semibold text-amber-900">
                        {reviews[currentReview].name}
                      </h4>
                      <p className="text-gray-600">{reviews[currentReview].location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                aria-label={`${t.reviews.dotAria} ${index + 1}`}
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition duration-300 border border-amber-700 focus:outline-amber-700 ${
                  index === currentReview ? 'bg-amber-600' : 'bg-amber-200'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {t.reviews.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
