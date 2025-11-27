import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Database, 
  Globe,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Calendar,
  User,
  Download,
  Server,
  Cloud
} from 'lucide-react';

// --- PERSONALIZATION AREA: EDIT THIS DATA ---
const userData = {
  name: "Peyton Campbell",
  role: "Software Engineer",
  location: "London, Ontario",
  email: "campbellpeyton042@gmail.com",
  phone: "+1 (226) 927 8474",
  tagline: "",
  heroImage: "./1695593586547.jpg", // Ensure this image is in your public/ folder
  about: {
    title: "About Me",
    description: [
      "Hi I’m Peyton a Software Developer at OES Inc with a BSc in Computer Science from Western University and a certificate in AI and Machine Learning from Fanshawe College I work with Python, Java and C and I focus on building high performance software that creates real world impact",
      "Outside of tech I played varsity basketball at Western. Competing at a high level taught me leadership resilience and how to stay composed under pressure and I bring those qualities into every project I work on",
      "I enjoy meeting new people learning their stories and connecting over shared ideas"
    ]
  },
  now: [
    "Building modern cross-platform apps at OES",
    "Applying AI & Machine Learning to real-world products",
    "Bringing a varsity basketball mindset to software teams"
  ],
  socialLinks: {
    github: "https://github.com/peytoncampbell",
    linkedin: "https://linkedin.com/in/peyton-campbell/", 
  },
  journey: [
    {
      year: "Aug 2025 - Present",
      role: "Full Stack Software Developer",
      company: "OES",
      description: "Building modern MVVM cross-platform applications. integrating RESTful APIs, and developing Python automation tools for testing and data validation."
    },
    {
      year: "Jan 2025 - Aug 2025",
      role: "AI & Machine Learning Cert.",
      company: "Fanshawe College",
      description: "specialized certificate focused on Machine Learning pipelines, NLP, and Data Science."
    },
    {
      year: "Sept 2020 - Jan 2025",
      role: "Bachelor of Computer Science",
      company: "Western University",
      description: "Varsity Men's Basketball Athlete. Focused on Algorithms, Web Technologies, and Software Engineering."
    }
  ],
  skills: [
    { name: 'C# / .NET', level: 90, icon: <Code2 className="w-6 h-6 text-purple-400" /> },
    { name: 'React & Angular', level: 85, icon: <Globe className="w-6 h-6 text-blue-400" /> },
    { name: 'Python (AI/ML)', level: 90, icon: <Terminal className="w-6 h-6 text-yellow-400" /> },
    { name: 'Azure & DevOps', level: 80, icon: <Cloud className="w-6 h-6 text-blue-500" /> },
    { name: 'SQL', level: 85, icon: <Database className="w-6 h-6 text-green-500" /> },
    { name: 'CI/CD & Git', level: 85, icon: <Server className="w-6 h-6 text-orange-400" /> },
  ],
  experience: [
    {
      company: "OES",
      location: "London, ON",
      title: "Full Stack Software Developer",
      period: "August 2025 – Present",
      bullets: [
        "Built modern, responsive UIs using clean MVVM architecture, improving usability, performance, and maintainability across cross-platform applications.",
        "Integrated front-end components with RESTful APIs, applying strong asynchronous programming, data handling, and component-based design principles.",
        "Developed Python automation tools for testing, data validation, and backend integration, improving workflow efficiency and reliability.",
        "Collaborated with product and engineering teams to translate requirements into prototypes and polished UI features.",
        "Improved existing interfaces through refactoring, performance tuning, and consistent, well-documented code practices.",
        "Contributed to CI/CD pipelines, testing processes, and source control workflows to support stable, high-quality releases.",
      ],
    },
    {
      company: "West Haven Golf & Country Club",
      location: "London, ON",
      title: "Bartender / Server",
      period: "November 2024 – Present",
      bullets: [
        "Demonstrated customer service with members, leading to an increase in customer satisfaction.",
        "Communicated effectively with urgency, empathy, and integrity to clients of diverse backgrounds and ages.",
        "Proactively collaborated with cross-functional staff to maintain seamless service flow during fast-paced, high-pressure environments.",
      ],
    },
  ],
  education: [
    {
      school: "University of Western Ontario",
      location: "London, ON",
      degree: "Bachelor of Computer Science",
      period: "September 2020 – January 2025",
      bullets: [
        "Varsity Student Athlete, Men’s Basketball",
        "Bob Gage Athletic Leadership Award Recipient",
      ],
    },
    {
      school: "Fanshawe College",
      location: "London, ON",
      degree: "AI & Machine Learning Certificate",
      period: "January 2025 – August 2025",
      bullets: [
        "Specialized certificate focused on Machine Learning pipelines, NLP, and Data Science.",
      ],
    },
  ],
  activities: [
    "Western Mustangs Varsity Men’s Basketball",
    "Golf",
  ],
  relevantProjects: [
    {
      title: 'Player Performance Prediction & Optimal Team Builder',
      bullets: [
        'Designed and implemented a machine learning pipeline to evaluate and optimize baseball team rosters using player attributes and performance metrics, demonstrating strong analytical and problem-solving skills.',
        'Developed and trained XGBoost regression models, incorporating feature engineering and hyperparameter tuning (Optuna, cross-validation) to maximize predictive accuracy and model generalizability.',
        'Achieved R² = 0.59 on offense-only WAR predictions, providing actionable insights for lineup optimization and upgrade targeting in a simulated team management environment.',
      ],
    },
    {
      title: 'Customer Sentiment Analyzer',
      bullets: [
        'Designed and deployed an NLP pipeline in Python to classify customer feedback from support tickets and reviews, demonstrating adaptability and continuous learning.',
        'Leveraged scikit-learn, Hugging Face Transformers, and TensorFlow to fine-tune large language models (LLMs) for multi-channel sentiment analysis.',
        'Integrated SQL databases and cloud storage for large-scale text data management; deployed the live model using AWS Lambda for scalable, serverless inference.',
        'Achieved 85% classification accuracy and delivered a real-time dashboard providing stakeholders with actionable insights into customer experience trends.',
      ],
    },
    {
      title: 'E-Commerce Sales Forecasting Engine',
      bullets: [
        'Developed a machine learning model to predict product-level sales, driving inventory and logistics optimization.',
        'Built a Python pipeline leveraging XGBoost and scikit-learn, with SQL-based data retrieval and cloud deployment for real-time updates.',
        'Trained on historical sales data with high seasonal variance; achieved R² = 0.87 and reduced stockouts by 20%.',
        'Delivered a CI/CD-enabled reporting tool providing on-demand forecasts for sales and logistics stakeholders.',
      ],
    },
  ],
  projects: [
    {
      title: 'Player Performance Prediction',
      description: 'Designed an ML pipeline to evaluate baseball rosters using player attributes. Achieved R²=0.59 on WAR predictions using XGBoost and hyperparameter tuning.',
      tags: ['Python', 'XGBoost', 'Optuna', 'Data Science'],
      links: { demo: '#', github: '#' },
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ee3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Customer Sentiment Analyzer',
      description: 'NLP pipeline classifying customer feedback with 85% accuracy. Leveraged Hugging Face Transformers and deployed via AWS Lambda for serverless inference.',
      tags: ['Python', 'NLP', 'AWS Lambda', 'TensorFlow'],
      links: { demo: '#', github: '#' },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Sales Forecasting Engine',
      description: 'Machine learning model predicting product-level sales, reducing stockouts by 20%. Built with XGBoost, SQL, and CI/CD-enabled reporting tools.',
      tags: ['Python', 'SQL', 'CI/CD', 'Analytics'],
      links: { demo: '#', github: '#' },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    }
  ]
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'contact'];

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            {userData.name.split(' ')[0]}<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  activeSection === link.name.toLowerCase() ? 'text-cyan-400' : 'text-slate-400'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              className="px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 shadow-xl border-t border-slate-700">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/resume.pdf"
                className="text-cyan-400 font-medium"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">{userData.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
              {userData.role}
            </h2>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
              {userData.tagline}
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
               <MapPin className="w-4 h-4" />
               <span>{userData.location}</span>
            </div>

            {userData.now && userData.now.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium tracking-wide text-slate-400">
                {userData.now.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full border border-slate-700 bg-slate-800/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            <div className="flex space-x-4 pt-4">
              <a href="#experience" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all shadow-lg shadow-cyan-500/25">
                View Work
              </a>
              <a href="#contact" className="px-8 py-3 border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 text-slate-300 font-medium rounded-lg transition-all">
                Contact Me
              </a>
            </div>
            <div className="flex space-x-6 pt-8 text-slate-400">
              <a href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
              <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href={`mailto:${userData.email}`} className="hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
              <a href={`tel:${userData.phone}`} className="hover:text-white transition-colors"><User className="w-6 h-6" /></a>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <img 
                    src={userData.heroImage} 
                    alt={userData.name} 
                    className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl"
                />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="text-cyan-400 mr-4">01.</span> {userData.about.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Bio Text */}
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                {userData.about.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}
            </div>

            {/* Timeline Journey */}
            <div className="relative border-l border-slate-700 ml-3 md:ml-0 space-y-8">
              {userData.journey.map((item, index) => (
                <div key={index} className="relative pl-8">
                    {/* Timeline Dot */}
                    <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-slate-900"></span>
                    
                    <span className="text-sm text-cyan-400 font-mono mb-1 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <h4 className="text-slate-400 text-sm mb-2">{item.company}</h4>
                    <p className="text-slate-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="text-cyan-400 mr-4">02.</span> Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {userData.skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="p-4 bg-slate-900 rounded-full">
                  {skill.icon}
                </div>
                <span className="font-medium text-slate-300">{skill.name}</span>
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mt-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="text-cyan-400 mr-4">03.</span> Experience
          </h2>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {userData.experience && userData.experience.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900 rounded-xl border border-slate-700 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/20"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-sm text-slate-400">{item.period}</span>
                  </div>
                  <p className="text-sm text-cyan-400 mb-1">
                    {item.company} · {item.location}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400 leading-relaxed">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Education & Activities</h3>
              <div className="space-y-6">
                {userData.education && userData.education.map((edu, index) => (
                  <div key={index} className="bg-slate-900 rounded-xl border border-slate-700 p-5">
                    <h4 className="text-base font-semibold text-cyan-400 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-slate-300">
                      {edu.school} · {edu.location}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{edu.period}</p>
                    {edu.bullets && edu.bullets.length > 0 && (
                      <ul className="mt-3 space-y-1 text-sm text-slate-400 leading-relaxed">
                        {edu.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {userData.activities && userData.activities.length > 0 && (
                  <div className="bg-slate-900 rounded-xl border border-slate-700 p-5">
                    <h4 className="text-base font-semibold text-cyan-400 mb-2">
                      Activities & Interests
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-400 leading-relaxed">
                      {userData.activities.map((activity, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <span className="text-cyan-400 mr-4">04.</span> What's Next?
          </h2>
          <h3 className="text-5xl font-bold text-white mb-6">Get In Touch</h3>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href={`mailto:${userData.email}`}
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold rounded-lg transition-all duration-300"
          >
            <Mail className="mr-2 w-5 h-5" />
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm">
        <p>Designed & Built by {userData.name}</p>
        <p className="mt-2">© {new Date().getFullYear()} {userData.name}</p>
      </footer>
    </div>
  );
};

export default App;