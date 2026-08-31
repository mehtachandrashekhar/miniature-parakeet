"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Shield, Cpu, Activity } from "lucide-react";

const projects = [
  {
    title: "SSL Certificate Renewal Automation",
    problem: "Manual renewal process causing periodic downtime and high operational overhead.",
    solution: "End-to-end automated system using ZeroSSL API and Certbot with Nginx integration.",
    impact: "100% Automated renewal. 90% manual effort reduction. Zero downtime.",
    tech: ["Python", "Bash", "Jenkins", "Nginx", "ZeroSSL API"],
    icon: <Shield className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Enterprise CI/CD & IaC Platform",
    problem: "Inconsistent environments and slow manual deployments causing production friction.",
    solution: "Designed end-to-end CI/CD with Jenkins & Kubernetes, using Terraform for IaC provisioning.",
    impact: "93% Faster deployments. 0 downtime releases. Increased frequency from weekly to 5+/day.",
    tech: ["Jenkins", "Terraform", "Kubernetes", "Docker", "AWS"],
    icon: <Layers className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "E-Com Monitoring Ecosystem",
    problem: "Lack of visibility into real-time performance leading to slow incident response.",
    solution: "Enterprise monitoring suite using Grafana and Node-Exporter for real-time tracking.",
    impact: "40% Reduction in resolution time. 99.9% tracking accuracy.",
    tech: ["Grafana", "Prometheus", "Node-Exporter", "Linux"],
    icon: <Activity className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "DelphiCloud OAuth 2.0 Integration",
    problem: "Fragmented authentication across multiple internal platforms.",
    solution: "Unified Google OAuth 2.0 integration with SSO for 7+ production platforms.",
    impact: "70% Reduction in login time. Unified security posture across services.",
    tech: ["FastAPI", "ClickHouse", "OAuth 2.0", "JWT"],
    icon: <Cpu className="w-6 h-6" />,
    color: "from-orange-500 to-red-500"
  }
];

const ProjectsGallery = () => {
  return (
    <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto" id="projects">
      <div className="text-center mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4 uppercase tracking-wider"
        >
          Selected Works
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black dark:text-white">
          Solutions That <span className="text-blue-600 dark:text-blue-500">Scale</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Deep dives into architectural thinking and the tangible business impact of automated engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-3xl blur opacity-0 group-hover:opacity-10 transition duration-500`} />
            
            <div className="relative h-full glass p-6 md:p-8 rounded-3xl border-gray-200 dark:border-gray-800/50 flex flex-col">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className={`p-3 md:p-4 bg-gradient-to-br ${project.color} bg-opacity-10 rounded-2xl text-white shadow-lg`}>
                  {React.cloneElement(project.icon as React.ReactElement, { className: "w-5 h-5 md:w-6 md:h-6" })}
                </div>
                <div className="flex gap-3 md:gap-4 text-gray-400 dark:text-gray-500">
                  <button className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Github className="w-4 h-4 md:w-5 md:h-5" /></button>
                  <button className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><ExternalLink className="w-4 h-4 md:w-5 md:h-5" /></button>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
              
              <div className="space-y-4 flex-grow mb-6 md:mb-8">
                <div>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500 block mb-1">The Problem</span>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500 block mb-1">Impact</span>
                  <p className="text-xs md:text-sm text-gray-800 dark:text-gray-300 font-medium leading-relaxed">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 md:pt-6 border-t border-gray-100 dark:border-white/5">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[9px] md:text-[10px] font-mono px-2 py-1 bg-gray-50 dark:bg-white/5 rounded text-gray-500 border border-gray-200 dark:border-white/5">
                    {t}
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

export default ProjectsGallery;
