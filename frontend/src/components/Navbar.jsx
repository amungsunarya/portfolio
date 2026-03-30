import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Monitoring', href: '#monitoring' },
    { name: 'Network', href: '#network' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          AS
        </motion.a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-2 lg:space-x-6">
{navLinks.map((link, i) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="list-none"
            >
              <a 
                href={link.href} 
                className="relative group px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-medium text-gray-300 hover:text-white transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>{link.name}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl scale-0 group-hover:scale-100 origin-center transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden relative p-2 rounded-xl bg-slate-800/50 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-900/70 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gradient-to-b from-slate-900/95 to-slate-800/90 backdrop-blur-2xl border-t border-slate-700/50"
        >
          <ul className="px-8 py-8 space-y-6">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="list-none"
              >
              <a 
                href={link.href} 
                className="block text-xl font-semibold text-gray-200 hover:text-cyan-400 py-3 relative group transition-all duration-300"
                onClick={() => {
                  setIsOpen(false);
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                  <span>{link.name}</span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
