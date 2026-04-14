import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Portfolio Coming Soon
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          I'm currently building my personal portfolio to showcase my work,
          skills, and projects. Stay tuned for something exciting coming soon!
        </p>

        <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md rounded-2xl p-2 shadow-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent outline-none px-4 py-2 w-64 text-sm placeholder-gray-400"
          />
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition">
            <Mail size={16} /> Notify Me
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Launching soon — stay connected!
        </p>
      </motion.div>
    </div>
  );
}
