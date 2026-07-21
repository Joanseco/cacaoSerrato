import React, { useState } from 'react';
import { Menu, X, Coffee, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = ({ language, setLanguage, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ];

  const navItems = [
    { id: 'inicio', label: t.nav.inicio },
    { id: 'productos', label: t.nav.productos },
    { id: 'reviews', label: t.nav.reviews },
    { id: 'contacto', label: t.nav.contacto },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 gap-4">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-amber-800">Cacao de Serrato</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-amber-600 transition duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-2 py-1">
              <Languages className="h-4 w-4 text-amber-700" />
              <span className="text-xs font-semibold text-amber-800">{t.nav.language}</span>
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={`rounded-full px-2 py-1 text-xs font-semibold transition ${
                    language === item.code
                      ? 'bg-amber-600 text-white'
                      : 'text-amber-800 hover:bg-amber-100'
                  }`}
                  aria-pressed={language === item.code}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-amber-600 py-2 text-left"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-2 border-t border-amber-100">
                <div className="flex items-center gap-2 mb-2">
                  <Languages className="h-4 w-4 text-amber-700" />
                  <span className="text-sm font-semibold text-amber-800">{t.nav.language}</span>
                </div>
                <div className="flex gap-2">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        setLanguage(item.code);
                        setIsMenuOpen(false);
                      }}
                      className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
                        language === item.code
                          ? 'bg-amber-600 text-white'
                          : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
