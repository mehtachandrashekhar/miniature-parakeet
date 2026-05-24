"use client";

import AboutMe from "@/components/AboutMe";
import ExperienceGrid from "@/components/ExperienceGrid";
import ProjectsGallery from "@/components/ProjectsGallery";
import TechStack from "@/components/TechStack";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download, Linkedin, Github, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Impact", href: "#experience" },
    { name: "Stack", href: "#tech-stack" },
    { name: "Work", href: "#projects" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-blue-500/30 transition-colors duration-300">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6 flex justify-between items-center backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-white/5">
        <div className="text-xl font-bold tracking-tighter">CM.</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-black dark:hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:block">
            <a 
              href="mailto:mehtachandrashekhar84@gmail.com"
              className="px-4 py-2 glass rounded-lg text-sm font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-all border border-gray-200 dark:border-white/10"
            >
              Contact
            </a>
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 glass rounded-lg text-gray-600 dark:text-gray-400"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-xl"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="mailto:mehtachandrashekhar84@gmail.com"
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg text-center"
              >
                Contact Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-emerald-600/10 dark:bg-emerald-600/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 glass rounded-full text-blue-600 dark:text-blue-400 text-xs md:text-sm font-medium tracking-wide uppercase"
          >
            Senior DevOps & Automation Architect
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight md:leading-none text-black dark:text-white"
          >
            Chandrashekhar <span className="text-blue-600 dark:text-blue-500 text-glow">Mehta</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Engineering <span className="text-black dark:text-white font-medium">resilient infrastructure</span> and intelligent 
            <span className="text-black dark:text-white font-medium"> automation ecosystems</span> for the data-driven enterprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)] inline-block"
            >
              Explore Projects
            </a>
            <button className="w-full sm:w-auto px-8 py-4 glass hover:bg-gray-100 dark:hover:bg-white/10 text-black dark:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 md:mt-16 flex justify-center gap-8 text-gray-500"
          >
            <a href="https://linkedin.com/in/chandrashekhar-mehta-303a91230/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
            <a href="https://github.com/mehtachandrashekhar" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors"><Github size={20} /></a>
            <a href="mailto:mehtachandrashekhar84@gmail.com" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"><Mail size={20} /></a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 hidden md:block"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* About Me */}
      <AboutMe />

      {/* Impact / Experience Grid */}
      <ExperienceGrid />

      {/* Tech Stack */}
      <TechStack />

      {/* Projects Gallery */}
      <ProjectsGallery />

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-2">CM.</h3>
            <p className="text-gray-500 text-sm">Building the future of automation.</p>
          </div>
          <div className="flex gap-12 text-sm text-gray-500 dark:text-gray-400 font-medium text-center md:text-left">
            <div className="space-y-4">
              <h4 className="text-black dark:text-white text-xs uppercase tracking-widest font-bold">Social</h4>
              <ul className="space-y-2">
                <li><a href="https://linkedin.com/in/chandrashekhar-mehta-303a91230/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/mehtachandrashekhar" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://www.hackerrank.com/profile/mehtachandrashe1" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">HackerRank</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-black dark:text-white text-xs uppercase tracking-widest font-bold">Inquiry</h4>
              <ul className="space-y-2">
                <li><a href="mailto:mehtachandrashekhar84@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Email</a></li>
                <li><a href="https://wa.me/919023379211" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          © 2024 Chandrashekhar Mehta. All rights reserved. Designed for excellence.
        </div>
      </footer>
    </main>
  );
}
