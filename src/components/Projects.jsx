import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiGithub, 
  FiExternalLink, 
  FiCheckCircle, 
  FiClock, 
  FiArrowUpRight, 
  FiActivity,
  FiCode,
  FiLayers,
  FiTerminal,
  FiCompass
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiNodedotjs, 
  SiExpress, 
  SiSpringboot, 
  SiFastapi, 
  SiPostgresql, 
  SiDocker, 
  SiPython, 
  SiThreedotjs, 
  SiSocketdotio, 
  SiRedis,
  SiC,
  SiPytorch
} from 'react-icons/si';

const completedProjects = [
  {
    id: 'smart-utility',
    number: '01',
    title: 'Smart Utility Portal',
    tagline: 'Simplifying Academics with Smart Tech',
    category: 'Full-Stack MERN Platform',
    accentColor: '#06B6D4',
    description:
      'Full-stack MERN academic platform with Role-Based Access Control (RBAC), real-time Socket.IO chat, and centralized dashboards for assignments, attendance, results, and notices.',
    tech: [
      { name: 'React 19', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
      { name: 'Express.js', icon: SiExpress, color: '#9CA3AF' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Socket.IO', icon: SiSocketdotio, color: '#010101' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ],
    github: 'https://github.com/PrajwalKundar-2004/Smart-Utility-Portal',
    live: 'https://smart-utility-portal-tyub.onrender.com/',
    image: '/projects/smart-utility.jpg',
  },
  {
    id: 'agrivault',
    number: '02',
    title: 'AgriVault',
    tagline: 'Centralized Inventory & Secure Asset Management',
    category: 'B2B Wholesale Platform',
    accentColor: '#10B981',
    description:
      'B2B wholesale agricultural platform digitizing bulk supply chains with three role-gated portals (Customer, Staff, Admin) protected by Next.js Edge middleware, real-time inventory tracking, and JWT security.',
    tech: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
    github: 'https://github.com/PrajwalKundar-2004/AgriVault',
    live: 'https://agri-vault-pi.vercel.app/',
    image: '/projects/agrivault.jpg',
  },
  {
    id: 'speech-to-text',
    number: '03',
    title: 'Speech-To-Text Converter',
    tagline: 'Multilingual Voice, File & YouTube Audio Transcription',
    category: 'AI & Speech Processing',
    accentColor: '#8B5CF6',
    description:
      'Full-stack AI transcription platform converting live microphone input, audio/video files, and YouTube URLs into text. Features Groq Whisper Large V3, AssemblyAI speaker diarization, and multi-language translation via Llama 3.',
    tech: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
      { name: 'Groq Whisper', icon: FiActivity, color: '#F55036' },
    ],
    github: 'https://github.com/PrajwalKundar-2004/Speech-To-Text-Converter',
    live: 'https://speech-to-text-eight-mu.vercel.app/',
    image: '/projects/speech-to-text.jpg',
  },
  {
    id: 'day-finder',
    number: '04',
    title: 'Day Finder',
    tagline: 'Sleek Dark-Themed Win32 GUI Application in C',
    category: 'Systems & Win32 GUI',
    accentColor: '#38BDF8',
    description:
      'Lightweight desktop application built in pure C using the native Win32 API. Accurately determines the day of the week for any Gregorian calendar date using Zeller’s congruence algorithm with custom dark-themed UI rendering.',
    tech: [
      { name: 'C Language', icon: SiC, color: '#A8B9CC' },
      { name: 'Win32 API', icon: FiTerminal, color: '#0078D7' },
      { name: 'Algorithms', icon: FiCode, color: '#38BDF8' },
    ],
    github: 'https://github.com/PrajwalKundar-2004/Day-finder',
    live: null,
    image: '/projects/day-finder.jpg',
  },
];

const ongoingProjects = [
  {
    id: 'pastry-house',
    number: '01',
    title: 'Pastry House',
    tagline: 'Modern Artisanal Bakery & Digital Storefront (Client Project)',
    category: 'Client Freelance Project',
    accentColor: '#F59E0B',
    progress: 85,
    statusText: '85% Built • In Active Development',
    image: '/projects/pastry-house.jpg',
    description:
      'Full-stack digital storefront built for a client using Next.js App Router, Tailwind CSS, Framer Motion, and MongoDB. Features dynamic pastry catalogs, franchise applications, store locator, and responsive animated UI.',
    tech: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
    ],
    github: 'https://github.com/PrajwalKundar-2004/Pastry-House',
    live: 'https://pastry-house.vercel.app/',
  },
  {
    id: 'sunrise-arts',
    number: '02',
    title: 'Sunrise Art & Decor',
    tagline: 'Luxury Art Gallery & Bespoke Artisan Craftsmanship (Client Project)',
    category: 'Client Freelance Project',
    accentColor: '#EA580C',
    progress: 45,
    statusText: '45% Built • In Active Development',
    image: '/projects/sunrise-arts.jpg',
    description:
      'Full-stack luxury digital gallery and bespoke decor showcase developed for a client. Built with Next.js, Tailwind CSS, and GSAP, featuring custom glassmorphism, fluid floating animations, and interactive product catalogs.',
    tech: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'GSAP', icon: FiActivity, color: '#88CE02' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    ],
    github: 'https://github.com/PrajwalKundar-2004/sunrise-arts-decors',
    live: 'https://sunrise-arts-decors.vercel.app/',
  },
  {
    id: 'car-pooling',
    number: '03',
    title: 'RideSync: Smart Carpooling',
    tagline: 'Next-Gen Peer-to-Peer Carpooling & Ride Sharing Platform',
    category: 'Full-Stack MERN Platform',
    accentColor: '#10B981',
    progress: 60,
    statusText: '60% Built • In Active Development',
    image: '/projects/car-pooling.jpg',
    description:
      'Full-stack MERN carpooling platform connecting verified drivers with passengers traveling in the same direction. Features role-based passenger/driver/admin dashboards, ride search, seat reservation, and secure JWT authentication.',
    tech: [
      { name: 'React 19', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
    github: 'https://github.com/PrajwalKundar-2004/Car-Pooling',
    live: null,
  },
  {
    id: 'traffic-signal',
    number: '04',
    title: 'AI Traffic Signal Optimizer',
    tagline: 'Computer Vision Traffic Density Engine & Emergency Preemption (College Project)',
    category: 'Computer Vision & AI (College Project)',
    accentColor: '#06B6D4',
    progress: 76,
    statusText: '76% Built • In Active Development',
    image: '/projects/traffic-signal.jpg',
    description:
      'Computer-vision-driven traffic management system built with FastAPI, YOLOv8/PyTorch, and React 19. Features live CCTV density calculation, adaptive green phase allocation, starvation prevention, and collision-free emergency vehicle preemption.',
    tech: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'React 19', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    github: 'https://github.com/PrajwalKundar-2004/Traffic-Signal-Optimizer',
    live: null,
  },
];

// Interactive Spotlight Card Component
const ProjectCard = ({ project, isEven, isOngoing = false }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.75 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: 'opacity' }}
      className="group relative rounded-2xl p-5 sm:p-7 overflow-hidden transform-gpu bg-white/80 dark:bg-[#0c0e17]/90 border border-black/10 dark:border-white/10 hover:border-accent/40 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] transition-colors duration-300"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: isHovered
            ? `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${project.accentColor}25, transparent 70%)`
            : '',
        }}
      />

      {/* Ambient Corner Atmosphere */}
      <div 
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[70px] opacity-10 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none -z-10"
        style={{ backgroundColor: project.accentColor }}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-7 items-center relative z-10">
        
        {/* ======================================================== */}
        {/* PREVIEW CONTAINER (Alternates sides: Even = Left, Odd = Right) */}
        {/* ======================================================== */}
        <div className={`md:col-span-5 ${isEven ? 'md:order-1' : 'md:order-2'} space-y-2.5`}>
          {/* Project Screenshot / Visual Frame */}
          <div className="relative aspect-[16/10] w-full rounded-2xl bg-black/5 dark:bg-black/40 border border-black/15 dark:border-white/15 overflow-hidden shadow-xs group/img">
            {/* Project Screenshot */}
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top rounded-2xl filter brightness-95 group-hover/img:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Hover Quick View Link */}
            <a
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 z-10 flex items-center justify-center backdrop-blur-[1px] rounded-2xl"
              title={isOngoing || !project.live ? "Inspect Dev Repo" : "Launch Live App"}
            >
              <span className="px-4 py-1.5 rounded-full bg-accent text-black text-xs font-semibold flex items-center gap-1.5 shadow-lg hover:scale-105 active:scale-95 transition-transform">
                {isOngoing || !project.live ? "Inspect Repo" : "Launch Site"} <FiArrowUpRight size={13} />
              </span>
            </a>
          </div>

          {/* DOWN THE IMAGE: Simple Progress Bar */}
          {isOngoing && (
            <div className="bg-black text-white border border-black/20 dark:border-white/15 rounded-2xl p-2.5 space-y-1.5 shadow-sm">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-white/80 font-medium">Built</span>
                <span className="text-amber-400 font-bold bg-amber-400/15 px-2 py-0.5 rounded-md border border-amber-400/30">
                  {project.progress}%
                </span>
              </div>

              {/* Progress Bar Track: Solid Dark Track with crisp contrast */}
              <div className="w-full h-2 bg-neutral-900 border border-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-accent rounded-full shadow-[0_0_10px_rgba(251,191,36,0.4)]"
                />
              </div>
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* DETAILS CONTAINER (Alternates sides: Even = Right, Odd = Left) */}
        {/* ======================================================== */}
        <div className={`md:col-span-7 flex flex-col justify-between space-y-3 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <div>
            {/* Top Badges */}
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-accent">
                  {project.number}
                </span>
                <span className="text-black/30 dark:text-white/30">•</span>
                <span className="text-[10px] uppercase tracking-wider text-black/55 dark:text-white/55 font-medium">
                  {project.category}
                </span>
              </div>

              {/* Status Badge */}
              {!isOngoing ? (
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  {project.live ? 'Live' : 'Completed'}
                </span>
              ) : (
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400"></span>
                  </span>
                  In Progress
                </span>
              )}
            </div>

            {/* Title & Tagline */}
            <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h4>
            <p className="text-[11px] sm:text-xs font-medium text-accent/90 mt-0.5">
              {project.tagline}
            </p>

            {/* Concise Description */}
            <p className="text-black/70 dark:text-white/70 text-xs font-light leading-relaxed mt-2">
              {project.description}
            </p>
          </div>

          {/* Tech Stack & Action Links */}
          <div className="pt-3 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-2.5">
            {/* Tech Chips */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.name}
                    className="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-medium bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-white/80 hover:border-accent/40 transition-colors"
                  >
                    <Icon size={11} style={{ color: t.color }} />
                    <span>{t.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {!isOngoing ? (
                <>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent text-black font-semibold text-xs shadow-xs hover:scale-105 active:scale-95 transition-all"
                    >
                      Live Demo
                      <FiExternalLink size={12} />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs transition-all ${
                      project.live
                        ? 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-black dark:text-white font-medium'
                        : 'bg-accent text-black font-semibold shadow-xs hover:scale-105 active:scale-95'
                    }`}
                  >
                    <FiGithub size={12} />
                    Code
                  </a>
                </>
              ) : (
                <>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs shadow-xs hover:scale-105 active:scale-95 transition-all"
                    >
                      Live Demo
                      <FiExternalLink size={12} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      project.live
                        ? 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-black dark:text-white font-medium'
                        : 'bg-amber-400 hover:bg-amber-300 text-black shadow-xs hover:scale-105 active:scale-95'
                    }`}
                  >
                    <FiGithub size={12} />
                    Code
                  </a>
                </>
              )}
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'production' | 'lab'

  const showProduction = activeTab === 'all' || activeTab === 'production';
  const showLab = activeTab === 'all' || activeTab === 'lab';

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      <div className="z-10 relative mx-auto px-6 container max-w-4xl">
        
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="flex items-center gap-5 mb-8 md:mb-10"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">03.</span>
          <h2 className="font-bold text-3xl md:text-4xl tracking-tight text-black dark:text-white">
            Featured Projects
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent"></div>
        </motion.div>

        {/* Interactive Filter Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 mb-12"
        >
          {[
            { id: 'all', label: `All Projects (${completedProjects.length + ongoingProjects.length})`, icon: FiLayers },
            { id: 'production', label: `Completed Projects (${completedProjects.length})`, icon: FiCheckCircle },
            { id: 'lab', label: `Ongoing Projects (${ongoingProjects.length})`, icon: FiClock },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            const TabIcon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-black font-semibold shadow-sm'
                    : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-accent/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-accent rounded-full shadow-[0_0_15px_rgba(var(--accent),0.4)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <TabIcon size={12} />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ======================================================== */}
        {/* SECTION 1: PRODUCTION WORK */}
        {/* ======================================================== */}
        {showProduction && (
          <div className="mb-16 md:mb-20">
            {/* Subheader */}
            <div className="flex items-center gap-2.5 mb-7">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-black/80 dark:text-white/80 uppercase font-mono">
                Completed Projects ({completedProjects.length})
              </h3>
            </div>

            {/* Alternating Completed Project Cards */}
            <div className="space-y-7 md:space-y-9">
              {completedProjects.map((project, idx) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  isEven={idx % 2 === 0} 
                  isOngoing={false} 
                />
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SECTION 2: THE DEV LAB (ONGOING) */}
        {/* ======================================================== */}
        {showLab && (
          <div>
            {/* Subheader */}
            <div className="flex items-center gap-2.5 mb-7">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-black/80 dark:text-white/80 uppercase font-mono">
                Ongoing Projects ({ongoingProjects.length})
              </h3>
            </div>

            {/* Alternating Ongoing Project Cards */}
            <div className="space-y-7 md:space-y-9">
              {ongoingProjects.map((project, idx) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  isEven={idx % 2 === 0} 
                  isOngoing={true} 
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Decorative Atmosphere Glows */}
      <div className="absolute top-1/4 right-0 w-[28rem] h-[28rem] bg-accent/5 rounded-full blur-[140px] -z-10 pointer-events-none translate-x-1/3"></div>
      <div className="absolute bottom-1/3 left-0 w-[28rem] h-[28rem] bg-amber-400/5 rounded-full blur-[140px] -z-10 pointer-events-none -translate-x-1/3"></div>
    </section>
  );
};

export default Projects;
