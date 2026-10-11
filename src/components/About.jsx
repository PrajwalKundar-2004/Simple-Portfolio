import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-6 mb-16 md:mb-24"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">01.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">About Me</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent"></div>
        </motion.div>

        {/* Main Content Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="space-y-10"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-black/90 dark:text-white/90 leading-snug max-w-4xl">
            I am a passionate Full Stack Developer currently pursuing my <span className="text-accent font-medium">Master of Computer Applications (MCA)</span>.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base md:text-lg text-black/60 dark:text-white/60 font-light leading-relaxed">
            <p>
              I enjoy turning complex ideas into practical, scalable, and meaningful software. My journey in development is driven by curiosity, problem-solving, and a constant desire to understand how things work beneath the surface — from designing intuitive interfaces to building reliable backend systems and APIs.
            </p>
            <p>
              I specialize in building modern full-stack applications using React, Node.js, Next.js, Java, Spring Boot and MongoDB, with a strong foundation in Data Structures and Algorithms. Beyond traditional web development, I am exploring AI/ML and intelligent systems to solve real-world problems.
            </p>
          </div>

          {/* Engineering Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
            <div className="p-6 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 backdrop-blur-sm">
              <span className="text-accent font-mono text-xs uppercase tracking-wider block mb-2">01 / Architecture</span>
              <h4 className="font-semibold text-black dark:text-white text-base mb-1">Clean & Scalable</h4>
              <p className="text-black/60 dark:text-white/60 text-xs sm:text-sm font-light leading-relaxed">Thoughtful design patterns, modular structure, and high maintainability.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 backdrop-blur-sm">
              <span className="text-accent font-mono text-xs uppercase tracking-wider block mb-2">02 / Full-Stack</span>
              <h4 className="font-semibold text-black dark:text-white text-base mb-1">End-to-End Systems</h4>
              <p className="text-black/60 dark:text-white/60 text-xs sm:text-sm font-light leading-relaxed">From fluid, responsive user interfaces to robust backend microservices.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 backdrop-blur-sm">
              <span className="text-accent font-mono text-xs uppercase tracking-wider block mb-2">03 / Innovation</span>
              <h4 className="font-semibold text-black dark:text-white text-base mb-1">AI & Problem Solving</h4>
              <p className="text-black/60 dark:text-white/60 text-xs sm:text-sm font-light leading-relaxed">Strong DSA foundation combined with practical machine learning engineering.</p>
            </div>
          </div>

          {/* Core Focus Pills */}
          <div className="pt-6 border-t border-black/10 dark:border-white/10">
            <h4 className="text-xs uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-5 font-semibold">Core Focus</h4>
            <div className="flex flex-wrap gap-3">
              {['Full Stack Development', 'Backend Engineering', 'React & Node.js', 'Next.js', 'Java & Spring Boot', 'REST APIs', 'AI/ML', 'System Design'].map((item) => (
                <span 
                  key={item} 
                  className="px-5 py-2.5 bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-full text-xs sm:text-sm font-medium hover:border-accent dark:hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
    </section>
  );
};

export default About;
