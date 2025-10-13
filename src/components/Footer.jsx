import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-amber-900 text-amber-50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Coffee className="h-8 w-8 text-amber-300" />
              <span className="text-2xl font-bold">Cacao de Serrato</span>
            </div>
            <p className="text-amber-200 mb-6 leading-relaxed max-w-md">
              Desde el corazón de Colombia, llevamos a tu mesa el mejor café y cacao premium. 
              Cada grano cuenta una historia de tradición, calidad y pasión por la excelencia.
            </p>
            <p className="text-amber-200 mb-6 leading-relaxed max-w-md">
            Producto distribuido por Deek Company S A S
            </p>
            <div className="flex items-center space-x-2 text-amber-300">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>en Colombia</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-amber-300">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-amber-200 hover:text-white transition duration-300"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('productos')}
                  className="text-amber-200 hover:text-white transition duration-300"
                >
                  Productos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="text-amber-200 hover:text-white transition duration-300"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-amber-200 hover:text-white transition duration-300"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-amber-300">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+573127622880"
                  className="flex items-center space-x-3 text-amber-200 hover:text-white transition duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span>312 762 2880</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@cacaodeserrato.com"
                  className="flex items-center space-x-3 text-amber-200 hover:text-white transition duration-300"
                >
                  <Mail className="h-5 w-5" />
                  <span>jorgeserrato1963@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-3 text-amber-200">
                  <MapPin className="h-5 w-5" />
                  <span>Colombia</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-800 my-8"></div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-amber-200 text-sm">
            © {currentYear} Cacao de Serrato. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-amber-200">
            <span>Café Premium de Colombia</span>
            <span>•</span>
            <span>Calidad Garantizada</span>
            <span>•</span>
            <span>Envío Nacional</span>
          </div>
        </motion.div>

        {/* Special Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 p-6 bg-amber-800 rounded-xl"
        >
          <p className="text-amber-100 italic">
            "Cacao para un amigo como tú" - Porque cada cliente es parte de nuestra familia
          </p>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/573127622880"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 500 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition duration-300 z-50"
      >
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
        </svg>
      </motion.a>
    </footer>
  );
};

export default Footer;
