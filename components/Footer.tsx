"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-blue-500/20 py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              CISCCOM
            </h3>
            <p className="text-gray-400">
              Conferencia de Ingeniería de Software y Ciencia de la Computación
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {["Inicio", "Acerca", "Ponentes", "Agenda", "Registro"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-cyan-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>cisccom@unam.edu.pe</li>
              <li>+51 123 456 789</li>
              <li>UNAM Moquegua</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-10 h-10 bg-blue-600/20 border border-cyan-300/40 rounded-full flex items-center justify-center text-cyan-300 hover:bg-blue-600/30 transition-colors"
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/20 pt-8 text-center text-gray-400">
          <p>© 2025 CISCOM — MERMITAS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
