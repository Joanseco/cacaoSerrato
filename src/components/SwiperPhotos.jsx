import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { motion } from "framer-motion";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Array de datos con las URLs de las imágenes y una descripción
const photoSlides = [
    { id: 1, src: '/assets/swiper-photos/1.jpg', alt: 'Cacao de Serrato en Cartagena' },
    { id: 2, src: '/assets/swiper-photos/2.jpeg', alt: 'Cacao de Serrato en Francia' },
    { id: 3, src: '/assets/swiper-photos/3.jpg', alt: 'Cacao de Serrato en Cartagena' },
    { id: 4, src: '/assets/swiper-photos/4.jpg', alt: 'Cacao de Serrato en Francia' },
    { id: 5, src: '/assets/swiper-photos/5.jpg', alt: 'Cacao de Serrato en Francia' },
    { id: 6, src: '/assets/swiper-photos/6.jpg', alt: 'Cacao de Serrato en Francia' },
    { id: 7, src: '/assets/swiper-photos/7.jpeg', alt: 'Cacao de Serrato en Francia' },
    { id: 8, src: '/assets/swiper-photos/8.jpg', alt: 'Cacao de Serrato en Francia' },
    { id: 9, src: '/assets/swiper-photos/9.jpg', alt: 'Cacao de Serrato en Francia' },
    { id: 10, src: '/assets/swiper-photos/10.jpg', alt: 'Cacao de Serrato en Francia' },
    { id: 11, src: '/assets/swiper-photos/11.jpg', alt: 'Cacao de Serrato en Francia' },
    { id: 12, src: '/assets/swiper-photos/12.jpeg', alt: 'Cacao de Serrato en Cartagena' },
];

const SwiperPhotos = () => {
    return (
        // Contenedor que establece el ancho y centra el carrusel con Tailwind
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        <div className="max-w-2xl mx-auto mt-10 mb-10 p-8 bg-gray-100 rounded-xl shadow-2xl text-center">
            <h2 className="text-4xl lg:text-4xl font-bold text-amber-900 mb-8">Cacao de Serrato por el mundo</h2>

            {/* 4. Componente SWIPER */}
            <Swiper
                modules={[Navigation, Pagination, A11y]}

                // Parámetros de Swiper como props (slidesPerView, spaceBetween, etc.)
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                // Clase para establecer el tamaño del carrusel
                className="w-full max-w-lg h-[600px] rounded-lg relative mx-auto"
            >

                {/* Generar las diapositivas a partir del array de datos */}
                {photoSlides.map((photo) => (
                    <SwiperSlide key={photo.id}>
                        {/* Contenedor interno para asegurar que la imagen cubra todo y añadir efectos Tailwind */}
                        <div className="w-full h-full relative group">
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition duration-300 group-hover:opacity-90"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </motion.div>
    );
};

export default SwiperPhotos;
