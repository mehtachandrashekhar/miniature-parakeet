"use client";

import AboutMe from "@/components/AboutMe";
import ExperienceGrid from "@/components/ExperienceGrid";
import ProjectsGallery from "@/components/ProjectsGallery";
import TechStack from "@/components/TechStack";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { ChevronDown, Download, Linkedin, Github, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-blue-500/30 transition-colors duration-300">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-white/10 dark:bg-black/10 border-b border-gray-200 dark:border-white/5">
        <div className="text-xl font-bold tracking-tighter">CM.</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Impact</a>
          <a href="#tech-stack" className="hover:text-black dark:hover:text-white transition-colors">Stack</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Work</a>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-4">
          <div className="md:hidden"><ThemeToggle /></div>
          <button className="px-4 py-2 glass rounded-lg text-sm font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-all border border-gray-200 dark:border-white/10">
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 dark:bg-emerald-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 glass rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wide uppercase"
          >
            Senior DevOps & Automation Architect
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none text-black dark:text-white"
          >
            Chandrashekhar <span className="text-blue-600 dark:text-blue-500 text-glow">Mehta</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Engineering <span className="text-black dark:text-white font-medium">resilient infrastructure</span> and intelligent 
            <span className="text-black dark:text-white font-medium"> automation ecosystems</span> for the data-driven enterprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
              Explore Projects
            </button>
            <button className="px-8 py-4 glass hover:bg-white/10 text-white rounded-xl font-bold transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex justify-center gap-8 text-gray-500"
          >
            <a href="https://linkedin.com/in/chandrashekhar-mehta-303a91230/" target="_blank" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
            <a href="https://github.com/mehtachandrashekhar" target="_blank" className="hover:text-white transition-colors"><Github size={20} /></a>
            <a href="mailto:mehtachandrashekhar84@gmail.com" className="hover:text-emerald-400 transition-colors"><Mail size={20} /></a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600"
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
          <div className="flex gap-12 text-sm text-gray-400 font-medium">
            <div className="space-y-4">
              <h4 className="text-white text-xs uppercase tracking-widest font-bold">Social</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">GitHub</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-xs uppercase tracking-widest font-bold">Inquiry</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Resume</a></li>
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
