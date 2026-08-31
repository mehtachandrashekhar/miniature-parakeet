"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ExternalLink, ShieldCheck, Zap, BarChart3, Globe } from "lucide-react";

const experiences = [
  {
    company: "Delphi Analytics",
    role: "DevOps Engineer",
    period: "Jul 2025 - Jul 2026",
    impact: "93% Faster deployment frequency via CI/CD automation",
    description: "Orchestrating platform reliability, security hardening, and high-availability infrastructure.",
    details: [
      "Architected Jenkins shared libraries reducing pipeline duplication by 40%.",
      "Automated infrastructure provisioning using Terraform for VPC, RDS, and EKS.",
      "Resolved mission-critical system latencies through deep-dive RCA and service optimization."
    ],
    tags: ["Platform Engineering", "IaC", "Reliability"]
  },
  {
    company: "Delphi Analytics",
    role: "Intern",
    period: "Jan 2025 - Jul 2025",
    impact: "100% Automated SSL lifecycle management",
    description: "Engineered high-signal automation microservices and security-first integrations.",
    details: [
      "Automated end-to-end SSL renewal reducing manual intervention by 90%.",
      "Unified enterprise identity through OAuth 2.0 and JWT-based security.",
      "Hardened Linux environments and SSH access protocols across production fleets."
    ],
    tags: ["Automation", "Security", "Identity"]
  }
];

const ExperienceGrid = () => {
  return (
    <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto" id="experience">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-blue-500 font-mono text-sm mb-2 uppercase tracking-widest"
          >
            01. Professional History
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-black dark:text-white"
          >
            Engineering <span className="text-gray-400 italic">Impact</span>
          </motion.h2>
        </div>
        <p className="text-gray-500 dark:text-gray-400 max-w-md text-sm md:text-base">
          A track record of transforming manual bottlenecks into high-performance, automated systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative glass p-6 md:p-8 rounded-3xl border-gray-200 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] md:text-xs font-mono text-blue-600 dark:text-blue-400 mb-2 block tracking-tighter uppercase">{exp.period}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium text-sm">
                    <Globe className="w-4 h-4" />
                    <a href="https://delphianalytics.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {exp.company}
                    </a>
                  </div>
                </div>
                <div className="p-2 md:p-3 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400">
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-[10px] md:text-sm font-bold mb-1 uppercase tracking-tight">
                  <Zap className="w-3 h-3 md:w-4 md:h-4" />
                  Key Impact
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-relaxed">{exp.impact}</p>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex gap-3 text-xs md:text-sm text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-gray-300 transition-colors">
                    <span className="text-blue-500 mt-1 flex-shrink-0">▹</span>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 bg-white/5 border border-gray-200 dark:border-white/10 rounded text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceGrid;
