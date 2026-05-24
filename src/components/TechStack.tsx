"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Server, 
  Database, 
  Terminal, 
  Cloud, 
  BarChart3, 
  Settings2, 
  Code2, 
  ShieldCheck,
  Zap
} from "lucide-react";

const techStack = [
  {
    category: "DevOps & CI/CD",
    icon: <Settings2 className="w-6 h-6" />,
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "GitLab CI", level: 85 },
      { name: "Docker", level: 85 },
      { name: "Groovy", level: 80 },
      { name: "Nginx", level: 85 }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: "AWS (EC2, S3, RDS)", level: 80 },
      { name: "GCP", level: 75 },
      { name: "CloudStack", level: 70 },
      { name: "Linux Administration", level: 90 }
    ]
  },
  {
    category: "Data Engineering & BI",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "Apache Airflow", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "ClickHouse", level: 75 },
      { name: "Grafana / Superset", level: 85 },
      { name: "Redash", level: 80 }
    ]
  },
  {
    category: "Programming & Automation",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "Python", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Bash Scripting", level: 90 },
      { name: "Selenium", level: 80 }
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

            <div className="space-y-4 md:space-y-6">
              {group.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-[10px] md:text-xs text-blue-600 dark:text-blue-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + (skillIndex * 0.1) }}
                      className="h-full bg-gradient-to-r from-blue-700 to-blue-500 rounded-full"
                    />
                  </div>
                </div>
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
