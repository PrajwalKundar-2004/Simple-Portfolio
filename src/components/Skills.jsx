import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiHtml5, 
  SiJavascript, 
  SiPython, 
  SiC, 
  SiSpringboot, 
  SiExpress, 
  SiFastapi,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb, 
  SiMysql, 
  SiRedis, 
  SiGit, 
  SiGithub, 
  SiDocker, 
  SiPostman, 
  SiIntellijidea, 
  SiFramer, 
  SiThreedotjs, 
  SiGreensock, 
  SiJsonwebtokens, 
  SiSocketdotio, 
  SiGithubcopilot 
} from 'react-icons/si';
import { 
  FaJava, 
  FaBrain, 
  FaRocket, 
  FaNetworkWired, 
  FaGear, 
  FaDatabase, 
  FaCode, 
  FaServer, 
  FaLaptopCode, 
  FaCss3Alt 
} from 'react-icons/fa6';
import { TbBrandVscode } from 'react-icons/tb';

const marqueeSkills = [
  { name: 'Java', icon: FaJava, color: '#EA2D2F' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
  { name: 'GSAP', icon: SiGreensock, color: '#88CE02' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#A5B4FC' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'WebSockets', icon: SiSocketdotio, color: '#38BDF8' },
  { name: 'Antigravity', icon: FaBrain, color: '#C084FC' },
  { name: 'Lenis Scroll', icon: FaRocket, color: '#FACC15' },
];

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'tools', label: 'Tools & Platforms' },
  { id: 'languages', label: 'Languages' },
  { id: 'databases', label: 'Databases' },
  { id: 'concepts', label: 'Core Concepts' },
];

// Reordered: Row 1 = Frontend, Backend, Tools & Platforms
// Row 2 = Programming Languages, Databases, Core Concepts
const skillsData = [
  // --- ROW 1 ---
  {
    category: 'Frontend',
    categoryId: 'frontend',
    icon: FaLaptopCode,
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
      { name: 'GSAP', icon: SiGreensock, color: '#88CE02' },
      { name: 'Three.js', icon: SiThreedotjs, color: '#A5B4FC' },
      { name: 'Lenis Scroll', icon: FaRocket, color: '#FACC15' },
    ],
  },
  {
    category: 'Backend',
    categoryId: 'backend',
    icon: FaServer,
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
      { name: 'Express.js', icon: SiExpress, color: '#9CA3AF' },
      { name: 'REST APIs', icon: FaNetworkWired, color: '#FACC15' },
      { name: 'WebSockets', icon: SiSocketdotio, color: '#38BDF8' },
    ],
  },
  {
    category: 'Tools & Platforms',
    categoryId: 'tools',
    icon: FaGear,
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Antigravity', icon: FaBrain, color: '#C084FC' },
      { name: 'GitHub Copilot', icon: SiGithubcopilot, color: '#6EE7B7' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', icon: TbBrandVscode, color: '#007ACC' },
      { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: '#FE315D' },
    ],
  },

  // --- ROW 2 ---
  {
    category: 'Programming Languages',
    categoryId: 'languages',
    icon: FaCode,
    skills: [
      { name: 'Java', icon: FaJava, color: '#EA2D2F' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
    ],
  },
  {
    category: 'Databases',
    categoryId: 'databases',
    icon: FaDatabase,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    ],
  },
  {
    category: 'Core Concepts',
    categoryId: 'concepts',
    icon: FaBrain,
    skills: [
      { name: 'Data Structures & Algorithms', icon: FaCode, color: '#38BDF8' },
      { name: 'OOP Concepts', icon: FaGear, color: '#A78BFA' },
      { name: 'JWT Authentication', icon: SiJsonwebtokens, color: '#FB7185' },
      { name: 'REST Architecture', icon: FaNetworkWired, color: '#34D399' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredData = activeFilter === 'all'
    ? skillsData
    : skillsData.filter((item) => item.categoryId === activeFilter);

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-6 mb-8 md:mb-12"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">02.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Skills & Tech Stack</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent"></div>
        </motion.div>

        {/* Section Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-black/60 dark:text-white/60 text-lg max-w-2xl mb-12 font-light leading-relaxed"
        >
          Technologies, frameworks, and engineering tools I leverage to build scalable, full-stack web applications and fluid interactive digital experiences.
        </motion.p>

        {/* Infinite Live Tech Marquee (Hardware-accelerated CSS marquee, zero GPU thrashing) */}
        <div className="relative w-full overflow-hidden mb-16 py-3">
          {/* Subtle edge fade overlays without expensive CSS mask filters */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10" />

          <div className="animate-marquee flex gap-4 sm:gap-6">
            {[...marqueeSkills, ...marqueeSkills].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.name}-${idx}`}
                  className="flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-xs sm:text-sm font-medium tracking-wide text-black/80 dark:text-white/80 shadow-xs hover:border-accent/50 transition-colors shrink-0"
                >
                  <Icon size={18} style={{ color: item.color }} className="shrink-0" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2.5 mb-14"
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-black dark:text-black font-semibold'
                    : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-accent/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-accent rounded-full shadow-[0_0_20px_rgba(var(--accent),0.4)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid - Balanced 2 Rows of 3 Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {filteredData.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.category}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="group relative bg-white/[0.04] dark:bg-white/[0.03] backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[2rem] p-6 sm:p-7 flex flex-col justify-start h-full transition-all duration-300 hover:border-accent/50 shadow-md hover:shadow-[0_20px_45px_-15px_rgba(var(--accent),0.25)]"
                >
                  {/* Internal Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/[0.08] group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2rem] pointer-events-none"></div>

                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <CategoryIcon size={18} />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skill Badges - Content Start ensures tight, balanced top alignment */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 relative z-10 content-start">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="group/skill flex items-center gap-2 px-3.5 py-2 bg-black/[0.04] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.09] rounded-xl text-xs sm:text-sm font-medium border border-black/10 dark:border-white/10 hover:border-accent/60 transition-all duration-200 cursor-default text-black/80 dark:text-white/80 shadow-xs hover:-translate-y-0.5"
                        >
                          <SkillIcon
                            size={16}
                            style={{ color: skill.color }}
                            className="shrink-0 transition-transform duration-200 group-hover/skill:scale-110"
                          />
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
      
      {/* Decorative background glows (Desktop only) */}
      <div className="hidden md:block absolute bottom-1/4 left-0 w-[35rem] h-[35rem] bg-accent/5 rounded-full blur-[140px] -z-10 pointer-events-none -translate-x-1/2"></div>
      <div className="hidden md:block absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[140px] -z-10 pointer-events-none translate-x-1/2"></div>
    </section>
  );
};

export default Skills;
