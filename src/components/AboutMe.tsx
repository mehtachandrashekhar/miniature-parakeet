"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Target, Lightbulb, Rocket } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 uppercase tracking-wider">
            Our Story
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-black dark:text-white leading-tight">
            Architecting the future of <span className="text-blue-600 dark:text-blue-500 text-glow">Data & Automation</span>.
          </h2>
          <div className="space-y-4 md:space-y-6 text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              I am a <span className="text-black dark:text-white font-medium">DevOps Engineer & Automation Architect</span> with a passion for transforming complex, manual workflows into streamlined, high-performance digital ecosystems.
            </p>
            <p>
              At <span className="text-blue-600 dark:text-blue-400 font-medium">Delphi Analytics</span>, I've spent the last year engineering resilient infrastructure and intelligent automation platforms. My approach combines deep technical expertise with a sharp focus on business outcomes—ensuring every system I build is not just fast, but scalable and secure.
            </p>
            <p>
              Whether it's optimizing CI/CD pipelines to reduce deployment times by 90% or architecting complex data environments from the ground up, I thrive at the intersection of <span className="text-black dark:text-white font-medium">engineering excellence and strategic impact</span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/10 to-emerald-600/10 rounded-[2rem] blur-2xl opacity-50 md:opacity-100" />
          <div className="relative glass p-6 md:p-8 rounded-[2rem] border-gray-200 dark:border-gray-800/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  label: "The Mission",
                  text: "Building systems that empower businesses to scale without friction.",
                  icon: <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
                },
                {
                  label: "The Mindset",
                  text: "Automation-first engineering. If it's repetitive, it should be code.",
                  icon: <Lightbulb className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
                },
                {
                  label: "The Expertise",
                  text: "Bridging the gap between raw data and actionable intelligence.",
                  icon: <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
                },
                {
                  label: "The Future",
                  text: "Pioneering AI-driven analytics and self-healing infrastructure.",
                  icon: <Rocket className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
                },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl w-fit">{item.icon}</div>
                  <h4 className="text-black dark:text-white font-bold">{item.label}</h4>
                  <p className="text-sm text-gray-500 leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
