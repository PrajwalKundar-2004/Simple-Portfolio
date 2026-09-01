import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const projects = [
  {
    title: 'Speech-to-Text AI Assistant',
    description: 'Built a speech recognition application using React, Node.js, Express, Python, and OpenAI Whisper capable of converting audio into text with multilingual support. Includes recording, audio upload, translation, and transcription history.',
    tech: ['React', 'Node.js', 'Express', 'Python', 'Whisper'],
    github: 'https://github.com/Shreyas142004/Speech-to-Text.git',
    live: 'https://speech-to-text-eight-mu.vercel.app/',
    image: '/Speech-to-Text AI Assistant.png',
  },
  {
    title: 'Parking Booking System',
    description: 'MERN application allowing users to register, log in, reserve parking slots, and manage bookings using JWT authentication and MongoDB.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Shreyas142004/Smart-Parking-Portal.git',
    live: 'https://smart-parking-portal.vercel.app/',
    image: '/Parking Booking System.png',
  },
  {
    title: 'Smart CRM System',
    description: 'Role-based CRM platform with Admin, Sales, and Technical dashboards. Features lead management, task assignment, email notifications, authentication, analytics, and workflow tracking.',
    tech: ['React', 'Node', 'MongoDB', 'Express', 'JWT'],
    github: 'https://github.com/Shreyas142004/Smart-CRM.git',
    live: '#',
    image: '/Smart CRM.png',
  },
  {
    title: 'Smart College Utility Portal',
    description: 'A dedicated college portal where lecturers can upload student details including attendance, results, assignments, and notices, while students can securely log in to view their respective academic records.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Shreyas142004/Smart-Utility-Portal.git',
    live: '#',
    image: '/Smart College Utility Portal.png',
  },
  {
    title: 'ATM Simulation System',
    description: 'A desktop ATM simulation application built in C programming using structs for state management. Features a graphical user interface (GUI) for banking operations like withdrawals, deposits, and balance checks.',
    tech: ['C Programming', 'Structs', 'GUI'],
    github: 'https://github.com/Shreyas142004/ATM-simulation-C.git',
    live: '#',
    image: '/ATM Simulation System.png',
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="z-10 relative mx-auto px-6 container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-6 mb-16 md:mb-24"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">03.</span>
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight">Featured Projects</h2>
          <div className="flex-1 bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent mt-2 h-[1px]"></div>
        </motion.div>

        <div className="gap-8 lg:gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -12 }}
              className="group flex flex-col bg-white/5 dark:bg-white/5 backdrop-blur-xl hover:shadow-[0_30px_60px_-15px_rgba(var(--accent),0.3)] border border-black/10 dark:border-white/10 hover:border-accent/50 rounded-[2rem] overflow-hidden transition-all duration-500 relative"
            >
              {/* Internal Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-0"></div>

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden z-10">
                <div className="z-10 absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out transform"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-1 p-8 z-10 relative">
                <h3 className="mb-4 font-bold group-hover:text-accent text-2xl transition-colors text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="flex-1 mb-8 text-black/60 dark:text-white/60 text-sm font-light leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="bg-black/5 dark:bg-white/5 backdrop-blur-md px-4 py-1.5 border border-black/10 dark:border-white/10 rounded-full font-medium text-black/70 dark:text-white/70 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links - Slide up on hover */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-black/10 dark:border-white/10 border-t overflow-hidden">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium hover:text-accent text-sm transition-all duration-300 transform group-hover:translate-y-0 opacity-80 group-hover:opacity-100"
                  >
                    <FiGithub size={18} />
                    Code
                  </a>
                  {project.live !== '#' && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (project.title === 'Speech-to-Text AI Assistant') {
                          e.preventDefault();
                          setSelectedProject(project);
                        }
                      }}
                      className="flex items-center gap-2 ml-auto font-medium hover:text-accent text-sm transition-all duration-300 transform group-hover:translate-y-0 opacity-80 group-hover:opacity-100 cursor-pointer"
                    >
                      <FiExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none translate-x-1/2"></div>

      {/* Interactive Mobile Demo Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            ></div>

            {/* Modal Wrapper for aligning phone and bottom button */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[375px] h-full max-h-[900px] gap-6">
              
              {/* Close Button (Top Right relative to wrapper) */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-2 -right-2 md:-right-16 md:top-8 bg-black/50 hover:bg-black/80 backdrop-blur-xl p-3 rounded-full text-white transition-all border border-white/20 hover:border-accent hover:text-accent shadow-[0_0_20px_rgba(0,0,0,0.5)] flex justify-center items-center group z-50"
                title="Close"
              >
                <FiX size={20} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Realistic Mobile Frame */}
              <motion.div
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative w-full aspect-[9/19.5] max-h-[75vh] bg-black rounded-[3rem] shadow-2xl p-2 sm:p-3 ring-2 ring-white/10 flex-shrink-0"
              >
                {/* Hardware Buttons - Hidden on small screens to prevent overflow/weirdness */}
                <div className="hidden sm:block absolute top-[120px] -left-1 w-1 h-8 bg-black rounded-l-md shadow-[inset_1px_0_1px_rgba(255,255,255,0.2)]"></div>
                <div className="hidden sm:block absolute top-[180px] -left-1 w-1 h-14 bg-black rounded-l-md shadow-[inset_1px_0_1px_rgba(255,255,255,0.2)]"></div>
                <div className="hidden sm:block absolute top-[250px] -left-1 w-1 h-14 bg-black rounded-l-md shadow-[inset_1px_0_1px_rgba(255,255,255,0.2)]"></div>
                <div className="hidden sm:block absolute top-[200px] -right-1 w-1 h-20 bg-black rounded-r-md shadow-[inset_-1px_0_1px_rgba(255,255,255,0.2)]"></div>

                {/* Dynamic Island */}
                <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-[90px] sm:w-[120px] h-[25px] sm:h-[30px] bg-black rounded-full z-20 flex justify-end items-center px-2 sm:px-3 gap-2 shadow-[inset_0_0_2px_rgba(255,255,255,0.1)] pointer-events-none ring-1 ring-white/5">
                   {/* Camera Lens */}
                   <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#0a0a2a] relative overflow-hidden ring-1 ring-white/10">
                      <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400/50 rounded-full blur-[0.5px]"></div>
                   </div>
                </div>

                {/* Screen Area */}
                <div 
                  className="w-full h-full bg-white dark:bg-[#050505] overflow-hidden rounded-[2.2rem] relative z-0"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  <iframe 
                    src={selectedProject.live}
                    className="w-full h-full border-0 block"
                    style={{ minHeight: '100%', minWidth: '100%' }}
                    title={selectedProject.title}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    allow="camera; display-capture; clipboard-read; clipboard-write; autoplay"
                    scrolling="yes"
                  ></iframe>
                </div>
              </motion.div>

              {/* Smaller Action Button below the phone */}
              <motion.a 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.2 }}
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent/90 hover:bg-accent backdrop-blur-md px-5 py-2.5 rounded-full text-white transition-all border border-white/10 shadow-[0_10px_20px_rgba(var(--accent),0.3)] flex justify-center items-center gap-2 group font-medium text-sm w-max shrink-0 hover:-translate-y-1"
              >
                Open Fullscreen
                <FiExternalLink size={16} className="group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
