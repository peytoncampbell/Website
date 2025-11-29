import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  CalendarClock,
} from 'lucide-react';
import { NAV_LINKS, HERO, EXPERIENCE, PROJECTS, EDUCATION, SCOUTING_REPORT, HIGHLIGHTS } from './data';
import LiveTicker from './LiveTicker';
import RadarChart from './RadarChart';
import clsx from 'clsx';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={clsx('text-3xl md:text-4xl font-bold mb-12 text-white border-l-4 border-blue-500 pl-4', className)}
    >
      {children}
    </motion.h2>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');
  const [athleteImageIndex, setAthleteImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactError, setContactError] = useState<string | null>(null);
  const [contactSuccess, setContactSuccess] = useState(false);

  const athleteImages = [`${import.meta.env.BASE_URL}basketball.jpg`, `${import.meta.env.BASE_URL}golf.jpg`];
  const portraitImage = `${import.meta.env.BASE_URL}portrait.jpg`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const imageTimer = setInterval(() => {
      setAthleteImageIndex((prev) => (prev + 1) % athleteImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageTimer);
    };
  }, [athleteImages.length]);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactError(null);
    setContactSuccess(false);
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      setContactError('Please fill in all fields.');
      return;
    }
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(contactForm.email.trim())) {
      setContactError('Please enter a valid email.');
      return;
    }
    setContactSuccess(true);
    setContactForm({ name: '', email: '', message: '' });
  };

  const filteredProjects = projectFilter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === projectFilter);

  return (
    <div className="min-h-screen text-slate-300 selection:bg-blue-500/30">
      {/* Navbar */}
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
          scrolled ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" className="text-xl font-bold tracking-tighter text-white hover:text-blue-400 transition-colors">
              PEYTON CAMPBELL
            </a>
            <LiveTicker />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium hover:text-blue-400 transition-colors">
                {link.label}
              </a>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}PeytonCampbellResume.pdf`}
              target="_blank"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-amber-500 hover:brightness-110 text-white text-sm font-bold rounded-full transition-all flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-slate-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}PeytonCampbellResume.pdf`}
                target="_blank"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-full mx-auto"
              >
                <Download size={18} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden" id="about">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[520px] h-[520px] -left-24 top-10 rounded-full bg-gradient-to-br from-blue-600/25 via-transparent to-transparent blur-3xl" />
          <div className="absolute w-[420px] h-[420px] right-0 -bottom-12 rounded-full bg-gradient-to-tr from-amber-500/25 via-transparent to-transparent blur-3xl" />
          <div className="absolute inset-0 pattern-grid opacity-30" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
              >
                {HERO.headline}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                {HERO.subheadline}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex items-center gap-4 flex-wrap">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  See Latest Work <ArrowRight size={18} />
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}PeytonCampbellResume.pdf`}
                  className="px-8 py-3 border border-amber-400 text-amber-300 font-bold rounded-lg transition-all hover:bg-amber-400/10 flex items-center gap-2"
                >
                  Download CV <Download size={18} />
                </a>
                <div className="flex gap-2">
                  <a
                    aria-label="GitHub profile"
                    href="https://github.com/peytoncampbell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-blue-500/50 hover:text-blue-400 transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    aria-label="LinkedIn profile"
                    href="https://www.linkedin.com/in/peyton-campbell/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-blue-500/50 hover:text-blue-400 transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {HERO.stats.map((stat, idx) => (
                  <div key={stat.label} className="glass rounded-xl p-4 flex items-center gap-3 border border-slate-800/80">
                    <stat.icon className="text-amber-400" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-500">Signal {idx + 1}</p>
                      <p className="text-sm font-semibold text-white">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-blue-600/20 via-transparent to-amber-400/20 blur-3xl" />
              <div className="relative aspect-[4/5] max-w-[420px] ml-auto overflow-hidden rounded-[28px] border border-slate-800/50 shadow-2xl shadow-blue-900/30 bg-slate-900/30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-transparent to-amber-500/15 z-10 pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 bg-slate-950/25 z-10 pointer-events-none" />
                <img
                  src={portraitImage}
                  alt="Peyton Campbell"
                  className="w-full h-full object-cover object-center"
                  style={{
                    filter: 'brightness(0.85) contrast(1.1) saturate(1.15)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="py-8 bg-slate-950/60 border-y border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="glass rounded-xl p-5 border border-slate-800/80 flex items-start gap-3">
                <item.icon className="text-amber-400 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scouting Report (Radar Chart) */}
      <section className="py-12 bg-slate-950/50 border-y border-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="flex-1 text-center md:text-left">
              <SectionHeading className="md:ml-0 ml-4">The Scouting Report</SectionHeading>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                Just like a pre-game analysis, here's a breakdown of my technical strengths. I balance{' '}
                <span className="text-blue-400 font-bold">engineering precision</span> with
                <span className="text-blue-400 font-bold"> leadership</span> and
                <span className="text-blue-400 font-bold"> adaptability</span>.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <strong>Frontend:</strong> React, Tailwind, Modern UI/UX
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <strong>Backend:</strong> .NET, Python, REST APIs
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <strong>Leadership:</strong> Agile Team Lead, Mentorship
                </li>
              </ul>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full -z-10" />
                <RadarChart data={SCOUTING_REPORT} size={window.innerWidth < 768 ? 320 : 400} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-slate-950" id="projects">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionHeading className="mb-0">Projects I've Worked On</SectionHeading>
            <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
              {['All', 'Production', 'ML/AI', 'Tools'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setProjectFilter(filter)}
                  className={clsx(
                    'px-4 py-2 text-sm font-medium rounded-full transition-all border whitespace-nowrap',
                    projectFilter === filter
                      ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
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
                      {project.cta?.url && (
                        <a
                          href={project.cta.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} link`}
                        >
                          <ExternalLink size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-amber-300 font-semibold mb-2">{project.role}</p>
                    <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>

                    {project.metrics && (
                      <ul className="space-y-1 mb-4 text-sm text-slate-300">
                        {project.metrics.map((metric: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                          <span key={t} className="text-xs text-slate-500 font-mono">
                            #{t}
                          </span>
                        ))}
                      </div>
                      {project.cta?.url && (
                        <a
                          href={project.cta.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-bold px-4 py-2 rounded-full border border-amber-400 text-amber-200 hover:bg-amber-400/10 transition-colors"
                          aria-label={`View ${project.title}`}
                        >
                          {project.cta.label} <ChevronRight size={16} className="ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 relative" id="experience">
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
                  <div className="text-slate-400 font-medium mb-4">
                    {exp.title} - {exp.location}
                  </div>
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
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">The Athlete</h3>
            <p className="text-lg text-slate-200 leading-relaxed max-w-md font-medium">
              Varsity Basketball and avid golfer.
              <br />
              <br />
              High-level competition instilled the value of consistency and resilience. I bring that same intensity and team-first
              mentality to every project I touch.
            </p>
          </div>
        </div>

        <div className="flex-1 bg-slate-950 p-12 md:p-20 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">The Engineer</h3>
          <p className="text-lg text-slate-300 leading-relaxed max-w-md">
            AI enthusiast and analytics nerd.
            <br />
            <br />
            I am obsessed with structure and performance. Whether architecting a .NET solution or fine-tuning an ML model, I build
            systems that are robust, scalable, and maintainable.
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
              Based in London, ON (EST). I reply within 24 hours. Whether it is about code, basketball, or building something new,
              let's chat.
            </p>

            <form onSubmit={handleContactSubmit} className="grid gap-4 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-400 block mb-2">Name</label>
                  <input
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="w-full rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none px-3 py-2 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-400 block mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="w-full rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none px-3 py-2 text-white"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-400 block mb-2">Message</label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  className="w-full rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none px-3 py-3 text-white h-28"
                  placeholder="Tell me about your project or question."
                />
              </div>
              {contactError && <p className="text-sm text-amber-300">{contactError}</p>}
              {contactSuccess && <p className="text-sm text-green-400">Thanks! I'll reply within 24 hours.</p>}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-950 font-bold text-base rounded-full hover:bg-blue-50 transition-colors"
                >
                  <Mail className="text-blue-600" />
                  Send message
                </button>
                <a
                  href="https://www.linkedin.com/in/peyton-campbell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-amber-400 text-amber-300 font-semibold rounded-full hover:bg-amber-400/10 transition-colors"
                >
                  <CalendarClock className="text-amber-300" />
                  Book a chat
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 bg-slate-950 text-center text-slate-500 text-sm">
        <p>Built with React, Tailwind, and caffeine by Peyton Campbell.</p>
        <p className="mt-1">© {new Date().getFullYear()} Peyton Campbell</p>
      </footer>
    </div>
  );
}
