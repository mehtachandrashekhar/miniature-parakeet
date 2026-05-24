"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, Cloud, Code, GraduationCap, Star } from "lucide-react";

const certifications = [
  {
    title: "DevOps Foundation",
    issuer: "iNeuron.ai",
    date: "2024",
    link: "https://learn.ineuron.ai/certificate/e7036e70-ed6a-4848-bbfb-d16da1c444bd",
    icon: <Award className="w-5 h-5 text-blue-500" />,
    category: "DevOps"
  },
  {
    title: "Google IT Support Professional",
    issuer: "Google / Coursera",
    date: "2023",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/PT552P74GJRF",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    category: "IT Support"
  },
  {
    title: "Aspire Leaders Program (ALP)",
    issuer: "Aspire Institute",
    date: "2024",
    link: "https://drive.google.com/file/d/1dNEuJjrnRlw8o2ONaBlZ_r9e37a2Un7j/view?usp=sharing",
    icon: <Star className="w-5 h-5 text-orange-500" />,
    category: "Leadership"
  },
  {
    title: "Azure VM & Web Server Deployment",
    issuer: "Microsoft / Coursera",
    date: "2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/8EZYAJCN4LEL",
    icon: <Cloud className="w-5 h-5 text-sky-500" />,
    category: "Cloud"
  },
  {
    title: "IT Security: Defense against Dark Arts",
    issuer: "Google / Coursera",
    date: "2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/Q26ZM5JK2CM8",
    icon: <ShieldCheck className="w-5 h-5 text-red-500" />,
    category: "Security"
  },
  {
    title: "System Administration & IT Services",
    issuer: "Google / Coursera",
    date: "2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/NNPVG237PRVJ",
    icon: <GraduationCap className="w-5 h-5 text-purple-500" />,
    category: "Infrastructure"
  },
  {
    title: "Modern JavaScript (ES6+)",
    issuer: "Coursera",
    date: "2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/CGJUDTW7G6PT",
    icon: <Code className="w-5 h-5 text-yellow-500" />,
    category: "Development"
  },
  {
    title: "Azure DevOps Boards",
    issuer: "Microsoft / Coursera",
    date: "2024",
    link: "https://coursera.org/share/67863c11b1516039334467fa8d6a1608",
    icon: <Cloud className="w-5 h-5 text-blue-600" />,
    category: "DevOps"
  }
];

const Certifications = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="certifications">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4 uppercase tracking-wider"
        >
          Validation & Growth
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white"
        >
          Professional <span className="text-blue-600 dark:text-blue-500">Certifications</span>
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Continuous learning and verified expertise in DevOps, Cloud Infrastructure, and Information Security.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group block relative"
          >
            <div className="h-full glass p-6 rounded-2xl border-gray-200 dark:border-gray-800/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-gray-50 dark:bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-black dark:text-white leading-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{cert.issuer}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 bg-gray-100 dark:bg-white/5 rounded text-gray-400">
                  {cert.category}
                </span>
                <span className="text-[10px] text-gray-400">{cert.date}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Graduation Info */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-12 p-6 glass rounded-3xl border-gray-200 dark:border-gray-800/50 flex flex-col md:flex-row items-center gap-6"
      >
        <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-600">
          <GraduationCap className="w-8 h-8" />
        </div>
        <div className="flex-grow text-center md:text-left">
          <h4 className="text-xl font-bold text-black dark:text-white">Bachelor of Engineering in Computer Engineering</h4>
          <p className="text-gray-500 dark:text-gray-400">S.P.B. Patel Engineering College • 2021 — 2025</p>
        </div>
        <div className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold text-sm">
          Completed
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
