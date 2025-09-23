import React from "react";
import { motion } from "framer-motion";
import { Star, Package, Truck, Shield } from "lucide-react";
import woman_cofe from "../assets/woman_cofe.webp";
import man_cofe from "../assets/man_cofe.webp";
import proximamente from "../assets/proximamente.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "250 grs Cafe Honey",
      description:
        "Café de especialidad con proceso Honey. Un café suave, dulce y sin amargura, con notas a caramelo y frutas.",
      price: "$35.000",
      image: woman_cofe,
      features: ["100% Arábica", "Tostado Artesanal", "Origen Único"],
    },
    {
      id: 2,
      name: "200 grs Cacao de origen",
      description:
        "Un viaje al corazón del sabor. Nuestro cacao de origen es 100% puro y natural, seleccionado por su sabor intenso y profundo.",
      price: "$30.000",
      image: man_cofe,
      features: ["100% Orgánico", "Sin Aditivos", "Origen Controlado"],
    },
    {
      id: 3,
      name: "Próximamente mas productos",
      description: "Pronto estaremos presentandos nuestros nuevos productos",
      price: "------",
      image: proximamente,
      features: [],
    },
    {
      id: 4,
      name: "Próximamente mas productos",
      description: "Pronto estaremos presentandos nuestros nuevos productos",
      price: "------",
      image: proximamente,
      features: [],
    },
  ];

  const features = [
    {
      icon: Package,
      title: "Empaque Premium",
      description: "Sellado al vacío para conservar frescura",
    },
    {
      icon: Truck,
      title: "Envío Gratis",
      description: "Tenermos envio gratis en Barranquilla, Pregunta la disponibilidad si eres de otra ciudad",
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description: "Satisfacción 100% asegurada",
    },
  ];

  const handleOrderProduct = (product) => {
    const message = `¡Hola! Me interesa comprar el producto: *${product.name}* por ${product.price}. ${product.description} ¿Podrían darme más información sobre disponibilidad y envío?`;
    const whatsappURL = `https://wa.me/573127622880?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="productos" className="py-20 bg-white">
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
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra selección de café premium y cacao de la más alta
            calidad, cultivados con amor en las montañas de Colombia.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
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

              <div className="p-6">
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

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">
                    {product.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleOrderProduct(product)}
                    disabled={product.id === 3 || product.id === 4}
                    className={`bg-amber-600 text-white px-4 py-2 rounded-lg transition duration-300 font-semibold
                    ${
                      product.id === 3 || product.id === 4
                        ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400"
                        : "hover:bg-amber-700"
                    }
                  `}
                  >
                    {product.id === 3 || product.id === 4 ? "Próximamente" : "Pedir"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
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
