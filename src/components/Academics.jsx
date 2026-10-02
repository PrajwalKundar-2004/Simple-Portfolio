import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const academics = [
  {
    title: 'Master of Computer Applications (MCA)',
    description: 'Vivekananda College of Engineering and Technology, Puttur\nCGPA: 8.73',
    year: 'Oct 2026 - Present',
  },
  {
    title: 'Bachelor of Computer Applications (BCA)',
    description: 'GFGC Carstreet, Mangalore\nCGPA: 8.81',
    year: '2022 - 2025',
  },
  {
    title: 'Pre-University (PU)',
    description: 'Capitanio Composite PU College, Kankanady\nPercentage: 80%',
    year: '2020 - 2022',
  },
  {
    title: 'Secondary School Leaving Certificate (SSLC)',
    description: 'Nithya Sahaya Matha English High School, Arkula\nPercentage: 93.6%',
    year: '2017 - 2020',
  },
];

const Academics = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="academics" className="py-24 relative overflow-hidden bg-black/5 dark:bg-white/[0.02]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl" ref={containerRef}>
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">Academics</h2>
          <div className="h-[1px] flex-1 bg-black/10 dark:bg-white/10 mt-2"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-black/10 dark:bg-white/10 transform md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-accent w-full origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {academics.map((exp, idx) => (
              <motion.div 
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-black border-4 border-accent transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:pl-16 md:text-left' : 'md:pr-16 md:text-right'}`}>
                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 p-6 rounded-2xl hover:border-accent/50 transition-colors group">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full mb-3">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
