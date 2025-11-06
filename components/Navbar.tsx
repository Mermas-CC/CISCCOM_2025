"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#081a30]/60 border-b border-white/10 h-[var(--nav-height)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-lg md:text-xl font-bold tracking-wide text-cyan-300 hover:text-white transition-colors"
        >
          CISCOM <span className="text-white/70 hidden sm:inline">—</span> <span className="text-white">UNAM</span>
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-300 font-medium">
          {["Inicio", "Acerca", "Ponentes", "Agenda", "Registro"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative px-1 py-1 hover:text-white transition-colors duration-200"
              >
                <span>{item}</span>
                <span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </div>
        {/* CTA
        <motion.a
          href="#registro"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold px-4 py-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all"
        >
          Registrarse
        </motion.a> */}
      </div>
    </nav>
  );
}
