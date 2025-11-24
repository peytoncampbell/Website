import { Code2, Database, Trophy, Brain, Layout, Server, LineChart, Users } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'The Lab', href: '#projects' },
  { label: 'Game Plan', href: '#process' },
  { label: 'On/Off Court', href: '#duality' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  headline: "Shipping Code. Solving Problems. Competing Daily.",
  subheadline: "Full-Stack Developer & ML Engineer. Building scalable solutions with the discipline of a varsity athlete.",
  stats: [
    { label: "1 Year Prof. Exp", icon: Code2 },
    { label: "3 ML Models Shipped", icon: Brain },
    { label: "OFSAA Champion Mentality", icon: Trophy },
  ]
};

export const SKILLS = [
  {
    title: "Production Engineering",
    tags: ["C#", "React", ".NET MAUI", "Clean Architecture", "CI/CD"],
    copy: "Building scalable, cross-platform tools at OES. Focused on clean architecture, automated pipelines, and maintainable codebases.",
    icon: Layout
  },
  {
    title: "Data & ML Intelligence",
    tags: ["Python", "PyTorch", "Pandas", "XGBoost", "NLP"],
    copy: "Transforming raw data into actionable insights. From Moneyball-style analytics to transformer-based sentiment analysis.",
    icon: Database
  },
  {
    title: "Leadership & Strategy",
    tags: ["Agile", "Communication", "Team Strategy"],
    copy: "Translating athletic discipline into development velocity. I bridge the gap between complex technical logic and business goals.",
    icon: Users
  }
];

export const SCOUTING_REPORT = [
  { axis: "Frontend", value: 0.9, fullMark: 1 },
  { axis: "Backend", value: 0.85, fullMark: 1 },
  { axis: "ML / AI", value: 0.8, fullMark: 1 },
  { axis: "Architecture", value: 0.85, fullMark: 1 },
  { axis: "Leadership", value: 0.95, fullMark: 1 },
  { axis: "Data Eng", value: 0.75, fullMark: 1 },
];

export const LIVE_STATUS = [
  { label: "Focus", value: "React Native & GraphQL" },
  { label: "Status", value: "Open to Opportunities" },
  { label: "Location", value: "Toronto, ON" },
];

export const EXPERIENCE = [
  {
    company: "OES Inc",
    location: "London, ON",
    title: "Full Stack Developer",
    period: "Current",
    description: "Professional, reliable, heavy hitter.",
    bullets: [
      "Reduced testing time by X% via Python automation.",
      "Developing cross-platform applications using .NET MAUI and MVVM patterns.",
      "Designing and implementing REST APIs for scalable backend solutions."
    ]
  },
  {
    company: "West Haven Golf & Country Club",
    location: "London, ON",
    title: "Bartender / Server",
    period: "November 2024 – Present",
    description: "High-pressure environment service.",
    bullets: [
      "Demonstrated customer service with members, leading to an increase in customer satisfaction.",
      "Communicated effectively with urgency, empathy, and integrity.",
      "Collaborated with cross-functional staff to maintain seamless service flow."
    ]
  }
];

export const EDUCATION = [
  {
    school: "University of Western Ontario",
    degree: "Bachelor of Computer Science",
    period: "September 2020 – January 2025",
    bullets: [
      "Varsity Student Athlete, Men’s Basketball",
      "Bob Gage Athletic Leadership Award Recipient"
    ]
  },
  {
    school: "Fanshawe College",
    degree: "AI & Machine Learning Certificate",
    period: "2023",
    bullets: []
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Topspin360",
    category: "Production",
    description: "iOS app migration and full development. A training tool for neck strength conditioning.",
    tech: ["Swift", "iOS", "Mobile Dev"],
    link: "https://apps.apple.com/ca/app/topspin360/id1281507774"
  },
  {
    id: 2,
    title: "Score Controller",
    category: "Production",
    description: "Mobile application for controlling OES scoreboards remotely.",
    tech: ["iOS", "Mobile", "Production"],
    link: "https://apps.apple.com/us/app/score-controller/id1563410119"
  },
  {
    id: 3,
    title: "Player Performance Predictor",
    category: "ML/AI",
    description: "Optimized roster construction with 59% accuracy using XGBoost & Optuna to predict WAR metrics.",
    tech: ["Python", "XGBoost", "Optuna", "Pandas"],
    link: "#"
  }
];

export const PROCESS_STEPS = [
  { title: "Scout", description: "Understand the problem", icon: Users },
  { title: "Strategy", description: "Design & Plan", icon: Layout },
  { title: "Execution", description: "Build & Test", icon: Code2 },
  { title: "Review", description: "Iterate & Feedback", icon: LineChart },
];
