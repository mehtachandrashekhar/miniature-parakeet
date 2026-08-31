"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Server, 
  Cloud, 
  BarChart3, 
  Settings2, 
  Code2, 
  ShieldCheck,
  Zap
} from "lucide-react";

const techStack = [
  {
    category: "DevOps & Platform Engineering",
    icon: <Settings2 className="w-6 h-6" />,
    skills: [
      "Jenkins (Pipeline as Code)",
      "GitLab CI / GitHub Actions",
      "Terraform (IaC)",
      "Docker & Containerization",
      "Kubernetes (EKS/Basics)"
    ]
  },
  {
    category: "Cloud & Linux Infrastructure",
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      "AWS (VPC, RDS, S3, EC2)",
      "Linux Systems (Ubuntu, CentOS)",
      "Nginx & Reverse Proxies",
      "SSH Hardening & Security"
    ]
  },
  {
    category: "Monitoring & Reliability",
    icon: <BarChart3 className="w-6 h-6" />,
    skills: [
      "Prometheus & Grafana",
      "Incident Response & RCA",
      "Node-Exporter / Alerting",
      "Systemd Service Management"
    ]
  },
  {
    category: "Systems Automation & Scripting",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      "Bash Scripting",
      "Python (Automation/FastAPI)",
      "Groovy (Jenkins Libraries)",
      "Automation APIs (ZeroSSL)"
    ]
  }
];

const TechStack = () => {
  return (
    <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto" id="tech-stack">
      <div className="text-center mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4 uppercase tracking-wider"
        >
          Technology Expertise
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-black dark:text-white"
        >
          My Tech <span className="text-blue-600 dark:text-blue-500">Stack</span>
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          A specialized toolkit focused on building resilient infrastructure and high-performance data systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {techStack.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="glass p-6 md:p-8 rounded-3xl border-gray-200 dark:border-gray-800/50 hover:border-blue-500/30 transition-all group"
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-2 md:p-3 bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">{group.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs md:text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Badges / Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-16">
        {[
          { label: "Automation First", icon: <Zap className="w-4 h-4" /> },
          { label: "Scalable Architecture", icon: <Server className="w-4 h-4" /> },
          { label: "Security Focused", icon: <ShieldCheck className="w-4 h-4" /> },
          { label: "Data Driven", icon: <BarChart3 className="w-4 h-4" /> }
        ].map((badge, i) => (
          <div key={i} className="flex items-center justify-center gap-2 py-3 glass rounded-xl text-gray-600 dark:text-gray-400 text-xs md:text-sm border-gray-200 dark:border-gray-800/30">
            <span className="text-blue-600 dark:text-blue-500">{badge.icon}</span>
            {badge.label}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
