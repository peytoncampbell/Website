import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink, ChevronRight } from 'lucide-react';
import { NAV_LINKS, HERO, EXPERIENCE, PROJECTS, EDUCATION } from './data';
import LiveTicker from './LiveTicker';
import clsx from 'clsx';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h2 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={clsx("text-3xl md:text-4xl font-bold mb-12 text-white border-l-4 border-blue-500 pl-4", className)}
    >
      {children}
    </motion.h2>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');
  const [athleteImageIndex, setAthleteImageIndex] = useState(0);
  
  const athleteImages = [
    `${import.meta.env.BASE_URL}basketball.jpg`,
    `${import.meta.env.BASE_URL}golf.jpg`
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Cycle athlete images every 5 seconds
    const imageTimer = setInterval(() => {
      setAthleteImageIndex((prev) => (prev + 1) % athleteImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageTimer);
    };
  }, []);

  const filteredProjects = projectFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === projectFilter);

  return (
    <div className="min-h-screen text-slate-300 selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-slate-950/80 backdrop-blur-md border-slate-800 py-4" : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" className="text-xl font-bold tracking-tighter text-white hover:text-blue-400 transition-colors">
              PEYTON CAMPBELL
            </a>
            <LiveTicker />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} className="text-sm font-medium hover:text-blue-400 transition-colors">
                {link.label}
              </a>
            ))}
            <a href={`${import.meta.env.BASE_URL}PeytonCampbellResume.pdf`} target="_blank" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all flex items-center gap-2">
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden" id="about">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-slate-950/0 to-slate-950/0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              {HERO.headline}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 mb-8 max-w-2xl">
              {HERO.subheadline}
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center gap-2">
                View Work <ArrowRight size={18} />
              </a>
              <div className="flex gap-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-blue-500/50 hover:text-blue-400 transition-all">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-blue-500/50 hover:text-blue-400 transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-slate-950" id="projects">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionHeading className="mb-0">Projects I've Worked On</SectionHeading>
            <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
              {['All', 'Production', 'ML/AI', 'Tools'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setProjectFilter(filter)}
                  className={clsx(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all border whitespace-nowrap",
                    projectFilter === filter 
                      ? "bg-blue-600 border-blue-500 text-white" 
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass rounded-xl overflow-hidden border border-slate-800 group hover:border-blue-500/50 transition-all"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider border border-blue-900/50 bg-blue-900/20 px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <ExternalLink size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map(t => (
                          <span key={t} className="text-xs text-slate-500 font-mono">#{t}</span>
                        ))}
                      </div>
                      <a href={project.link} className="inline-flex items-center text-sm font-bold text-white hover:text-blue-400 transition-colors">
                        View Source <ChevronRight size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <SectionHeading>Experience</SectionHeading>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-slate-800" />
            
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 md:pl-24 pb-16 last:pb-0"
              >
                <div className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 bg-blue-500 rounded-full ring-4 ring-slate-950" />
                
                <div className="glass p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    <span className="text-sm font-mono text-blue-400">{exp.period}</span>
                  </div>
                  <div className="text-slate-400 font-medium mb-4">{exp.title} • {exp.location}</div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="mt-1.5 w-1 h-1 bg-blue-500 rounded-full flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education - Small Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto pl-8 md:pl-24">
            <h3 className="text-lg font-bold text-slate-500 uppercase tracking-wider mb-6">Education</h3>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx}>
                  <h4 className="text-white font-bold text-lg">{edu.school}</h4>
                  <p className="text-slate-400">{edu.degree}</p>
                  <p className="text-sm text-slate-500 font-mono mt-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Duality - On & Off The Court */}
      <section className="flex flex-col md:flex-row min-h-[600px]" id="duality">
        <div className="flex-1 relative flex flex-col justify-center p-12 md:p-20 border-b md:border-b-0 md:border-r border-slate-800 overflow-hidden group">
          {/* Background Image Cycle */}
          <AnimatePresence mode="wait">
            <motion.div
              key={athleteImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{ backgroundImage: `url(${athleteImages[athleteImageIndex]})` }}
            />
          </AnimatePresence>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-950/70 group-hover:bg-slate-950/60 transition-colors z-10" />
          
          <div className="relative z-20">
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
              The Athlete
            </h3>
            <p className="text-lg text-slate-200 leading-relaxed max-w-md font-medium">
              Varsity Basketball & Avid Golfer.
              <br/><br/>
              High-level competition instilled the value of consistency and resilience. I bring that same intensity and team-first mentality to every project I touch.
            </p>
          </div>
        </div>
        
        <div className="flex-1 bg-slate-950 p-12 md:p-20 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
            The Engineer
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed max-w-md">
            AI Enthusiast & Analytics Nerd.
            <br/><br/>
            I am obsessed with structure and performance. Whether architecting a .NET solution or fine-tuning an ML model, I build systems that are robust, scalable, and maintainable.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24" id="contact">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto glass p-12 rounded-3xl border border-slate-800"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Let's talk game plan.</h2>
            <p className="text-slate-400 mb-10 text-lg">
              I'm always looking to connect with other builders and athletes. Whether it's about code, basketball, or building something new, let's chat.
            </p>
            
            <a href="mailto:campbellpeyton042@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-bold text-lg rounded-full hover:bg-blue-50 transition-colors">
              <Mail className="text-blue-600" />
              campbellpeyton042@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 bg-slate-950 text-center text-slate-500 text-sm">
        <p>Built with React, Tailwind & Caffeine by Peyton Campbell.</p>
      </footer>
    </div>
  );
}
