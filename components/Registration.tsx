"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Registration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="registro"
      ref={ref}
      className="section bg-gradient-to-b from-blue-950/20 to-black"
    >
      <div className="section__inner">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 w-full"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              ¡Regístrate Ahora!
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ textAlign: 'center' }}>
            No te pierdas esta oportunidad única de ser parte del evento
            tecnológico del año
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                name: "Entrada General",
                price: "$499",
                features: [
                  "Acceso a todas las charlas",
                  "Material del evento",
                  "Coffee breaks",
                  "Certificado digital",
                ],
              },
              {
                name: "VIP",
                price: "$999",
                features: [
                  "Todo lo de Entrada General",
                  "Meet & Greet con ponentes",
                  "Cena de networking",
                  "Swag exclusivo",
                ],
                featured: true,
              },
            ].map((ticket) => (
              <motion.div
                key={ticket.name}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`p-8 rounded-2xl backdrop-blur-sm border transition-all ${
                  ticket.featured
                    ? "bg-gradient-to-br from-blue-600/40 to-cyan-600/40 border-cyan-300/60 shadow-xl shadow-cyan-500/25"
                    : "bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border-cyan-400/20"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {ticket.name}
                </h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-6">
                  {ticket.price} MXN
                </div>
                <ul className="space-y-3 mb-6">
                  {ticket.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-300"
                    >
                      <span className="text-cyan-300 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    ticket.featured
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Comprar Ahora
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Registro Rápido
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Empresa</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Tu empresa"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">
                  Tipo de Entrada
                </label>
                <select className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors">
                  <option>Entrada General - $499 MXN</option>
                  <option>VIP - $999 MXN</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-bold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow"
              >
                Completar Registro
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
