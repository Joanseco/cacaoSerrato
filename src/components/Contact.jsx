import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    const whatsappMessage = `Hola! Soy ${formData.name}. ${
      formData.message
    }. Mi email es: ${formData.email}${
      formData.phone ? ` y mi teléfono: ${formData.phone}` : ""
    }`;
    const whatsappURL = `https://wa.me/573127622880?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+57 312 762 2880",
      action: "tel:+573127622880",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+57 312 762 2880",
      action: "https://wa.me/573127622880",
    },
    {
      icon: Mail,
      title: "Email",
      info: "jorgeserrato1963@gmail.com",
      action: "mailto:jorgeserrato1963@gmail.com",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Barranquilla, Colombia",
      action: "#",
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
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
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta sobre nuestros productos? ¡Estamos aquí para
            ayudarte! Contáctanos y descubre el mundo del café premium.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-amber-900 mb-6">
              Envíanos un Mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-amber-800 mb-2"
                >
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-amber-800 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-amber-800 mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300"
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-amber-800 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-amber-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-amber-700 transition duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="h-5 w-5" />
                <span>Enviar por WhatsApp</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-amber-900 mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.action}
                  target={item.action.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    item.action.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
                >
                  <div className="bg-amber-100 p-3 rounded-full">
                    <item.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-amber-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Hours */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-amber-600" />
                <h4 className="text-lg font-semibold text-amber-900">
                  Horarios de Atención
                </h4>
              </div>
              <div className="text-gray-700">
                <p>Servicio continuo, 24 horas y 365 días del año.</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">
                ¿Necesitas Atención Inmediata?
              </h4>
              <p className="mb-4 opacity-90">
                Llámanos directamente y te atenderemos de inmediato
              </p>
              <motion.a
                href="tel:+573127622880"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>Llamar Ahora</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
