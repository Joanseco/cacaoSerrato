import React from 'react';
import { motion } from 'framer-motion';
import { Star, Package, Truck, Shield } from 'lucide-react';
import man_cofe from '../assets/man_cofe.webp';
import woman_cofe from '../assets/woman_cofe.webp';
import woman_cofe2 from '../assets/woman_cofe2.webp';
import proximamente from '../assets/proximamente.jpg';

const Products = ({ language, t }) => {
  const images = [woman_cofe, man_cofe, woman_cofe2, proximamente];

  const products = t.products.productList.map((product, index) => ({
    id: index + 1,
    name: product.name,
    description: product.description,
    image: images[index],
    features: product.features,
  }));

  const features = [
    {
      icon: Package,
      title: t.products.featureLabels.premium,
      description: t.products.featureLabels.premiumDesc,
    },
    {
      icon: Truck,
      title: t.products.featureLabels.shipping,
      description: t.products.featureLabels.shippingDesc,
    },
    {
      icon: Shield,
      title: t.products.featureLabels.quality,
      description: t.products.featureLabels.qualityDesc,
    },
  ];

  const handleOrderProduct = (product) => {
    const greetings = {
      es: '¡Hola! Me interesa comprar el producto',
      en: 'Hello! I am interested in buying the product',
      fr: 'Bonjour ! Je suis intéressé(e) par l’achat du produit',
    };

    const message = `${greetings[language]}: *${product.name}* ${product.description} ¿Podrían darme más información sobre disponibilidad y envío?`;
    const whatsappURL = `https://wa.me/573127622880?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            {t.products.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.products.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full mr-2"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleOrderProduct(product)}
                    disabled={product.id === 4}
                    className={`bg-amber-600 text-white px-20 py-2 rounded-md transition duration-300 font-semibold ${
                      product.id === 4
                        ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400'
                        : 'hover:bg-amber-700'
                    }`}
                  >
                    {product.id === 4 ? t.products.soon : t.products.order}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
